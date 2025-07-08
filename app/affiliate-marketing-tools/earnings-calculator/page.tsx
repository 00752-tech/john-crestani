import ClientCalculatorPage from './ClientCalculatorPage'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Affiliate ROI Calculator: Know Your Numbers Instantly',
  description:
    "Used by 6-figure SAS students. Free tool calculates commissions based on traffic & conversions. Discover your monthly earning potential in 60 seconds flat.",
}

export default function CalculatorPage() {
  return (
    <>
      {/* ✅ WebPage wrapper for stronger semantic targeting */}
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

      {/* 🧭 Breadcrumb schema to reinforce hierarchy */}
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

      {/* 💬 FAQ schema for SGE + snippet expansion */}
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
              "name": "Is the Affiliate Earnings Calculator free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, this tool is 100% free and designed to help marketers plan and optimize their earnings."
              }
            }
          ]
        }}
      />

      <ClientCalculatorPage />
    </>
  )
}
