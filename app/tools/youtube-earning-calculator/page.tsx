import ClientYouTubeCalculator from "@/app/content-creation-tools/youtube-earnings-calculator/ClientYouTubeCalculator"
export const metadata = {
  title: 'YouTube Earnings Calculator | Super Affiliate System Pro',
  description: 'Calculate your potential YouTube earnings with our free AdSense calculator. Estimate revenue based on views, CTR, and CPM rates.',
}

export default function YouTubeCalculatorPage() {
  return <ClientYouTubeCalculator backUrl="/tools" pageUrlPath="/tools/youtube-earning-calculator" />
}

