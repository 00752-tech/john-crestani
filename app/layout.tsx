import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import StructuredData from "./structure-data";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Affiliate Failure Fix 2025: John Crestani's 72H Offer",
  description:
    "Fix the 71% failure rate! John Crestani's updated 2025 method reveals the 'Million-Dollar Matrix'. Free access ending. Start for free. No credit card.",
  openGraph: {
    title: "Affiliate Failure Fix 2025",
    description:
      "Fix the 71% failure rate with John Crestani's Million-Dollar Matrix. Start free today.",
    images: [
      {
        url: "https://johncrestani.me/hero_man_hat.webp",
        width: 1200,
        height: 630,
        alt: "John Crestani Webinar Thumbnail",
      },
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
        {/* 👀 Preload hero image to improve LCP */}
        <link
          rel="preload"
          as="image"
          href="/hero_man_hat.webp"
          fetchPriority="high"
        />

        {/* eslint-disable @next/next/no-page-custom-font */}
        {/* 🚀 Google Fonts preload + stylesheet */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />

        {/* 🌐 Open Graph image fallback for social + SERP */}
        <meta property="og:image" content="https://johncrestani.me/hero_man_hat.webp" />
        <meta property="og:image:alt" content="John Crestani Webinar Thumbnail" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 🔍 Google site verification */}
        <meta name="google-site-verification" content="b4jMMd7FouN5s2PumUPG7Qc6PqkCMXoVbJVGCJhcjyo" />

        {/* 📦 Structured data for enhanced SEO */}
        <StructuredData />

        {/* 🧠 Microsoft Clarity deferred load */}
        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s6qlp9x2uo");
          `}
        </Script>
      </head>

      <body className="font-poppins">
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        <CookieConsent />
        <Header />
        {children}
      </body>
    </html>
  );
}
