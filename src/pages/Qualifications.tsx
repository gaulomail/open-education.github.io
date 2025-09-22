import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { GraduationCap, CheckCircle, ArrowRight, Sparkles, Users, TrendingUp, Shield, Globe, Search, Filter, Target, Zap, Mail, Phone, User, Calendar, CreditCard } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { payfastService, type EnrollmentData } from '@/services/payfast';

const qualificationsData = [
  {
    id: 'ai-software-developer',
    title: 'Occupational Certificate: Artificial Intelligence Software Developer',
    description: 'This qualification is designed to equip candidates with the ability to integrate and implement artificial intelligence (AI) algorithms and logic within software applications, as part of the deliverables of an Information Technology (IT) project.',
    level: 'NQF Level 5',
    credits: 120,
    category: 'Artificial Intelligence',
    duration: '12-18 months',
    price: 'R15,999',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center',
    isActive: true,
    learningOutcomes: [
      'AI Solution Development',
      'Model Training',
      'Deployment & Maintenance',
      'Project Management'
    ]
  },
  {
    id: 'ai-ethics-specialist',
    title: 'Professional Certificate: AI Ethics and Governance',
    description: 'Comprehensive qualification focused on ethical AI development, responsible AI practices, and governance frameworks for artificial intelligence systems.',
    level: 'NQF Level 6',
    credits: 90,
    category: 'AI Ethics',
    duration: '9-12 months',
    price: 'R12,999',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
    isActive: true,
    learningOutcomes: [
      'Ethical AI Principles',
      'AI Governance Frameworks',
      'Bias Detection & Mitigation',
      'Regulatory Compliance'
    ]
  },
  {
    id: 'machine-learning-engineer',
    title: 'Advanced Certificate: Machine Learning Engineering',
    description: 'Specialized qualification for building, deploying, and maintaining machine learning systems in production environments.',
    level: 'NQF Level 7',
    credits: 150,
    category: 'Machine Learning',
    duration: '18-24 months',
    price: 'R18,999',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop&crop=center',
    isActive: true,
    learningOutcomes: [
      'ML System Design',
      'Model Deployment',
      'Performance Optimization',
      'Scalability & Monitoring'
    ]
  },
  {
    id: 'data-science-analyst',
    title: 'Professional Certificate: Data Science and Analytics',
    description: 'Comprehensive qualification covering data analysis, statistical modeling, and business intelligence using modern data science tools.',
    level: 'NQF Level 6',
    credits: 120,
    category: 'Data Science',
    duration: '12-15 months',
    price: 'R14,999',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
    isActive: true,
    learningOutcomes: [
      'Data Analysis',
      'Statistical Modeling',
      'Business Intelligence',
      'Data Visualization'
    ]
  }
];

const Qualifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [filteredQualifications, setFilteredQualifications] = useState(qualificationsData);
  const [selectedQualification, setSelectedQualification] = useState<any>(null);
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

  // Filter qualifications based on search and filters
  useEffect(() => {
    let filtered = qualificationsData;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(qualification => 
        qualification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qualification.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qualification.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(qualification => qualification.category === selectedCategory);
    }

    // Apply level filter
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(qualification => qualification.level === selectedLevel);
    }

    setFilteredQualifications(filtered);
  }, [searchQuery, selectedCategory, selectedLevel]);

  // Get unique categories and levels for filters
  const getUniqueCategories = () => {
    const categories = qualificationsData.map(qualification => qualification.category);
    return ['all', ...Array.from(new Set(categories))];
  };

  const getUniqueLevels = () => {
    const levels = qualificationsData.map(qualification => qualification.level);
    return ['all', ...Array.from(new Set(levels))];
  };

  // Handle enrollment
  const handleEnroll = (qualification: any) => {
    setSelectedQualification(qualification);
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
        id: `qualification-${Date.now()}`,
        userId: 'user-1', // Default user for demo
        courseId: selectedQualification.id,
        courseName: selectedQualification.title,
        amount: parseFloat(selectedQualification.price.replace('R', '').replace(',', '')),
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
      setSelectedQualification(null);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
      alert(`Error: ${errorMessage}`);
      setIsSubmitting(false);
    }
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
    setSelectedQualification(null);
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
      <div className="relative overflow-hidden bg-indigo-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/10 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-white/90">Premium Learning Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Your Skills with
              <span className="block text-yellow-300">
                Our Qualifications
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover comprehensive training programs designed to accelerate your career growth. 
              From beginner to advanced, we have the perfect qualification for every skill level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{qualificationsData.length}</div>
                  <div className="text-sm text-indigo-100">Premium Qualifications</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-sm text-indigo-100">Active Students</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-indigo-100">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for qualifications, skills, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {getUniqueCategories().map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Level Filter */}
            <div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {getUniqueLevels().map(level => (
                    <SelectItem key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Results Summary */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4" />
                <span>Showing {filteredQualifications.length} of {qualificationsData.length} qualifications</span>
              </div>
              {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                  <Filter className="w-3 h-3 mr-1" />
                  Filters Active
                </Badge>
              )}
            </div>
            
            {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="border-gray-200 hover:bg-gray-50 rounded-xl"
              >
                <Zap className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Qualifications Section */}
      <section id="qualifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our AI Qualifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized credentials to validate your AI expertise and advance your career
          </p>
        </div>
        
        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQualifications.map((qualification, index) => (
            <div key={qualification.id} className="bg-white rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-500 group">
              {/* Qualification Image */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
                <img 
                  src={qualification.image} 
                  alt={qualification.title} 
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 border-0 px-3 py-1.5 text-sm font-medium">
                    {qualification.level}
                  </Badge>
                  <Badge className="bg-emerald-500 text-white border-0 px-3 py-1.5 text-sm font-medium shadow-lg">
                    {qualification.credits} Credits
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {qualification.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {qualification.description}
                </p>
                
                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-indigo-600" />
                    </div>
                    <span>{qualification.category}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-amber-600" />
                    </div>
                    <span>{qualification.duration}</span>
                  </div>
                </div>
                
                {/* Learning Outcomes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Learning Outcomes:</h4>
                  <div className="space-y-1">
                    {qualification.learningOutcomes.slice(0, 3).map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>{outcome}</span>
                      </div>
                    ))}
                    {qualification.learningOutcomes.length > 3 && (
                      <div className="text-xs text-indigo-600 font-medium">
                        +{qualification.learningOutcomes.length - 3} more outcomes
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{qualification.price}</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleEnroll(qualification)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {/* No Results */}
          {filteredQualifications.length === 0 && (
            <div className="text-center py-20 col-span-full">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No qualifications found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-xl"
              >
                <Zap className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Enrollment Dialog */}
      <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Enroll in {selectedQualification?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedQualification && (
            <div className="space-y-6">
              {/* Qualification Summary */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {selectedQualification.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-indigo-100 text-indigo-700 border-0">
                        {selectedQualification.level}
                      </Badge>
                      <Badge className="bg-emerald-100 text-emerald-700 border-0">
                        {selectedQualification.credits} Credits
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-700 border-0">
                        {selectedQualification.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {selectedQualification.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">
                      {selectedQualification.price}
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
                        className="pl-10 h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg"
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
                        className="pl-10 h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg"
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
                        className="pl-10 h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg"
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
                        className="pl-10 h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg"
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
                      className="h-11 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg"
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
                      className="w-full h-24 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg resize-none p-3"
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
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default Qualifications;
