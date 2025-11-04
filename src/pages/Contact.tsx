
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
      details: "+27 11 039 474",
      link: "https://wa.me/27711039474"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Office Line",
      details: "+27 11 039 474",
      link: "tel:+27711039474"
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
      <section className="relative overflow-hidden bg-purple-900">
        <div className="absolute inset-0 bg-purple-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="text-sm font-medium text-white/90">We're here to help</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-purple-100 font-normal mb-8 max-w-3xl mx-auto">
              Ready to start your AI learning journey? Contact our team for support, questions, or enrollment assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="relative bg-white rounded-xl border border-gray-200 shadow-sm">
                    {/* Gradient overlay on hover */}
                    
                    
                    <div className="relative flex items-start space-x-4 p-6">
                      <div className="bg-purple-700 rounded-lg p-3 text-white">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-2"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.details}
                            
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
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span>Course enrollment assistance and guidance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span>Technical support and learning resources</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span>Corporate training solutions and partnerships</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span>Programme verification and queries</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span>General inquiries about our AI programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              
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
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg focus:outline-none py-4 text-lg"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/27711039474" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow transition-shadow">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="text-lg font-semibold mb-1">WhatsApp Us</h3>
              <p className="text-gray-600">Get instant support via WhatsApp</p>
            </a>
            <a href="mailto:hello@openedai.com" className="block bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow transition-shadow">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold mb-1">Email Us</h3>
              <p className="text-gray-600">Send us a detailed email inquiry</p>
            </a>
            <Link to="/programmes" className="block bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow transition-shadow">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="text-lg font-semibold mb-1">Browse Courses</h3>
              <p className="text-gray-600">Explore our programmes</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
