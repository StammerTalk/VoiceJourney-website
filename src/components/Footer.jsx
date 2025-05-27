import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Voice Journey</h3>
            <p className="mb-4">
              Build Speaking Confidence, One Challenge at a Time.
            </p>
            <p>© {currentYear} Voice Journey. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-secondary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-secondary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="hover:text-secondary transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/promotion-terms" className="hover:text-secondary transition-colors">
                  Promotion Terms
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Try Voice Journey</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://app.voicejourneyapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Web (Preview)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Have questions?</p>
            <a 
              href="mailto:contact@voicejourneyapp.com" 
              className="hover:text-secondary transition-colors"
            >
              contact@voicejourneyapp.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center md:text-left md:flex md:justify-between">
          <p>Voice Journey App - Your Speaking Confidence Partner</p>
          <p>Designed with ❤️ for those building their voice</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;