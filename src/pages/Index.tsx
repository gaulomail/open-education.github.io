import { Link } from 'react-router-dom';
import { Star, Users, Award, ArrowRight, Globe, Shield, Zap, Target, Eye, Heart, Users2, CheckCircle, Clock, BookOpen, LifeBuoy } from 'lucide-react'; // Added BookOpen, LifeBuoy
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import React from 'react';
import AnimatedStatCard from '@/components/AnimatedStatCard'; // Import the new component

const Index = () => {
  const stats = [
    { number: "50K+", label: "Certified Professionals", icon: <Award /> }, // Icon as JSX element
    { number: "200+", label: "AI Courses", icon: <BookOpen /> },
    { number: "95%", label: "Success Rate", icon: <CheckCircle /> },
    { number: "24/7", label: "Support", icon: <LifeBuoy /> }
  ];

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-purple-600" />,
      title: "Global Recognition",
      description: "Industry-recognized programmes accepted worldwide by leading tech companies."
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "Secure Verification",
      description: "Blockchain-powered programme credential verification for authentic credentials."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-600" />,
      title: "Instant Results",
      description: "Get your programme results immediately after completion with detailed feedback."
    }
  ];

  const programmesData = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: "12,000+",
      price: "R2,999",
      imageUrl: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Machine Learning Expert",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: "8,500+",
      price: "R5,999",
      imageUrl: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AI Ethics & Governance",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.9,
      students: "5,200+",
      price: "R3,999",
      imageUrl: "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const coreValuesData = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inclusive Learning",
      description: "Making education fair, inclusive, and accessible for everyone, regardless of background or location."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      description: "Aligning with global industry standards and best practices for relevance across diverse economies."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Community Focus",
      description: "Creating a collaborative community where learners and educators thrive together."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering top-notch, tailored learning experiences that bridge educational gaps."
    }
  ];

  const companyGoalsData = [
    "Demonstrating experience and expertise in AI education",
    "Expressing commitment to quality and customer satisfaction at all times",
    "Creating an increasing customer base through exceptional service",
    "Achieving growth and profit in line with industry standards",
    "Delivering excellence in training interventions and learning outcomes"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Transform Education with
            <span className="text-purple-300 font-bold block mt-2 sm:mt-3">
              AI-Powered Learning
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed drop-shadow-sm max-w-3xl mx-auto">
            Open Education AI provides high-quality, accredited micro-learning programmes that leverage 
            artificial intelligence to empower learners worldwide with practical skills and knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/getting-started">
              <Button size="xl" className="bg-purple-600 text-white font-semibold px-10 py-5 text-lg rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-purple-700/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black/75">
                Get Started Today
              </Button>
            </Link>
            <Link to="/programmes">
              <Button size="xl" variant="outline" className="px-10 py-5 text-lg border-2 border-purple-300 text-purple-200 bg-white/10 hover:bg-white/20 hover:text-white hover:border-purple-200 transition-all duration-300 rounded-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black/75">
                View Programmes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section (Who We Are, Mission, Vision) */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-purple-600">Open Education AI</span>
             </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">Your partner in transformative AI-powered learning experiences designed for the future.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
            <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-16 duration-700 ease-out delay-300">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-5">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Open Education AI is dedicated to providing high-quality, accredited micro-learning 
                programmes that leverage the power of artificial intelligence to empower learners worldwide. Our 
                AI-enhanced training solutions equip students with practical skills and knowledge to excel 
                professionally, regardless of their background or location.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By integrating AI-driven insights and aligning our programmes with global industry standards, 
                we ensure relevance and applicability across diverse economic environments. 
              </p>
            </div>
            <div className="order-1 lg:order-2 flex items-center justify-center animate-in fade-in slide-in-from-right-16 duration-700 ease-out delay-300">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Diverse team collaborating on a project"
                className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[450px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out delay-400">
              <div className="flex items-center text-purple-600 mb-4">
                <Target className="w-9 h-9 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-900">Our Mission</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To revolutionise education through AI, providing accessible, personalised learning experiences 
                that promote equity, support learners and educators, and inculcate lifelong learning in an 
                inclusive, future-ready educational ecosystem.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out delay-500">
              <div className="flex items-center text-purple-600 mb-4">
                <Eye className="w-9 h-9 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To transform education through artificial intelligence, providing high-quality, personalised 
                learning experiences that empower students, bridge educational disparities, and 
                promote continuous, inclusive learning for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 md:py-20 bg-purple-700 text-white animate-in fade-in duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStatCard 
                key={index}
                targetValue={stat.number}
                label={stat.label}
                icon={stat.icon} // Pass the icon component directly
                animationDelay={`${index * 150}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us? (Features Section) - Enhanced */}
      <section className="py-16 md:py-24 bg-gray-50 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-purple-600">Open Education AI?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI programmes are designed by industry experts and recognized globally by leading tech companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1 transition-all duration-300 ease-out group text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out" style={{ animationDelay: `${100 + index * 150}ms` }}>
                <div className="bg-purple-100 rounded-full p-5 w-fit mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon} 
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values Section - Enhanced */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, fostering an environment of growth and innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValuesData.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 ease-out group flex flex-col items-center text-center border border-transparent animate-in fade-in zoom-in-95 duration-500 ease-out" style={{ animationDelay: `${100 + index * 150}ms` }}>
                <div className="bg-purple-100 text-purple-600 rounded-full p-4 w-fit mb-5 transform group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(value.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programmes Section */}
      <section className="py-16 md:py-24 bg-gray-50 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Popular <span className="text-purple-600">AI Programmes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of AI programmes tailored for various skill levels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmesData.map((prog, index) => ( 
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out flex flex-col animate-in fade-in zoom-in-95 duration-500 ease-out" style={{ animationDelay: `${100 + index * 150}ms` }}>
                <img src={prog.imageUrl} alt={prog.title} className="w-full h-52 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-300">
                      {prog.level}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-600">{prog.rating} ({prog.students})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{prog.description}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{prog.duration}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold text-gray-800">{prog.price}</span>
                    <Link to="/getting-started">
                      <Button className="bg-purple-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/programmes">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-colors px-8 py-3 text-base animate-in fade-in duration-500 ease-out delay-500">
                    View All Programmes <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Goals Section - Enhanced */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Commitment to <span className="text-purple-600">Excellence</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to achieving key objectives that drive innovation and success in AI education.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              {companyGoalsData.map((goal, index) => (
                <li key={index} className="flex items-start p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out" style={{ animationDelay: `${100 + index * 100}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{goal}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in zoom-in-90 duration-700 ease-out">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 drop-shadow-md">
            Ready to Advance Your AI Career?
          </h2>
          <p className="text-lg sm:text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our AI programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/getting-started">
              <Button size="xl" className="bg-white text-purple-700 font-semibold px-10 py-5 text-lg rounded-xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="xl" variant="outline" className="border-2 border-purple-300 text-white bg-transparent hover:bg-white hover:text-purple-700 hover:border-white px-10 py-5 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700">
                Contact Us
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
