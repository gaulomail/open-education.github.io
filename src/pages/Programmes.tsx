import { Link } from 'react-router-dom';
import { Star, Users, Award, ArrowRight, Clock, BookOpen, Trophy, MapPin, Phone, Mail, CheckCircle, Target, Globe, Shield, Zap, GraduationCap, Building, Users2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Programmes = () => {
  const programmes = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "R4,999",
      description: "Master the basics of artificial intelligence and machine learning",
      modules: 12,
      projects: 3,
      imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 6,
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 4,
      imageUrl: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 8,
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 10,
      imageUrl: "https://images.pexels.com/photos/4792717/pexels-photo-4792717.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 2,
      imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 12,
      imageUrl: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 6,
      imageUrl: "https://images.pexels.com/photos/3993225/pexels-photo-3993225.jpeg?auto=compress&cs=tinysrgb&w=400"
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
      projects: 15,
      imageUrl: "https://images.pexels.com/photos/7282906/pexels-photo-7282906.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: "url('https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-purple-300 font-bold">Programmes & Training</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Comprehensive AI education programs designed by industry experts for the African market
          </p>
        </div>
      </section>

      {/* About Open Education AI Section Removed */}

      {/* Qualifications Section Removed - Now a separate page */}

      {/* AI Programmes Grid */}
      <section className="py-20 bg-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Programmes</h2>
            <p className="text-xl text-gray-700">Comprehensive AI training programmes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, index) => ( 
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1 transition-all duration-300 ease-out group flex flex-col animate-in fade-in zoom-in-95 duration-500 ease-out" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={prog.imageUrl} alt={prog.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100/50 text-purple-600 text-sm font-medium px-3 py-1 rounded-full border border-purple-500/40">
                      {prog.level} 
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">{prog.rating}</span>
                  </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {prog.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 flex-grow">{prog.description}</p>
                  
                  <div className="space-y-2 mb-5 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                      <span>{prog.modules} modules</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Trophy className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                      <span>{prog.projects} projects</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                      <span>{prog.students} students</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold text-gray-900">{prog.price}</span>
                    <Button className="bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 px-6 py-2.5 text-sm">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Contact/CTA Section for Programmes Page */}
      <section className="py-20 md:py-28 bg-purple-700 animate-in fade-in duration-700 ease-out">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start or Have Questions?
          </h2>
          <p className="text-lg text-purple-200 mb-10 leading-relaxed">
            Our team is here to help you choose the right programme and answer any queries. Don't hesitate to reach out!
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
            >
              Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Programmes;
