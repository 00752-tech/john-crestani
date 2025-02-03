'use client'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is there affiliate marketing training near me?",
      answer: "Forget searching for 'affiliate marketing courses near me'. With Super Affiliate System Pro, expert training is always near you - just a click away on any device. Our online platform brings world-class affiliate marketing education directly to you, wherever you are."
    },
    {
      question: "How can I find Super Affiliate System Pro near me?",
      answer: "Super Affiliate System Pro is available online, making it accessible from anywhere. Whether you're at home, in a coffee shop, or traveling, you can access our comprehensive training program. It's like having a personal affiliate marketing mentor right next to you, 24/7."
    },
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
      question: "How much does the Super Affiliate System cost?",
      answer: "Pricing can vary over time and might include promotions or discounts. Typically, the basic version of the Super Affiliate System has been priced around $997, with more comprehensive versions or additional tools/services costing extra."
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
      question: "Can I really make money with John Crestani's training?",
      answer: "Success varies widely among participants. While many have reported significant income, factors like dedication, the niche chosen, and market conditions greatly influence outcomes. It's important to set realistic expectations and be prepared to put in the necessary work."
    }
  ]

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

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
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-pink-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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
        <div className="mt-12 text-center">
          <a href="https://1bbc1ko45gi5ui658hhb5t7y82.hop.clickbank.net/?cbpage=diroop&campaign=dirsp1actfast" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300">
            Find Super Affiliate System Pro Near Me: Click for Instant Access
          </a>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Start Your &apos;Near Me&apos; Affiliate Journey: Enroll Now
        </p>
      </div>
    </section>
  )
}