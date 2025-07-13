// Analytics Testing Helper
// Use this in browser console to test analytics functions

import { 
  trackEvent, 
  trackClick, 
  trackFormSubmit, 
  trackOutboundLink,
  trackScrollDepth,
  GA_MEASUREMENT_ID 
} from './analytics.js';

// Test functions
window.testAnalytics = {
  // Check if GA is properly configured
  checkConfig: () => {
    console.log('GA Measurement ID:', GA_MEASUREMENT_ID);
    console.log('DataLayer:', window.dataLayer);
    console.log('gtag available:', typeof gtag !== 'undefined');
  },

  // Test custom event tracking
  testEvent: () => {
    trackEvent('test_event', 'testing', 'console_test');
    console.log('Test event sent');
  },

  // Test click tracking
  testClick: () => {
    trackClick('test_button', 'console_test');
    console.log('Test click sent');
  },

  // Test form submission tracking
  testForm: () => {
    trackFormSubmit('test_form');
    console.log('Test form submission sent');
  },

  // Test outbound link tracking
  testOutbound: () => {
    trackOutboundLink('https://example.com');
    console.log('Test outbound link sent');
  },

  // Test scroll depth tracking
  testScroll: () => {
    trackScrollDepth(50);
    console.log('Test scroll depth sent');
  },

  // Run all tests
  runAllTests: () => {
    console.log('Running all analytics tests...');
    window.testAnalytics.checkConfig();
    window.testAnalytics.testEvent();
    window.testAnalytics.testClick();
    window.testAnalytics.testForm();
    window.testAnalytics.testOutbound();
    window.testAnalytics.testScroll();
    console.log('All tests completed. Check Network tab and GA Real-time reports.');
  }
};

console.log('Analytics testing helper loaded. Use window.testAnalytics.runAllTests() to test.');
