'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React from 'react'

type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function AIClubFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = useMemo(() => [
    {
      question: "What is AI Marketers Club?",
      answer: <>It’s John Crestani’s latest affiliate system for 2025, teaching how to use AI to create faceless, monetized content—no tech skills or prior experience required. Built around a 7-minute daily workflow using his F.I.R. formula.</>
    },
    {
      question: "What makes this different from Super Affiliate System Pro?",
      answer: <>AI Marketers Club focuses on faceless content creation and AI automation. SAS Pro was built around paid ads, funnels, and deep traffic strategies. It’s now a discounted upsell ($197) inside the AI Marketers Club funnel.</>
    },
    {
      question: "Is Super Affiliate System Pro still available?",
      answer: <>Yes—but only through AI Marketers Club. Formerly $997, SAS Pro is now offered as a $197 upsell with full access to ad tutorials, funnel setup, and affiliate strategy.</>
    },
    {
      question: "How much does it cost to join?",
      answer: <>The main AI Marketers Club course costs just $27. That includes lifetime access to the training, a free website, viral content templates, bonus resources, and access to $821/click affiliate offers.</>
    },
    {
      question: "Do I need to show my face to make this work?",
      answer: <>Not at all. The system teaches faceless content creation using AI tools like ChatGPT and Midjourney. No camera, no personal branding, no burnout.</>
    },
    {
      question: "How does the F.I.R. formula work?",
      answer: <>F.I.R. stands for Find, Imitate, Repost. It’s a step-by-step prompting method using AI to turn viral content into niche-targeted affiliate campaigns that get clicks and commissions.</>
    },
    {
      question: "What’s included in the AI Marketers Club training?",
      answer: <>You’ll get a 3-hour video course, a quick start guide, daily action checklist, free website with SSL, bonus tools, deepfake marketing assets, and access to a supportive creator community.</>
    },
    {
      question: "How fast can I start earning?",
      answer: <>Some users report results in days. The system is designed to get you posting monetized content in 7 minutes/day—ideal for beginners or side hustlers with limited time.</>
    },
    {
      question: "Is there a refund policy?",
      answer: <>Yes. AI Marketers Club comes with a 60-day money-back guarantee, backed by ClickBank. No risk, no commitment—just a chance to build digital income with AI.</>
    },
    {
      question: "Can I promote this offer as an affiliate?",
      answer: <>Absolutely. Affiliates earn 75–90% commission on the entire funnel: $27 front-end, $197 SAS Pro upsell, $597 high-ticket upgrade, and even up to $50,000 mentorship tiers. Apply on ClickBank and request a commission bump.</>
    },
    {
      question: "Where can I learn more or see testimonials?",
      answer: <>You can explore bonus breakdowns, real user feedback, and success stories on the official review page. Just search “AI Marketers Club review by John Crestani 2025”—we’re ranking #1 for it.</>
    }
  ], [])

  useEffect(() => {
    function extractText(node: React.ReactNode): string {
      if (typeof node === 'string') return node
      if (typeof node === 'number') return node.toString()
      if (Array.isArray(node)) return node.map(extractText).join('')
      if (React.isValidElement(node)) return extractText(node.props.children)
      return ''
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": extractText(faq.answer)
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schemaData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [faqs])

  return (
    <section id="ai-faq" className="py-20 pt-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          AI Marketers Club – Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 md:p-6 text-left hover:bg-gray-900 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg text-pink-500">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-pink-500" size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 bg-gray-900">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
