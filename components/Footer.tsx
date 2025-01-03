'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href.startsWith('#')) {
      // For hash links, first go to home page then scroll
      router.push('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      // For regular pages, push to route and scroll to top
      router.push(href)
      window.scrollTo(0, 0)
    }
  }

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">JohnCrestani.me</h3>
            <p className="text-gray-400">Empowering affiliate marketers since 2017, now optimized for 2025 and beyond.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, '#features')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleScroll(e, '#testimonials')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleScroll(e, '#faq')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  onClick={(e) => handleScroll(e, '/tools')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  onClick={(e) => handleScroll(e, '/privacy')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  onClick={(e) => handleScroll(e, '/terms')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/affiliate-disclaimer" 
                  onClick={(e) => handleScroll(e, '/affiliate-disclaimer')}
                  className="hover:text-pink-500 transition duration-300"
                >
                  Affiliate Disclaimer
                </Link>
              </li>
              <li><p className="text-gray-400">Contact: passiveincomestreaming@gmail.com</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center mb-4">
            <div className="bg-gray-900 p-4 rounded-lg max-w-3xl mx-auto mb-4">
              <p className="text-sm text-gray-300">
                <strong className="text-pink-500">Affiliate Disclosure:</strong> As an affiliate, we earn from qualifying purchases. When you click our links and make purchases, we may receive commissions. This comes at no additional cost to you and helps support our work in providing valuable information and tools. {' '}
                <Link 
                  href="/affiliate-disclaimer" 
                  onClick={(e) => handleScroll(e, '/affiliate-disclaimer')}
                  className="text-pink-500 hover:underline"
                >
                  Learn more about our affiliate relationships
                </Link>
              </p>
            </div>
          </div>
          <p className="text-center">&copy; 2025 JohnCrestani.me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
