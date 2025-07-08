import ClientLinkCTROptimizer from './ClientLinkCTROptimizer'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Free CTR Optimization Tool for Affiliate Marketers',
  description:
    'Increase link clicks by 200%+ with data-driven optimization. Test button colors, text variants & placements. Essential tool for higher conversions.',
}

export default function AffiliateLinkCTROptimizerPage() {
  return (
    <>
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Affiliate Link CTR Optimizer",
          "description": "Free calculator that estimates affiliate click-through rate (CTR) improvements based on link placement, anchor relevance, and audience targeting.",
          "url": "https://johncrestani.me/affiliate-marketing-tools/link-ctr-optimizer",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "isAccessibleForFree": true,
          "creator": {
            "@type": "Person",
            "name": "John Crestani",
            "sameAs": [
              "https://linkedin.com/in/johncrestani",
              "https://twitter.com/johncrestani",
              "https://instagram.com/johncrestani"
            ]
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />

      <ClientLinkCTROptimizer />
    </>
  )
}
