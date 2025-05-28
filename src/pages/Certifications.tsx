import { Link } from 'react-router-dom';
import { Star, Users, Award, ArrowRight, Clock, BookOpen, Trophy, MapPin, Phone, Mail, CheckCircle, Target, Globe, Shield, Zap, GraduationCap, Building, Users2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "R4,999",
      description: "Master the basics of artificial intelligence and machine learning",
      modules: 12,
      projects: 3
    },
    {
      title: "Machine Learning Expert",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "8,500+",
      price: "R9,999",
      description: "Deep dive into advanced ML algorithms and neural networks",
      modules: 24,
      projects: 6
    },
    {
      title: "AI Ethics & Governance",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.9,
      students: "5,200+",
      price: "R6,999",
      description: "Learn responsible AI development and ethical considerations",
      modules: 18,
      projects: 4
    },
    {
      title: "Natural Language Processing",
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.7,
      students: "4,800+",
      price: "R11,999",
      description: "Master text processing and language understanding with AI",
      modules: 30,
      projects: 8
    },
    {
      title: "Computer Vision Specialist",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.8,
      students: "3,900+",
      price: "R13,999",
      description: "Learn image recognition and computer vision applications",
      modules: 36,
      projects: 10
    },
    {
      title: "AI for Business Leaders",
      level: "Beginner",
      duration: "3 weeks",
      rating: 4.6,
      students: "7,200+",
      price: "R3,999",
      description: "Strategic AI implementation for business transformation",
      modules: 9,
      projects: 2
    },
    {
      title: "Deep Learning Specialization",
      level: "Advanced",
      duration: "14 weeks",
      rating: 4.9,
      students: "6,200+",
      price: "R15,999",
      description: "Master neural networks and deep learning architectures",
      modules: 42,
      projects: 12
    },
    {
      title: "AI in Healthcare",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.7,
      students: "3,400+",
      price: "R8,999",
      description: "Apply AI solutions in medical and healthcare contexts",
      modules: 24,
      projects: 6
    },
    {
      title: "Robotics and AI",
      level: "Advanced",
      duration: "16 weeks",
      rating: 4.8,
      students: "2,800+",
      price: "R17,999",
      description: "Integrate AI with robotics for autonomous systems",
      modules: 48,
      projects: 15
    }
  ];

  const masterclasses = [
    {
      title: "Shaka Strategy",
      description: "Learn how to apply Shaka Zulu's legendary principles of planning, speed, and proximity to modern leadership and problem-solving, transforming your approach to strategy and execution",
      duration: "2 days",
      price: "R2,999"
    },
    {
      title: "AfCFTA Definitive Guide",
      description: "Gain a comprehensive understanding of the African Continental Free Trade Area, including its agreements, protocols, and strategies to maximise economic integration and trade opportunities across Africa",
      duration: "3 days",
      price: "R3,499"
    },
    {
      title: "AI and Creative Quotient 2.0",
      description: "Discover how to amplify your creative potential by integrating artificial intelligence tools and techniques, elevating both innovation and problem-solving in the digital age",
      duration: "2 days",
      price: "R2,799"
    },
    {
      title: "Indigenous AI Ethics for Business",
      description: "Empower leaders and teams to integrate ethical AI practices by exploring core principles, addressing bias and privacy, applying ethical frameworks, ensuring compliance, and leveraging AI responsibly for business growth and social impact",
      duration: "3 days",
      price: "R3,999"
    }
  ];

  const corporateTraining = [
    {
      category: "Strategic Management",
      courses: ["Strategic Management", "Market Services and Concepts for Internal Customers", "Managing People Performance", "Preparing Budgets and Financial Plans", "Managing Budgets and Financial Plans", "Ensuring a Safe Workplace", "Recruit, Select and Induct Staff", "Contribute to Strategic Direction", "Development and Implementation of Strategic Plans", "Manage Innovation and Continuous Improvement", "Risk Mitigation"]
    },
    {
      category: "Entrepreneurship",
      courses: ["Small Business Management Enterprise", "Monitor and Manage Business Operations", "Manage Finances", "Manage a Small Team"]
    },
    {
      category: "Management and Leadership",
      courses: ["Frontline Management", "Essential Management Techniques", "Project Management", "Small and Micro Business", "Lead a Sales Team", "Leadership in the Workplace", "Lead Work Teams", "Team Effectiveness", "Manage Conflict, Stress and Time", "Manage Sales Performance"]
    },
    {
      category: "Marketing and Business Development",
      courses: ["Digital Marketing using AI", "Introduction to Advertising", "Marketing", "Sales Management", "PR Skills", "Basic Selling Skills", "Market Research", "Essential Selling Skills", "Identifying Market Opportunities", "Profiling the Market", "Consumer Behaviour", "Analyse Market Data", "Forecast Market and Business Needs", "Implement and Monitor Marketing Activities"]
    }
  ];

  const highDemandCourses = [
    "SEO", "Project Management", "Occupational Health and Safety", "Digital Marketing", 
    "Accounting and Bookkeeping", "Customer Relationship Building", "Cryptocurrency and Blockchain", 
    "Graphic Design", "Copywriting", "Sales Management"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-300">
              Open Education AI
            </Link>
            <div className="hidden md:flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 focus:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/certifications" className="text-white hover:text-blue-400 focus:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Certifications</Link>
              <Link to="/about" className="text-white hover:text-blue-400 focus:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 focus:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-blue-200 font-bold">Certifications & Training</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI education programs designed by industry experts for the African market
          </p>
        </div>
      </section>

      {/* About Open Education AI */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">About Open Education AI</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Open Education AI is dedicated to providing high-quality, accredited and micro segment learning programmes that leverage the power of artificial intelligence to empower learners worldwide. Our AI-enhanced training solutions equip students with practical skills and knowledge to excel professionally, regardless of their background or location.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To revolutionise education through AI, providing accessible, personalised learning experiences that promote equity and lifelong learning.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To transform education through artificial intelligence, providing high-quality, personalised learning experiences that empower students and educators.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300">
                Making education fair, inclusive, and a lifelong adventure for everyone through cutting-edge AI technology and ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Qualifications</h2>
            <p className="text-xl text-gray-300">Industry-recognized certifications</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Occupational Certificate – Artificial Intelligence Software Developer</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-4">Purpose of the Qualification</h4>
                <p className="text-gray-300 mb-6">
                  This qualification is designed to equip candidates with the ability to integrate and implement artificial intelligence (AI) algorithms and logic within software applications, as part of the deliverables of an Information Technology (IT) project.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-4">Learning Outcomes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Interpret solution design documentation and develop an AI solution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Train AI models using machine learning processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Deploy AI solutions and conduct ongoing maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Certifications Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Certification Courses</h2>
            <p className="text-xl text-gray-300">Comprehensive AI training programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-900/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30">
                    {cert.level}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-300">{cert.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-gray-300 mb-6">{cert.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm">{cert.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm">{cert.modules} modules</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Trophy className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm">{cert.projects} projects</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm">{cert.students} students</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white">{cert.price}</span>
                  <Button className="bg-primary text-primary-foreground font-bold border border-primary shadow-lg rounded-xl px-6 py-3 hover:bg-primary/90 hover:shadow-primary/30 hover:ring-2 hover:ring-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclasses Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Masterclasses</h2>
            <p className="text-xl text-gray-300">Specialized intensive programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {masterclasses.map((masterclass, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{masterclass.title}</h3>
                <p className="text-gray-300 mb-6">{masterclass.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-sm">{masterclass.duration}</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{masterclass.price}</span>
                  </div>
                  <Button className="bg-primary text-primary-foreground font-bold border border-primary shadow-lg rounded-xl px-6 py-3 hover:bg-primary/90 hover:shadow-primary/30 hover:ring-2 hover:ring-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary">
                    Register <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Corporate Training</h2>
            <p className="text-xl text-gray-300">Comprehensive business training solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {corporateTraining.map((category, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Building className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid gap-2">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Demand Courses */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">High Demand Corporate Courses</h2>
            <p className="text-xl text-gray-300">Most popular training programs</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highDemandCourses.map((course, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-1">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <span className="text-white font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">Get in touch with our education specialists</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-blue-100">hello@openedai.com</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <MessageSquare className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-blue-100">+27 82 781 3032</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Office</h3>
              <p className="text-blue-100">+27 010 045 1055</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Your AI Journey Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
