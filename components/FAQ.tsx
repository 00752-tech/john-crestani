'use client'

import { Calculator, TrendingUp, DollarSign, Users, Youtube, Maximize2 } from 'lucide-react'
import { useEffect, useMemo } from 'react'

const allTools = [
  {
    name: "Affiliate Earnings Calculator",
    description: "Estimate your potential affiliate marketing earnings.",
    url: "/affiliate-marketing-tools/earnings-calculator",
    icon: Calculator,
    category: "affiliate"
  },
  // ... other tool objects ...
]

interface RelatedToolsProps {
  currentToolUrl: string
  category: string
}

export default function RelatedTools({ currentToolUrl, category }: RelatedToolsProps) {
  const sameCategryTools = useMemo(() => allTools.filter(tool => 
    tool.category === category && tool.url !== currentToolUrl
  ), [category, currentToolUrl])

  const otherTools = useMemo(() => allTools.filter(tool => 
    tool.category !== category && tool.url !== currentToolUrl
  ), [category, currentToolUrl])

  const relatedTools = useMemo(() => [...sameCategryTools, ...otherTools].slice(0, 3), [sameCategryTools, otherTools])

  useEffect(() => {
    const toolsSchemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": allTools.map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.name,
          "description": tool.description,
          "url": `https://yourwebsite.com${tool.url}`,
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(toolsSchemaData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="mt-12 bg-gray-900 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white">Access Your Success Toolkit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedTools.map((tool) => {
          const Icon = tool.icon
          return (
            <button 
              key={tool.name}
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.href = tool.url;
              }}
              className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors group text-left w-full"
            >
              <div className="flex items-center mb-2">
                <Icon className="w-6 h-6 text-pink-500 mr-2" />
                <h3 className="text-lg font-semibold group-hover:text-pink-500 transition-colors">
                  {tool.name}
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                {tool.description}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
