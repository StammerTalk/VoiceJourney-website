import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView, GA_MEASUREMENT_ID } from '../utils/analytics'

const GoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page views on route changes
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      trackPageView(window.location.href, document.title)
    }
  }, [location])

  // This component doesn't render anything visible
  return null
}

export default GoogleAnalytics
