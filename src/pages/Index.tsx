
import { useState } from 'react';
import { Menu, X, ChevronRight, Star, Users, Award, CheckCircle, ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      description: "Industry-recognized certifications accepted worldwide"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Verification",
      description: "Blockchain-powered certificate verification system"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Get your certification results immediately after completion"
    }
  ];

  const certifications = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "$299"
    },
    {
      title: "Machine Learning Expert",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "8,500+",
      price: "$599"
    },
    {
      title: "AI Ethics & Governance",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.9,
      students: "5,200+",
      price: "$399"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AICerts
                </span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">Certifications</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Home</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Certifications</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div className="px-4 py-3 border-t border-gray-100">
              <Button variant="ghost" className="w-full mb-2">Sign In</Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Master AI with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Certified Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of professionals advancing their careers with industry-recognized AI certifications. 
                Learn from experts, practice with real projects, and earn credentials that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all">
                  Start Learning <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 hover:bg-gray-50">
                  View Certifications
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">AI Certification Dashboard</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Progress</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-4/5"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-sm opacity-80">Modules</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-sm opacity-80">Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 group-hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Certifications?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI certification program is designed by industry experts and recognized globally by leading tech companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of AI certification programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {cert.level}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">{cert.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cert.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cert.students} students</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">{cert.price}</span>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Advance Your AI Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our AI certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AICerts
              </span>
              <p className="mt-4 text-gray-400">
                Leading the future of AI education with industry-recognized certifications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Fundamentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deep Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Ethics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 AICerts. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
