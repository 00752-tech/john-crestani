'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who is John Crestani?",
      answer: "John Crestani is an American entrepreneur, affiliate marketer, and the founder of Super Affiliate System. He's known for his expertise in affiliate marketing and online wealth creation, transitioning from a corporate job to becoming a successful affiliate marketer."
    },
    {
      question: "What is the Super Affiliate System?",
      answer: "The Super Affiliate System is a comprehensive training program designed to teach individuals how to succeed in affiliate marketing. It covers topics such as setting up an affiliate marketing business, choosing profitable niches, creating effective ads, leveraging social media and YouTube for marketing, and managing campaigns for optimal ROI."
    },
    {
      question: "Is Super Affiliate System Pro still relevant in 2025?",
      answer: "Yes, the system is continuously updated to reflect the latest trends and technologies in affiliate marketing. The 2025 version includes cutting-edge strategies for AI, blockchain, and emerging digital platforms."
    },
    {
      question: "How does the 2025 version differ from the original 2017 release?",
      answer: "While the core principles remain, the 2025 version has been extensively updated. It now includes AI-powered tools, blockchain affiliate strategies, advanced analytics, and tactics for new social media platforms that have emerged since 2017."
    },
    {
      question: "What does the Super Affiliate System course cover?",
      answer: "The course covers a wide range of topics including affiliate marketing strategies, ad buying, landing page optimization, product promotion, setting up a business, choosing profitable niches, creating effective ads, leveraging social media and YouTube for marketing, and managing campaigns for optimal ROI."
    },
    {
      question: "How much does the Super Affiliate System cost?",
      answer: "Pricing can vary over time and might include promotions or discounts. Typically, the basic version of the Super Affiliate System has been priced around $997, with more comprehensive versions or additional tools/services costing extra."
    },
    {
      question: "Are there any additional costs beyond the initial program fee?",
      answer: "Yes, additional costs might include tools (e.g., ClickFunnels, email marketing software), ad spending for campaigns, and possibly upsells within the program for advanced training or support."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course content or don't see results within the first month, you can request a full refund."
    },
    {
      question: "Do I get lifetime access to updates?",
      answer: "Yes, when you purchase Super Affiliate System Pro, you receive lifetime access to all future updates. This ensures that your affiliate marketing education stays current with the fast-paced digital world."
    },
    {
      question: "What kind of support does John Crestani offer to his students?",
      answer: "Support typically includes access to a community forum, live webinars, and sometimes one-on-one coaching (depending on the package purchased). The responsiveness and quality of support can vary."
    },
    {
      question: "Can I really make money with John Crestani's training?",
      answer: "Success varies widely among participants. While many have reported significant income, factors like dedication, the niche chosen, and market conditions greatly influence outcomes. It's important to set realistic expectations and be prepared to put in the necessary work."
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
