import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, BookOpen, Clock, Users, Star, CheckCircle } from 'lucide-react';
import { enrollmentService, type Course, type CreateEnrollmentRequest } from '@/services/enrollment';
import { PayFastPaymentForm } from './PayFastPaymentForm';
import { type EnrollmentData } from '@/services/payfast';

interface CourseEnrollmentProps {
  course: Course;
  userId?: string;
  onEnrollmentSuccess?: (enrollment: EnrollmentData) => void;
}

export const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({
  course,
  userId = 'user-1', // Default user for demo
  onEnrollmentSuccess
}) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [enrollment, setEnrollment] = useState<EnrollmentData | null>(null);
  const [isCreatingEnrollment, setIsCreatingEnrollment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEnroll = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    setIsCreatingEnrollment(true);
    setError(null);

    try {
      const request: CreateEnrollmentRequest = {
        userId,
        courseId: course.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
      };

      const response = enrollmentService.createEnrollment(request);

      if (response.success && response.enrollment) {
        setEnrollment(response.enrollment);
        setShowSummary(true);
        onEnrollmentSuccess?.(response.enrollment);
      } else {
        setError(response.error || 'Failed to create enrollment');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsCreatingEnrollment(false);
    }
  };

  const handlePaymentSuccess = (paymentId: string) => {
    if (enrollment) {
      enrollmentService.updateEnrollmentPaymentStatus(enrollment.id, 'completed', paymentId);
    }
  };

  const handlePaymentError = (error: string) => {
    if (enrollment) {
      enrollmentService.updateEnrollmentPaymentStatus(enrollment.id, 'failed');
    }
    setError(error);
  };

  const handleCancel = () => {
    setShowPaymentForm(false);
    setEnrollment(null);
    setError(null);
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: currency || 'ZAR',
    }).format(amount);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (showPaymentForm && enrollment) {
    return (
      <PayFastPaymentForm
        enrollment={enrollment}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        onCancel={handleCancel}
      />
    );
  }

  // Order Summary Screen
  if (showSummary && enrollment) {
    return (
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">Confirm your enrollment</CardTitle>
          <CardDescription className="text-gray-600">Review the details below before continuing to secure payment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Course</span>
              <span className="font-medium text-gray-900">{course.name}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-600">Category</span>
              <span className="font-medium text-gray-900">{course.category}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-600">Level</span>
              <span className="font-medium text-gray-900 capitalize">{course.level}</span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Total</span>
              <span className="text-xl font-bold text-gray-900">{formatCurrency(course.price, course.currency)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setShowSummary(false);
                setEnrollment(null);
              }}
            >
              Back
            </Button>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => setShowPaymentForm(true)}
            >
              Confirm & Pay
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">You will be redirected to PayFast to complete your payment securely.</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {course.name}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {course.description}
            </CardDescription>
          </div>
          <Badge className={getLevelColor(course.level)}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-medium">{course.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <BookOpen className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Category</p>
              <p className="font-medium">{course.category}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <Star className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-600">Level</p>
              <p className="font-medium capitalize">{course.level}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Pricing */}
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Course Price</p>
          <p className="text-4xl font-bold text-blue-600">
            {formatCurrency(course.price, course.currency)}
          </p>
          <p className="text-sm text-gray-500 mt-1">One-time payment</p>
        </div>

        <Separator />

        {/* Enrollment Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Enrollment Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Enrollment Button */}
        <Button
          onClick={handleEnroll}
          disabled={isCreatingEnrollment || !formData.firstName || !formData.lastName || !formData.email}
          className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
        >
          {isCreatingEnrollment ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Creating Enrollment...
            </>
          ) : (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Enroll Now
            </>
          )}
        </Button>

        {/* Course Benefits */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">What you'll get:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Access to all course materials and resources
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Certificate of completion
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Lifetime access to course content
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Support from instructors and community
            </li>
          </ul>
        </div>

        {/* Security Notice */}
        <div className="text-xs text-gray-500 text-center">
          <p>🔒 Your information is secure and will only be used for course enrollment</p>
          <p>💳 Payment is processed securely through PayFast</p>
        </div>
      </CardContent>
    </Card>
  );
};
