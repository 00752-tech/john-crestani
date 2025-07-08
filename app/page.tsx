import { Suspense } from 'react';
import dynamic from 'next/dynamic';
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
  const pageTitle = 'John Crestani&rsquo;s Super Affiliate System Pro 2025: Still the Best Training?';

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Hero />
      <Stats />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFeaturedTool />
      </Suspense>

      {/* ✅ Restored Billionaire’s Toolkit section with image */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Detailed copy */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">The Billionaire’s Toolkit</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The 2025 version of Crestani's training goes beyond affiliate marketing.
              It’s a plug-n-play system for monetizing anything online using high ROI paid traffic,
              influencer outreach, and video sales letters proven to convert.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 text-base leading-relaxed">
              <li>Ad templates + copywriting walkthroughs</li>
              <li>Influencer onboarding automation</li>
              <li>Profitable niche targeting tools</li>
              <li>Pre-built landing page flows</li>
              <li>Live strategy sessions & campaign audits</li>
              <li>Exclusive affiliate network access</li>
              <li>Behavioral targeting and retargeting logic</li>
              <li>Mobile optimization and funnel cleanup</li>
            </ul>
          </div>

          {/* Right: Image visual */}
          <div className="md:w-1/2">
            <Image
              src="/billionaires-toolkit.PNG"
              alt="Billionaire’s Toolkit visual showing featured highlights"
              width={480}
              height={315}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFreeTools />
      </Suspense>
      <WebinarInvite />
      <Testimonials />

      {/* ✅ Tony Strange testimonial image */}
      <div className="flex justify-center my-12 px-4">
        <Image
          src="/images/affiliate-success-tony.png"
          alt="Tony Strange affiliate testimonial—home upgrade and poolside earnings"
          width={640}
          height={360}
          className="rounded-xl shadow-xl"
          priority
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
