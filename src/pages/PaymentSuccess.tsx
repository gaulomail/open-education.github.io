import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BookOpen, Download, ArrowRight, Home, Mail } from 'lucide-react';
import { enrollmentService } from '@/services/enrollment';
import { type EnrollmentData } from '@/services/payfast';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [enrollment, setEnrollment] = useState<EnrollmentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const enrollmentId = searchParams.get('m_payment_id');
    const paymentId = searchParams.get('pf_payment_id');
    const paymentStatus = searchParams.get('payment_status');

    if (enrollmentId && paymentStatus === 'COMPLETE') {
      // Update enrollment status to completed
      enrollmentService.updateEnrollmentPaymentStatus(enrollmentId, 'completed', paymentId || undefined);
      
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  if (!enrollment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Payment Not Found
              </h3>
              <p className="text-gray-600 mb-4">
                We couldn't find your enrollment information. Please contact support if you believe this is an error.
              </p>
              <Button asChild>
                <Link to="/courses">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Courses
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to {enrollment.courseName}! Your enrollment has been confirmed.
          </p>
        </div>

        {/* Enrollment Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Enrollment Details
            </CardTitle>
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
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-medium text-green-600">
                      {new Intl.NumberFormat('en-ZA', {
                        style: 'currency',
                        currency: enrollment.currency,
                      }).format(enrollment.amount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enrollment Date:</span>
                    <span className="font-medium">
                      {enrollment.createdAt.toLocaleDateString()}
                    </span>
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

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
            <CardDescription>
              Here's what you can expect in the coming days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Welcome Email</h4>
                  <p className="text-gray-600">
                    You'll receive a welcome email within the next hour with your course access details and login credentials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Course Access</h4>
                  <p className="text-gray-600">
                    Your course materials and learning platform access will be activated within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Orientation</h4>
                  <p className="text-gray-600">
                    Join our orientation session to get familiar with the learning platform and meet your instructors.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
            <Link to="/courses">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse More Courses
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
        <div className="mt-12 text-center">
          <div className="bg-purple-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you get started with your course.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
