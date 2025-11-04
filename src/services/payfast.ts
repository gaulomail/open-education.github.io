

export interface PayFastPaymentData {
  merchant_id: string;
  merchant_key: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  name_first: string;
  name_last: string;
  email_address: string;
  cell_number?: string;
  m_payment_id: string;
  amount: number;
  item_name: string;
  item_description?: string;
  custom_str1?: string;
  custom_str2?: string;
  custom_str3?: string;
  custom_str4?: string;
  custom_str5?: string;
  custom_int1?: number;
  custom_int2?: number;
  custom_int3?: number;
  custom_int4?: number;
  custom_int5?: number;
  email_confirmation?: number;
  confirmation_address?: string;
  payment_method?: string;
  subscription_type?: string;
  billing_date?: string;
  recurring_amount?: number;
  cycles?: number;
  frequency?: number;
  subscription_notify_url?: string;
  subscription_notify_email?: string;
  subscription_notify_webhook?: string;
  subscription_notify_billing_date?: string;
  subscription_notify_amount?: number;
  subscription_notify_cycles?: number;
  subscription_notify_frequency?: number;
  subscription_notify_merchant_id?: string;
  subscription_notify_merchant_key?: string;
  subscription_notify_signature?: string;
  subscription_notify_timestamp?: string;
  subscription_notify_nonce?: string;
  subscription_notify_custom_str1?: string;
  subscription_notify_custom_str2?: string;
  subscription_notify_custom_str3?: string;
  subscription_notify_custom_str4?: string;
  subscription_notify_custom_str5?: string;
  subscription_notify_custom_int1?: number;
  subscription_notify_custom_int2?: number;
  subscription_notify_custom_int3?: number;
  subscription_notify_custom_int4?: number;
  subscription_notify_custom_int5?: number;
}

export interface PayFastConfig {
  merchantId: string;
  merchantKey: string;
  testMode: boolean;
  returnUrl: string;
  cancelUrl: string;
  notifyUrl: string;
}

export interface EnrollmentData {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  amount: number;
  currency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export class PayFastService {
  private config: PayFastConfig;
  private baseUrl: string;

  constructor(config: PayFastConfig) {
    this.config = config;
    // Use sandbox URL for test mode (matching websky-dreamscape implementation)
    this.baseUrl = 'https://sandbox.payfast.co.za/eng/process';
  }



  /**
   * Format phone number for PayFast
   * PayFast expects South African format: +27XXXXXXXXX or just the number
   */
  private formatPhoneNumber(phone: string): string {
    if (!phone) return '';
    
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    
    // If it starts with 27 (South Africa country code), keep it
    if (digitsOnly.startsWith('27') && digitsOnly.length === 11) {
      return digitsOnly;
    }
    
    // If it starts with 0, replace with 27 (South Africa country code)
    if (digitsOnly.startsWith('0') && digitsOnly.length === 10) {
      return '27' + digitsOnly.substring(1);
    }
    
    // If it's already 9 digits (local format), add 27
    if (digitsOnly.length === 9) {
      return '27' + digitsOnly;
    }
    
    // If it's 10 digits and doesn't start with 0, assume it's already correct
    if (digitsOnly.length === 10) {
      return digitsOnly;
    }
    
    // Return as is if none of the above patterns match
    return digitsOnly;
  }



  /**
   * Create payment session for enrollment
   */
  createPaymentSession(enrollment: EnrollmentData): { formData: PayFastPaymentData } {
    // Ensure amount is a number and format it properly
    const amount = typeof enrollment.amount === 'string' ? parseFloat(enrollment.amount) : enrollment.amount;
    
    const paymentData: PayFastPaymentData = {
      merchant_id: this.config.merchantId,
      merchant_key: this.config.merchantKey,
      return_url: this.config.returnUrl,
      cancel_url: this.config.cancelUrl,
      notify_url: this.config.notifyUrl,
      name_first: enrollment.firstName,
      name_last: enrollment.lastName,
      email_address: enrollment.email,
      m_payment_id: enrollment.id,
      amount: amount.toFixed(2), // Ensure amount has exactly 2 decimal places
      item_name: `AI Learning Platform - ${enrollment.courseName}`,
      item_description: `Enrollment in ${enrollment.courseName}`,
      custom_str1: enrollment.userId,
      custom_str2: enrollment.courseId,
      custom_str3: enrollment.id,
      custom_str4: enrollment.courseName,
      custom_str5: 'AI Learning Platform',
      email_confirmation: 1,
      confirmation_address: enrollment.email,
    };

    // Only add cell_number if phone is provided
    if (enrollment.phone && enrollment.phone.trim()) {
      paymentData.cell_number = this.formatPhoneNumber(enrollment.phone);
    }

    return { formData: paymentData };
  }

  /**
   * Verify PayFast payment notification
   */
  verifyPaymentNotification(data: Record<string, any>): boolean {
    const receivedSignature = data.signature;
    const calculatedSignature = this.md5Hash(this.generateSignature(data));
    
    return receivedSignature === calculatedSignature;
  }

  /**
   * Process payment notification from PayFast
   */
  processPaymentNotification(notificationData: Record<string, any>): {
    isValid: boolean;
    paymentStatus: string;
    paymentId: string;
    enrollmentId: string;
    amount: number;
    errorMessage?: string;
  } {
    try {
      const isValid = this.verifyPaymentNotification(notificationData);
      
      if (!isValid) {
        return {
          isValid: false,
          paymentStatus: 'failed',
          paymentId: '',
          enrollmentId: '',
          amount: 0,
          errorMessage: 'Invalid signature'
        };
      }

      const paymentStatus = notificationData.payment_status;
      const paymentId = notificationData.pf_payment_id;
      const enrollmentId = notificationData.m_payment_id;
      const amount = parseFloat(notificationData.amount_gross);

      return {
        isValid: true,
        paymentStatus,
        paymentId,
        enrollmentId,
        amount,
      };
    } catch (error) {
      return {
        isValid: false,
        paymentStatus: 'failed',
        paymentId: '',
        enrollmentId: '',
        amount: 0,
        errorMessage: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get the PayFast base URL for form submissions
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Get payment status from PayFast
   */
  async getPaymentStatus(paymentId: string): Promise<{
    status: string;
    amount: number;
    currency: string;
    date: string;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          merchant_id: this.config.merchantId,
          merchant_key: this.config.merchantKey,
          pf_payment_id: paymentId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch payment status');
      }

      const data = await response.text();
      const lines = data.split('\n');
      const statusData: Record<string, string> = {};

      lines.forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
          statusData[key.trim()] = value.trim();
        }
      });

      return {
        status: statusData.status || 'unknown',
        amount: parseFloat(statusData.amount_gross || '0'),
        currency: statusData.currency || 'ZAR',
        date: statusData.date || new Date().toISOString(),
      };
    } catch (error) {
      throw new Error(`Failed to get payment status: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

// Default configuration with hardcoded values
const getOrigin = () => {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return window.location.origin;
  }
  // Fallback to relative root if origin is not available
  return '';
};

const ORIGIN = getOrigin();

export const defaultPayFastConfig: PayFastConfig = {
  merchantId: '10037497',
  merchantKey: '4crsjy8t5t3sb',
  testMode: true, // Set to false for production
  returnUrl: `${ORIGIN}/payment/success`,
  cancelUrl: `${ORIGIN}/payment/cancelled`,
  notifyUrl: `${ORIGIN}/api/payfast/notify`,
};

export const payfastService = new PayFastService(defaultPayFastConfig);
