'use client';

import Link from 'next/link';

export default function AffiliateDisclosureBar() {
  return (
    <div className="w-full z-[100] sticky top-0">
      <div className="bg-gradient-to-r from-[#232526] via-[#2596be] to-[#232526] text-white text-xs sm:text-sm flex items-center justify-center py-2 px-4 shadow-lg">
        <span>
          This site uses affiliate links.{' '}
          <Link
            href="/affiliate-disclosure"
            className="underline text-yellow-300 hover:text-yellow-400 transition font-semibold"
          >
            Learn more
          </Link>
        </span>
      </div>
    </div>
  );
}
