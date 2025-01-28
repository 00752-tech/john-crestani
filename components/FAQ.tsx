'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    },
    {
      question: "What is the Super Affiliate System, and who is John Crestani?",
      answer: "The Super Affiliate System is a training program focused on teaching individuals how to succeed in affiliate marketing. It's associated with John Crestani, an entrepreneur specializing in online marketing and creating profitable digital businesses."
    },
    {
      question: "What key areas of digital marketing does John Crestani's work focus on?",
      answer: "John Crestani's work heavily revolves around affiliate marketing but also touches on dropshipping, YouTube advertising, and general digital marketing strategies for passive income generation."
    },
    {
      question: "What kind of calculators are associated with these topics, and what do they do?",
      answer: "Calculators like dropshipping profit calculators, affiliate revenue calculators, and YouTube AdSense calculators help estimate profits, costs, and revenue for various business models."
    },
    {
      question: "What is ROAS and how does it relate to dropshipping?",
      answer: "ROAS (Return on Ad Spend) measures revenue generated per dollar spent on advertising. Dropshipping ROAS calculators help assess ad campaign profitability."
    },
    {
      question: "What does the frequency of 'Super Affiliate System review' suggest about the program?",
      answer: "The high number of reviews suggests that many people research its legitimacy and quality before committing, indicating its popularity in affiliate marketing."
    },
    {
      question: "Besides the primary course, what other aspects of the 'Super Affiliate System' are discussed?",
      answer: "Users often explore topics like accessing the course ('login'), free trials ('free download'), and new versions ('3.0'), reflecting interest in cost options and updates."
    },
    {
      question: "How do other methods of online income like YouTube AdSense relate to these concepts?",
      answer: "Methods like YouTube AdSense and influencer marketing indicate interest in diverse income streams beyond affiliate marketing or dropshipping."
    }
  ]

  return (
    <section id="faq" className="py-20 pt-32 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-700 rounded-lg"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left transition-all duration-150 ease-linear"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-pink-500">{faq.question}</span>
                <motion.div
                  whileInView={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-pink-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-900">
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
