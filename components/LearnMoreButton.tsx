'use client';

import Link from 'next/link';

export default function LearnMoreButton() {
  return (
    <Link
      href="https://www.johncrestani.com/super-affiliate-system"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 transition-colors text-center"
    >
      Learn More About Super Affiliate System Pro
    </Link>
  );
}
