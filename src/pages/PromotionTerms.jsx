import React from 'react';
import { Link } from 'react-router-dom';

const PromotionTerms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Promotion Terms</h1>
      <div className="mb-8">
        <Link to="/" className="text-primary hover:text-secondary transition-colors">
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">General Terms for Promotions</h2>
        <p className="mb-4">
          These terms apply to all promotions, discounts, and special offers ("Promotions") provided by Voice Journey 
          unless otherwise specified in the specific promotion's terms.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Eligibility</h2>
        <p className="mb-4">
          Unless otherwise stated:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Promotions are available to all Voice Journey users with a valid account</li>
          <li className="mb-2">Employees of Voice Journey and their immediate family members are not eligible to participate</li>
          <li className="mb-2">We reserve the right to verify eligibility and to adjudicate any dispute at our sole discretion</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Bundle Discount</h2>
        <p className="mb-4">
          The "Complete Bundle" offer of all 6 template packs for $8.99 (regular value $11.94):
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Is a permanent bundle price, not a limited-time promotion</li>
          <li className="mb-2">Cannot be combined with other discounts or promotional codes</li>
          <li className="mb-2">Applies only to the one-time purchase of all 6 packs together</li>
          <li className="mb-2">If you have previously purchased individual packs, the bundle price is not available for remaining packs</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Promotional Codes</h2>
        <p className="mb-4">
          For any promotional codes offered:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Each code has a specified expiration date after which it will no longer be valid</li>
          <li className="mb-2">Codes cannot be combined with other offers, discounts, or promotions</li>
          <li className="mb-2">Codes are non-transferable and cannot be exchanged for cash value</li>
          <li className="mb-2">We reserve the right to modify or cancel promotional codes at any time</li>
          <li className="mb-2">Use of promotional codes must comply with these terms and our Terms and Conditions</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Limited-Time Promotions</h2>
        <p className="mb-4">
          For temporary sales and special offers:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">All promotions are valid for the specified time period only</li>
          <li className="mb-2">All purchases made during the promotion period will be honored at the promotional price</li>
          <li className="mb-2">Time zones for start/end times are specifically stated in each promotion</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Modification and Termination</h2>
        <p className="mb-4">
          Voice Journey reserves the right to modify, suspend, or terminate any promotion or these Promotion Terms at any 
          time without prior notice. This will not affect purchases made prior to such action.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our promotion terms, please contact us at:
          <br />
          <a href="mailto:contact@voicejourneyapp.com" className="text-primary hover:text-secondary">
            contact@voicejourneyapp.com
          </a>
        </p>
        
        <p className="mt-8 text-sm text-light">Last Updated: April 2025</p>
      </div>
    </div>
  );
};

export default PromotionTerms;