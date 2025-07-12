import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scrolling to sections when hash changes
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure the page has loaded
    }
  }, [location.hash, location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    
    // Check if we're on the homepage
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  const navigateToPage = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          {/* Logo with fallback to text if image is missing */}
          <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
            <img 
              src="/assets/logos/navi.png" 
              alt="Voice Journey Logo" 
              className="h-10 w-auto mr-2"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <h1 className="text-xl font-bold text-primary">Voice Journey</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary">About</button></li>
            <li><button onClick={() => scrollToSection('features')} className="font-medium hover:text-primary">Features</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="font-medium hover:text-primary">Pricing</button></li>
            <li><button onClick={() => scrollToSection('blog')} className="font-medium hover:text-primary">Blog</button></li>
            {/*<li><button onClick={() => scrollToSection('screenshots')} className="font-medium hover:text-primary">Screenshots</button></li>*/}
            <li><button onClick={() => scrollToSection('contact')} className="font-medium hover:text-primary">Contact</button></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="block md:hidden text-dark z-50 relative" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav 
          className="fixed inset-0 z-40 flex items-center justify-center bg-white pt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="flex flex-col items-center space-y-6 text-lg">
            <li><button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary">About</button></li>
            <li><button onClick={() => scrollToSection('features')} className="font-medium hover:text-primary">Features</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="font-medium hover:text-primary">Pricing</button></li>
            <li><button onClick={() => scrollToSection('blog')} className="font-medium hover:text-primary">Blog</button></li>
            {/*<li><button onClick={() => scrollToSection('screenshots')} className="font-medium hover:text-primary">Screenshots</button></li>*/}
            <li><button onClick={() => scrollToSection('contact')} className="font-medium hover:text-primary">Contact</button></li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;