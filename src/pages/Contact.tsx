
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
          <div className="text-center animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
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
      <section className="py-20 bg-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-in fade-in slide-in-from-left-16 duration-700 ease-out delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-500/40 transition-colors">
                    <div className="bg-purple-100/50 rounded-lg p-3">
                      <div className="text-purple-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-700 font-normal hover:text-purple-600 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-normal">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-700 font-normal">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Course enrollment assistance and guidance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Technical support and learning resources
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Corporate training solutions and partnerships
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Programme verification and queries
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    General inquiries about our AI programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 animate-in fade-in slide-in-from-right-16 duration-700 ease-out delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-800 font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-800 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-800 font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-800 font-medium">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-2 w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 py-3 text-base"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-gray-50 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/27827813032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group animate-in fade-in zoom-in-95 duration-500 ease-out delay-300"
            >
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-semibold mb-2">WhatsApp Us</h3>
              <p className="text-sm font-normal opacity-90">Get instant support via WhatsApp</p>
            </a>
            
            <a
              href="mailto:hello@openedai.com"
              className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group animate-in fade-in zoom-in-95 duration-500 ease-out delay-400"
            >
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm font-normal opacity-90">Send us a detailed email inquiry</p>
            </a>
            
            <Link
              to="/programmes"
              className="bg-pink-500 hover:bg-pink-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 group animate-in fade-in zoom-in-95 duration-500 ease-out delay-500"
            >
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold mb-2">Browse Courses</h3>
              <p className="text-sm font-normal opacity-90">Explore our programmes</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
