import { Link } from 'react-router-dom';
import { Users, Award, Globe, Target, CheckCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest quality in AI education and certification"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusivity",
      description: "Making AI education accessible to learners from all backgrounds"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Building a worldwide community of AI professionals"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Industry-recognized certifications that advance careers"
    }
  ];

  const achievements = [
    "50,000+ certified professionals worldwide",
    "200+ comprehensive AI courses",
    "95% student success rate",
    "24/7 expert support available",
    "Partnerships with leading tech companies",
    "Blockchain-verified certificates"
  ];

  const goals = [
    "Demonstrating Experience and expertise",
    "Expressing commitment to quality and customer satisfaction at all times",
    "Creating an increasing customer base",
    "Endeavouring to achieve growth and profit in line with industry and company standards",
    "Priding ourselves on delivering excellence training interventions"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/eed4e5a8-e7f7-478b-9406-48f4f446d66e.png" 
                alt="Open Education AI Logo" 
                className="h-8 w-8 mr-3"
              />
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Open Education AI
              </Link>
            </div>
            <div className="hidden md:flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-purple-400 focus:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/certifications" className="text-white hover:text-purple-400 focus:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Certifications</Link>
              <Link to="/about" className="text-white hover:text-purple-400 focus:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-purple-400 focus:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400">Home</Link>
              <Link to="/certifications" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400">Certifications</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-white hover:text-purple-400">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Open Education AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionising education through AI, providing accessible, personalised learning experiences that promote equity and lifelong learning
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Open Education AI, our mission is to revolutionise education through AI, providing accessible, 
                personalised learning experiences that promote equity, support learners and educators, and 
                inculcate lifelong learning in an inclusive, future-ready educational ecosystem.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Open Education AI is dedicated to providing high-quality, accredited and micro segment learning 
                programmes that leverage the power of artificial intelligence to empower learners worldwide. 
                Our AI-enhanced training solutions equip students with practical skills and knowledge to excel 
                professionally, regardless of their background or location.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Diverse team collaborating on AI projects"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students celebrating achievements in AI education"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our vision at Open Education AI is to transform education through artificial intelligence, 
                providing high-quality, personalised learning experiences that empower students and educators, 
                bridge educational disparities, and promote continuous, inclusive learning for all.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By integrating AI-driven insights and aligning our programmes with global industry standards 
                and best practices, we ensure relevance and applicability across diverse economic environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              At Open Education AI, we believe in making education fair, inclusive, and a lifelong adventure for everyone. 
              We're all about cutting-edge AI tech that offers top-notch, tailored learning experiences to bridge gaps 
              and support learners and educators alike.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 text-center group hover:shadow-xl hover:shadow-purple-500/20 transition-all border border-gray-700">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-purple-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Company Goals and Objectives</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are committed to becoming the leading Skills Development Provider of AI Learning Interventions by:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Commitments</h3>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Core Philosophy</h2>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our goal is to empower individuals, uphold the highest ethical standards, and to create a collaborative 
              community where everyone thrives. We're dedicated to creating a dynamic, future-ready educational landscape 
              that's accessible and beneficial for all. Committed to promoting a skilled, confident, and adaptable workforce, 
              we support lifelong learning and professional growth, helping students and organisations thrive in an 
              increasingly competitive and interconnected global economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
