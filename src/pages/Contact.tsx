
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-purple-100/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-purple-600 font-semibold">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 font-normal mb-8 max-w-3xl mx-auto">
              Ready to start your AI learning journey? Contact our team for support, questions, or enrollment assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative overflow-hidden bg-white rounded-2xl border-0 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-start space-x-4 p-6">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300 inline-flex items-center gap-2 group/link"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.details}
                            <div className="w-0 group-hover/link:w-2 h-0.5 bg-purple-600 transition-all duration-300"></div>
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Contact Us?</h3>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 shadow-lg">
                  <ul className="space-y-4 text-gray-700 font-medium">
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-purple-700 transition-colors duration-300">Course enrollment assistance and guidance</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-purple-700 transition-colors duration-300">Technical support and learning resources</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-purple-700 transition-colors duration-300">Corporate training solutions and partnerships</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-purple-700 transition-colors duration-300">Programme verification and queries</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-purple-700 transition-colors duration-300">General inquiries about our AI programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-8 border-0 shadow-2xl shadow-purple-500/10">
              {/* Background gradient decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-800 font-medium text-lg">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-3 h-12 bg-white border-2 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 rounded-xl transition-all duration-300 hover:border-purple-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-800 font-medium text-lg">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-3 h-12 bg-white border-2 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 rounded-xl transition-all duration-300 hover:border-purple-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-800 font-medium text-lg">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-3 h-12 bg-white border-2 border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 rounded-xl transition-all duration-300 hover:border-purple-300"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-800 font-medium text-lg">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-3 w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 hover:border-purple-300 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-500/20 py-4 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://wa.me/27827813032"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
                <h3 className="text-xl font-bold mb-3">WhatsApp Us</h3>
                <p className="text-green-100 font-medium">Get instant support via WhatsApp</p>
                <div className="mt-4 w-0 group-hover:w-8 h-0.5 bg-white transition-all duration-300"></div>
              </div>
            </a>
            
            <a
              href="mailto:hello@openedai.com"
              className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✉️</div>
                <h3 className="text-xl font-bold mb-3">Email Us</h3>
                <p className="text-purple-100 font-medium">Send us a detailed email inquiry</p>
                <div className="mt-4 w-0 group-hover:w-8 h-0.5 bg-white transition-all duration-300"></div>
              </div>
            </a>
            
            <Link
              to="/programmes"
              className="group relative overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h3 className="text-xl font-bold mb-3">Browse Courses</h3>
                <p className="text-pink-100 font-medium">Explore our programmes</p>
                <div className="mt-4 w-0 group-hover:w-8 h-0.5 bg-white transition-all duration-300"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
