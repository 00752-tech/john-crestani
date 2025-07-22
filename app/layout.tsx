import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import AffiliateDisclosureBar from "@/components/AffiliateDisclosureBar";
import StructuredData from "./structure-data";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Crestani's AI Club: $27 Early Bird + FREE Site!",
  description:
    "New 2025 launch: get John Crestani's AI Marketing Club for $27 + free website ($297 value) & 60-day guarantee. Ends in 4 days. Act now!",
  openGraph: {
    title: "John Crestani's AI Club: $27 Early Bird + FREE Site!",
    description:
      "New 2025 launch: get John Crestani's AI Marketing Club for $27 + free website ($297 value) & 60-day guarantee. Ends in 4 days. Act now!",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Preload hero image for LCP */}
        <link rel="preload" as="image" href="/hero_man_hat.webp" fetchPriority="high" />

        {/* Preconnect for key external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        {/* Open Graph / SEO meta */}
        <meta property="og:image" content="https://johncrestani.me/hero_man_hat.webp" />
        <meta property="og:image:alt" content="John Crestani Webinar Thumbnail" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Google site verification */}
        <meta name="google-site-verification" content="b4jMMd7FouN5s2PumUPG7Qc6PqkCMXoVbJVGCJhcjyo" />

        {/* Structured data */}
        <StructuredData />

        {/* Microsoft Clarity - lazy load */}
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
      <body>
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        <CookieConsent />
        <AffiliateDisclosureBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
