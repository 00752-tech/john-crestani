'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ctaAffiliateLink = "https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro";

const CtaLink = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
    {children}
  </Link>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <main className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          Where is Super Affiliate System Pro in 2025?
          <br />Get Exclusive Access + Secret Discount
        </motion.h1>

        <motion.p className="text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          John Crestani's legendary program is now in AI Marketing Club. Get $800 SAS Pro discount!
        </motion.p>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Start with $27</h2>
          <div className="text-center">
            <CtaLink href={ctaAffiliateLink}>Get AI Marketing Club →</CtaLink>
          </div>
        </section>

        <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <CtaLink href={ctaAffiliateLink}>Start Your Journey Now →</CtaLink>
        </motion.div>
      </main>
    </div>
  );
}
