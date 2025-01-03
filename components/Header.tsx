'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

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
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">Super Affiliate System Pro</Link>
          <ul className="flex space-x-6 items-center">
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
        </div>
      </nav>
    </header>
  )
}
