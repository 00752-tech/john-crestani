'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import WebinarInvite from '@/components/WebinarInvite';
import RelatedTools from '@/components/RelatedTools';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });
const DynamicFreeTools = dynamic(() => import('@/components/FreeTools'), { ssr: false });
const DynamicFeaturedTool = dynamic(() => import('@/components/FeaturedTool'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Marketers Club $27: John Crestani's 2025 Faceless AI System",
    "url": "https://johncrestani.me",
    "about": [
      {
        "@type": "Person",
        "name": "John Crestani",
        "sameAs": [
          "https://www.linkedin.com/in/johncrestani",
          "https://www.instagram.com/johncrestani",
          "https://twitter.com/johncrestani"
        ]
      },
      {
        "@type": "Course",
        "name": "AI Marketers Club $27: John Crestani's 2025 Faceless AI System",
        "provider": {
          "@type": "Organization",
          "name": "John Crestani",
          "url": "https://johncrestani.me",
          "logo": "https://johncrestani.me/logo.png"
        },
        "description": "Advanced training system for affiliate marketers to scale earnings using paid traffic, video sales letters, and influencer outreach.",
        "educationalCredentialAwarded": "Affiliate Marketing Certification",
        "timeRequired": "P4W",
        "offers": {
          "@type": "Offer",
          "price": "27.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://johncrestani.me"
        }
      },
      {
        "@type": "Service",
        "name": "AI Marketers Club $27: John Crestani's 2025 Faceless AI System",
        "description": "Instant access to John's latest affiliate method with 2025 updates. No cost. No card required.",
        "provider": {
          "@type": "Person",
          "name": "John Crestani"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://johncrestani.me/free-webinar"
        }
      }
    ],
    "mainEntity": {
      "@type": "Service",
      "name": "AI Marketers Club $27: John Crestani's 2025 Faceless AI System"
    },
    "datePublished": "2025-07-08",
    "dateModified": "2025-07-08"
  };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Hero />
      <Stats />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFeaturedTool />
      </Suspense>

      {/* AI Marketers Club Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-500 text-center">
            Tomorrow’s Income, Today: Inside the AI Marketers Club
          </h2>
          <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
            This isn’t just another affiliate course—it’s a plug-and-play system built for 2025’s creator economy. The AI Marketers Club gives you the tools, prompts, and strategy to launch faceless content that earns—without burnout or complexity.
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 max-w-xl mx-auto space-y-2 text-base leading-relaxed">
            <li>F.I.R. Prompting Formula for viral-style content</li>
            <li>7-Minute Action Checklist for daily monetized posts</li>
            <li>Free drag-and-drop website with SSL + domain</li>
            <li>Access to $821/click affiliate offers with 75% payouts</li>
          </ul>
        </div>
      </section>

      {/* Old Way vs. New Way Comparison Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-green-400 tracking-tight">
          The Old Way vs. The New Way
        </h3>
        <p className="text-gray-300 text-center max-w-2xl mb-8">
          See how the AI Marketers Club flips the script on traditional online business. No more burnout, guesswork, or trading time for uncertain results—just a proven, plug-and-play system for real freedom.
        </p>
        <div
          className="w-full flex justify-center transition-transform duration-500 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #111 70%, #22c55e22 100%)",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px 0 rgba(34,197,94,0.15)",
            padding: "2rem 0"
          }}
        >
          <Image
            src="/old-vs-new-way-graphic.png"
            alt="Old Way vs New Way - AI Marketers Club Comparison"
            width={600}
            height={700}
            className="rounded-2xl shadow-xl border-2 border-pink-500"
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
          />
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFreeTools />
      </Suspense>
      <WebinarInvite />
      <Testimonials />

      {/* AI Statistics Infographic Section */}
      <div className="flex justify-center my-12 px-4">
        <Image
          src="/ai-usage-chart.jpg"
          alt="AI Statistics Infographic: Key global AI usage, adoption, and growth trends for 2025. Source: Digital Silk, June 2025."
          width={700}
          height={1100}
          className="rounded-xl shadow-xl border-2 border-pink-500 bg-white"
          loading="eager"
          priority
        />
      </div>
      <p className="text-center text-xs text-gray-400 mt-2 mb-8">
        Infographic: Digital Silk. (2025). AI statistics [Infographic]. Retrieved June 2025,{' '}
        <span className="underline">
          <a
            href="https://www.digitalsilk.com/digital-trends/ai-statistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            digitalsilk.com
          </a>
        </span>
      </p>

      <FAQ />
      <CTA />
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicShareButtons url={pageUrl} title={pageTitle} />
        </Suspense>
      </div>
      <RelatedTools currentToolUrl={pageUrl} category="affiliate" />
      <Footer />
    </main>
  );
}
