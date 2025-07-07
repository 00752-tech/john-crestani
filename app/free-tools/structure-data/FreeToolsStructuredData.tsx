import Head from 'next/head';

const toolsData = [
  {
    name: "Affiliate Earnings Calculator",
    url: "https://johncrestani.me/affiliate-marketing-tools/earnings-calculator",
    description: "Estimate your commissions based on traffic and conversion rate.",
    image: "https://johncrestani.me/schema-preview/earnings.webp"
  },
  {
    name: "Niche Profitability Calculator",
    url: "https://johncrestani.me/tools/niche-profitability-calculator",
    description: "Estimate the potential profitability of different niches for your affiliate marketing campaigns.",
    image: "https://johncrestani.me/schema-preview/niche.webp"
  },
  {
    name: "ROAS Calculator",
    url: "https://johncrestani.me/tools/roas-calculator",
    description: "Calculate your Return on Ad Spend (ROAS) to measure and improve the effectiveness of your advertising campaigns.",
    image: "https://johncrestani.me/schema-preview/roas.webp"
  },
  {
    name: "Influencer Earnings Calculator",
    url: "https://johncrestani.me/influencer-marketing-tools/earnings-calculator",
    description: "Estimate your potential earnings as an influencer based on follower count and engagement rate.",
    image: "https://johncrestani.me/schema-preview/influencer.webp"
  },
  {
    name: "YouTube Earnings Calculator",
    url: "https://johncrestani.me/content-creation-tools/youtube-earnings-calculator",
    description: "Calculate your potential YouTube AdSense earnings based on views, CTR, and CPM rates.",
    image: "https://johncrestani.me/schema-preview/youtube.webp"
  },
  {
    name: "Affiliate Link CTR Optimizer",
    url: "https://johncrestani.me/affiliate-marketing-tools/link-ctr-optimizer",
    description: "Optimize your affiliate link click-through rates based on placement, anchor text, and content quality.",
    image: "https://johncrestani.me/schema-preview/ctr.webp"
  },
  {
    name: "Investment Calculator",
    url: "https://johncrestani.me/financial-tools/investment-calculator",
    description: "Estimate the future value of your investments based on initial investment, monthly contributions, and expected returns.",
    image: "https://johncrestani.me/schema-preview/investment.webp"
  }
];

const toolSchemas = toolsData.map((tool) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": tool.name,
  "url": tool.url,
  "description": tool.description,
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "All",
  "browserRequirements": "Modern browser",
  "image": tool.image,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": 127
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": toolsData.map((tool) => ({
    "@type": "Question",
    "name": `How does the ${tool.name} work?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": tool.description
    }
  }))
};

export default function FreeToolsStructuredData() {
  const schemas = [...toolSchemas, faqSchema];

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
