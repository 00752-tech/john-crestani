'use client';

import Link from 'next/link';

export default function FreeToolsPreview() {
  return (
    <div className="w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col items-center p-6 relative overflow-hidden">
      {/* FREE Tag */}
      <div className="absolute top-6 right-6 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow-sm uppercase tracking-widest select-none">
        Free Resource
      </div>

      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
        Free Tools to Maximize Your Affiliate &amp; Online Business Growth
      </h2>

      {/* Introduction Paragraph */}
      <p className="text-gray-200 text-base md:text-lg max-w-2xl text-center mb-7">
        Ready to optimize your campaigns and track your potential? We’ve built a suite of free, powerful calculators and
        resources to help affiliate marketers and online entrepreneurs like you make smarter decisions. Use them today, on us!
      </p>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-4">
        {/* Tool 1 */}
        <a
          href="/affiliate-marketing-tools/earnings-calculator"
          className="block p-5 bg-black rounded-lg shadow border border-yellow-400 hover:border-yellow-300 hover:shadow-lg transition"
        >
          <div className="text-lg text-yellow-400 mb-2">Affiliate Earnings Calculator</div>
          <p className="text-gray-300 text-sm">
            Estimate your potential commissions based on traffic and payout rates before promoting an offer.
          </p>
        </a>

        {/* Tool 2 */}
        <a
          href="/affiliate-marketing-tools/youtube-title-generator"
          className="block p-5 bg-black rounded-lg shadow border border-yellow-400 hover:border-yellow-300 hover:shadow-lg transition"
        >
          <div className="text-lg text-yellow-400 mb-2">YouTube Title Generator</div>
          <p className="text-gray-300 text-sm">
            Quickly generate scroll-stopping titles with proven viral hooks for your content.
          </p>
        </a>

        {/* You can add more tools here following the same structure */}
      </div>

      {/* CTA Button */}
      <Link
        href="/affiliate-marketing-tools"
        className="mt-3 bg-yellow-400 text-black font-semibold py-2 px-8 rounded-full text-base transition hover:bg-yellow-300 hover:text-black shadow-lg"
      >
        Explore All Free Tools Now
      </Link>

      {/* Supporting Text */}
      <p className="text-xs text-gray-400 mt-2 text-center max-w-md">
        These tools are completely free—no signup required. Ideal for affiliate marketers, YouTubers, and solopreneurs.
      </p>
    </div>
  );
}
