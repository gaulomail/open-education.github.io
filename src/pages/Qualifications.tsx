import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Qualifications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat text-white"
               style={{ backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black/50"></div> {/* Increased overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-purple-300 font-semibold">Qualifications</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-light mb-8 max-w-3xl mx-auto">
            Industry-recognized credentials to validate your AI expertise and advance your career.
          </p>
        </div>
      </section>

      {/* Qualifications Content Section */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Qualification Card - Can be mapped if more qualifications are added */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-8 pb-6 border-b border-gray-300">
              <GraduationCap className="w-14 h-14 md:w-16 md:h-16 text-purple-600 mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0" />
              <div className="flex-grow">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Occupational Certificate: Artificial Intelligence Software Developer</h2>
                <p className="text-md sm:text-lg text-gray-600 font-normal">NQF Level 5 | Credits: 120 (Placeholder)</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10 items-start">
              <div className="md:pr-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Purpose of the Qualification</h3>
                <p className="text-gray-700 font-normal leading-relaxed text-base sm:text-lg">
                  This qualification is designed to equip candidates with the ability to integrate and implement artificial intelligence (AI) algorithms and logic within software applications, as part of the deliverables of an Information Technology (IT) project.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                 <img 
                    src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="AI Software Developer at work"
                    className="rounded-xl shadow-lg object-cover w-full h-auto max-h-80 md:max-h-full"
                  />
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Key Learning Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-base sm:text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-normal">Interpret solution design documentation and develop an AI solution.</span>
                </li>
                <li className="flex items-start text-base sm:text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-normal">Train AI models using machine learning processes.</span>
                </li>
                <li className="flex items-start text-base sm:text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-normal">Deploy AI solutions and conduct ongoing maintenance.</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-300 text-center">
              <Link to="/getting-started">
                <Button 
                  size="lg" 
                  className="bg-purple-600 text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Enroll in this Qualification <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            {/* Add more qualifications here if needed, perhaps by mapping an array of qualification objects */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Qualifications;
