
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="relative bg-gray-900/95 backdrop-blur-sm border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="inline-flex items-center gap-4 hover:opacity-90 transition-opacity"
                aria-label="Open Education AI Home"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-purple-500/30">
                  <img 
                    src="/lovable-uploads/22c97659-45cd-46b2-afd5-d63b15cb5554.png" 
                    alt="Open Education AI"
                    className="h-12 w-12 drop-shadow-lg"
                    loading="eager"
                  />
                </div>
                <span className="text-xl font-bold text-white hidden sm:block tracking-tight">
                  Open Education AI
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="/" className="nav-link text-white hover:text-purple-400 focus:text-purple-400">Home</Link>
              <Link to="/certifications" className="nav-link text-white hover:text-purple-400 focus:text-purple-400">Certifications</Link>
              <Link to="/about" className="nav-link text-white hover:text-purple-400 focus:text-purple-400">About</Link>
              <Link to="/contact" className="nav-link text-white hover:text-purple-400 focus:text-purple-400">Contact</Link>
              <Link 
                to="/getting-started" 
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <Link 
              to="/" 
              className="mobile-nav-link text-white hover:text-purple-400 focus:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/certifications" 
              className="mobile-nav-link text-white hover:text-purple-400 focus:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/about" 
              className="mobile-nav-link text-white hover:text-purple-400 focus:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="mobile-nav-link text-white hover:text-purple-400 focus:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/getting-started" 
              className="block px-3 py-2 text-purple-400 hover:text-purple-300 font-medium"
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
