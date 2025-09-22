import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CreditCard, CheckCircle, XCircle } from 'lucide-react';
import { payfastService, type EnrollmentData } from '@/services/payfast';

interface PayFastPaymentFormProps {
  enrollment: EnrollmentData;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: string) => void;
  onCancel?: () => void;
}

export const PayFastPaymentForm: React.FC<PayFastPaymentFormProps> = ({
  enrollment,
  onSuccess,
  onError,
  onCancel
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const { formData } = payfastService.createPaymentSession(enrollment);
      
      // Create a hidden form and submit it to PayFast
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = payfastService.getBaseUrl();
      form.style.display = 'none';

      // Add all form data
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== '' && value !== null && value !== undefined) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value.toString();
          form.appendChild(input);
        }
      });



      // Submit the form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setShowSuccess(true);
      onSuccess?.(enrollment.id);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: currency || 'ZAR',
    }).format(amount);
  };

  if (showSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Redirecting to PayFast
            </h3>
            <p className="text-gray-600">
              You will be redirected to PayFast to complete your payment securely.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Complete Enrollment
        </CardTitle>
        <CardDescription>
          Secure payment via PayFast for {enrollment.courseName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Course Details */}
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">Course:</span>
            <span className="text-gray-700">{enrollment.courseName}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">Amount:</span>
            <span className="text-lg font-semibold text-green-600">
              {formatCurrency(enrollment.amount, enrollment.currency)}
            </span>
          </div>
        </div>

        {/* Student Information */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Student Information</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={enrollment.firstName}
                disabled
                className="bg-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={enrollment.lastName}
                disabled
                className="bg-gray-50"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={enrollment.email}
              disabled
              className="bg-gray-50"
            />
          </div>
          {enrollment.phone && (
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={enrollment.phone}
                disabled
                className="bg-gray-50"
              />
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Payment Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4 mr-2" />
                Pay with PayFast
              </>
            )}
          </Button>
          
          {onCancel && (
            <Button
              variant="outline"
              onClick={onCancel}
              disabled={isProcessing}
              className="w-full"
            >
              Cancel
            </Button>
          )}
        </div>

        {/* Security Notice */}
        <div className="text-xs text-gray-500 text-center">
          <p>🔒 Your payment information is secure and encrypted</p>
          <p>PayFast is a trusted payment processor in South Africa</p>
        </div>
      </CardContent>
    </Card>
  );
};
