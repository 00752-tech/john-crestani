'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ✅ TYPE FIXED
type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
};

const CtaLink: React.FC<CtaLinkProps> = ({ href, children }) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
  >
    {children}
  </Link>
);

export default function HomePage() {
  const ctaAffiliateLink: string = "https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro";

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <main className="max-w-4xl mx-auto">
        {/* HERO */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Where is Super Affiliate System Pro in 2025?
          <br />
          Get Exclusive Access + a Secret Discount to John Crestani's AI Marketing Club
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-10 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Searching for Super Affiliate System Pro? John Crestani's legendary program is now exclusively inside the AI Marketing Club. 
          Discover 2025 access, what's new, and how to get an <strong>$800 SAS Pro discount!</strong>
        </motion.p>

        {/* CTA SECTION */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Evolution of SAS Pro
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start with AI Marketing Club today for just <strong>$27</strong>, gaining AI-powered marketing tools + <strong>$800 SAS Pro discount</strong>.
          </p>
          <div className="space-y-4">
            <CtaLink href={ctaAffiliateLink}>Get Started with AI Marketing Club →</CtaLink>
            <p className="text-gray-400 text-sm mt-2">Limited time: $27 → SAS Pro upgrade $197 (was $997)</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <CtaLink href={ctaAffiliateLink}>Start Your AI Affiliate Journey Now →</CtaLink>
        </motion.div>

        {/* AFFILIATE DISCLOSURE */}
        <footer className="mt-16 pt-12 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>This site uses affiliate links. <Link href="/affiliate-disclosure" className="text-pink-400 hover:text-pink-300">Learn more</Link></p>
        </footer>
      </main>
    </div>
  );
}
