// FAQ.tsx
'use client'
import { useState, useEffect, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = useMemo(() => [
    {
      question: "Is there affiliate marketing training near me?",
      answer: "Forget searching for 'affiliate marketing courses near me'. With Super Affiliate System Pro, expert training is always near you - just a click away on any device. Our online platform brings world-class affiliate marketing education directly to you, wherever you are."
    },
    {
      question: "How can I find Super Affiliate System Pro near me?",
      answer: "Super Affiliate System Pro is available online, making it accessible from anywhere. Whether you're at home, in a coffee shop, or traveling, you can access our comprehensive training program. It's like having a personal affiliate marketing mentor right next to you, 24/7."
    },
    // ... (other FAQ items)
  ], [])

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
          <button 
            onClick={() => window.location.href = "https://030acmty5ht2idhfbm9x2o1xc7.hop.clickbank.net/?cbpage=diroop&campaign=nearmecta"}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            Find Super Affiliate System Pro Near Me: Click for Instant Access
          </button>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Start Your &apos;Near Me&apos; Affiliate Journey: Enroll Now
        </p>
      </div>
    </section>
  )
}

// RelatedTools.tsx
import { Calculator } from 'lucide-react'
import { useEffect } from 'react'

const allTools = [
  {
    name: "Affiliate Earnings Calculator",
    description: "Estimate your potential affiliate marketing earnings.",
    url: "/affiliate-marketing-tools/earnings-calculator",
    icon: Calculator,
    category: "affiliate"
  },
  // ... (other tools remain unchanged)
]

interface RelatedToolsProps {
  currentToolUrl: string
  category: string
}

export default function RelatedTools({ currentToolUrl, category }: RelatedToolsProps) {
  const sameCategryTools = allTools.filter(tool => 
    tool.category === category && tool.url !== currentToolUrl
  )

  const otherTools = allTools.filter(tool => 
    tool.category !== category && tool.url !== currentToolUrl
  )

  const relatedTools = [...sameCategryTools, ...otherTools].slice(0, 3)

  useEffect(() => {
    const toolsSchemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": allTools.map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.name,
          "description": tool.description,
          "url": `https://yourwebsite.com${tool.url}`,
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(toolsSchemaData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="mt-12 bg-gray-900 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white">Access Your Success Toolkit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedTools.map((tool) => {
          const Icon = tool.icon
          return (
            <button 
              key={tool.name}
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.href = tool.url;
              }}
              className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors group text-left w-full"
            >
              <div className="flex items-center mb-2">
                <Icon className="w-6 h-6 text-pink-500 mr-2" />
                <h3 className="text-lg font-semibold group-hover:text-pink-500 transition-colors">
                  {tool.name}
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                {tool.description}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
