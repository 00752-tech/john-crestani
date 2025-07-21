'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

// Highly visible pulse: white flash with yellow core and border/shadow
function UrgentPulse() {
  return (
    <span className="relative inline-flex w-5 h-5 mr-2 align-middle">
      {/* Outer white pulse */}
      <span className="absolute inline-flex animate-ping rounded-full bg-white opacity-80 w-full h-full" />
      {/* Inner yellow core with white border for pop */}
      <span className="relative inline-flex rounded-full bg-yellow-400 w-5 h-5 border-2 border-white shadow-lg" />
    </span>
  );
}

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState('');

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const freeTools = [
    { name: "Affiliate Earnings Calculator", url: "/affiliate-marketing-tools/earnings-calculator" },
    { name: "ROAS Calculator", url: "/advertising-tools/roas-calculator" },
    { name: "Dropshipping Profit Calculator", url: "/ecommerce-tools/dropshipping-profit-calculator" },
    { name: "Influencer Earnings Calculator", url: "/influencer-marketing-tools/earnings-calculator" },
    { name: "All Free Tools", url: "/free-tools" },
  ];

  // Countdown logic
  useEffect(() => {
    // Set a target date far enough in the future for testing/demo purposes
    // In a real scenario, this would likely be fetched from a backend or config.
    const targetDate = new Date('2025-07-25T23:59:59'); // Adjusted for current time + a few days

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setCountdown('OFFER EXPIRED'); // Make this more impactful
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Affiliate link open handler
  const openAffiliateLink = () => {
    window.open(
      'https://5f257mauiyfq4w6ggp5b3s8u3m.hop.clickbank.net/?&traffic_source=banner_grab_discount_cta',
      '_blank'
    );
  };

  return (
    <header className="sticky top-0 w-full z-50">
      {/* Banner with countdown urgency */}
      <div className="w-full flex justify-center z-50">
        {/*
          TIM ASH CHANGE:
          - Changed banner background to solid black for maximum text readability.
          - Changed text color to white for optimal contrast on black.
          - Simplified the banner text to reduce cognitive load and highlight key offers.
        */}
        <div className="bg-black text-white font-semibold text-xs sm:text-sm md:text-base py-2 px-4 shadow-lg flex flex-wrap items-center gap-2 w-full justify-center">
          <UrgentPulse />
          <span>
            NEW AI CLUB: $27 EARLY BIRD + SAS PRO ($997 VALUE) FOR $197! —
            <strong className="text-yellow-400 font-extrabold ml-1">
              ENDS IN {countdown}
            </strong>
          </span>
          <UrgentPulse />

          {/*
            TIM ASH CHANGE:
            - Changed button background to yellow-400 and text to black.
              This creates extreme contrast against the new black banner background,
              making the button impossible to miss.
          */}
          <button
            onClick={openAffiliateLink}
            className="ml-3 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold shadow-lg hover:bg-white hover:text-black transition"
          >
            CLAIM YOUR $27 AI ACCESS →
          </button>
        </div>
      </div>

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
