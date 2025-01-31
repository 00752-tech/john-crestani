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
    // ... (other FAQ items)
  ]

  useEffect(() => {
    const faqSchemaData = {
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

    const nearMeSchemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Super Affiliate System Pro",
      "description": "Comprehensive affiliate marketing training program available online",
      "url": "https://superaffiliatesystempro.com",
      "telephone": "+1-800-123-4567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Online Ave",
        "addressLocality": "Internet City",
        "addressRegion": "CA",
        "postalCode": "90210",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.0522",
        "longitude": "-118.2437"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/superaffiliatesystempro",
        "https://twitter.com/saspro",
        "https://www.instagram.com/superaffiliatesystempro"
      ],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "34.0522",
          "longitude": "-118.2437"
        },
        "geoRadius": "5000"
      },
      "priceRange": "$$"
    }

    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.text = JSON.stringify(faqSchemaData)
    document.head.appendChild(faqScript)

    const nearMeScript = document.createElement('script')
    nearMeScript.type = 'application/ld+json'
    nearMeScript.text = JSON.stringify(nearMeSchemaData)
    document.head.appendChild(nearMeScript)

    return () => {
      document.head.removeChild(faqScript)
      document.head.removeChild(nearMeScript)
    }
  }, [faqs])

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
          <a 
            href="https://1bbc1ko45gi5ui658hhb5t7y82.hop.clickbank.net/?cbpage=diroop&campaign=dirsp1actfast" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">
              Find Super Affiliate System Pro Near Me: Click for Instant Access
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Start Your &apos;Near Me&apos; Affiliate Journey: Enroll Now
        </p>
      </div>
    </section>
  )
}
