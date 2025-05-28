import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GettingStarted = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 pt-24 sm:pt-32">
        <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-purple-200/30 relative overflow-hidden">
          <Link 
            to="/"
            className="absolute top-6 left-6 text-purple-600 hover:text-purple-700 transition-colors z-20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background:'radial-gradient(circle at 70% 30%, rgba(160,132,232,0.05) 0%, rgba(200,200,240,0.1) 100%)'}} />
          
          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="bg-white rounded-full p-3 shadow-md mb-4 border border-gray-200">
              <img 
                src="/lovable-uploads/22c97659-45cd-46b2-afd5-d63b15cb5554.png" 
                alt="Open Education AI" 
                className="h-12 w-12 object-contain" 
              />
            </div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center drop-shadow">Get Started with Open Education AI</h1>
            <p className="text-purple-600 text-center mb-2">Secure your spot and unlock premium AI learning content. Start your transformation today.</p>
          </div>

          {success ? (
            <div className="flex flex-col items-center py-12 relative z-10">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-purple-700">Welcome to Open Education AI!</h2>
              <p className="text-purple-600 text-center mb-6">Thank you for joining us. You now have access to all premium content and programmes.</p>
              <Link to="/">
                <Button className="bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 px-8 py-3 text-base">
                  Explore Programmes
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <Label htmlFor="name" className="text-purple-700">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  placeholder="Enter your full name" 
                  className="mt-2 bg-gray-50/80 text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-purple-700">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="Enter your email" 
                  className="mt-2 bg-gray-50/80 text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-purple-700">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  placeholder="+27 XX XXX XXXX" 
                  className="mt-2 bg-gray-50/80 text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm"
                />
              </div>
              
              <div>
                <Label htmlFor="course" className="text-purple-700">Interested Course</Label>
                <select 
                  id="course" 
                  name="course" 
                  required 
                  className="mt-2 w-full px-3 py-2 bg-gray-50/80 text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm"
                >
                  <option value="">Select a course</option>
                  <option value="ai-fundamentals">AI Fundamentals - R2,999</option>
                  <option value="machine-learning">Machine Learning Expert - R5,999</option>
                  <option value="ai-ethics">AI Ethics & Governance - R3,999</option>
                  <option value="corporate-training">Corporate Training Solutions</option>
                </select>
              </div>

              <div className="text-sm text-purple-700 bg-purple-100/50 p-4 rounded-lg border border-purple-200/30">
                <p className="mb-2">💡 <strong>What happens next?</strong></p>
                <ul className="space-y-1 text-xs">
                  <li>• Our team will contact you within 24 hours</li>
                  <li>• We'll help you choose the perfect AI learning path</li>
                  <li>• Access to premium content and programmes</li>
                  <li>• 24/7 support throughout your learning journey</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg mt-4"
              >
                Start My AI Journey
              </Button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GettingStarted;
