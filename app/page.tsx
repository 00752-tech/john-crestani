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
import Stats from '@/components/Stats';
import WebinarInvite from '@/components/WebinarInvite';
import RelatedTools from '@/components/RelatedTools';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });
const DynamicFreeTools = dynamic(() => import('@/components/FreeTools'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "url": pageUrl,
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
        "name": pageTitle,
        "provider": {
          "@type": "Organization",
          "name": "John Crestani",
          "url": pageUrl,
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
          "url": pageUrl
        }
      },
      {
        "@type": "Service",
        "name": pageTitle,
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
      "name": pageTitle
    },
    "datePublished": "2025-07-08",
    "dateModified": "2025-07-08"
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Marketers Club 2025 Complete Offer",
    "image": "https://johncrestani.me/the-ai-marketers-club-offer.png",
    "description": "Everything included with your AI Marketers Club membership: faceless content system, viral prompts, daily checklist, website builder, affiliate offers, and more for just $27.",
    "brand": {
      "@type": "Brand",
      "name": "John Crestani"
    },
    "offers": {
      "@type": "Offer",
      "url": pageUrl,
      "priceCurrency": "USD",
      "price": "27.00",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      </Head>

      <Hero />
      <Stats />

      {/* Immediate Section Below Hero & Stats */}
      <section className="w-full flex justify-center bg-black py-12 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col items-center p-8 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-400 mb-4">
            Still Worried About AI Taking Your Job? <span className="text-white">Here&apos;s Your Solution.</span>
          </h2>
          <p className="text-gray-200 text-lg md:text-xl text-center leading-relaxed max-w-2xl">
            The future of work is changing rapidly. While many <span className="font-semibold text-yellow-400">fear AI&apos;s impact</span>, a select few are already <span className="font-semibold text-green-400">harnessing its power</span> to create new income streams online. <span className="font-semibold text-white">John Crestani</span>, a proven leader in online wealth creation, has distilled everything you need into a <span className="font-semibold text-pink-400">simple, step-by-step system</span>, designed specifically for people like <span className="font-semibold text-white">YOU</span> – <span className="italic text-gray-300">no prior tech expertise required</span>.
          </p>
        </div>
      </section>

      {/* Modern, Breathable Intro & Benefits Section */}
      <section className="w-full flex justify-center bg-black py-16 px-4">
        <div className="w-full max-w-5xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row md:space-x-12 p-8 md:p-14 space-y-12 md:space-y-0">
          {/* Left: Why This Faceless System Is Blowing Up */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">
              Why This Faceless System Is Blowing Up in 2025
            </h2>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
              The $27 Shortcut to Faceless Affiliate Income
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              <span className="font-semibold text-white">Who’s Behind This?</span> John Crestani. Over 50,000+ students. $20M+ in affiliate commissions. And now? A brand-new system for 2025 that’s built for speed, simplicity, and scale.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="font-semibold text-white">AI Marketers Club</span> is his latest creation—a 3-hour crash course that shows you how to use AI to post faceless content that gets clicks, builds momentum, and earns commissions… in just <span className="text-pink-400 font-semibold">7 minutes a day</span>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-5 text-green-400 mr-2 mt-1">✔️</span>
                <span className="text-gray-200"><b>No Face Needed:</b> Stay anonymous while earning commissions.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-green-400 mr-2 mt-1">✔️</span>
                <span className="text-gray-200"><b>AI Does the Heavy Lifting:</b> Let smart tools create, post, and optimize your content.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-green-400 mr-2 mt-1">✔️</span>
                <span className="text-gray-200"><b>7 Minutes a Day:</b> Perfect for busy schedules—just copy, paste, and profit.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-green-400 mr-2 mt-1">✔️</span>
                <span className="text-gray-200"><b>Beginner Friendly:</b> No tech skills or experience required.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-green-400 mr-2 mt-1">✔️</span>
                <span className="text-gray-200"><b>$27 Launch Price:</b> Get in before the price jumps to $297!</span>
              </li>
            </ul>
          </div>
          {/* Right: Inside the AI Marketers Club */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
              Tomorrow’s Income, Today: Inside the AI Marketers Club
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This isn’t just another affiliate course—it’s a plug-and-play system built for 2025’s creator economy. The AI Marketers Club gives you the tools, prompts, and strategy to launch faceless content that earns—without burnout or complexity.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-5 text-pink-400 mr-2 mt-1">🚀</span>
                <span className="text-gray-200"><b>F.I.R. Prompting Formula</b> for viral-style content</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-pink-400 mr-2 mt-1">🚀</span>
                <span className="text-gray-200"><b>7-Minute Action Checklist</b> for daily monetized posts</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-pink-400 mr-2 mt-1">🚀</span>
                <span className="text-gray-200"><b>Free drag-and-drop website</b> with SSL + domain</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 text-pink-400 mr-2 mt-1">🚀</span>
                <span className="text-gray-200"><b>Access to $821/click affiliate offers</b> with 75% payouts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Offer Visual Section with Black Outer, Grey Card */}
      <section className="w-full bg-black flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-green-400 tracking-tight">
            Here’s Everything You Get for $27
          </h3>
          <p className="text-gray-300 text-center max-w-2xl mb-8">
            Unlock the full AI Marketers Club system—step-by-step video training, viral content prompts, daily action checklists, a ready-to-launch website, and access to the highest-paying affiliate offers. <span className="text-pink-400 font-semibold">All for a one-time $27.</span>
          </p>
          <div
            className="w-full flex justify-center transition-transform duration-500 hover:scale-105"
            style={{
              background: "#f3f4f6", // light grey card
              borderRadius: "1.5rem",
              boxShadow: "0 8px 32px 0 rgba(236,72,153,0.10)",
              padding: "2rem 0",
              border: "1px solid #e5e7eb"
            }}
          >
            <Image
              src="/the-ai-marketers-club-offer.png"
              alt="AI Marketers Club 2025 Complete Offer – all bonuses and modules included for $27"
              width={900}
