'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React from 'react'

type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        question: "How is the AI Marketers Club unique compared to other affiliate marketing systems?",
        answer: (
          <>
            AI Marketers Club leverages advanced AI marketing automation and John Crestani&rsquo;s exclusive &ldquo;balloon method&rdquo; with the F.I.R. (Facts, Instructions, Rules) prompt formula. This allows members to build scalable affiliate campaigns, <strong>giving you the control and predictability you seek</strong>, even with no prior experience or technical skills, using a proven, step-by-step approach.
          </>
        ),
      },
      {
        question: "Who should consider joining the AI Marketers Club?",
        answer: (
          <>
            This program is tailored for professionals, entrepreneurs, and anyone seeking <strong>true financial freedom and a renewed sense of purpose</strong> through digital marketing and AI-powered content creation. Whether you&apos;re a beginner or looking to diversify income streams <strong>without the usual grind</strong>, the Club is designed to help you earn $150,000&ndash;$200,000 annually without traditional business risks.
          </>
        ),
      },
      {
        question: "Do I need expensive software or advanced tools to get started?",
        answer: (
          <>
            No, absolutely not. The required tools are affordable and beginner-friendly, specifically chosen to <strong>remove any tech stress</strong>. The recommended tech stack costs about $14/month, covering essential web hosting and AI image generation. Most text and video AI tools used in the system also offer robust free plans, making this powerful system <strong>truly accessible for anyone</strong>.
          </>
        ),
      },
      {
        question: "Is this just another online business or does it offer something different?",
        answer: (
          <>
            Unlike starting a business from scratch, which often involves high risk and uncertainty, AI Marketers Club focuses on promoting established products and companies using AI-driven affiliate marketing. This <strong>significantly reduces your risk</strong> and provides a more <strong>predictable path to earn commissions</strong> from day one, without the need to develop your own products or services or deal with typical business headaches.
          </>
        ),
      },
      {
        question: "How much time do I need to dedicate daily?",
        answer: (
          <>
            Most members spend just 30&ndash;60 minutes per day. The system is specifically optimized for <strong>maximum efficiency</strong>, cutting out busywork and allowing you to <strong>reclaim your valuable time and focus</strong> on high-impact, AI-powered marketing activities. This makes it ideal for busy professionals or side hustlers looking for <strong>real control over their schedule</strong>.
          </>
        ),
      },
      {
        question: "Can I succeed if I have no marketing or technical background?",
        answer: (
          <>
            Absolutely. The AI Marketers Club is specifically designed for total beginners, ensuring <strong>no prior marketing or technical background is needed</strong>. The training breaks down complex strategies into simple, actionable steps, with full support and a vibrant, welcoming community to help you every step of the way, guiding you to <strong>confident success</strong>.
          </>
        ),
      },
      {
        question: "What kind of results can I expect from the AI Marketers Club?",
        answer: (
          <>
            While individual progress varies, members consistently report rapid progress and significant, <strong>predictable earnings</strong>. The Club features numerous testimonials from diverse backgrounds, showcasing real-world success with AI-driven affiliate marketing that demonstrates <strong>a clear path to results</strong>.
          </>
        ),
      },
      {
        question: "How is this program different from other marketing courses?",
        answer: (
          <>
            AI Marketers Club stands out with its focus on practical education, complete transparency, and the <strong>freedom to build a business on your terms</strong>. You’ll get access to exclusive mentorship, personalized support, and a system that simplifies AI content creation and affiliate marketing for everyone, <strong>removing the overwhelm and putting you in direct control</strong>.
          </>
        ),
      },
      {
        question: "What if I don’t see immediate results?",
        answer: (
          <>
            Progress can vary, but you&apos;re never alone. Ongoing support, comprehensive resources, and a strong, active community are always provided to help you overcome challenges and achieve breakthroughs at your own pace. The Club is deeply committed to your long-term success, helping you build a <strong>predictable and resilient digital marketing career</strong>.
          </>
        ),
      },
      {
        question: "How do I join the AI Marketers Club?",
        answer: (
          <>
            Joining is simple and secure! Just click any sign-up button on this page, enter your email, and complete the secure registration. You’ll receive instant access to all <strong>powerful training materials, valuable bonuses, and the supportive private community</strong>, putting you on the fast track to your AI income journey.
          </>
        ),
      },
      {
        question: "Is there a money-back guarantee?",
        answer: (
          <>Yes! The AI Marketers Club offers a 60-day risk-free refund policy, so you can try the program with confidence and no financial risk.</>
        ),
      },
      {
        question: "Can I promote the AI Marketers Club as an affiliate?",
        answer: (
          <>Definitely. Affiliates earn up to 90% commissions on the entire funnel, including the main course, upsells, and high-ticket mentorships. Apply through ClickBank and request a commission increase for top performance.</>
        ),
      },
      {
        question: "Where can I see real user reviews and testimonials?",
        answer: (
          <>Visit the official review page or search &ldquo;AI Marketers Club reviews 2025&rdquo; to find independent feedback, bonus breakdowns, and case studies from actual members.</>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    function extractText(node: React.ReactNode): string {
      if (typeof node === "string") return node;
      if (typeof node === "number") return node.toString();
      if (Array.isArray(node)) return node.map(extractText).join(" ");
      if (React.isValidElement(node)) return extractText(node.props.children);
      return "";
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: extractText(faq.answer),
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return (
    <section id="ai-faq" className="py-20 pt-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          AI Marketers Club &ndash; Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
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
  );
}
