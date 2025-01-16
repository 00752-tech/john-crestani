import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import StructuredData from "./structure-data";
import { CookieConsent } from "@/components/CookieConcent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Crestani 2025: Is His Training Still Top Tier?",
  description:
    "Discover if John Crestani's affiliate marketing strategies remain unbeaten in 2025. Get the inside scoop and claim your free webinar invite.",
  keywords:
    "John Crestani, Super Affiliate System Pro 2025, affiliate marketing course, make money online, affiliate marketing tools, marketing calculators",
  openGraph: {
    title: "John Crestani 2025: Is His Training Still Top Tier?",
    description:
      "Discover if John Crestani's affiliate marketing strategies remain unbeaten in 2025. Get the inside scoop and claim your free webinar invite.",
    type: "website",
    locale: "en_US",
    url: "https://johncrestani.me",
    siteName: "JohnCrestani.me",
    images: [
      {
        url: "https://www.gojctraining.com/hosted/images/02/887709d34346a89d87f5a2eca39247/johnnewimg99.png",
        width: 1200,
        height: 630,
        alt: "John Crestani Super Affiliate System Pro 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "John Crestani 2025: Uncover the latest in affiliate marketing training. Is it worth your time?",
    description:
      "Discover if John Crestani's affiliate marketing strategies remain unbeaten in 2025. Get the inside scoop and claim your free webinar invite.",
    images: [
      "https://www.gojctraining.com/hosted/images/02/887709d34346a89d87f5a2eca39247/johnnewimg99.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="b4jMMd7FouN5s2PumUPG7Qc6PqkCMXoVbJVGCJhcjyo"
        />
        <StructuredData />
      </head>
      <GoogleTagManager gtmId="G-R5SXJEQF8Z" />
      <CookieConsent />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
