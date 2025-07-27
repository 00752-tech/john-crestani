import ClientInfluencerEarningsCalculator from "@/components/ClientInfluencerEarningsCalculator"
import { JsonLd } from "react-schemaorg"

export const metadata = {
  title: "Predictable Income: AI-Powered Influencer Earnings Calculator",
  description:
    "Eliminate income uncertainty. Our free AI-powered influencer earnings calculator helps you forecast and secure stable, predictable income streams from your influence. Get confident with your financial future.",
}

export default function InfluencerEarningsCalculatorPage() {
  const pageUrl =
    "https://johncrestani.me/influencer-marketing-tools/earnings-calculator"

  return (
    <>
      {/* Structured Data: SoftwareApplication */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AI-Powered Influencer Earnings Calculator",
          description:
            "Eliminate income uncertainty. Our free AI-powered influencer earnings calculator helps you forecast and secure stable, predictable income streams from your influence. Get confident with your financial future.",
          url: pageUrl,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          isAccessibleForFree: true,
          creator: {
            "@type": "Person",
            name: "John Crestani",
            sameAs: [
              "https://linkedin.com/in/johncrestani",
              "https://twitter.com/johncrestani",
              "https://instagram.com/johncrestani",
            ],
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Predict potential influencer earnings with AI insights",
            "Estimate income based on follower count",
            "Analyze impact of engagement rate on earnings",
            "Forecast income from sponsored content",
            "Support confident financial planning for influencers",
          ],
          softwareHelp: {
            "@type": "CreativeWork",
            name: "How to Use the AI-Powered Influencer Earnings Calculator",
            text: "1. Enter your number of followers. 2. Input your engagement rate. 3. Set your sponsored posts per month. 4. View your estimated, predictable earnings.",
          },
        }}
      />

      {/* Structured Data: FAQPage */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How accurate is the AI-powered influencer earnings calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "This AI-powered calculator provides an informed estimate based on industry benchmarks. While it aims for greater predictability, actual earnings can still vary depending on factors such as niche monetization, audience quality, platform algorithm changes, and individual brand deal negotiations. It’s designed to give you a confident starting point for predictable income analysis.",
              },
            },
            {
              "@type": "Question",
              name: "How can I increase my earnings as an influencer and secure predictable income?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "To increase your earnings and build predictable income streams, focus on strategically growing your engaged follower base, consistently improving engagement rates, creating high-value, AI-optimized content, and diversifying your income through high-ticket affiliate marketing. John Crestani’s AI Marketing Club provides the blueprint for consistent, stable financial growth.",
              },
            },
            {
              "@type": "Question",
              name: "What’s a good engagement rate for influencers to ensure stable earnings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A healthy engagement rate, crucial for stable earnings, typically ranges from 1% to 5%, varying by platform and niche. Rates above 5% are considered excellent, indicating strong audience connection. Micro-influencers often achieve higher engagement due to their more focused communities, which can lead to more predictable and valuable brand collaborations.",
              },
            },
            {
              "@type": "Question",
              name: "Can AI truly help me predict and grow my influencer income?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, AI can significantly enhance your ability to predict and grow influencer income. AI tools analyze audience behavior, identify trending content, optimize posting schedules, and suggest high-converting affiliate offers. John Crestani’s AI Marketing Club leverages these capabilities to provide a systematic approach for building a predictable and scalable influencer income.",
              },
            },
          ],
        }}
      />

      {/* Render the client-side component */}
      <ClientInfluencerEarningsCalculator pageUrlPath="/influencer-marketing-tools/earnings-calculator" />
    </>
  )
}
