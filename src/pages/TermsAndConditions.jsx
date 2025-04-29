import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Terms and Conditions</h1>
      <div className="mb-8">
        <Link to="/" className="text-primary hover:text-secondary transition-colors">
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-4">
          These Terms and Conditions govern your use of the Voice Journey application ("the App") provided by Voice Journey 
          ("we," "us," or "our"). By downloading, installing, or using our App, you agree to these Terms and Conditions.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">2. License to Use</h2>
        <p className="mb-4">
          We grant you a limited, non-exclusive, non-transferable license to download, install, and use the App for your 
          personal, non-commercial use on compatible devices that you own or control.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">3. In-App Purchases</h2>
        <p className="mb-4">
          The App offers template packs available for purchase. All purchases are processed through the Apple App Store, 
          Google Play Store, or our web payment processor, depending on your device. These purchases are subject to the 
          terms and conditions of the respective platform.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">4. User Content</h2>
        <p className="mb-4">
          You retain ownership of any content you create using the App, including customized templates and recorded 
          reflections. By using the App, you grant us a non-exclusive license to store and process your content solely 
          for the purpose of providing the App's services.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">5. Privacy</h2>
        <p className="mb-4">
          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information 
          when you use the App. By using the App, you agree to the collection and use of information as described in our 
          Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">6. Intellectual Property</h2>
        <p className="mb-4">
          The App, including its content, features, and functionality, is owned by Voice Journey and is protected by 
          copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease 
          any part of the App without our explicit permission.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">7. Disclaimer of Warranties</h2>
        <p className="mb-4">
          The App is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the 
          App will be error-free, uninterrupted, or free of viruses or other harmful components.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">8. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by applicable law, Voice Journey shall not be liable for any indirect, incidental, 
          special, consequential, or punitive damages resulting from your use or inability to use the App.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">9. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms and Conditions at any time. We will notify you of significant changes by 
          posting the new Terms and Conditions on this page or through the App.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">10. Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction 
          in which Voice Journey operates, without regard to its conflict of law provisions.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please contact us at:
          <br />
          <a href="mailto:contact@voicejourneyapp.com" className="text-primary hover:text-secondary">
            contact@voicejourneyapp.com
          </a>
        </p>
        
        <p className="mt-8 text-sm text-light">Last Updated: July 2023</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;