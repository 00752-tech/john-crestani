import ClientCalculatorPage from './ClientCalculatorPage'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Free Tool: Calculate Affiliate Commissions Now',
  description:
    "Predict exact earnings before spending ad dollars. JohnCrestani.me's calculator helps avoid costly mistakes. Input metrics → Instant profit projection.",
}

export default function CalculatorPage() {
  return (
    <>
      {/* ✅ WebPage schema with mainEntity SoftwareApplication */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Affiliate Earnings Calculator",
          "url": "https://johncrestani.me/affiliate-marketing-tools/earnings-calculator",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Affiliate Earnings Calculator",
            "description": "Estimate your affiliate income by entering traffic, conversion, and commission numbers. Built for marketers who want clarity and ROI instantly.",
            "url": "https://johncrestani.me/affiliate-marketing-tools/earnings-calculator",
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
          }
        }}
      />

      {/* 🧭 BreadcrumbList schema */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://johncrestani.me"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Affiliate Marketing Tools",
              "item": "https://johncrestani.me/affiliate-marketing-tools"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Affiliate Earnings Calculator",
              "item": "https://johncrestani.me/affiliate-marketing-tools/earnings-calculator"
            }
          ]
        }}
      />

      {/* 💬 Single FAQPage schema block */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I calculate affiliate earnings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Input your monthly traffic, conversion rate, and commission per sale. The calculator multiplies these to estimate your monthly income."
              }
            },
            {
              "@type": "Question",
              "name": "Is this affiliate earnings calculator really free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, this calculator is completely free to use. We provide it as a valuable resource for affiliate marketers at all levels."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is the affiliate earnings calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The calculator provides estimates based on the input values you provide. Actual earnings may vary depending on factors such as niche, product quality, marketing strategy, and market conditions."
              }
            },
            {
              "@type": "Question",
              "name": "What is a good conversion rate for affiliate marketing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Conversion rates typically range from 1–5% in affiliate marketing, though this can vary significantly by niche and traffic quality. Some highly targeted campaigns can achieve even higher rates."
              }
            },
            {
              "@type": "Question",
              "name": "How can I increase my affiliate marketing earnings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can increase earnings by improving traffic quality, optimizing conversion rates, choosing higher-commission products, and implementing effective marketing strategies. John Crestani's Super Affiliate System Pro teaches all these aspects in detail."
              }
            }
          ]
        }}
      />

      <ClientCalculatorPage />
    </>
  )
}
