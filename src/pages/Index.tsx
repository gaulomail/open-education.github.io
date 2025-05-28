import { Link } from 'react-router-dom';
import { ChevronRight, Star, Users, Award, CheckCircle, ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { number: "50K+", label: "Certified Professionals" },
    { number: "200+", label: "AI Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Industry-recognized certifications accepted worldwide by leading tech companies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Verification",
      description: "Blockchain-powered certificate verification system for authentic credentials"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Get your certification results immediately after completion with detailed feedback"
    }
  ];

  const certifications = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "R2,999"
    },
    {
      title: "Machine Learning Expert",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "8,500+",
      price: "R5,999"
    },
    {
      title: "AI Ethics & Governance",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.9,
      students: "5,200+",
      price: "R3,999"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Education with
                <span className="text-purple-200 font-bold block">
                  AI-Powered Learning
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Open Education AI provides high-quality, accredited micro-learning programmes that leverage 
                artificial intelligence to empower learners worldwide with practical skills and knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/getting-started">
                  <Button size="lg" className="bg-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-purple-700/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    Get Started
                  </Button>
                </Link>
                <Link to="/certifications">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-900 hover:text-white hover:border-purple-600">
                    View Certifications
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-[400px]">
              {/* Clean Logo Display */}
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl scale-150"></div>
                
                {/* Logo */}
                <div className="relative z-10">
                  <img
                    src="/lovable-uploads/842cfd68-aa1d-47ac-a40b-51f239c78f49.png"
                    alt="Open Education AI"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain mx-auto animate-float"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Modern Text Overlay */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-11/12 sm:w-[480px] md:w-[540px] text-center">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg tracking-tight">Shape Tomorrow with AI</h3>
                <p className="text-xl md:text-2xl text-purple-100 drop-shadow font-medium">Experience the future of learning—interactive, intelligent, and inspiring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-200 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Open Education AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI certification program is designed by industry experts and recognized globally by leading tech companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group border border-gray-700">
                <div className="bg-purple-900/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Certifications
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our comprehensive range of AI certification programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500/20 text-purple-400 text-sm font-medium px-3 py-1 rounded-full border border-purple-500/30">
                    {cert.level}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-300">{cert.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Award className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-sm">{cert.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-sm">{cert.students} students</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white">{cert.price}</span>
                  <Link to="/getting-started">
                    <Button className="bg-purple-600 text-white font-bold border border-purple-600 shadow-lg rounded-xl px-6 py-3 hover:bg-purple-700 hover:shadow-purple-700/30 hover:ring-2 hover:ring-purple-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-[#1a1333] via-[#2d1a3a] to-[#1a223a]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-purple-100 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
            Ready to Advance Your AI Career?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto drop-shadow">
            Join thousands of professionals who have transformed their careers with our AI certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/getting-started">
              <Button size="lg" className="bg-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-purple-700/40 hover:scale-105 hover:ring-2 hover:ring-purple-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/certifications">
              <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-100 bg-black/30 hover:bg-purple-900/80 hover:text-white px-8 py-4 text-lg rounded-xl shadow-md hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
