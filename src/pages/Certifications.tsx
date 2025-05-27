
import { Link } from 'react-router-dom';
import { Star, Users, Award, ArrowRight, Clock, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "$299",
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
      price: "$599",
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
      price: "$399",
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
      price: "$699",
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
      price: "$799",
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
      price: "$199",
      description: "Strategic AI implementation for business transformation",
      modules: 9,
      projects: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AICerts
            </Link>
            <div className="hidden md:flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/certifications" className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Certifications</Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive range of AI certification programs designed by industry experts
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30">
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
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
