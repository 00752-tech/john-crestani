import Link from 'next/link'
import { Calculator, TrendingUp, DollarSign, Users, Youtube, Maximize2 } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'

export const metadata = {
  title: 'Free Affiliate Marketing Tools & Calculators | Super Affiliate System Pro',
  description: 'Boost your affiliate marketing success with our suite of free tools and calculators. Estimate earnings, optimize campaigns, and make data-driven decisions.',
}

export default function AffiliateMarketingToolsPage() {
  const tools = [
    {
      name: "Affiliate Earnings Calculator",
      description: "Estimate your potential affiliate marketing earnings based on traffic, conversion rates, and commission values.",
      url: "/affiliate-marketing-tools/earnings-calculator",
      icon: Calculator
    },
    {
      name: "Investment Calculator",
      description: "Plan your financial future by calculating potential returns on your investments over time.",
      url: "/financial-tools/investment-calculator",
      icon: TrendingUp
    },
    {
      name: "Dropshipping Profit Calculator",
      description: "Calculate potential profits for your dropshipping business by analyzing costs, pricing, and order volume.",
      url: "/ecommerce-tools/dropshipping-profit-calculator",
      icon: DollarSign
    },
    {
      name: "ROAS Calculator",
      description: "Calculate your Return on Ad Spend to measure and improve the effectiveness of your advertising campaigns.",
      url: "/advertising-tools/roas-calculator",
      icon: TrendingUp
    },
    {
      name: "Influencer Earnings Calculator",
      description: "Estimate your potential earnings as an influencer based on your follower count and engagement rate.",
      url: "/influencer-marketing-tools/earnings-calculator",
      icon: Users
    },
    {
      name: "YouTube Earnings Calculator",
      description: "Calculate potential YouTube AdSense earnings based on views, CTR, and CPM rates.",
      url: "/content-creation-tools/youtube-earnings-calculator",
      icon: Youtube
    },
    {
      name: "Niche Profitability Calculator",
      description: "Estimate the potential profitability of different niches for your affiliate marketing campaigns.",
      url: "/affiliate-marketing-tools/niche-profitability-calculator",
      icon: TrendingUp
    },
    {
      name: "Affiliate Link CTR Optimizer",
      description: "Optimize your affiliate link click-through rates based on placement, anchor text, and content quality.",
      url: "/affiliate-marketing-tools/link-ctr-optimizer",
      icon: Maximize2
    },
  ]

  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools'
  const pageTitle = 'Free Affiliate Marketing Tools & Calculators | Super Affiliate System Pro'

  return (
    <>
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": tools.map((tool, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": tool.name,
              "description": tool.description,
              "url": `https://johncrestani.me${tool.url}`,
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          }))
        }}
      />
      
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4">
            Affiliate Marketing Tools & Calculators
          </h1>
          <p className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
            Boost your affiliate marketing success with our suite of free tools and calculators. Estimate earnings, optimize campaigns, and make data-driven decisions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <Link 
                key={tool.name}
                href={tool.url}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  <tool.icon className="w-8 h-8 text-pink-500 mr-3" />
                  <h2 className="text-2xl font-semibold group-hover:text-pink-500 transition-colors">
                    {tool.name}
                  </h2>
                </div>
                <p className="text-gray-400">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>
        </div>
      </div>
    </>
  )
}

