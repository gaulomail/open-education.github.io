
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="relative bg-white/95 backdrop-blur-sm border-b border-purple-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="inline-flex items-center gap-4 hover:opacity-90 transition-opacity"
                aria-label="Open Education AI Home"
              >
                <img 
                  src="/lovable-uploads/842cfd68-aa1d-47ac-a40b-51f239c78f49.png" 
                  alt="Open Education AI Logo"
                  className="h-28 w-28 object-contain"
                  loading="eager"
                />
                {/* Text removed as per request */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/courses" className="nav-link">Courses</Link>
              <Link to="/programmes" className="nav-link">Programmes</Link>
              <Link to="/qualifications" className="nav-link">Qualifications</Link>
              <Link to="/masterclasses" className="nav-link">Masterclasses</Link>
              <Link to="/corporate-training" className="nav-link">Corporate Training</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link 
                to="/getting-started" 
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <Link 
              to="/" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/programmes" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Programmes
            </Link>
            <Link 
              to="/qualifications" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Qualifications
            </Link>
            <Link 
              to="/masterclasses" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Masterclasses
            </Link>
            <Link 
              to="/corporate-training" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Corporate Training
            </Link>
            <Link 
              to="/contact" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/getting-started" 
              className="block px-3 py-2 text-purple-600 hover:text-purple-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
