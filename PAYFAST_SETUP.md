# PayFast Integration Setup Guide

This project includes a complete PayFast payment integration for course enrollments. Follow this guide to set up and configure the payment system.

## 🚀 Features

- **Secure Payment Processing**: Integrated with PayFast's secure payment gateway
- **Course Enrollment Management**: Complete enrollment workflow with payment integration
- **Payment Status Tracking**: Real-time payment status updates
- **Responsive UI**: Modern, mobile-friendly payment forms
- **Error Handling**: Comprehensive error handling and user feedback

## 📋 Prerequisites

1. **PayFast Merchant Account**: You need a PayFast merchant account
2. **Node.js**: Version 16 or higher
3. **React**: This project uses React 18 with TypeScript

## ⚙️ Configuration

### 1. Environment Variables

Create a `.env` file in your project root with the following variables:

```bash
# PayFast Configuration
VITE_PAYFAST_MERCHANT_ID=your_merchant_id_here
VITE_PAYFAST_MERCHANT_KEY=your_merchant_key_here
VITE_PAYFAST_PASSPHRASE=your_passphrase_here
VITE_PAYFAST_TEST_MODE=true

# URLs (update with your domain)
VITE_PAYFAST_RETURN_URL=http://localhost:5173/payment/success
VITE_PAYFAST_CANCEL_URL=http://localhost:5173/payment/cancelled
VITE_PAYFAST_NOTIFY_URL=http://localhost:5173/api/payfast/notify
```

### 2. PayFast Account Setup

1. **Login to PayFast**: Go to [PayFast Merchant Portal](https://www.payfast.co.za/)
2. **Get Credentials**: Navigate to Account → API Credentials
3. **Copy Values**: Note down your Merchant ID, Merchant Key, and Passphrase
4. **Set Passphrase**: Create a secure passphrase for signature generation

### 3. Test Mode vs Production

- **Test Mode** (`VITE_PAYFAST_TEST_MODE=true`): Uses PayFast sandbox for testing
- **Production Mode** (`VITE_PAYFAST_TEST_MODE=false`): Uses live PayFast environment

## 🏗️ Project Structure

```
src/
├── services/
│   ├── payfast.ts          # PayFast payment service
│   └── enrollment.ts       # Enrollment management service
├── components/
│   ├── PayFastPaymentForm.tsx    # Payment form component
│   └── CourseEnrollment.tsx      # Course enrollment component
├── pages/
│   ├── Courses.tsx               # Courses listing with enrollment
│   ├── PaymentSuccess.tsx        # Payment success page
│   └── PaymentCancelled.tsx      # Payment cancellation page
└── lib/
    └── md5.ts              # MD5 implementation for signatures
```

## 🔧 Installation

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Configure Environment**:
   - Copy `.env.example` to `.env`
   - Update with your PayFast credentials

3. **Start Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📱 Usage

### 1. Course Enrollment Flow

1. **Browse Courses**: Navigate to `/courses`
2. **Select Course**: Click "Enroll Now" on any course
3. **Fill Details**: Enter student information
4. **Payment**: Click "Pay with PayFast"
5. **Redirect**: User is redirected to PayFast for payment
6. **Return**: User returns to success/cancellation page

### 2. Payment Flow

```
User Enrollment → PayFast Payment → Success/Cancellation → Course Access
```

### 3. API Endpoints

- **GET** `/courses` - List all available courses
- **POST** `/api/enrollments` - Create new enrollment
- **GET** `/payment/success` - Payment success page
- **GET** `/payment/cancelled` - Payment cancellation page

## 🔒 Security Features

- **MD5 Signature Verification**: All PayFast communications are signed
- **Input Validation**: Comprehensive form validation
- **Secure Redirects**: HTTPS-only payment processing
- **Error Handling**: Secure error messages without exposing sensitive data

## 🧪 Testing

### 1. Test Cards (Sandbox Mode)

PayFast sandbox provides test cards for testing:

- **Visa**: 4111111111111111
- **Mastercard**: 5555555555554444
- **Expiry**: Any future date
- **CVV**: Any 3 digits

### 2. Test Scenarios

- ✅ Successful payment
- ❌ Insufficient funds
- ❌ Card declined
- ❌ Payment cancellation

## 🚨 Troubleshooting

### Common Issues

1. **"Invalid Signature" Error**:
   - Check your passphrase configuration
   - Verify merchant ID and key
   - Ensure test mode setting is correct

2. **Payment Not Processing**:
   - Verify PayFast account is active
   - Check return/cancel URLs are accessible
   - Ensure proper HTTPS in production

3. **Enrollment Not Created**:
   - Check browser console for errors
   - Verify enrollment service is working
   - Check form validation

### Debug Mode

Enable debug logging by adding to your environment:

```bash
VITE_DEBUG=true
```

## 📞 Support

### PayFast Support
- **Email**: support@payfast.co.za
- **Phone**: +27 21 202 8200
- **Documentation**: [PayFast Developer Docs](https://developers.payfast.co.za/)

### Project Support
- Check the project issues on GitHub
- Review the code comments for implementation details
- Ensure all environment variables are properly set

## 🔄 Updates

### Keeping Up to Date

1. **PayFast API**: Monitor [PayFast changelog](https://developers.payfast.co.za/changelog)
2. **Dependencies**: Regularly update npm packages
3. **Security**: Monitor for security updates

## 📄 License

This PayFast integration is part of the main project and follows the same license terms.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Note**: This integration is designed for South African businesses using PayFast. For international payments, consider additional payment gateways like Stripe or PayPal.
