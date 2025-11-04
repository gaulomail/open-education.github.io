
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
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
              <li><Link to="/courses" className="hover:text-purple-300 transition-colors">Courses</Link></li>
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
              <li><a href="https://wa.me/27711039474" className="hover:text-purple-300 transition-colors">WhatsApp: +27 71 103 9474</a></li>
              <li><a href="tel:+27711039474" className="hover:text-purple-300 transition-colors">Call: +27 71 103 9474</a></li>
              <li className="text-gray-500">24/7 Support Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Open Education AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
    <FloatingWhatsAppButton />
    </>
  );
};

export default Footer;
 
// Floating WhatsApp Button
// Renders when the Footer is on the page; fixed to bottom-left of the viewport
export const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/27711039474"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.38c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.88 1.23 3.08.15.2 2.12 3.23 5.14 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
        <path d="M26.7 5.3C23.9 2.5 20.1 1 16.1 1 8.3 1 1.9 7.4 1.9 15.3c0 2.5.7 4.9 2 7L2 31l8.9-2.3c2 .1 4 .3 5.2.3 7.8 0 14.2-6.4 14.2-14.2 0-4-1.5-7.8-4.6-9.5zM16.1 27.8c-1.1 0-2.3-.2-3.9-.3l-2.7-.2-5.2 1.4 1.4-5.1-.3-2.8c-1.2-2-1.8-4.1-1.8-6.4 0-6.5 5.3-11.8 11.8-11.8 3.1 0 6.1 1.2 8.3 3.4 2.2 2.2 3.5 5.2 3.5 8.3 0 6.5-5.3 11.8-11.8 11.8z"/>
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};