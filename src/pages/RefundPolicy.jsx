import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Refund Policy</h1>
      <div className="mb-8">
        <Link to="/" className="text-primary hover:text-secondary transition-colors">
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">No-Refund Policy for Template Packs</h2>
        <p className="mb-4">
          All purchases of template packs within the Voice Journey application are final and non-refundable. 
          This policy is in place due to the digital nature of our products.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Why We Don't Offer Refunds</h2>
        <p className="mb-4">
          Once a template pack has been purchased and delivered to your account, it cannot be returned or exchanged for the following reasons:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Template packs are digital products that cannot be "returned" once they've been delivered to your account</li>
          <li className="mb-2">The content of each template pack is clearly described before purchase</li>
          <li className="mb-2">We make significant efforts to ensure our descriptions accurately represent the content</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Preview Before Purchase</h2>
        <p className="mb-4">
          To help you make an informed decision before purchasing, we provide:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Detailed descriptions of each template pack</li>
          <li className="mb-2">Sample templates that demonstrate the type of content included</li>
          <li className="mb-2">Information about difficulty levels and scenarios covered</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Exceptions</h2>
        <p className="mb-4">
          In exceptional circumstances, such as technical issues that prevent access to purchased content, we may consider 
          refund requests on a case-by-case basis. To request assistance with technical issues, please contact our support team.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
        <p className="mb-4">
          If you experience any technical issues with your purchase or have questions about this policy, please contact us at:
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

export default RefundPolicy;