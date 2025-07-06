import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import StructuredData from "./structure-data";
import { CookieConsent } from "@/components/CookieConsent"; // Fixed typo

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
      </head>
      <body className={inter.className}>
        {/* Place third-party and consent components inside body */}
        <GoogleTagManager gtmId="GTM-XXXXXXX" /> {/* Use your GTM container ID */}
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
