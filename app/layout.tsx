import "./globals.css";
import type { Metadata } from "next";
import StructuredData from "./structure-data";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Affiliate Failure Fix 2025: John Crestani's 72H Offer",
  description:
    "Fix the 71% failure rate! John Crestani's updated 2025 method reveals the 'Million-Dollar Matrix'. Free access ending. Start for free. No credit card.",
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
          href="/hero_man_hat.png"
          fetchPriority="high"
        />

        {/* 🚀 Google Fonts preload for Poppins */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        />

        {/* 👁 font-display: swap fallback to prevent invisible text */}
        <style>{`
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url('https://fonts.gstatic.com/s/poppins/v18/KFOlCnqEu92Fr1MmSU5fBBc-.woff2') format('woff2');
          }
        `}</style>

        {/* 🔍 Structured data + site verification */}
        <meta
          name="google-site-verification"
          content="b4jMMd7FouN5s2PumUPG7Qc6PqkCMXoVbJVGCJhcjyo"
        />
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
        {children}
      </body>
    </html>
  );
}
