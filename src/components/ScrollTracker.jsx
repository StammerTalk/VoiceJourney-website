import { useEffect } from 'react'
import { trackScrollDepth } from '../utils/analytics'

const ScrollTracker = () => {
  useEffect(() => {
    const trackedDepths = new Set()
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)
      
      // Track at 25%, 50%, 75%, and 100% scroll depths
      const depths = [25, 50, 75, 100]
      
      depths.forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          trackScrollDepth(depth)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return null
}

export default ScrollTracker
