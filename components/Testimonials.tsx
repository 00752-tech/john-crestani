'use client';
import { useEffect } from "react";

// Testimonials data with bold phrases handled in JSX
const testimonials = [
  {
    name: "Jordan M.",
    role: "Former Uber Driver Turned Affiliate",
    badge: "Beta Tester",
    rating: 5,
  },
  {
    name: "Samantha R.",
    role: "Stay-at-Home Mom & First-Time Marketer",
    badge: "Verified Buyer",
    rating: 5,
  },
  {
    name: "Derek L.",
    role: "Corporate Escapee, Now Full-Time Creator",
    badge: "Early Access Member",
    rating: 4.8,
  },
];

export default function Testimonials() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "AI Marketers Club",
      description:
        "A faceless affiliate marketing course by John Crestani that teaches how to use AI to create monetized content in 7 minutes a day.",
      brand: {
        "@type": "Person",
        name: "John Crestani",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: testimonials.length,
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Jordan M.",
          },
          reviewBody: "I never thought I could make money online without showing my face. This system made it simple to regain control of my income. I posted my first AI video in 10 minutes and got my first click the next day, proving predictable results are possible.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Samantha R.",
          },
          reviewBody: "I’ve tried other courses and always felt overwhelmed and lost. This one broke it down so clearly, giving me a roadmap to confidently seize control. I finally feel like I know what I’m doing—and I’m only 3 days in, finding clarity in the chaos.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: 4.8,
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Derek L.",
          },
          reviewBody: "I was burned out from the 9–5 grind, feeling trapped. The AI Marketers Club gave me a way to build something real and meaningful—allowing me to reclaim my purpose without being glued to my screen or chasing trends. It's truly a path to freedom.",
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 pt-32 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Real People. Real Results.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="mb-4">
              <h3 className="text-pink-500 font-semibold text-lg">
                Jordan M.
                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                  Beta Tester
                </span>
              </h3>
              <p className="text-gray-400 text-sm">Former Uber Driver Turned Affiliate</p>
            </div>
            <p className="text-gray-300 italic">
              &quot;I never thought I could make money online without showing my face. This system made it <strong>simple to regain control of my income.</strong> I posted my first AI video in 10 minutes and got my first click the next day, <strong>proving predictable results are possible.</strong>&quot;
            </p>
          </article>
          <article className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="mb-4">
              <h3 className="text-pink-500 font-semibold text-lg">
                Samantha R.
                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                  Verified Buyer
                </span>
              </h3>
              <p className="text-gray-400 text-sm">Stay-at-Home Mom &amp; First-Time Marketer</p>
            </div>
            <p className="text-gray-300 italic">
              &quot;I’ve tried other courses and always felt <strong>overwhelmed and lost.</strong> This one broke it down so clearly, <strong>giving me a roadmap to confidently seize control.</strong> I finally feel like I know what I’m doing—and I’m only 3 days in, <strong>finding clarity in the chaos.</strong>&quot;
            </p>
          </article>
          <article className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="mb-4">
              <h3 className="text-pink-500 font-semibold text-lg">
                Derek L.
                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                  Early Access Member
                </span>
              </h3>
              <p className="text-gray-400 text-sm">Corporate Escapee, Now Full-Time Creator</p>
            </div>
            <p className="text-gray-300 italic">
              &quot;I was <strong>burned out from the 9-5 grind, feeling trapped.</strong> The AI Marketers Club gave me a way to build something <strong>real and meaningful—allowing me to reclaim my purpose</strong> without being glued to my screen or chasing trends. It’s truly <strong>a path to freedom.</strong>&quot;
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
