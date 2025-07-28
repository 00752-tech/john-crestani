// File: app/content-creation-tools/youtube-earnings-calculator/page.tsx
// This is a Server Component, no "use client" directive here
import { Metadata } from 'next';
import ClientYouTubeCalculator from './ClientYouTubeCalculator'; // Import the client component

export const metadata: Metadata = {
  title: "Predict Your YouTube Income: Free AdSense Earnings Calculator",
  description: "Are you tired of guessing your YouTube income? Our free YouTube AdSense Earnings Calculator removes uncertainty, giving you predictable insights to forecast your channel's monthly and yearly earnings and gain financial control.",
  // Add other metadata as needed for SEO and social sharing
  openGraph: {
    title: "Predict Your YouTube Income: Free AdSense Earnings Calculator",
    description: "Are you tired of guessing your YouTube income? Our free YouTube AdSense Earnings Calculator removes uncertainty, giving you predictable insights to forecast your channel's monthly and yearly earnings and gain financial control.",
    url: "https://johncrestani.me/content-creation-tools/youtube-earnings-calculator", // Ensure this matches your actual URL
    type: "website",
    images: [
      {
        url: "/images/youtube-calculator-og.jpg", // Replace with an actual OG image path
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
    // image: "/images/youtube-calculator-twitter.jpg", // Replace with an actual Twitter image path
  },
  keywords: ["YouTube earnings calculator", "AdSense calculator", "YouTube income", "free YouTube tool", "YouTube monetization", "predict YouTube earnings"],
  // Ensure canonical URL is correct
  alternates: {
    canonical: "https://johncrestani.me/content-creation-tools/youtube-earnings-calculator",
  },
};

// This is a Server Component that wraps and renders the Client Component
export default function YouTubeEarningsCalculatorPageWrapper() {
  return (
    <ClientYouTubeCalculator />
  );
}
