import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookOpen, Clock, Star, Search, Filter, Users, TrendingUp, Sparkles, Target, Award, Zap, ArrowRight, ArrowUpRight, GraduationCap, CheckCircle, Globe, Shield } from 'lucide-react';
import { enrollmentService, type Course } from '@/services/enrollment';
import { CourseEnrollment } from '@/components/CourseEnrollment';
import { type EnrollmentData } from '@/services/payfast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Masterclasses = () => {
  const [masterclasses, setMasterclasses] = useState<Course[]>([]);
  const [filteredMasterclasses, setFilteredMasterclasses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedMasterclass, setSelectedMasterclass] = useState<Course | null>(null);
  const [showEnrollmentDialog, setShowEnrollmentDialog] = useState(false);
  const [stats, setStats] = useState({
    totalMasterclasses: 0,
    totalEnrollments: 0,
    completionRate: 0,
  });

  useEffect(() => {
    // Define the four specific masterclasses
    const masterclassList: Course[] = [
      {
        id: 'masterclass-1',
        name: 'Shaka Strategy',
        description: 'Learn how to apply Shaka Zulu\'s legendary principles of planning, speed, and proximity to modern leadership and problem-solving, transforming your approach to strategy and execution.',
        price: 9999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'Leadership',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'masterclass-2',
        name: 'AfCFTA Definitive Guide',
        description: 'Gain a comprehensive understanding of the African Continental Free Trade Area, including its agreements, protocols, and strategies to maximize economic integration and trade opportunities across Africa.',
        price: 8999.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'masterclass-3',
        name: 'AI and Creative Quotient 2.0',
        description: 'Discover how to amplify your creative potential by integrating artificial intelligence tools and techniques, elevating both innovation and problem-solving in the digital age.',
        price: 11999.00,
        currency: 'ZAR',
        duration: '10 weeks',
        level: 'advanced',
        category: 'AI & Technology',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'masterclass-4',
        name: 'Indigenous AI Ethics for Business',
        description: 'Empower leaders and teams to integrate ethical AI practices by exploring core principles, addressing bias and privacy, applying ethical frameworks, ensuring compliance, and leveraging AI responsibly for business growth and social impact.',
        price: 10999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI & Ethics',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&crop=center',
        isActive: true,
      }
    ];

    setMasterclasses(masterclassList);
    setFilteredMasterclasses(masterclassList);
    setStats({
      totalMasterclasses: masterclassList.length,
      totalEnrollments: enrollmentService.getEnrollmentStats().total,
      completionRate: enrollmentService.getEnrollmentStats().completionRate,
    });
  }, []);

  useEffect(() => {
    let filtered = masterclasses;

    // Apply search filter
    if (searchQuery) {
      filtered = masterclasses.filter(masterclass => 
        masterclass.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        masterclass.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        masterclass.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(masterclass => masterclass.category === selectedCategory);
    }

    // Apply level filter
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(masterclass => masterclass.level === selectedLevel);
    }

    setFilteredMasterclasses(filtered);
  }, [masterclasses, searchQuery, selectedCategory, selectedLevel]);

  const handleEnroll = (masterclass: Course) => {
    setSelectedMasterclass(masterclass);
    setShowEnrollmentDialog(true);
  };

  const handleEnrollmentSuccess = (enrollment: EnrollmentData) => {
    // Update stats after successful enrollment
    const newStats = enrollmentService.getEnrollmentStats();
    setStats({
      totalMasterclasses: masterclasses.length,
      totalEnrollments: newStats.total,
      completionRate: newStats.completionRate,
    });
  };

  const handleCloseEnrollment = () => {
    setShowEnrollmentDialog(false);
    setSelectedMasterclass(null);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'intermediate': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'advanced': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = [
      'bg-blue-50 text-blue-700 border-blue-200',
      'bg-purple-50 text-purple-700 border-purple-200',
      'bg-emerald-50 text-emerald-700 border-emerald-200',
      'bg-orange-50 text-orange-700 border-orange-200',
      'bg-pink-50 text-pink-700 border-pink-200',
    ];
    const index = category.length % colors.length;
    return colors[index];
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const getUniqueCategories = () => {
    const categories = masterclasses.map(masterclass => masterclass.category);
    return ['all', ...Array.from(new Set(categories))];
  };

  const getUniqueLevels = () => {
    const levels = masterclasses.map(masterclass => masterclass.level);
    return ['all', ...Array.from(new Set(levels))];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-white/90">Exclusive Premium Masterclasses</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Career with
              <span className="block text-yellow-300 mt-2">
                Expert-Led Masterclasses
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Dive deep into specialized topics with our exclusive masterclasses, designed to provide you with 
              actionable insights and practical skills from industry leaders and subject matter experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-indigo-100">Premium Masterclasses</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Users className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stats.totalEnrollments}+</div>
                  <div className="text-sm text-indigo-100">Successful Graduates</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="p-2 bg-white/20 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-indigo-100">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Masterclass</h3>
            <p className="text-gray-600">Filter by category or search to find the masterclass that matches your goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search masterclasses by topic, skill, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="grid grid-cols-2 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {getUniqueCategories().map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  {getUniqueLevels().map(level => (
                    <SelectItem key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active Filters */}
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-100">
            {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Active filters:</span>
                {searchQuery && (
                  <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
                    Search: {searchQuery}
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="ml-2 hover:text-indigo-900"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
                    {selectedCategory}
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className="ml-2 hover:text-indigo-900"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedLevel !== 'all' && (
                  <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
                    {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}
                    <button 
                      onClick={() => setSelectedLevel('all')}
                      className="ml-2 hover:text-indigo-900"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                  }}
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Masterclasses Section */}
      <section id="masterclasses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Masterclasses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your career with our exclusive masterclasses led by industry experts
          </p>
        </div>
        
        {/* Masterclasses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMasterclasses.map((masterclass, index) => (
            <Card key={masterclass.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:bg-gray-50 hover:scale-[1.02] overflow-hidden rounded-2xl">
              {/* Masterclass Image */}
              {masterclass.image && (
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={masterclass.image}
                    alt={masterclass.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-indigo-600 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-50" />
                  </div>
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge className={`${getCategoryColor(masterclass.category)} border-0 shadow-lg`}>
                      {masterclass.category}
                    </Badge>
                    <Badge className={`${getLevelColor(masterclass.level)} border-0 shadow-lg`}>
                      {masterclass.level}
                    </Badge>
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(masterclass.price, masterclass.currency)}
                    </div>
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 leading-tight">
                  {masterclass.name}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                  {masterclass.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Masterclass Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Clock className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span>{masterclass.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <Star className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="capitalize">{masterclass.level}</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <Button
                  onClick={() => handleEnroll(masterclass)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMasterclasses.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No masterclasses found</h3>
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
      </section>

      {/* Enrollment Dialog */}
      <Dialog open={showEnrollmentDialog} onOpenChange={setShowEnrollmentDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Masterclass Enrollment</DialogTitle>
          </DialogHeader>
          {selectedMasterclass && (
            <CourseEnrollment
              course={selectedMasterclass}
              onEnrollmentSuccess={handleEnrollmentSuccess}
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Masterclasses;
