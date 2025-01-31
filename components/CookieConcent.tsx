'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 max-w-sm bg-black bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-50"
    >
      <p className="text-xs text-gray-300 mb-3">
        We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
      </p>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={declineCookies} 
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={acceptCookies} 
          className="text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white py-1 px-3 rounded hover:from-pink-600 hover:to-purple-600 transition-colors"
        >
          Accept
        </button>
      </div>
    </motion.div>
  )
}
