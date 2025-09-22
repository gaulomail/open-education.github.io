import { Link } from 'react-router-dom';
import { Star, Users, Award, ArrowRight, Globe, Shield, Zap, Target, Eye, Heart, Users2, CheckCircle, Clock, BookOpen, LifeBuoy, Sparkles, TrendingUp, Rocket, Lightbulb, ArrowUpRight, Play, CreditCard, Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import AnimatedStatCard from '@/components/AnimatedStatCard';
import { payfastService, type EnrollmentData } from '@/services/payfast';

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [enrollmentForm, setEnrollmentForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = [
    { number: "50K+", label: "Certified Professionals", icon: <Award />, color: "text-blue-600" },
    { number: "200+", label: "AI Courses", icon: <BookOpen />, color: "text-purple-600" },
    { number: "95%", label: "Success Rate", icon: <CheckCircle />, color: "text-emerald-600" },
    { number: "24/7", label: "Support", icon: <LifeBuoy />, color: "text-orange-600" }
  ];

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Global Recognition",
      description: "Industry-recognized programmes accepted worldwide by leading tech companies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Secure Verification",
      description: "Blockchain-powered programme credential verification for authentic credentials.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-12 h-12 text-amber-600" />,
      title: "Instant Results",
      description: "Get your programme results immediately after completion with detailed feedback.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const programmesData = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "R2,999",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
      category: "Artificial Intelligence"
    },
    {
      title: "Machine Learning Expert",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "8,500+",
      price: "R5,999",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&crop=center",
      category: "Machine Learning"
    },
    {
      title: "AI Ethics & Governance",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.9,
      students: "5,200+",
      price: "R3,999",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      category: "AI Ethics"
    }
  ];

  const coreValuesData = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusive Learning",
      description: "Making education fair, inclusive, and accessible for everyone, regardless of background or location.",
      color: "text-rose-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Standards",
      description: "Aligning with global industry standards and best practices for relevance across diverse economies.",
      color: "text-blue-600"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Community Focus",
      description: "Creating a collaborative community where learners and educators thrive together.",
      color: "text-emerald-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering top-notch, tailored learning experiences that bridge educational gaps.",
      color: "text-amber-600"
    }
  ];

  const companyGoalsData = [
    "Demonstrating experience and expertise in AI education",
    "Expressing commitment to quality and customer satisfaction at all times",
    "Creating an increasing customer base through exceptional service",
    "Achieving growth and profit in line with industry standards",
    "Delivering top-notch, tailored learning experiences that bridge educational gaps."
  ];

  // Handle enrollment
  const handleEnroll = (course: any) => {
    setSelectedCourse(course);
    setIsEnrollmentOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setEnrollmentForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollmentForm.firstName || !enrollmentForm.lastName || !enrollmentForm.email) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create enrollment data for PayFast
      const enrollmentData: EnrollmentData = {
        id: `course-${Date.now()}`,
        userId: 'user-1', // Default user for demo
        courseId: selectedCourse.title.toLowerCase().replace(/\s+/g, '-'),
        courseName: selectedCourse.title,
        amount: parseFloat(selectedCourse.price.replace('R', '').replace(',', '')),
        currency: 'ZAR',
        firstName: enrollmentForm.firstName,
        lastName: enrollmentForm.lastName,
        email: enrollmentForm.email,
        phone: enrollmentForm.phone || undefined,
        paymentStatus: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Create PayFast payment session
      const { formData } = payfastService.createPaymentSession(enrollmentData);
      
      // Create a hidden form and submit it to PayFast (following websky-dreamscape pattern)
      const payfastForm = document.createElement('form');
      payfastForm.method = 'post';
      payfastForm.action = payfastService.getBaseUrl();
      payfastForm.style.display = 'none';

      // Add all form data
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value.toString();
          payfastForm.appendChild(input);
        }
      });



      // Submit the form to PayFast
      document.body.appendChild(payfastForm);
      payfastForm.submit();
      // No need to remove the form immediately, PayFast handles the redirect

      // Reset form and close dialog
      setEnrollmentForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
      setIsEnrollmentOpen(false);
      setSelectedCourse(null);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
      alert(`Error: ${errorMessage}`);
      setIsSubmitting(false);
    }
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
    setSelectedCourse(null);
    setEnrollmentForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center" 
            alt="Diverse students from all tribes learning together"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Image failed to load, using fallback');
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Fallback pattern if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/40 to-indigo-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-white/90">Premium AI Learning Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Master the Future of
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your career with industry-leading AI courses, expert mentorship, and globally recognized certifications. 
              Join thousands of professionals shaping the future of technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <Link to="/courses">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Courses
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-purple-800 border-purple-600 text-white hover:bg-purple-700 font-semibold px-8 py-4 rounded-2xl text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <div className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={stat.color}>{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven learning methodologies to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your AI journey with our most popular and highly-rated courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {programmesData.map((programme, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={programme.imageUrl} 
                      alt={programme.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {programme.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                        {programme.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {programme.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {programme.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {programme.students}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900">{programme.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">{programme.price}</div>
                    </div>
                    
                                         <Button 
                       onClick={() => handleEnroll(programme)}
                       className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                     >
                       <CreditCard className="w-4 h-4 mr-2" />
                       Enroll Now
                       <ArrowRight className="w-4 h-4 ml-2" />
                     </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
                     <div className="text-center">
             <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 rounded-2xl text-lg">
               <Link to="/courses">
                 View All Courses
                 <ArrowUpRight className="w-5 h-5 ml-2" />
               </Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValuesData.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={value.color}>{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Goals Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to transforming education and empowering the next generation of AI professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {companyGoalsData.map((goal, index) => (
                  <div key={index} className="flex items-start gap-4">
                                       <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <CheckCircle className="w-5 h-5 text-white" />
                   </div>
                    <p className="text-gray-700 leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>
              
                             <div className="mt-8">
                 <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg">
                   <Link to="/about">
                     Learn More About Us
                     <ArrowRight className="w-5 h-5 ml-2" />
                   </Link>
                 </Button>
               </div>
            </div>
            
                         <div className="relative">
               <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 text-center">
                 <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Target className="w-12 h-12 text-white" />
                 </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the world's leading platform for AI education, empowering millions of learners 
                  to master artificial intelligence and shape the future of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of professionals who have already taken the first step towards mastering AI. 
            Start your journey today and unlock unlimited possibilities.
          </p>
          
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
               <Link to="/courses">
                 <Rocket className="w-4 h-5 mr-2" />
                 Get Started Today
               </Link>
             </Button>
                          <Button variant="outline" size="lg" className="bg-white/10 border-white/50 text-white hover:bg-white/20 hover:border-white/70 font-semibold px-8 py-4 rounded-2xl text-lg backdrop-blur-sm shadow-lg">
                <Lightbulb className="w-5 h-5 mr-2" />
                Learn More
              </Button>
          </div>
        </div>
      </section>

      {/* Enrollment Dialog */}
      <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Enroll in {selectedCourse?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="space-y-6">
              {/* Course Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {selectedCourse.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-purple-100 text-purple-700 border-0">
                        {selectedCourse.level}
                      </Badge>
                      <Badge className="bg-emerald-100 text-emerald-700 border-0">
                        {selectedCourse.duration}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700 border-0">
                        {selectedCourse.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{selectedCourse.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{selectedCourse.students}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">
                      {selectedCourse.price}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrollment Form */}
              <form onSubmit={handleSubmitEnrollment} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="firstName"
                        type="text"
                        value={enrollmentForm.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="lastName"
                        type="text"
                        value={enrollmentForm.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={enrollmentForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={enrollmentForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company/Organization
                  </Label>
                  <div className="relative mt-1">
                    <div className="w-4 h-4 mx-3 mt-3 text-gray-400" />
                    <Input
                      id="company"
                      type="text"
                      value={enrollmentForm.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="h-11 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                      placeholder="Enter your company or organization"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Information
                  </Label>
                  <div className="relative mt-1">
                    <div className="w-4 h-4 mx-3 mt-3 text-gray-400" />
                    <textarea
                      id="message"
                      value={enrollmentForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full h-24 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg resize-none p-3"
                      placeholder="Any additional information or questions..."
                    />
                  </div>
                </div>

                {/* Payment Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-800">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm font-medium">Secure Payment via PayFast</span>
                  </div>
                  <p className="text-blue-700 text-sm mt-1">
                    After submitting this form, you will be redirected to PayFast to complete your payment securely.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Proceed to Payment
                      </>
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseEnrollment}
                    className="px-6 py-3 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Index;
