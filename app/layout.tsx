import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import StructuredData from "./structure-data";
import { CookieConsent } from "@/components/CookieConsent";
import Script from "next/script"; // Import Next.js Script

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... your metadata unchanged ...
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
        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s6qlp9x2uo");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-XXXXXXX" /> {/* Replace with your GTM ID */}
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
