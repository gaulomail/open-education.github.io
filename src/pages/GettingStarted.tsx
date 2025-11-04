import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GettingStarted = () => {

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 pt-24 sm:pt-32">
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-purple-200/30 relative overflow-hidden">
          <Link 
            to="/"
            className="absolute top-6 left-6 text-purple-600 hover:text-purple-700 transition-colors z-20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background:'radial-gradient(circle at 70% 30%, rgba(160,132,232,0.08) 0%, rgba(200,200,240,0.15) 100%)'}} />
          
          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="bg-white rounded-full p-3 shadow-md mb-4 border border-gray-200">
              <img 
                src="/lovable-uploads/842cfd68-aa1d-47ac-a40b-51f239c78f49.png" 
                alt="Open Education AI Logo" 
                className="h-12 w-12 object-contain" 
              />
            </div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center drop-shadow">Get Started with Open Education AI</h1>
            <p className="text-purple-600 font-normal text-center mb-2">Secure your spot and unlock premium AI learning content. Start your transformation today.</p>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-3 text-purple-700">Your learning journey starts here</h2>
              <p className="text-purple-700 font-normal mb-6 max-w-xl">Access your personalised learning dashboard, track your progress, and start your next module in our learning platform.</p>
              <a href="http://openedai.org/moodle/login/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 px-8 py-3 text-base">
                  Go to Moodle Login
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GettingStarted;
