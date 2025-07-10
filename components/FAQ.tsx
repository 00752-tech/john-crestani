'use client'
import { useState, useEffect, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function AIClubFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = useMemo(() => [
    {
      question: "What is the AI Marketers Club?",
      answer: <>It’s John Crestani’s newest 2025 affiliate system that teaches you how to create faceless, monetized content using AI in just 7 minutes a day. It’s built for beginners who want results without showing their face or learning complex tech.</>
    },
    {
      question: "How much does AI Marketers Club cost?",
      answer: <>The full system is just $27. That includes the course, a free website, the F.I.R. formula, and access to $821/click affiliate offers. It’s a one-time payment with no hidden upsells.</>
    },
    {
      question: "Do I need to show my face or be on camera?",
      answer: <>Nope. This system is designed for faceless content creation. You’ll learn how to use AI tools to generate videos, posts, and affiliate content without ever appearing on screen.</>
    },
    {
      question: "Is this different from Super Affiliate System Pro?",
      answer: <>Yes. While SAS Pro was a full-scale training program focused on paid traffic and funnels, AI Marketers Club is a lightweight, fast-start system built around AI and faceless content. It’s ideal for beginners or anyone short on time.</>
    },
    {
      question: "Is Super Affiliate System Pro still available?",
      answer: <>No, Super Affiliate System Pro is no longer available for new students. John Crestani has retired the program and replaced it with the AI Marketers Club—a faster, more affordable system built for 2025 that uses AI and faceless content to help beginners start earning online.</>
    },
    {
      question: "How fast can I start earning with this?",
      answer: <>Some users report clicks and commissions within their first week. Results vary, but the system is designed to get you posting and monetizing in under 7 minutes a day.</>
    },
    {
      question: "What’s the F.I.R. formula?",
      answer: <>It stands for Find, Imitate, and Repost—with AI. You’ll learn how to find viral content, use AI to recreate it in your niche, and post it with your affiliate links. It’s simple, scalable, and faceless.</>
    },
    {
      question: "Is there a refund policy?",
      answer: <>Yes. There’s a 60-day money-back guarantee. If you don’t love it, you can request a full refund—no questions asked.</>
    },
    {
      question: "Do I need any prior experience?",
      answer: <>None. This system is built for total beginners. If you can copy, paste, and click—you're ready.</>
    },
    {
      question: "What tools or software do I need?",
      answer: <>You’ll get access to free AI tools, a drag-and-drop website builder, and done-for-you templates. No paid software is required to get started.</>
    },
    {
      question: "Can I promote this as an affiliate?",
      answer: <>Yes! AI Marketers Club has a high-converting affiliate program. You can earn commissions by sharing your link—perfect for testing the system while promoting it.</>
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
