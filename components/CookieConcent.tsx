'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'

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
    <div className="fixed bottom-0 left-0 right-0 bg-transparent p-4 shadow-md z-50 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm text-white">
          We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of cookies.
        </p>
        <div className="flex space-x-4">
          <Button 
            className='bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-8 rounded-md text-base font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform'  
            onClick={acceptCookies} 
            variant="default"
          >
            Accept
          </Button>
          <Button 
            className='bg-white text-black py-2 px-8 rounded-md text-base font-semibold transition duration-300' 
            onClick={declineCookies} 
            variant="default"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}
