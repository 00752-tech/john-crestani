/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { Calculator, TrendingUp, DollarSign, Users, Youtube, Maximize2, Shield, Gem, Briefcase } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'

const pageCanonicalUrl = 'https://johncrestani.me/tools';

export const metadata = {
  title: 'AI-Powered Freedom: Your Essential Marketing & Financial Tools | JohnCrestani.me',
  description:
    'Unleash your potential, gain unwavering control, and build a future-proof income. Access free AI-driven calculators and tools designed to transform financial precarity into clarity, reduce burnout, and achieve your purpose in the evolving digital landscape.',
  alternates: {
    canonical: pageCanonicalUrl,
  },
  openGraph: {
    title: 'AI-Powered Freedom: Your Essential Marketing & Financial Tools | JohnCrestani.me',
    description:
      'Unleash your potential, gain unwavering control, and build a future-proof income. Access free AI-driven calculators and tools designed to transform financial precarity into clarity, reduce burnout, and achieve your purpose in the evolving digital landscape.',
    url: pageCanonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Freedom: Your Essential Marketing & Financial Tools | JohnCrestani.me',
    description:
      'Unleash your potential, gain unwavering control, and build a future-proof income. Access free AI-driven calculators and tools designed to transform financial precarity into clarity, reduce burnout, and achieve your purpose in the evolving digital landscape.',
  },
};

export default function ToolsPage() {
  const tools = [
    {
      name: "Affiliate Earnings Calculator",
      description: <>Transform uncertainty into <strong>financial clarity</strong>. Confidently estimate your potential earnings, turning guesswork into a clear path to <strong>income stability</strong>.</>,
      url: "/tools/affiliate-earnings-calculator",
      icon: Calculator,
    },
    {
      name: "Investment Calculator",
      description: <>Gain <strong>control</strong> over your financial destiny. Project future returns to build a robust portfolio and achieve <strong>long-term security</strong> beyond the daily grind.</>,
      url: "/tools/investment-calculator",
      icon: TrendingUp,
    },
    {
      name: "Dropshipping Profit Calculator",
      description: <>Ditch the anxiety of unprofitability. Precisely calculate margins to ensure your dropshipping venture builds a <strong>sustainable, stress-free income stream</strong>.</>,
      url: "/tools/dropshipping-profit-calculator",
      icon: DollarSign,
    },
    {
      name: "ROAS Calculator",
      description: <>Measure your ad campaign&#39;s true impact and achieve <strong>unwavering confidence</strong>. Optimize spending to gain <strong>maximum control</strong> over your marketing profitability.</>,
      url: "/tools/roas-calculator",
      icon: Shield,
    },
    {
      name: "Influencer Earnings Calculator",
      description: <>Uncover your true value as a creator. Estimate earnings to empower your negotiations and build a <strong>purpose-driven, authentic brand</strong> that rewards you.</>,
      url: "/tools/influencer-earnings-calculator",
      icon: Users,
    },
    {
      name: "YouTube Earnings Calculator",
      description: <>Unlock the <strong>hidden potential</strong> of your content. Forecast AdSense revenue to make informed decisions, transforming your passion into a <strong>predictable income source</strong>.</>,
      url: "/tools/youtube-earning-calculator",
      icon: Youtube,
    },
    {
      name: "Niche Profitability Calculator",
      description: <>Find your <strong>path to purpose and profit</strong>. Analyze niches with clarity, empowering you to make strategic choices that lead to <strong>meaningful financial success</strong>.</>,
      url: "/tools/niche-profitability-calculator",
      icon: Briefcase,
    },
    {
      name: "Affiliate Link CTR Optimizer",
      description: <>Take <strong>absolute control</strong> of your affiliate performance. Optimize your links to maximize clicks and accelerate your journey to <strong>financial autonomy</strong>.</>,
      url: "/tools/affiliate-link-ctr-optimizer",
      icon: Maximize2,
    },
  ];

  return (
    <>
      {/* === SCHEMA.ORG JSON-LD FOR SEO === */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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
              "description": typeof tool.description === 'string' ? tool.description : undefined, // for schema only
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4">
            Unlock Your AI-Powered Future: Essential Tools for Control &amp; Growth
          </h1>
          <p className="text-xl text-center mb-5 text-gray-300 max-w-3xl mx-auto">
            Move <strong>beyond uncertainty</strong> and into a future where you command your destiny. These free AI-driven calculators and tools are designed not just to crunch numbers, but to transform financial precarity into <strong>clarity</strong>, reduce <strong>burnout</strong>, and empower you to build a <strong>purpose-driven, future-proof income</strong> online.
          </p>
          <p className="text-md text-center mb-10 text-gray-400 max-w-xl mx-auto">
            Every tool here is battle-tested, free to use, and designed to give you the <span className="text-pink-400 font-semibold">confidence</span> and <span className="text-yellow-400 font-semibold">community support</span> you deserve on your path to financial freedom.
          </p>
          
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            role="list"
            aria-label="AI Marketing & Financial Tools"
          >
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.url}
                aria-label={`Open ${tool.name}`}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-[1.03] active:scale-100 transition-transform transition-colors group flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <tool.icon className="w-8 h-8 text-pink-500 mr-3" aria-hidden="true" />
                  <h2 className="text-2xl font-semibold group-hover:text-pink-500 transition-colors">
                    {tool.name}
                  </h2>
                </div>
                <p className="text-gray-400">{tool.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="sr-only">Share this toolbox with your network</h2>
            <ShareButtons url={pageCanonicalUrl} title={metadata.title} />
          </div>
        </div>
      </div>
    </>
  )
}
