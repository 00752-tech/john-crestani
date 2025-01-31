'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowBanner(false)
  }

  if (!showBanner || isMobile) return null

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 p-4 shadow-lg z-50"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm text-gray-300 max-w-2xl">
          We use cookies to enhance your experience and analyze our site&apos;s performance. 
          By continuing, you agree to our use of cookies. Your data helps us deliver more relevant content.
        </p>
        <div className="flex space-x-4">
          <button 
            onClick={declineCookies} 
            className="button-base transparent-button text-sm py-2 px-6"
          >
            Decline
          </button>
          <button 
            onClick={acceptCookies} 
            className="button-base red-gradient-button text-sm py-2 px-6"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  )
}
