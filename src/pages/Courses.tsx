import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookOpen, Clock, Star, Search, Filter, Users, TrendingUp, Target, Award, Zap } from 'lucide-react';
import { enrollmentService, type Course } from '@/services/enrollment';
import { CourseEnrollment } from '@/components/CourseEnrollment';
import { type EnrollmentData } from '@/services/payfast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showEnrollmentDialog, setShowEnrollmentDialog] = useState(false);
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalEnrollments: 0,
    completionRate: 0,
  });

  useEffect(() => {
    const allCourses = enrollmentService.getCourses();
    setCourses(allCourses);
    setFilteredCourses(allCourses);
    setStats({
      totalCourses: allCourses.length,
      totalEnrollments: enrollmentService.getEnrollmentStats().total,
      completionRate: enrollmentService.getEnrollmentStats().completionRate,
    });
  }, []);

  useEffect(() => {
    let filtered = courses;

    // Apply search filter
    if (searchQuery) {
      filtered = enrollmentService.searchCourses(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Apply level filter
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    setFilteredCourses(filtered);
  }, [courses, searchQuery, selectedCategory, selectedLevel]);

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setShowEnrollmentDialog(true);
  };

  const handleEnrollmentSuccess = (enrollment: EnrollmentData) => {
    // Update stats after successful enrollment
    const newStats = enrollmentService.getEnrollmentStats();
    setStats({
      totalCourses: courses.length,
      totalEnrollments: newStats.total,
      completionRate: newStats.completionRate,
    });
  };

  const handleCloseEnrollment = () => {
    setShowEnrollmentDialog(false);
    setSelectedCourse(null);
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
    const categories = courses.map(course => course.category);
    return ['all', ...Array.from(new Set(categories))];
  };

  const getUniqueLevels = () => {
    const levels = courses.map(course => course.level);
    return ['all', ...Array.from(new Set(levels))];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-purple-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-purple-900/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="text-sm font-medium text-white/90">Premium Learning Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Your Skills with
              <span className="block text-white">Our Courses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover comprehensive training programs designed to accelerate your career growth. 
              From beginner to advanced, we have the perfect course for every skill level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stats.totalCourses}+</div>
                  <div className="text-sm text-indigo-100">Premium Courses</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stats.totalEnrollments}+</div>
                  <div className="text-sm text-indigo-100">Active Students</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 border border-white/20">
                <div className="p-2 bg-white/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stats.completionRate}%</div>
                  <div className="text-sm text-indigo-100">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for courses, skills, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg">
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
                <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg">
                  <SelectValue placeholder="Level" />
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
          
          {/* Results Summary */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4" />
                <span>Showing {filteredCourses.length} of {courses.length} courses</span>
              </div>
              {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
                <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
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
                className="border-gray-200 hover:bg-gray-50 rounded-lg"
              >
                <Zap className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <Card key={course.id} className="group border border-gray-200 bg-white overflow-hidden rounded-xl shadow-sm">
                              {/* Course Image */}
                {course.image && (
                  <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-purple-700 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-50" />
                  </div>
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge className={`${getCategoryColor(course.category)} border-0`}>
                      {course.category}
                    </Badge>
                    <Badge className={`${getLevelColor(course.level)} border-0`}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/95 rounded-lg px-3 py-2 shadow">
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(course.price, course.currency)}
                    </div>
                    <div className="text-[11px] leading-tight text-gray-600 text-right">Once-off payment</div>
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
                  {course.name}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Clock className="w-4 h-4 text-purple-600" />
                    </div>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <Star className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="capitalize">{course.level}</span>
                  </div>
                </div>

                {/* Payment Type */}
                <div className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 inline-block">Once-off payment</div>

                {/* Enroll Button */}
                <Button
                  onClick={() => handleEnroll(course)}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No courses found</h3>
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

      {/* Enrollment Dialog */}
      <Dialog open={showEnrollmentDialog} onOpenChange={setShowEnrollmentDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Course Enrollment</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <CourseEnrollment
              course={selectedCourse}
              onEnrollmentSuccess={handleEnrollmentSuccess}
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Courses;
