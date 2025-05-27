
import { Link } from 'react-router-dom';
import { Users, Award, Globe, Target, CheckCircle } from 'lucide-react';

const About = () => {
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
              <Link to="/certifications" className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Certifications</Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AICerts</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading the future of AI education with industry-recognized certifications that empower professionals worldwide
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
                At AICerts, we believe that artificial intelligence education should be accessible, 
                comprehensive, and industry-relevant. Our mission is to bridge the gap between 
                theoretical knowledge and practical application, preparing professionals for the 
                AI-driven future.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We partner with leading AI experts and organizations to create certification 
                programs that not only teach cutting-edge technologies but also emphasize 
                ethical AI development and responsible innovation.
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

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center group hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-blue-400">
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

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students celebrating achievements in AI education"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
              <p className="text-lg text-gray-300 mb-8">
                Since our founding, we've been committed to delivering exceptional AI education 
                that transforms careers and drives innovation across industries.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
