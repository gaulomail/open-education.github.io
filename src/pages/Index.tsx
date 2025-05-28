import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50">
        <nav className="relative bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
                  aria-label="Open Education AI Home"
                >
                  <img 
                    src="/lovable-uploads/eed4e5a8-e7f7-478b-9406-48f4f446d66e.png" 
                    alt=""
                    className="h-10 w-10"
                    loading="eager"
                  />
                  <span className="text-lg font-semibold text-white hidden sm:block">Open Education AI</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="nav-link text-white hover:text-orange-400 focus:text-orange-400">Home</Link>
                <Link to="/certifications" className="nav-link text-white hover:text-orange-400 focus:text-orange-400">Certifications</Link>
                <Link to="/about" className="nav-link text-white hover:text-orange-400 focus:text-orange-400">About</Link>
                <Link to="/contact" className="nav-link text-white hover:text-orange-400 focus:text-orange-400">Contact</Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden transition-all duration-200 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
              <Link 
                to="/" 
                className="mobile-nav-link text-white hover:text-orange-400 focus:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/certifications" 
                className="mobile-nav-link text-white hover:text-orange-400 focus:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link 
                to="/about" 
                className="mobile-nav-link text-white hover:text-orange-400 focus:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="mobile-nav-link text-white hover:text-orange-400 focus:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
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
                  <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary mt-4">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-900 hover:text-white hover:border-purple-600">
                  View Certifications
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-[320px]">
              {/* Muted Animated Gradient Background */}
              <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-br from-[#3a225d] via-[#2d1a3a] to-[#1a223a] opacity-70 blur-xl rounded-2xl" />
              {/* AI-Themed Illustration */}
              <img
                src="https://assets-global.website-files.com/5f6b7190899c3e1a1c8b7b3c/63f8e2b2e2c2e2b2e2c2e2b2_ai-education-illustration.png"
                alt="AI Education Illustration"
                className="relative z-10 w-60 h-60 object-contain drop-shadow-xl mx-auto animate-float"
                loading="eager"
              />
              {/* Glassmorphism Card Overlay - Dark Glossy */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-11/12 sm:w-[480px] md:w-[540px] min-h-[210px] bg-gray-900/70 backdrop-blur-2xl rounded-3xl border-2 border-purple-700/40 shadow-2xl p-12 flex flex-col items-center overflow-hidden" style={{boxShadow: '0 12px 64px 0 rgba(80,0,128,0.28), 0 4px 24px 0 rgba(128,0,255,0.10), 0 0 48px 4px rgba(80,0,128,0.12)'}}>
                {/* Subtle Dark Gradient Overlay for Depth */}
                <div className="absolute inset-0 rounded-3xl" style={{background: 'radial-gradient(circle at 70% 30%, rgba(80,0,128,0.18) 0%, rgba(20,20,40,0.22) 100%)'}} />
                {/* AI Icon Motif */}
                <svg className="w-12 h-12 mb-4 z-10" fill="none" viewBox="0 0 48 48" stroke="url(#aiGradientDark)" strokeWidth="2">
                  <defs>
                    <linearGradient id="aiGradientDark" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a084e8" />
                      <stop offset="100%" stopColor="#6a4fc7" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="20" stroke="url(#aiGradientDark)" strokeWidth="2.5" fill="rgba(255,255,255,0.08)" />
                  <path d="M24 14v8l6 4" stroke="url(#aiGradientDark)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="3.5" fill="#fff" fillOpacity="0.8" />
                </svg>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 text-center drop-shadow-lg z-10 tracking-tight">Shape Tomorrow with AI</h3>
                <p className="text-xl md:text-2xl text-purple-100 text-center mb-0 drop-shadow z-10 font-medium">Experience the future of learning—interactive, intelligent, and inspiring.</p>
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
                <div className="mb-6">
                  <img 
                    src={index === 0 
                      ? "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      : index === 1 
                      ? "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      : "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    }
                    alt={`${feature.title} - diverse professionals in AI education`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
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
                  <Button className="bg-primary text-primary-foreground font-bold border border-primary shadow-lg rounded-xl px-6 py-3 hover:bg-primary/90 hover:shadow-primary/30 hover:ring-2 hover:ring-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Modern Layered Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-[#1a1333] via-[#2d1a3a] to-[#1a223a]" />
          {/* Softly Blurred Abstract Shape */}
          <svg className="absolute -top-32 left-1/2 -translate-x-1/2 blur-2xl opacity-40" width="700" height="400" viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="350" cy="200" rx="320" ry="120" fill="url(#paint0_radial)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(350 200) scale(320 120)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a084e8" stopOpacity="0.5" />
                <stop offset="1" stopColor="#1a1333" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          {/* Optional: Faint Mesh/Noise Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-purple-100 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
            Ready to Advance Your AI Career?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto drop-shadow">
            Join thousands of professionals who have transformed their careers with our AI certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2d1a3a] text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-purple-700/40 hover:scale-105 hover:ring-2 hover:ring-purple-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-100 bg-black/30 hover:bg-purple-900/80 hover:text-white px-8 py-4 text-lg rounded-xl shadow-md hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/eed4e5a8-e7f7-478b-9406-48f4f446d66e.png" 
                  alt="Open Education AI Logo" 
                  className="h-6 w-6 mr-2"
                />
                <span className="text-xl font-bold text-purple-300">
                  Open Education AI
                </span>
              </div>
              <p className="mt-4 text-gray-400">
                Leading the future of AI education with industry-recognized certifications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Certifications</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Fundamentals</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Deep Learning</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Ethics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Open Education AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
