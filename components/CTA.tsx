"use client";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Youtube,
  Maximize2,
} from "lucide-react";

const allTools = [
  {
    name: "Affiliate Earnings Calculator",
    description: "Estimate your potential affiliate marketing earnings.",
    url: "/affiliate-marketing-tools/earnings-calculator",
    icon: Calculator,
    category: "affiliate",
  },
  {
    name: "ROAS Calculator",
    description: "Calculate your Return on Ad Spend for campaigns.",
    url: "/advertising-tools/roas-calculator",
    icon: TrendingUp,
    category: "advertising",
  },
  {
    name: "Dropshipping Profit Calculator",
    description: "Analyze potential profits for your dropshipping business.",
    url: "/ecommerce-tools/dropshipping-profit-calculator",
    icon: DollarSign,
    category: "ecommerce",
  },
  {
    name: "Influencer Earnings Calculator",
    description: "Estimate earnings based on your social media influence.",
    url: "/influencer-marketing-tools/earnings-calculator",
    icon: Users,
    category: "influencer",
  },
  {
    name: "YouTube Earnings Calculator",
    description: "Calculate potential YouTube AdSense earnings.",
    url: "/content-creation-tools/youtube-earnings-calculator",
    icon: Youtube,
    category: "content",
  },
  {
    name: "Investment Calculator",
    description: "Plan your financial future with investment projections.",
    url: "/financial-tools/investment-calculator",
    icon: TrendingUp,
    category: "financial",
  },
  {
    name: "Niche Profitability Calculator",
    description: "Estimate the potential profitability of different niches.",
    url: "/affiliate-marketing-tools/niche-profitability-calculator",
    icon: TrendingUp,
    category: "affiliate",
  },
  {
    name: "Affiliate Link CTR Optimizer",
    description: "Optimize your affiliate link click-through rates.",
    url: "/affiliate-marketing-tools/link-ctr-optimizer",
    icon: Maximize2,
    category: "affiliate",
  },
];

interface RelatedToolsProps {
  currentToolUrl: string;
  category: string;
}

export default function RelatedTools({
  currentToolUrl,
  category,
}: RelatedToolsProps) {
  // First, get tools from the same category (excluding current tool)
  const sameCategryTools = allTools.filter(
    (tool) => tool.category === category && tool.url !== currentToolUrl
  );

  // Then, get tools from other categories if needed
  const otherTools = allTools.filter(
    (tool) => tool.category !== category && tool.url !== currentToolUrl
  );

  // Combine tools to ensure we always have 3
  const relatedTools = [...sameCategryTools, ...otherTools].slice(0, 3);

  return (
    <div className="mt-12 bg-gray-900 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Access Your Success Toolkit
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedTools.map((tool) => {
          const Icon = tool.icon;
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
              <p className="text-sm text-gray-400">{tool.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
