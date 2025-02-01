import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Stats from '@/components/Stats'
import WebinarInvite from '@/components/WebinarInvite'
import RelatedTools from '@/components/RelatedTools'

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false })
const DynamicFreeTools = dynamic(() => import('@/components/FreeTools'), { ssr: false })
const DynamicFeaturedTool = dynamic(() => import('@/components/FeaturedTool'), { ssr: false })

export default function Home() {
  const pageUrl = 'https://johncrestani.me'
  const pageTitle = 'John Crestani\'s Super Affiliate System Pro 2025 - Master Affiliate Marketing'

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFeaturedTool />
      </Suspense>
      <Features />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFreeTools />
      </Suspense>
      <WebinarInvite />
      <Testimonials />
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
  )
}
