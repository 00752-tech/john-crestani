'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const freeTools = [
    { name: "Affiliate Earnings Calculator", url: "/affiliate-marketing-tools/earnings-calculator" },
    { name: "ROAS Calculator", url: "/advertising-tools/roas-calculator" },
    { name: "Dropshipping Profit Calculator", url: "/ecommerce-tools/dropshipping-profit-calculator" },
    { name: "Influencer Earnings Calculator", url: "/influencer-marketing-tools/earnings-calculator" },
    { name: "All Free Tools", url: "/free-tools" },
  ];

  return (
    <header className="sticky top-0 w-full z-50">
      {/* Conversion-Optimized Green Banner */}
      <div
        className="top-banner w-full"
        style={{
          background: 'linear-gradient(90deg, #22c55e 0%, #a3e635 100%)',
          color: '#1a1a1a',
          textAlign: 'center',
          padding: '14px 0',
          fontWeight: 800,
          fontSize: '18px',
          boxShadow: '0 4px 12px rgba(34,197,94,0.15)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          letterSpacing: '0.01em',
          zIndex: 200,
          position: 'relative',
        }}
      >
        <span role="img" aria-label="fire">🔥</span>
        <span style={{ color: '#1a1a1a', fontWeight: 900 }}>NEW 2025 LAUNCH</span>
        <span>:</span>
        <span style={{ borderBottom: '2px dashed #22d3ee', color: '#1a1a1a' }}>$27 EARLY BIRD</span>
        <span>+ FREE WEBSITE BONUS ($297 VALUE)</span>
        <span style={{ color: '#166534', fontWeight: 900 }}>• 60-DAY GUARANTEE</span>
        <span>•</span>
        <button
          type="button"
          onClick={() => {
            window.location.href =
              'https://84c8dn52g82pdn1i9dhx9ody5g.hop.clickbank.net/?&traffic_source=hero_banner_cta';
          }}
          style={{
            background: 'linear-gradient(90deg, #16a34a 0%, #bef264 100%)',
            color: '#1a1a1a',
            padding: '6px 20px',
            borderRadius: '24px',
            marginLeft: '10px',
            fontWeight: 900,
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            boxShadow: '0 2px 10px 0 rgba(34,197,94,0.12)',
            transition: 'background 0.15s, color 0.15s',
          }}
          aria-label="Grab Discount"
        >
          GRAB DISCOUNT →
        </button>
      </div>

      <style jsx>{`
        .top-banner button:hover,
        .top-banner button:focus {
          background: linear-gradient(90deg, #bef264 0%, #16a34a 100%) !important;
          color: #166534 !important;
        }
        @media (max-width: 768px) {
          .top-banner {
            font-size: 13px !important;
            padding: 8px 0 !important;
            gap: 4px !important;
          }
          .top-banner span:nth-child(3),
          .top-banner span:nth-child(6) {
            display: none;
          }
          .top-banner button {
            font-size: 13px !important;
            padding: 4px 12px !important;
          }
        }
      `}</style>

      <nav className="bg-black bg-opacity-80 backdrop-blur-md text-white py-1">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
            <span
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-gray-400 opacity-25 mr-3"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              JC
            </span>
            <span className="sr-only">John Crestani</span>
          </Link>

          <button className="lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ul className="hidden lg:flex space-x-6 items-center">
            {["about", "features", "testimonials", "faq"].map((section) => (
              <li key={section}>
                <Link
                  href={`/#${section}`}
                  className="hover:text-pink-500 transition duration-300"
                  scroll={true}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
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
                {["about", "features", "testimonials", "faq"].map((section) => (
                  <li key={section}>
                    <Link
                      href={`/#${section}`}
                      className="block px-4 py-2 hover:text-pink-500 transition duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                ))}
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
                            setIsDropdownOpen(false);
                            setIsMobileMenuOpen(false);
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
  );
}
