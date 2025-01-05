'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const freeTools = [
    { name: "Affiliate Earnings Calculator", url: "/affiliate-marketing-tools/earnings-calculator" },
    { name: "ROAS Calculator", url: "/advertising-tools/roas-calculator" },
    { name: "Dropshipping Profit Calculator", url: "/ecommerce-tools/dropshipping-profit-calculator" },
    { name: "Influencer Earnings Calculator", url: "/influencer-marketing-tools/earnings-calculator" },
    { name: "All Free Tools", url: "/free-tools" },
  ]

  return (
    <header className="fixed w-full z-50">
      <div className="pulsing-banner text-white py-2 text-center">
        <p className="text-sm font-bold">Limited Time Offer: 50% Off Super Affiliate System Pro 2025!</p>
      </div>
      <nav className="bg-black bg-opacity-80 backdrop-blur-md text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold gradient-text">Super Affiliate System Pro</Link>
          
          <button 
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <ul className="hidden lg:flex space-x-6 items-center">
            <li>
              <Link 
                href="/#about" 
                className="hover:text-pink-500 transition duration-300"
                scroll={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#features" 
                className="hover:text-pink-500 transition duration-300"
                scroll={true}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/#testimonials" 
                className="hover:text-pink-500 transition duration-300"
                scroll={true}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                href="/#faq" 
                className="hover:text-pink-500 transition duration-300"
                scroll={true}
              >
                FAQ
              </Link>
            </li>
            <li className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center hover:text-pink-500 transition duration-300"
              >
                Free Tools
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-64 bg-gray-900 rounded-md shadow-xl z-20">
                  {freeTools.map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.url}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md">
              <ul className="flex flex-col py-4">
                <li>
                  <Link 
                    href="/#about" 
                    className="block px-4 py-2 hover:text-pink-500 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#features" 
                    className="block px-4 py-2 hover:text-pink-500 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#testimonials" 
                    className="block px-4 py-2 hover:text-pink-500 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#faq" 
                    className="block px-4 py-2 hover:text-pink-500 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={toggleDropdown}
                    className="w-full text-left px-4 py-2 flex items-center justify-between hover:text-pink-500 transition duration-300"
                  >
                    Free Tools
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="bg-gray-900">
                      {freeTools.map((tool) => (
                        <Link
                          key={tool.name}
                          href={tool.url}
                          className="block px-8 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                          onClick={() => {
                            setIsDropdownOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
