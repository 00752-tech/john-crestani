'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is Super Affiliate System Pro still relevant in 2025?",
      answer: "The system is continuously updated to reflect the latest trends and technologies in affiliate marketing. The 2025 version includes cutting-edge strategies for AI, blockchain, and emerging digital platforms."
    },
    {
      question: "How does the 2025 version differ from the original 2017 release?",
      answer: "While the core principles remain, the 2025 version has been extensively updated. It now includes AI-powered tools, blockchain affiliate strategies, advanced analytics, and tactics for new social media platforms that have emerged since 2017."
    },
    {
      question: "Do I get lifetime access to updates?",
      answer: "Yes, when you purchase Super Affiliate System Pro, you receive lifetime access to all future updates. This ensures that your affiliate marketing education stays current with the fast-paced digital world."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course content or don't see results within the first month, you can request a full refund."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-pink-500">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-pink-500" /> : <ChevronDown className="text-pink-500" />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-900">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

