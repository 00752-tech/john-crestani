import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import WebinarInvite from '@/components/WebinarInvite';
import RelatedTools from '@/components/RelatedTools';
import { motion } from "framer-motion";

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
          "price": "997.00",
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

      {/* ✅ New AI Marketers Club Section (replaces Billionaire’s Toolkit, no image) */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-pink-500 text-center"
          >
            Tomorrow’s Income, Today: Inside the AI Marketers Club
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-lg text-gray-300 mb-6 text-center max-w-2xl"
          >
            This isn’t just another affiliate course—it’s a plug-and-play system built for 2025’s creator economy. The AI Marketers Club gives you the tools, prompts, and strategy to launch faceless content that earns—without burnout or complexity.
          </motion.p>
          <ul className="list-disc list-inside text-gray-300 mb-6 max-w-xl mx-auto space-y-2 text-base leading-relaxed">
            {[
              "F.I.R. Prompting Formula for viral-style content",
              "7-Minute Action Checklist for daily monetized posts",
              "Free drag-and-drop website with SSL + domain",
              "Access to $821/click affiliate offers with 75% payouts",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2 + index * 0.1,
                }}
                className="text-gray-300 mb-2"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFreeTools />
      </Suspense>
      <WebinarInvite />
      <Testimonials />

      {/* ✅ Tony testimonial */}
      <div className="flex justify-center my-12 px-4">
        <img
          src="/images/affiliate-success-tony.png"
          alt="Tony Strange affiliate testimonial—home upgrade and poolside earnings"
          width={640}
          height={360}
          className="rounded-xl shadow-xl"
          loading="eager"
        />
      </div>

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
