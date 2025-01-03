import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Stats from '@/components/Stats'
import WebinarInvite from '@/components/WebinarInvite'
import FreeTools from '@/components/FreeTools'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Testimonials />
      <WebinarInvite />
      <FAQ />
      <FreeTools />
      <CTA />
      <Footer />
    </div>
  )
}

