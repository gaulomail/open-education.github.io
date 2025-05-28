import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const masterclassesData = [
  {
    title: "Shaka Strategy",
    description: "Learn how to apply Shaka Zulu's legendary principles of planning, speed, and proximity to modern leadership and problem-solving, transforming your approach to strategy and execution",
    duration: "2 days",
    price: "R2,999",
    imageUrl: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "AfCFTA Definitive Guide",
    description: "Gain a comprehensive understanding of the African Continental Free Trade Area, including its agreements, protocols, and strategies to maximise economic integration and trade opportunities across Africa",
    duration: "3 days",
    price: "R3,499",
    imageUrl: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "AI and Creative Quotient 2.0",
    description: "Discover how to amplify your creative potential by integrating artificial intelligence tools and techniques, elevating both innovation and problem-solving in the digital age",
    duration: "2 days",
    price: "R2,799",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Indigenous AI Ethics for Business",
    description: "Empower leaders and teams to integrate ethical AI practices by exploring core principles, addressing bias and privacy, applying ethical frameworks, ensuring compliance, and leveraging AI responsibly for business growth and social impact",
    duration: "3 days",
    price: "R3,999",
    imageUrl: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Masterclasses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: "url('https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-purple-300 font-bold">Masterclasses</span> for In-Depth Learning
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Elevate your expertise with our specialized, intensive masterclass programmes.
          </p>
        </div>
      </section>

      {/* Masterclasses Grid Section */}
      <section className="py-20 bg-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Masterclasses</h2>
            <p className="text-xl text-gray-700">Focused sessions to deepen your knowledge and skills.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterclassesData.map((masterclass, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1 transition-all duration-300 ease-out group flex flex-col animate-in fade-in zoom-in-95 duration-500 ease-out" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={masterclass.imageUrl} alt={masterclass.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {masterclass.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 flex-grow">{masterclass.description}</p>
                  
                  <div className="space-y-2 mb-5 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                      <span>{masterclass.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold text-gray-900">{masterclass.price}</span>
                    <Button className="bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 px-6 py-2.5 text-sm">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Masterclasses;
