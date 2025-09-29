'use client';
import { Suspense } from 'react';
// ... other imports

// REMOVE: import Head from 'next/head'; ❌

// REMOVE ALL THESE METADATA VARIABLES: ❌
// const pageUrl = 'https://johncrestani.me';
// const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";
// const schema = { ... };
// const offerSchema = { ... };

// CHANGE FUNCTION NAME:
export default function HomePageClient() { 
  
    // ... CTA handler remains here ...

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      {/* REMOVE THE ENTIRE <Head> BLOCK HERE ❌ */}
      <style jsx global>{/* ... */}</style>
      <ExitIntentPopup />
      {/* ... all your Hero, Testimonials, FAQ, CTA components ... */}
    </main>
  );
}
