
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/842cfd68-aa1d-47ac-a40b-51f239c78f49.png" 
                alt="Open Education AI Logo" 
                className="h-28 w-28 object-contain filter brightness-0 invert" // Attempt to make logo appear white
              />
              {/* Optionally, add back a simple text logo if needed for dark bg
              <span className="text-xl font-bold text-purple-300 ml-3">Open Education AI</span> 
              */}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the future of AI education with industry-recognized programmes and personalized learning experiences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-5 text-white">Education</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/programmes" className="hover:text-purple-300 transition-colors">AI Programmes</Link></li>
              <li><Link to="/masterclasses" className="hover:text-purple-300 transition-colors">Masterclasses</Link></li>
              <li><Link to="/corporate-training" className="hover:text-purple-300 transition-colors">Corporate Training</Link></li>
              <li><Link to="/qualifications" className="hover:text-purple-300 transition-colors">Qualifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-5 text-white">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/contact" className="hover:text-purple-300 transition-colors">Contact Us</Link></li>
              <li><Link to="/getting-started" className="hover:text-purple-300 transition-colors">Get Started</Link></li>
              <li><a href="mailto:hello@openedai.com" className="hover:text-purple-300 transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-5 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="mailto:hello@openedai.com" className="hover:text-purple-300 transition-colors">hello@openedai.com</a></li>
              <li><a href="https://wa.me/27827813032" className="hover:text-purple-300 transition-colors">+27 82 781 3032</a></li>
              <li><a href="tel:+27100451055" className="hover:text-purple-300 transition-colors">+27 010 045 1055</a></li>
              <li className="text-gray-500">24/7 Support Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Open Education AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
