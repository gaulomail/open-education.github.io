import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, RefreshCw, BookOpen, Home, HelpCircle } from 'lucide-react';
import { enrollmentService } from '@/services/enrollment';
import { type EnrollmentData } from '@/services/payfast';

const PaymentCancelled = () => {
  const [searchParams] = useSearchParams();
  const [enrollment, setEnrollment] = useState<EnrollmentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const enrollmentId = searchParams.get('m_payment_id');
    
    if (enrollmentId) {
      // Update enrollment status to cancelled
      enrollmentService.updateEnrollmentPaymentStatus(enrollmentId, 'cancelled');
      
      // Get enrollment details
      const enrollmentData = enrollmentService.getEnrollmentById(enrollmentId);
      if (enrollmentData) {
        setEnrollment(enrollmentData);
      }
    }
    
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cancellation Header */}
        <div className="text-center mb-8">
          <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-gray-600">
            Your payment was cancelled. Don't worry, you can try again anytime.
          </p>
        </div>

        {/* Cancellation Details */}
        {enrollment && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Enrollment Details
              </CardTitle>
              <CardDescription>
                Your enrollment is still pending payment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Course Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Course:</span>
                      <span className="font-medium">{enrollment.courseName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium text-blue-600">
                        {new Intl.NumberFormat('en-ZA', {
                          style: 'currency',
                          currency: enrollment.currency,
                        }).format(enrollment.amount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium text-orange-600">Payment Pending</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Student Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{enrollment.firstName} {enrollment.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{enrollment.email}</span>
                    </div>
                    {enrollment.phone && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">{enrollment.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Why Payment Was Cancelled */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Was Your Payment Cancelled?</CardTitle>
            <CardDescription>
              Common reasons and solutions for payment cancellations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Insufficient Funds</h4>
                  <p className="text-gray-600">
                    Your bank account or card may not have sufficient funds. Please check your balance and try again.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Bank Declined</h4>
                  <p className="text-gray-600">
                    Your bank may have declined the transaction for security reasons. Contact your bank to authorize the payment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Technical Issues</h4>
                  <p className="text-gray-600">
                    Sometimes technical issues can cause payment failures. Try refreshing the page and attempting the payment again.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solutions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What You Can Do Next</CardTitle>
            <CardDescription>
              Here are your options to complete your enrollment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Try Payment Again</h4>
                  <p className="text-gray-600">
                    You can attempt the payment again. Make sure you have sufficient funds and your card details are correct.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Use Different Payment Method</h4>
                  <p className="text-gray-600">
                    Try using a different card or payment method if available.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Contact Support</h4>
                  <p className="text-gray-600">
                    If you continue to experience issues, our support team can help you complete your enrollment.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {enrollment && (
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to={`/courses?retry=${enrollment.id}`}>
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Payment Again
              </Link>
            </Button>
          )}
          
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Courses
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
        </div>

        {/* Support Information */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you complete your enrollment successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Support
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                View Course Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
