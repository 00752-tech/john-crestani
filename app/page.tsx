import { Metadata } from 'next';
import HomeContent from './HomeContent'; // Imports the client component from the file you just edited

// 1. Define static Metadata (Google reads this for SEO)
export const metadata: Metadata = {
  title: "AI Marketers Club $27: John Crestani's 2025 Faceless AI System",
  description: "Discover John Crestani's AI-powered income system for 2025. Affiliate marketing meets automation. $27 access.",
};

// Define Schema variables
const pageUrl = 'https://johncrestani.me';

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": metadata.title,
  "url": pageUrl,
  "description": metadata.description,
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "url": pageUrl,
  "price": "27",
  "priceCurrency": "USD",
  "availability": "https://schema.org/InStock"
};


// 2. The main Page component just renders the Client Content
export default function Page() {
    return (
        <>
            {/* Inject the Schema into the HTML head using a standard script tag */}
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} 
            />
            
            {/* Render the Client Component with all the UI */}
            <HomeContent />
        </>
    );
}
