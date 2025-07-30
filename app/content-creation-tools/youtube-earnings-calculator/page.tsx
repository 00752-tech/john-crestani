import { Metadata } from 'next';
import ClientYouTubeCalculator from './ClientYouTubeCalculator'; // Import the client component

export const metadata: Metadata = {
  title: "Predict Your YouTube Income: Free AdSense Earnings Calculator",
  description: "Are you tired of guessing your YouTube income? Our free YouTube AdSense Earnings Calculator removes uncertainty, giving you predictable insights to forecast your channel's monthly and yearly earnings and gain financial control.",
  openGraph: {
    title: "Predict Your YouTube Income: Free AdSense Earnings Calculator",
    description: "Are you tired of guessing your YouTube income? Our free YouTube AdSense Earnings Calculator removes uncertainty, giving you predictable insights to forecast your channel's monthly and yearly earnings and gain financial control.",
    url: "https://johncrestani.me/content-creation-tools/youtube-earnings-calculator",
    type: "website",
    images: [
      {
        url: "/images/youtube-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Earnings Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Predict Your YouTube Income: Free AdSense Earnings Calculator",
    description: "Are you tired of guessing your YouTube income? Our free YouTube AdSense Earnings Calculator removes uncertainty, giving you predictable insights to forecast your channel's monthly and yearly earnings and gain financial control.",
  },
  keywords: [
    "YouTube earnings calculator",
    "AdSense calculator",
    "YouTube income",
    "free YouTube tool",
    "YouTube monetization",
    "predict YouTube earnings"
  ],
  alternates: {
    canonical: "https://johncrestani.me/content-creation-tools/youtube-earnings-calculator",
  },
};

export default function YouTubeEarningsCalculatorPageWrapper() {
  return (
    <ClientYouTubeCalculator
      backUrl="/content-creation-tools"
      pageUrlPath="/content-creation-tools/youtube-earnings-calculator"
    />
  );
}
