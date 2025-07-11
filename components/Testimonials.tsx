"use client";
import { useEffect } from "react";

// Move testimonials outside component to avoid unnecessary re-renders
const testimonials = [
  {
    name: "Jordan M.",
    role: "Former Uber Driver Turned Affiliate",
    badge: "Beta Tester",
    quote:
      "I never thought I could make money online without showing my face. This system made it stupid simple. I posted my first AI video in 10 minutes and got my first click the next day.",
    rating: 5,
  },
  {
    name: "Samantha R.",
    role: "Stay-at-Home Mom & First-Time Marketer",
    badge: "Verified Buyer",
    quote:
      "I’ve tried other courses before and always felt overwhelmed. This one broke it down so clearly. I finally feel like I know what I’m doing—and I’m only 3 days in.",
    rating: 5,
  },
  {
    name: "Derek L.",
    role: "Corporate Escapee, Now Full-Time Creator",
    badge: "Early Access Member",
    quote:
      "I was burned out from the 9–5 grind. The AI Marketers Club gave me a way to build something real—without being glued to my screen or chasing trends.",
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
      review: testimonials.map((t) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: t.name,
        },
        reviewBody: t.quote,
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []); // testimonials is now outside, so this is safe

  return (
    <section id="testimonials" className="py-20 pt-32 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Real People. Real Results.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <article
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="mb-4">
                <h3 className="text-pink-500 font-semibold text-lg">
                  {t.name}
                  <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                    {t.badge}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
              <p className="text-gray-300 italic">&quot;{t.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
