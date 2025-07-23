'use client'
import { useEffect } from 'react'

export default function AIClubPAABlock() {
  useEffect(() => {
    const data = [
      {
        question: "Can I do affiliate marketing without showing my face?",
        answer:
          "Yes. AI Marketers Club teaches faceless affiliate marketing using AI tools to generate videos, content, and promotions—no camera or personal branding required.",
      },
      {
        question: "What is John Crestani’s new course in 2025?",
        answer:
          "It’s called AI Marketers Club, a low-ticket program that helps beginners create monetized content using AI in just 7 minutes/day. The course launched on ClickBank and includes bonuses and upsells.",
      },
      {
        question: "What tools do I need for AI Marketers Club?",
        answer:
          "You’ll use free tools like ChatGPT and Midjourney, plus receive a drag-and-drop website builder, a daily action checklist, and templates. No paid software required.",
      },
      {
        question: "Is AI Marketers Club beginner-friendly?",
        answer:
          "Absolutely. It’s designed for people with zero experience in marketing, tech, or content creation. Everything is plug-and-play with guided prompts and done-for-you assets.",
      },
      {
        question: "How do I get 90% commissions as an affiliate?",
        answer:
          "Apply for the offer on ClickBank, then request a commission bump through the AI Marketers Club live stream community or help desk. Qualified affiliates earn up to 90% on every funnel tier.",
      },
    ]

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((d) => ({
        "@type": "Question",
        "name": d.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": d.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, []) // empty dependencies now safe since data is inside effect

  return null
}
