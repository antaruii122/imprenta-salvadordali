import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset scroll behavior to auto to ensure instant jump
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
    
    window.scrollTo(0, 0)
    
    // Restore smooth scrolling if it was set
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = originalStyle
    })
  }, [pathname])

  return null
}
