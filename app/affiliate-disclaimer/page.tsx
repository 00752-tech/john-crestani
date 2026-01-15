import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Affiliate Disclaimer | JohnCrestani.me',
  description: 'Affiliate disclosure and disclaimer for JohnCrestani.me - Understanding our affiliate relationships and compensation.',
}

export default function AffiliateDisclaimer() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Affiliate Disclaimer</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: January 1, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">FTC Disclosure</h2>
            <p>
              In accordance with the FTC guidelines, this website (JohnCrestani.me) declares that it participates in various affiliate marketing programs. As such, we may earn commissions from qualifying purchases made through our links to retailer sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Affiliate Relationships</h2>
            <p>
              We want to be completely transparent about our affiliate relationships. When you click certain links on our website and make a purchase, we may receive a commission. These affiliate relationships include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>ClickBank products and services</li>
              <li>Digital marketing tools and platforms</li>
              <li>Educational courses and training programs</li>
              <li>Software and technology solutions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Compensation Disclosure</h2>
            <p>
              The compensation received may influence the advertising content, topics, or posts made on this website. However, we only recommend products or services that we believe will add value to our readers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Editorial Integrity</h2>
            <p>
              Despite our affiliate relationships, we maintain editorial integrity by:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Providing honest and unbiased reviews</li>
              <li>Clearly distinguishing between editorial and sponsored content</li>
              <li>Only promoting products we believe in</li>
              <li>Being transparent about our affiliate relationships</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

