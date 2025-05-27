
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "hello@openedai.com",
      link: "mailto:hello@openedai.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+27 82 781 3032",
      link: "https://wa.me/27827813032"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Office Line",
      details: "+27 010 045 1055",
      link: "tel:+27100451055"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      details: "24/7 Available",
      link: ""
    }
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
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/certifications" className="text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Certifications</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Contact</Link>
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
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-white hover:text-purple-400">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to start your AI learning journey? Contact our team for support, questions, or enrollment assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                      <div className="text-purple-400">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Course enrollment assistance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Technical support and guidance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Corporate training solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Partnership opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    General inquiries about our programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-purple-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-purple-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-purple-500"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-2 w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 py-3"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/27827813032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl transition-colors"
            >
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-semibold mb-2">WhatsApp Us</h3>
              <p className="text-sm opacity-90">Get instant support via WhatsApp</p>
            </a>
            
            <a
              href="mailto:hello@openedai.com"
              className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-xl transition-colors"
            >
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm opacity-90">Send us a detailed email inquiry</p>
            </a>
            
            <Link
              to="/certifications"
              className="bg-pink-600 hover:bg-pink-700 text-white p-6 rounded-xl transition-colors"
            >
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold mb-2">Browse Courses</h3>
              <p className="text-sm opacity-90">Explore our certification programs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
