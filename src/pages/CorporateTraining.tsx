import { Link } from 'react-router-dom';
import { Building, CheckCircle, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button'; // Added Button import

const corporateTrainingData = [
  {
    category: "Strategic Management",
    courses: ["Strategic Management", "Market Services and Concepts for Internal Customers", "Managing People Performance", "Preparing Budgets and Financial Plans", "Managing Budgets and Financial Plans", "Ensuring a Safe Workplace", "Recruit, Select and Induct Staff", "Contribute to Strategic Direction", "Development and Implementation of Strategic Plans", "Manage Innovation and Continuous Improvement", "Risk Mitigation"],
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
  },
  {
    category: "Entrepreneurship",
    courses: ["Small Business Management Enterprise", "Monitor and Manage Business Operations", "Manage Finances", "Manage a Small Team"],
    imageUrl: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
  },
  {
    category: "Management and Leadership",
    courses: ["Frontline Management", "Essential Management Techniques", "Project Management", "Small and Micro Business", "Lead a Sales Team", "Leadership in the Workplace", "Lead Work Teams", "Team Effectiveness", "Manage Conflict, Stress and Time", "Manage Sales Performance"],
    imageUrl: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
  },
  {
    category: "Marketing and Business Development",
    courses: ["Digital Marketing using AI", "Introduction to Advertising", "Marketing", "Sales Management", "PR Skills", "Basic Selling Skills", "Market Research", "Essential Selling Skills", "Identifying Market Opportunities", "Profiling the Market", "Consumer Behaviour", "Analyse Market Data", "Forecast Market and Business Needs", "Implement and Monitor Marketing Activities"],
    imageUrl: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
  }
];

const highDemandCoursesData = [
  "SEO", "Project Management", "Occupational Health and Safety", "Digital Marketing", 
  "Accounting and Bookkeeping", "Customer Relationship Building", "Cryptocurrency and Blockchain", 
  "Graphic Design", "Copywriting", "Sales Management"
];

const CorporateTraining = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: "url('https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-purple-300 font-bold">Corporate Training</span> Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Empower your workforce with our tailored AI and business development programmes.
          </p>
        </div>
      </section>

      {/* Corporate Training Categories Section */}
      <section className="py-20 bg-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Categories</h2>
            <p className="text-xl text-gray-700">Comprehensive business training solutions for your team.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {corporateTrainingData.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1 transition-all duration-300 ease-out" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={category.imageUrl} alt={category.category} className="w-full h-56 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <Building className="w-7 h-7 text-purple-600 mr-3 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid gap-2 text-sm text-gray-700 flex-grow">
                    {category.courses.slice(0, 7).map((course, courseIndex) => ( // Show first 7 courses
                      <div key={courseIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                    {category.courses.length > 7 && (
                      <div className="flex items-start">
                        <span className="text-gray-500 ml-7">... and more</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700">
                        Enquire About {category.category}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Demand Courses Section */}
      <section className="py-20 bg-gray-50 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">High Demand Corporate Courses</h2>
            <p className="text-xl text-gray-700">Most popular training programmes to upskill your teams.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {highDemandCoursesData.map((course, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-xl hover:shadow-purple-500/15 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-center justify-center aspect-square animate-in fade-in zoom-in-95 duration-500 ease-out" style={{ animationDelay: `${index * 50}ms` }}>
                <Zap className="w-8 h-8 text-purple-600 mb-3" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CorporateTraining;
