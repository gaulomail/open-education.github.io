import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, CheckCircle, Zap, Sparkles, Users, TrendingUp, Award, Globe, ArrowRight, Target, Filter, Search, X, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const corporateTrainingData = [
  {
    category: "STRATEGIC MANAGEMENT",
    courses: ["Strategic Management", "Market Services and Concepts for Internal Customers", "Managing People Performance", "Preparing Budgets and Financial Plans", "Managing Budgets and Financial Plans", "Ensuring a Safe Workplace", "Recruit,Select and Induct Staff", "Contribute to Strategic Direction", "Development and Implementation of Strategic Plans", "Manage Innovation and Continuous Improvement", "Risk Mitigation"],
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 11,
    level: "Advanced"
  },
  {
    category: "ENTREPRENEURSHIP",
    courses: ["Small Business Management.Enterprise", "Monitor and Manage Business Operations", "Manage Finances", "Manage a Small Team"],
    imageUrl: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 4,
    level: "Intermediate"
  },
  {
    category: "MANAGEMENT AND LEADERSHIP",
    courses: ["Frontline Management", "Essential Management techniques", "Project Management", "Small and Micro Business", "Lead a Sales Team", "Leadership in the Workplace", "Lead Work Teams", "Team Effectiveness", "Manage Conflict,Stress and Time", "Manage Sales Performance"],
    imageUrl: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 10,
    level: "Intermediate"
  },
  {
    category: "KNOWLEDGE MANAGEMENT",
    courses: ["Information Management", "Recordkeeping", "Research", "General Administration"],
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 4,
    level: "Beginner"
  },
  {
    category: "INDUSTRY CAPABILITY",
    courses: ["Continuity", "Industry Context", "Product Skills and Advice", "Sustainability", "Workplace Effectiveness"],
    imageUrl: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 5,
    level: "Intermediate"
  },
  {
    category: "CREATIVITY AND INNOVATION",
    courses: ["Creative Thinking", "Masterclass Creativity in the Age of AI", "Innovation"],
    imageUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 3,
    level: "Advanced"
  },
  {
    category: "MARKETING AND BUSINESS DEVELOPMENT",
    courses: ["Digital Marketing using AI", "Introduction to Advertising", "Marketing", "Sales Management", "PR Skills", "Basic Selling Skills", "Market Research", "Essential Selling Skills", "Identifying Market Opportunities", "Profiling the Market", "Consumer Behaviour", "Analyse Market Data", "Forecast Market and Business Needs", "Implement and Monitor Marketing Activities"],
    imageUrl: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 14,
    level: "Advanced"
  },
  {
    category: "WORKFORCE DEVELOPMENT",
    courses: ["Diversity and Inclusion", "HR Management", "Continuous Learning and Professional Development", "Workplace relations", "Manage Personal Work priorities and Professional Development", "Professional development", "Continuous Development", "Develop a Workplace Learning Environment", "Industrial Relationship Management", "Separation and Termination", "Managing Work/Life Skills", "Managing Employee Relations", "Working Effectively in a Business Environment"],
    imageUrl: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 13,
    level: "Advanced"
  },
  {
    category: "COMMUNICATION",
    courses: ["Basic Communication", "Interpersonal Communication", "Report Writing", "CopywritingWriting Skills/Content Creation", "Presentation Skills", "Selling and Negotiation kills", "Communicate in the Workplace", "Sales Skills"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 8,
    level: "Intermediate"
  },
  {
    category: "STAKEHOLDER RELATIONS",
    courses: ["Contact Centre Operations", "Customer Relationship Building", "Deliver a Service to Customers", "Frontline Customer Service", "Client Relationship Building", "Develop Online Customer Service Strategies"],
    imageUrl: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 6,
    level: "Intermediate"
  },
  {
    category: "FINANCE",
    courses: ["Financial Administration", "Financial Wellbeing", "Financial Management", "Prepare and Process Financial Business Documents", "Accounting and Bookkeeping"],
    imageUrl: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 5,
    level: "Intermediate"
  },
  {
    category: "WORKPLACE SAFETY",
    courses: ["Workplace Safety Procedures", "Participation in Workplace Safety Procedures", "Maintaining Workplace safety", "Monitoring a Safe Workplace"],
    imageUrl: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 4,
    level: "Beginner"
  },
  {
    category: "ENVIRONMENTAL PRACTICES",
    courses: ["Follow Environmental Work Practices", "Participate in Environmental Work Practices", "Maintain Environmental Work Practices", "Implement and Monitor Environmental Policies"],
    imageUrl: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 4,
    level: "Beginner"
  }
];

const highDemandCoursesData = [
  "SEO", "Project Management", "Occupational Health and Safety", "Digital Marketing", 
  "Accounting and Bookkeeping", "Customer Relationship Building", "Cryptocurrency and Blockchain", 
  "Graphic Design", "Copywriting", "Sales Management"
];

const CorporateTraining = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [filteredCategories, setFilteredCategories] = useState(corporateTrainingData);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  // Filter categories based on search and filters
  React.useEffect(() => {
    let filtered = corporateTrainingData;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(category => 
        category.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.courses.some(course => course.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(category => 
        category.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Apply level filter
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(category => category.level.toLowerCase() === selectedLevel);
    }

    setFilteredCategories(filtered);
  }, [searchQuery, selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-gray-50">
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
                Corporate Training
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover comprehensive training programs designed to accelerate your career growth. 
              From beginner to advanced, we have the perfect corporate training for every skill level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-indigo-100">Training Categories</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">39+</div>
                  <div className="text-sm text-indigo-100">Total Courses</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-indigo-100">Customizable</div>
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
                  placeholder="Search for training categories, skills, or topics..."
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
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="strategic-management">Strategic Management</SelectItem>
                  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                  <SelectItem value="management-leadership">Management & Leadership</SelectItem>
                  <SelectItem value="marketing-business">Marketing & Business Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Level Filter */}
            <div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Results Summary */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4" />
                <span>Showing {filteredCategories.length} of {corporateTrainingData.length} training categories</span>
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

      {/* Corporate Training Categories Section */}
      <section id="training-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Training Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business training solutions designed to transform your team's capabilities and drive business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              {/* Category Image with Gradient Overlay */}
              <div className="relative h-64 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden flex-shrink-0">
                <img 
                  src={category.imageUrl} 
                  alt={category.category} 
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {category.category}
                  </h3>
                  
                  {/* Badges Row */}
                  <div className="flex items-center gap-3">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 border-0 px-3 py-1.5 text-sm font-medium">
                      {category.level}
                    </Badge>
                    <Badge className="bg-emerald-500 text-white border-0 px-3 py-1.5 text-sm font-medium shadow-lg">
                      {category.courseCount} Courses
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Course List */}
                <div className="space-y-3 mb-8 flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Building className="w-4 h-4 text-indigo-600" />
                    </div>
                    Available Courses
                  </h4>
                  
                  <div className="grid gap-2">
                    {category.courses.slice(0, 5).map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors duration-200 group/item">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-emerald-200 transition-colors duration-200">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                          {course}
                        </span>
                      </div>
                    ))}
                    
                    {category.courses.length > 5 && (
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-indigo-600 text-xs font-bold">+</span>
                        </div>
                        <span className="text-indigo-700 font-medium text-sm">
                          {category.courses.length - 5} more courses available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* CTA Button - Always at bottom */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                                     <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-[1.02]" onClick={handleOpenQuoteModal}>
                    <Building className="w-5 h-5 mr-3" />
                    Get Quote for {category.category}
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No training categories found</h3>
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

      {/* High Demand Courses Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              High Demand Corporate Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most popular training programmes to upskill your teams and stay ahead of industry trends.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {highDemandCoursesData.map((course, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center aspect-square">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base leading-tight">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get a customized training solution that fits your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Link to="/contact">
                <Target className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl text-lg">
              <Building className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />

             {/* Quote Request Modal */}
       <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl rounded-2xl">
           <DialogHeader className="text-center pb-6">
             <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
               <Building className="w-8 h-8 text-indigo-600" />
             </div>
             <DialogTitle className="text-3xl font-bold text-gray-900">Request a Custom Quote</DialogTitle>
             <p className="text-gray-600 mt-2">Get a personalized training solution for your team</p>
           </DialogHeader>
           
           <form className="space-y-6">
             {/* Company Information */}
             <div className="space-y-4">
               <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Company Information</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Company Name *</label>
                   <Input placeholder="Enter your company name" className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl" />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Industry *</label>
                   <Select>
                     <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                       <SelectValue placeholder="Select your industry" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="technology">Technology</SelectItem>
                       <SelectItem value="finance">Finance</SelectItem>
                       <SelectItem value="healthcare">Healthcare</SelectItem>
                       <SelectItem value="manufacturing">Manufacturing</SelectItem>
                       <SelectItem value="retail">Retail</SelectItem>
                       <SelectItem value="education">Education</SelectItem>
                       <SelectItem value="other">Other</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
               </div>
             </div>
             
             {/* Contact Information */}
             <div className="space-y-4">
               <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Contact Information</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Full Name *</label>
                   <Input placeholder="Enter your full name" className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl" />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Job Title *</label>
                   <Input placeholder="e.g., HR Manager, CEO" className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl" />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Email Address *</label>
                   <Input type="email" placeholder="your.email@company.com" className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl" />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Phone Number</label>
                   <Input placeholder="+27 (0) 12 345 6789" className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl" />
                 </div>
               </div>
             </div>
             
             {/* Training Requirements */}
             <div className="space-y-4">
               <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Training Requirements</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Training Category *</label>
                   <Select>
                     <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                       <SelectValue placeholder="Select training category" />
                     </SelectTrigger>
                     <SelectContent>
                       {corporateTrainingData.map((category) => (
                         <SelectItem key={category.category} value={category.category}>
                           {category.category}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Number of Participants *</label>
                   <Select>
                     <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                       <SelectValue placeholder="Select number of participants" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="1-10">1-10 participants</SelectItem>
                       <SelectItem value="11-25">11-25 participants</SelectItem>
                       <SelectItem value="26-50">26-50 participants</SelectItem>
                       <SelectItem value="51-100">51-100 participants</SelectItem>
                       <SelectItem value="100+">100+ participants</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Preferred Training Format</label>
                   <Select>
                     <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                       <SelectValue placeholder="Select training format" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="in-person">In-person training</SelectItem>
                       <SelectItem value="virtual">Virtual training</SelectItem>
                       <SelectItem value="hybrid">Hybrid (in-person + virtual)</SelectItem>
                       <SelectItem value="self-paced">Self-paced online</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Timeline</label>
                   <Select>
                     <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                       <SelectValue placeholder="Select timeline" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="asap">As soon as possible</SelectItem>
                       <SelectItem value="1-month">Within 1 month</SelectItem>
                       <SelectItem value="3-months">Within 3 months</SelectItem>
                       <SelectItem value="6-months">Within 6 months</SelectItem>
                       <SelectItem value="flexible">Flexible timeline</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700">Additional Requirements</label>
                 <Textarea 
                   placeholder="Tell us about your specific training needs, goals, or any special requirements..."
                   className="min-h-[100px] border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl resize-none"
                 />
               </div>
             </div>
             
             {/* Submit Button */}
             <div className="pt-6 border-t border-gray-200">
                                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1">
                 <Building className="w-5 h-5 mr-3" />
                 Send Quote Request
                 <ArrowRight className="w-5 h-5 ml-3" />
               </Button>
               <p className="text-xs text-gray-500 text-center mt-3">
                 We'll get back to you within 24 hours with a customized quote
               </p>
             </div>
           </form>
         </DialogContent>
       </Dialog>
    </div>
  );
};

export default CorporateTraining;
