
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/22c97659-45cd-46b2-afd5-d63b15cb5554.png" 
                alt="Open Education AI Logo" 
                className="h-6 w-6 mr-2"
              />
              <span className="text-xl font-bold text-purple-300">
                Open Education AI
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Leading the future of AI education with industry-recognized certifications and personalized learning experiences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Education</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/certifications" className="hover:text-purple-400 transition-colors">AI Certifications</Link></li>
              <li><Link to="/certifications" className="hover:text-purple-400 transition-colors">Masterclasses</Link></li>
              <li><Link to="/certifications" className="hover:text-purple-400 transition-colors">Corporate Training</Link></li>
              <li><Link to="/certifications" className="hover:text-purple-400 transition-colors">Qualifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link to="/getting-started" className="hover:text-purple-400 transition-colors">Get Started</Link></li>
              <li><a href="mailto:hello@openedai.com" className="hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:hello@openedai.com" className="hover:text-purple-400 transition-colors">hello@openedai.com</a></li>
              <li><a href="https://wa.me/27827813032" className="hover:text-purple-400 transition-colors">+27 82 781 3032</a></li>
              <li><a href="tel:+27100451055" className="hover:text-purple-400 transition-colors">+27 010 045 1055</a></li>
              <li className="text-gray-400">24/7 Support Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Open Education AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
