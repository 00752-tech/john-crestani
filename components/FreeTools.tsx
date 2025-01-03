'use client'

import { Calculator, TrendingUp, DollarSign, Users } from 'lucide-react'
import InteractiveButton from './InteractiveButton'

export default function FreeTools() {
  const tools = [
    {
      name: "Affiliate Earnings Calculator",
      description: "Estimate your potential affiliate marketing earnings.",
      url: "/affiliate-marketing-tools/earnings-calculator",
      icon: Calculator
    },
    {
      name: "ROAS Calculator",
      description: "Calculate your Return on Ad Spend for campaigns.",
      url: "/advertising-tools/roas-calculator",
      icon: TrendingUp
    },
    {
      name: "Dropshipping Profit Calculator",
      description: "Analyze potential profits for your dropshipping business.",
      url: "/ecommerce-tools/dropshipping-profit-calculator",
      icon: DollarSign
    },
    {
      name: "Influencer Earnings Calculator",
      description: "Estimate earnings based on your social media influence.",
      url: "/influencer-marketing-tools/earnings-calculator",
      icon: Users
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Free Affiliate Marketing Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <InteractiveButton 
              key={tool.name}
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.href = tool.url;
              }}
              className="bg-black p-6 rounded-lg shadow-lg hover:bg-gray-800 transition-colors group text-left w-full"
            >
              <div className="flex items-center mb-4">
                <tool.icon className="w-8 h-8 text-pink-500 mr-3" />
                <h3 className="text-xl font-semibold group-hover:text-pink-500 transition-colors">
                  {tool.name}
                </h3>
              </div>
              <p className="text-gray-400">
                {tool.description}
              </p>
            </InteractiveButton>
          ))}
        </div>
        <div className="text-center mt-12">
          <InteractiveButton 
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.href = "/affiliate-marketing-tools";
            }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            View All Free Tools
          </InteractiveButton>
        </div>
      </div>
    </section>
  )
}

