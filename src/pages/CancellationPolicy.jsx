import React from 'react';
import { Link } from 'react-router-dom';

const CancellationPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Cancellation Policy</h1>
      <div className="mb-8">
        <Link to="/" className="text-primary hover:text-secondary transition-colors">
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Template Pack Purchases</h2>
        <p className="mb-4">
          Template packs in Voice Journey are one-time purchases, not subscriptions, and therefore do not require cancellation.
          Once purchased, template packs remain accessible in your account indefinitely.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Future Subscription Features</h2>
        <p className="mb-4">
          If Voice Journey introduces subscription-based features in the future, the following cancellation terms will apply:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">You may cancel your subscription at any time through your account settings, the App Store, or Google Play Store (depending on where you subscribed)</li>
          <li className="mb-2">Cancellations will take effect at the end of your current billing cycle</li>
          <li className="mb-2">You will have access to subscription features until the end of your paid period</li>
          <li className="mb-2">No partial refunds will be issued for unused subscription time</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Auto-Renewal</h2>
        <p className="mb-4">
          For any future subscription features:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
          <li className="mb-2">You can manage auto-renewal in your account settings after purchase</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">How to Cancel</h2>
        <p className="mb-4">
          To cancel any future subscriptions:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2"><strong>iOS Users:</strong> Go to Settings → iTunes & App Store → Apple ID → View Apple ID → Subscriptions → Select Voice Journey → Cancel Subscription</li>
          <li className="mb-2"><strong>Android Users:</strong> Open Google Play Store → Menu → Subscriptions → Select Voice Journey → Cancel Subscription</li>
          <li className="mb-2"><strong>Web Users:</strong> Log in to your account → Go to Account Settings → Subscription → Cancel Subscription</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our cancellation policy, please contact us at:
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

export default CancellationPolicy;