'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      // For hash links, navigate to homepage first, then scroll with offset for sticky header
      router.push('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const yOffset = -80; // Adjust if your header height differs
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // For normal pages, go to route and scroll to top
      router.push(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer
      className="bg-black text-white py-8"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto">
        {/* Affiliate Disclosure - Prominent Above Footer Columns */}
        <div className="mb-8">
          <div className="bg-gray-900 p-4 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-gray-300 text-center">
              <strong className="text-pink-500">Affiliate Disclosure:</strong>{' '}
              As an affiliate, we earn from qualifying purchases. When you click our links and make purchases, we may receive commissions. This comes at no additional cost to you and helps support our work in providing valuable information and tools.{' '}
              <Link
                href="/affiliate-disclosure"
                onClick={(e) => handleScroll(e, '/affiliate-disclosure')}
              >
                <a
                  className="text-pink-500 hover:underline focus:outline-pink-500 focus:outline-2 focus:outline-offset-2"
                  aria-label="Learn more about our affiliate relationships"
                >
                  Learn more about our affiliate relationships
                </a>
              </Link>
            </p>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div
          className="grid md:grid-cols-3 gap-8"
          role="navigation"
          aria-label="Footer navigation links"
        >
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">JohnCrestani.me</h3>
            <p className="text-gray-400">Empowering affiliate marketers since 2017, now optimized for 2025 and beyond.</p>
          </div>

          {/* Middle Column: Quick Links */}
          <nav aria-label="Quick links" className="aria-hidden=false">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Tools', href: '/tools' },
              ].map(({ label, href }) => {
                const isHashLink = href.startsWith('#');
                if (isHashLink) {
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={(e) => handleScroll(e, href)}
                        className="hover:text-pink-500 transition duration-300 focus:outline-pink-500 focus:outline-2 focus:outline-offset-2"
                        aria-label={`Scroll to ${label} section`}
                      >
                        {label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={href}>
                    <Link href={href}>
                      <a
                        className="hover:text-pink-500 transition duration-300 focus:outline-pink-500 focus:outline-2 focus:outline-offset-2"
                        aria-label={`Go to ${label} page`}
                      >
                        {label}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Column: Legal */}
          <nav aria-label="Legal links">
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <a
                      onClick={(e) => handleScroll(e, href)}
                      className="hover:text-pink-500 transition duration-300 focus:outline-pink-500 focus:outline-2 focus:outline-offset-2"
                      aria-label={`Go to ${label} page`}
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <p className="text-gray-400">Contact: info@johncrestani.me</p>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; 2025 JohnCrestani.me. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
