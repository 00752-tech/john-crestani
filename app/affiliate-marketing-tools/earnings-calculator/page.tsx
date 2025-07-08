import ClientCalculatorPage from './ClientCalculatorPage'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Calculate Affiliate Income Potential | John Crestani',
  description:
    "How much can YOU earn? Find out in 60 seconds with John Crestani's free ROI calculator. Input your numbers, see your profit. Start calculating now!",
}

export default function CalculatorPage() {
  return (
    <>
      {/* 🔧 Structured data for search & AI */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
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
        }}
      />

      <ClientCalculatorPage />
    </>
  )
}
