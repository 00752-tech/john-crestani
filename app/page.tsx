'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WebinarInvite from '@/components/WebinarInvite';
import SkepticismSection from '@/components/SkepticismSection';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

  const schema = { /* your schema here */ };
  const offerSchema = { /* your offer schema here */ };

  const handleBonusCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      'https://53f01qeukb6sel3b3j5a6o5l3s.hop.clickbank.net/?&traffic_source=ai_marketers_toolkit_cta',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Discover John Crestani's AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        />
      </Head>

      <style jsx global>{`
        .cta-main {
          background-image: linear-gradient(241deg, #FFD600, #F59E42);
          color: #101010;
          font-weight: 500;
          font-size: 1.22rem;
          letter-spacing: 0.01em;
          padding: 0.95rem 2.6rem;
          border-radius: 9999px;
          box-shadow: 0 4px 24px rgba(250, 204, 21, 0.12);
          transition: none;
          border: none;
          outline: none;
          cursor: default !important;
          text-decoration: none !important;
          user-select: none;
        }
        .cta-main:hover,
        .cta-main:active,
        .cta-main:focus,
        .cta-main:visited {
          background-image: linear-gradient(241deg, #FFD600, #F59E42);
          color: #101010;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(250, 204, 21, 0.12);
          cursor: default !important;
        }
        .no-hover:hover,
        .no-hover:focus {
          background-image: none !important;
          box-shadow: none !important;
          cursor: pointer !important;
          color: #101010 !important;
        }
        .jason-cta {
          background-color: #FFD600;
          color: #101010;
          font-weight: 600;
          padding: 0.65rem 1.8rem;
          border-radius: 9999px;
          box-shadow: 0 4px 24px rgba(250, 204, 21, 0.15);
          user-select: none;
          transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          border: none;
          outline: none;
        }
        .jason-cta:hover {
          background-color: #F7B600;
          box-shadow: 0 6px 28px rgba(250, 204, 21, 0.25);
          color: #101010;
          cursor: pointer;
        }
        .jason-cta:focus,
        .jason-cta:active {
          background-color: #c89a00;
          box-shadow: 0 0 8px 2px #f8d54d;
          color: #101010;
        }
      `}</style>

      <ExitIntentPopup />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="w-full flex justify-center bg-black py-16 px-4">
        <div className="w-full max-w-5xl text-center">
          {/* Your About Content Here */}
          <h2 className="text-3xl font-bold mb-4 text-white">About John Crestani’s AI Marketing Club</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {/* Add your about intro content focused on your mission, credibility, and user benefits */}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full flex justify-center bg-gray-900 py-16 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Your Features Content Here */}
          {/* Sample feature box */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Feature One</h3>
            <p className="text-gray-400">Description of the feature and how it adds value.</p>
          </div>
          {/* Repeat for other features */}
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="w-full flex justify-center bg-black py-16 px-4">
        <div className="w-full max-w-6xl">
          {/* You can either embed the Tools component here or list tools with proper UI */}
          {/* Placeholder */}
          <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Free AI-Powered Tools & Calculators</h2>
          {/* Include or link to your tools grid/list */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full flex justify-center bg-gray-900 py-16 px-4">
        <div className="w-full max-w-5xl">
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full flex justify-center bg-black py-16 px-4">
        <div className="w-full max-w-5xl">
          <FAQ />
        </div>
      </section>

      {/* Contact / Community Section */}
      <section id="contact" className="w-full flex justify-center bg-gray-900 py-16 px-4">
        <div className="w-full max-w-5xl text-center text-gray-300">
          {/* Add contact info, newsletter signup or CTA */}
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p>Contact us at <a href="mailto:info@johncrestani.me" className="text-yellow-400 underline">info@johncrestani.me</a></p>
        </div>
      </section>

      <CTA />

      <div className="container mx-auto px-4 py-8">
        <DynamicShareButtons url={pageUrl} title={pageTitle} />
      </div>

      <Footer />
    </main>
  );
}
