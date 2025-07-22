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
  const pageTitle = 'AI Marketers Club $27: John Crestani&apos;s 2025 Faceless AI System';

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
          content="Discover John Crestani&apos;s AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      </Head>

      {/* Your styles here... */}

      <ExitIntentPopup />
      <Hero />

      {/* Your sections (value props, stats, bonuses, etc.) */}

      {/* Testimonials section uses Image: */}
      <section>
        <Image
          src="/bio_image_jason_vientos.webp"
          alt="Jason Vientos – Experienced Affiliate"
          width={220}
          height={220}
          className="rounded-full shadow-lg object-cover border-2 border-yellow-400"
          priority
          style={{ maxWidth: '180px', height: 'auto' }}
        />
        {/* More testimonial content */}
      </section>

      {/* AI Growth section uses Image */}
      <section>
        <Image
          src="/ai-usage-chart.jpg"
          alt="AI Growth In Focus – Global AI Market Infographic"
          width={700}
          height={1100}
          className="rounded-2xl shadow-xl border-2 border-pink-400 mb-8 bg-white"
          priority={false}
        />
        {/* More content */}
      </section>

      {/* FAQ, CTA, DynamicShareButtons used */}
      <FAQ />
      <CTA />
      <div className="container mx-auto px-4 py-8">
        <DynamicShareButtons url={pageUrl} title={pageTitle} />
      </div>

      <Footer />
    </main>
  );
}
