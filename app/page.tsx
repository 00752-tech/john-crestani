'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { motion } from "framer-motion";
import Link from "next/link";

// All your components (alphabetical order)
import CTA from '@/components/CTA';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SkepticismSection from '@/components/SkepticismSection';
import Testimonials from '@/components/Testimonials';
import WebinarInvite from '@/components/WebinarInvite';

// Dynamic imports last
const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

// Constants
const ctaAffiliateLink = "https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro";
const pageUrl = 'https://johncrestani.me';
const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

// Small components
const CtaLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
  >
    {children}
  </Link>
);

const Section = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16 max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="prose prose-lg max-w-none text-gray-200 leading-relaxed">
      {content}
    </div>
  </motion.section>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    whileInView={{ opacity: 1, height: "auto" }}
    viewport={{ once: true }}
    className="mb-6 border border-gray-800 rounded-xl p-6 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300"
  >
    <h3 className="text-xl font-semibold mb-3 text-white">{question}</h3>
    <p className="text-gray-300 leading-relaxed">{answer}</p>
  </motion.div>
);

// CTA handler
const handleBonusCta = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  window.open(
    'https://53f01qeukb6sel3b3j5a6o5l3s.hop.clickbank.net/?&traffic_source=ai_marketers_toolkit_cta',
    '_blank',
    'noopener,noreferrer'
  );
};

// MAIN COMPONENT - Copy everything below this line
export default function WhereIsSASPro2025() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Discover John Crestani's AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
        />
      </Head>
      
      <main className="flex flex-col min-h-screen bg-black overflow-hidden">
        <style jsx global>{`
          body { font-family: 'Poppins', sans-serif; }
          .cta-main {
            background-image: linear-gradient(241deg, #FFD600, #F59E42);
            color: #101010; font-weight: 500; font-size: 1.22rem;
            padding: 0.95rem 2.6rem; border-radius: 9999px;
            box-shadow: 0 4px 24px rgba(250, 204, 21, 0.12);
            transition: none; border: none; cursor: default;
          }
          .jason-cta {
            background-color: #FFD600; color: #101010; font-weight: 600;
            padding: 0.65rem 1.8rem; border-radius: 9999px;
            box-shadow: 0 4px 24px rgba(250, 204, 21, 0.15);
          }
          .jason-cta:hover { background-color: #F7B600; box-shadow: 0 6px 28px rgba(250, 204, 21, 0.25); }
        `}</style>

        <ExitIntentPopup />
        <Hero />
        
        {/* Value Props Section */}
        <section className="w-full flex justify-center bg-black py-8 px-4">
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {/* Value props content */}
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-b border-gray-800">
          <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            {/* Stats content */}
          </div>
        </section>

        {/* Bonus CTA */}
        <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
          <div className="w-full max-w-5xl flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 tracking-tight">
              Seize Control: Unlock Your <span className="text-white">AI Marketer&apos;s Toolkit</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
              Enroll today and activate these powerful bonuses—designed to remove uncertainty and accelerate your path to predictable income.
            </p>
            <button className="cta-main mt-10" onClick={handleBonusCta}>
              YES! Secure My AI Marketers Club Access! →
            </button>
          </div>
        </section>

        <Testimonials />
        <SkepticismSection />
        
        <section className="w-full flex justify-center bg-black py-10 px-4">
          {/* Updated testimonial */}
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <div id="john-video">
            <WebinarInvite />
          </div>
        </Suspense>

        <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center text-center">
          {/* AI Growth content */}
        </section>

        <FAQ />
        <CTA />
        
        <div className="container mx-auto px-4 py-8">
          <DynamicShareButtons url={pageUrl} title={pageTitle} />
        </div>
        <Footer />
      </main>

      {/* NEW LANDING PAGE CONTENT */}
      <article className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
        <main className="max-w-4xl mx-auto">
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
            Discover 2025 access and get an <strong>$800 SAS Pro discount!</strong>
          </motion.p>

          {/* Sections */}
          <Section title="The Evolution of SAS Pro" content={
            <>
              <p>For years, <strong>Super Affiliate System Pro</strong> (SAS Pro) was John Crestani's flagship training on generating income through paid ads.</p>
              <p className="mt-4">To empower affiliates for the AI era, John created the <strong>AI Marketing Club</strong>—your launcher to the future of affiliate success.</p>
              <p className="mt-4">Start with AI Marketing Club today for just <strong>$27</strong>.</p>
              <div className="text-center mt-6">
                <CtaLink href={ctaAffiliateLink}>Get Started with AI Marketing Club</CtaLink>
              </div>
            </>
          } />

          <Section title="Unlocking SAS Pro ($800 OFF)" content={
            <>
              <p>Once inside AI Marketing Club, unlock an exclusive <strong>$800 discount</strong> on SAS Pro. Upgrade for only <strong>$197</strong>.</p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                <li><strong>50+ hours</strong> of paid ads training</li>
                <li>Proven strategies across Facebook, Google, YouTube</li>
                <li>Done-for-you templates and creatives</li>
              </ul>
              <div className="text-center mt-6">
                <CtaLink href={ctaAffiliateLink}>Access SAS Pro ($800 OFF)</CtaLink>
              </div>
            </>
          } />

          <Section title="Frequently Asked Questions" content={
            <>
              <FaqItem 
                question="Is SAS Pro still relevant in 2025?" 
                answer="Absolutely. SAS Pro + AI Marketing Club gives you timeless fundamentals + modern AI advantages." 
              />
              <FaqItem 
                question="Can I buy SAS Pro standalone?" 
                answer="No, SAS Pro is exclusive to AI Marketing Club." 
              />
              <FaqItem 
                question="What's the pricing?" 
                answer="AI Marketing Club: $27. SAS Pro upgrade: $197 (was $997)." 
              />
            </>
          } />

          <motion.div 
            className="mt-12 text-center max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CtaLink href={ctaAffiliateLink}>Start Your AI Affiliate Journey Now →</CtaLink>
          </motion.div>
        </main>
      </article>
    </>
  );
}
