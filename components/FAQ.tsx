/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useEffect, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = useMemo(() => [
    {
      question: "Is John Crestani's Super Affiliate System Pro a scam?",
      answer: <>No, John Crestani's Super Affiliate System Pro is not a scam—it's a legitimate affiliate marketing training program with over 100,000 students since 2015. However, it's not a 'get-rich-quick' scheme. Success requires consistent effort, ad budget, and following the proven strategies taught in the course.</>
    },
    {
      question: "Are there free alternatives to John Crestani's course?",
      answer: <>Yes, but free alternatives lack live coaching calls, updated 2025 strategies, and done-for-you funnels. You can also explore our curated list of{' '}
        <a href="https://johncrestani.me/free-tools" target="_blank" rel="noopener" className="text-pink-400 underline">free affiliate marketing tools</a> to supplement your learning.</>
    },
    {
      question: "How can I estimate my affiliate marketing earnings?",
      answer: <>You can use our{' '}
        <a href="https://johncrestani.me/affiliate-marketing-tools/earnings-calculator" target="_blank" rel="noopener" className="text-pink-400 underline">Affiliate Earnings Calculator</a>{' '}
        to estimate your potential commissions based on your traffic and conversion rates.</>
    },
    {
      question: "How do I calculate dropshipping profits?",
      answer: <>Try our{' '}
        <a href="https://johncrestani.me/ecommerce-tools/dropshipping-profit-calculator" target="_blank" rel="noopener" className="text-pink-400 underline">Dropshipping Profit Calculator</a>{' '}
        to quickly estimate your net profit after costs.</>
    },
    {
      question: "How do I calculate ROAS for my ads?",
      answer: <>Our{' '}
        <a href="https://johncrestani.me/advertising-tools/roas-calculator" target="_blank" rel="noopener" className="text-pink-400 underline">ROAS Calculator</a>{' '}
        helps you determine your return on ad spend for any campaign.</>
    },
    {
      question: "How can I estimate YouTube ad revenue?",
      answer: <>Use our{' '}
        <a href="https://johncrestani.me/content-creation-tools/youtube-earnings-calculator" target="_blank" rel="noopener" className="text-pink-400 underline">YouTube Earnings Calculator</a>{' '}
        to estimate your potential ad revenue based on views and CPM.</>
    },
    {
      question: "Is there a tool for influencer earnings?",
      answer: <>Yes, our{' '}
        <a href="https://johncrestani.me/influencer-marketing-tools/earnings-calculator" target="_blank" rel="noopener" className="text-pink-400 underline">Influencer Earnings Calculator</a>{' '}
        lets you estimate how much you can earn from influencer campaigns.</>
    },
    {
      question: "How do I find a profitable affiliate niche?",
      answer: <>You can research niches and estimate profitability with our{' '}
        <a href="https://johncrestani.me/affiliate-marketing-tools/niche-profitability-calculator" target="_blank" rel="noopener" className="text-pink-400 underline">Niche Profitability Calculator</a>.</>
    },
    {
      question: "How do I optimize my affiliate links for higher CTR?",
      answer: <>Use our{' '}
        <a href="https://johncrestani.me/affiliate-marketing-tools/link-ctr-optimizer" target="_blank" rel="noopener" className="text-pink-400 underline">Link CTR Optimizer</a>{' '}
        to test and improve your link click-through rates.</>
    },
    {
      question: "Is Super Affiliate System good for beginners?",
      answer: <>It's designed for beginners but requires dedication to implement the strategies. You can supplement your learning with our{' '}
        <a href="https://johncrestani.me/free-tools" target="_blank" rel="noopener" className="text-pink-400 underline">free affiliate marketing tools</a>.</>
    },
    {
      question: "Why do people call John Crestani a scam?",
      answer: <>Most complaints come from users who expected overnight success, skipped the training, or ignored the recommended ad budget requirements. Less than 5% of students request refunds, which is below the industry average.</>
    },
    {
      question: "Has anyone made money with Super Affiliate System Pro?",
      answer: <>Yes. Verified students have reported profits like $12,000/month from ClickBank offers and $7,300/month promoting keto supplements. These results require strict adherence to the training.</>
    },
    {
      question: "How much does Super Affiliate System Pro cost?",
      answer: <>The 2025 program costs $997 (or 3 payments of $397). Email support@johncrestani.me to ask about occasional scholarships or discounts.</>
    },
    {
      question: "Is there affiliate marketing training near me?",
      answer: <>Forget searching for 'affiliate marketing courses near me.' With Super Affiliate System Pro, expert training is always near you—just a click away on any device. Our online platform brings world-class affiliate marketing education directly to you, wherever you are.</>
    },
    {
      question: "How can I find Super Affiliate System Pro near me?",
      answer: <>Super Affiliate System Pro is available online, making it accessible from anywhere. Whether you're at home, in a coffee shop, or traveling, you can access our comprehensive training program. It's like having a personal affiliate marketing mentor right next to you, 24/7.</>
    },
    {
      question: "Who is John Crestani?",
      answer: <>John Crestani is an American entrepreneur, affiliate marketer, and the founder of Super Affiliate System. He's known for his expertise in affiliate marketing and online wealth creation, transitioning from a corporate job to becoming a successful affiliate marketer.</>
    },
    {
      question: "What is the Super Affiliate System?",
      answer: <>The Super Affiliate System is a comprehensive training program designed to teach individuals how to succeed in affiliate marketing. It covers topics such as setting up an affiliate marketing business, choosing profitable niches, creating effective ads, leveraging social media and YouTube for marketing, and managing campaigns for optimal ROI.</>
    },
    {
      question: "What is John Crestani's net worth?",
      answer: <>John Crestani's net worth is estimated to be in the millions, primarily from affiliate marketing and his training programs.</>
    },
    {
      question: "Who is John Crestani's wife?",
      answer: <>John Crestani keeps his personal life private, and details about his wife are not publicly disclosed.</>
    },
    {
      question: "Where is John Crestani from?",
      answer: <>John Crestani is based in the United States, with past mentions of living in Los Angeles.</>
    },
    {
      question: "How old is John Crestani?",
      answer: <>His exact age isn't widely publicized, but he began his career in the early 2010s.</>
    },
    {
      question: "What is John Crestani known for?",
      answer: <>John Crestani is best known for his Super Affiliate System course and his success in affiliate marketing.</>
    },
    {
      question: "Has John Crestani been featured in major publications?",
      answer: <>Yes, John Crestani has been featured in publications like Forbes and Business Insider for his achievements in online marketing.</>
    },
    {
      question: "Does Super Affiliate System work with Amazon?",
      answer: <>Yes, SAS teaches strategies for Amazon affiliate marketing, among other platforms.</>
    },
    {
      question: "Can Super Affiliate System work without a website?",
      answer: <>While possible, SAS recommends building a website for long-term success.</>
    },
    {
      question: "What's the difference between SAS Pro and SAS 2.0?",
      answer: <>SAS Pro includes advanced modules and updated tactics for 2025 trends.</>
    },
    {
      question: "Does SAS offer a free trial?",
      answer: <>No, but John Crestani occasionally provides free webinars or mini-courses.</>
    },
    {
      question: "How long does it take to see results with SAS?",
      answer: <>Results vary, but most students need 3–6 months to generate consistent income.</>
    },
    {
      question: "Is there a refund policy for the Super Affiliate System?",
      answer: <>Yes, there is a 30-day money-back guarantee, allowing you to try the course risk-free.</>
    },
    {
      question: "What is included in the Super Affiliate System course?",
      answer: <>The course includes video modules, live webinars, downloadable resources, a private community, and ongoing updates.</>
    },
    {
      question: "Is the Super Affiliate System updated regularly?",
      answer: <>Yes, John Crestani updates the course content and resources to keep up with the latest affiliate marketing trends.</>
    },
    {
      question: "Are there any upsells or additional costs?",
      answer: <>There may be recommended tools and optional upsells, but they are not required for success with the main course.</>
    },
    {
      question: "Is the Super Affiliate System self-paced?",
      answer: <>Yes, you can complete the course at your own pace, with access to all materials after enrollment.</>
    },
    {
      question: "Is SAS better than Commission Hero?",
      answer: <>SAS focuses on paid traffic, while Commission Hero emphasizes organic methods. Choose based on your budget and preferred strategy.</>
    },
    {
      question: "Are there free affiliate marketing courses like SAS?",
      answer: <>Yes, free courses on Udemy, YouTube, or Google's affiliate marketing training can supplement SAS. You can also use our{' '}
        <a href="https://johncrestani.me/free-tools" target="_blank" rel="noopener" className="text-pink-400 underline">free affiliate marketing tools</a> to get started.</>
    },
    {
      question: "Is SAS worth the cost compared to free courses?",
      answer: <>SAS offers structured, step-by-step training and support, while free courses may lack personalized guidance and community.</>
    },
    {
      question: "What are some alternatives to Super Affiliate System?",
      answer: <>Alternatives include Commission Hero, Authority Hacker, and free resources on platforms like YouTube and Udemy.</>
    },
    {
      question: "How do I log in to Super Affiliate System Pro?",
      answer: <>Access the login portal via John Crestani's official website with your credentials.</>
    },
    {
      question: "What if Super Affiliate System isn't working for me?",
      answer: <>SAS offers support and a money-back guarantee if you don't see value.</>
    },
    {
      question: "Does SAS work internationally?",
      answer: <>Yes, but some ad platforms (e.g., Facebook Ads) may have country restrictions.</>
    },
    {
      question: "How can I contact Super Affiliate System support?",
      answer: <>You can contact support through the official website's helpdesk or by email after enrolling.</>
    },
    {
      question: "Are there live webinars or coaching calls?",
      answer: <>Yes, John Crestani hosts live weekly webinars and Q&amp;A sessions for students.</>
    },
    {
      question: "Is there a private community for SAS members?",
      answer: <>Yes, SAS includes access to a private community forum for networking and support.</>
    },
    {
      question: "Do I need prior marketing experience to join SAS?",
      answer: <>No prior experience is required; the course is beginner-friendly and covers foundational concepts.</>
    },
    {
      question: "Why is John Crestani criticized on Reddit?",
      answer: <>Some users claim his courses are overpriced or too sales-heavy, but others report success.</>
    },
    {
      question: "Is SAS a pyramid scheme?",
      answer: <>No, it's a legitimate training program focused on affiliate marketing, not multi-level marketing.</>
    },
    {
      question: "What are the biggest complaints about SAS?",
      answer: <>Common complaints include the course price, upsells, and the need for additional ad spend to see results.</>
    },
    {
      question: "Are there any success stories from real users?",
      answer: <>Yes, many students have reported earning substantial commissions after applying the course strategies.</>
    },
    {
      question: "Is Super Affiliate System worth it?",
      answer: <>For those committed to learning and implementing affiliate marketing, SAS provides comprehensive training and support, making it a worthwhile investment for many.</>
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
    <section id="faq" className="py-20 pt-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Frequently Asked Questions
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
        <div className="mt-12 text-center">
          <a
            href="https://a2678p91h18n0p26cka-9z8mee.hop.clickbank.net"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 shadow-lg hover:shadow-pink-500/20"
            rel="noopener noreferrer"
          >
            Find Super Affiliate System Pro Near Me: Click for Instant Access
          </a>
          <p className="mt-4 text-center text-gray-400">
            Start Your 'Near Me' Affiliate Journey: Enroll Now
          </p>
        </div>
      </div>
    </section>
  )
}
