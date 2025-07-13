// Google Analytics 4 Configuration
// Uses the global gtag function loaded from the script tag in index.html

// Get GA4 Measurement ID from environment variables
// You can find this in your Google Analytics property settings
// It looks like: G-XXXXXXXXXX
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Initialize Google Analytics
export const initGA = () => {
  if (typeof gtag !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url, title) => {
  if (typeof gtag !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof gtag !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track user interactions
export const trackClick = (element, location) => {
  trackEvent('click', 'engagement', `${element}_${location}`)
}

// Track form submissions
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', 'engagement', formName)
}

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'engagement', `scroll_${percentage}%`)
}

// Track outbound links
export const trackOutboundLink = (url) => {
  trackEvent('outbound_link', 'engagement', url)
}
