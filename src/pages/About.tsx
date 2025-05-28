
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
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
      icon: <Users className="w-6 h-6" />,
      title: "Community Focus",
      description: "Creating a collaborative community where learners and educators thrive together."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering top-notch, tailored learning experiences that bridge educational gaps."
    }
  ];

  const goals = [
    "Demonstrating experience and expertise in AI education",
    "Expressing commitment to quality and customer satisfaction at all times",
    "Creating an increasing customer base through exceptional service",
    "Achieving growth and profit in line with industry standards",
    "Delivering excellence in training interventions and learning outcomes"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-purple-200 font-bold">Open Education AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Dedicated to providing high-quality, accredited and micro segment learning programmes that leverage 
              the power of artificial intelligence to empower learners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Open Education AI is dedicated to providing high-quality, accredited and micro segment learning 
                programmes that leverage the power of artificial intelligence to empower learners worldwide. Our 
                AI-enhanced training solutions equip students with practical skills and knowledge to excel 
                professionally, regardless of their background or location.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By integrating AI-driven insights and aligning our programmes with global industry standards and 
                best practices, we ensure relevance and applicability across diverse economic environments. 
                Committed to promoting a skilled, confident, and adaptable workforce, we support lifelong learning 
                and professional growth, helping students and organisations thrive in an increasingly competitive 
                and interconnected global economy.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/22c97659-45cd-46b2-afd5-d63b15cb5554.png"
                alt="Open Education AI"
                className="w-64 h-64 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="bg-purple-900/20 rounded-xl p-4 w-fit mb-6">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionise education through AI, providing accessible, personalised learning experiences 
                that promote equity, support learners and educators, and inculcate lifelong learning in an 
                inclusive, future-ready educational ecosystem.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="bg-purple-900/20 rounded-xl p-4 w-fit mb-6">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To transform education through artificial intelligence, providing high-quality, personalised 
                learning experiences that empower students and educators, bridge educational disparities, and 
                promote continuous, inclusive learning for all.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="bg-purple-900/20 rounded-xl p-4 w-fit mb-6">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in making education fair, inclusive, and a lifelong adventure for everyone. We're 
                dedicated to creating a dynamic, future-ready educational landscape that's accessible and 
                beneficial for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group border border-gray-700">
                <div className="bg-purple-900/20 rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-purple-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Company Goals & Objectives</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are committed to becoming the leading Skills Development Provider of AI Learning Interventions by:
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the AI education revolution and transform your career with industry-leading certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/getting-started">
              <Button size="lg" className="bg-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-purple-700/30 transition-all duration-200">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-900 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200">
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

export default About;
