import ClientCalculatorPage from './ClientCalculatorPage'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Niche Profitability Calculator: Find Winning Niches in 60s',
  description:
    'Free tool reveals untapped high-profit niches instantly. Avoid dead-end markets. Data-driven insights from JohnCrestani.me site. Find your golden niche now!',
}

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Niche Profitability Calculator",
          "description": "Free niche research tool to estimate market potential. Discover high-profit, low-competition niches based on input data and strategic analysis.",
          "url": "https://johncrestani.me/affiliate-marketing-tools/niche-profitability-calculator",
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
