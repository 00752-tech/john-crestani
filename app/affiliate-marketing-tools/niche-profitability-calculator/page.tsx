/* eslint-disable @typescript-eslint/no-explicit-any */'use client';

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { JsonLd } from 'react-schemaorg';
import ShareButtons from '@/components/ShareButtons';

function calculateProfitability(
  averageSalesPerMonth: number,
  averageSaleValue: number,
  averageCommissionRate: number,
  averageProfitMargin: number
) {
  return (
    averageSalesPerMonth *
    averageSaleValue *
    (averageCommissionRate / 100) *
    (averageProfitMargin / 100)
  );
}

export default function NicheProfitabilityCalculator() {
  const backUrl = '/affiliate-marketing-tools';
  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools/niche-profitability-calculator';
  const [averageSalesPerMonth, setAverageSalesPerMonth] = useState(0);
  const [averageSaleValue, setAverageSaleValue] = useState(0);
  const [averageCommissionRate, setAverageCommissionRate] = useState(0);
  const [averageProfitMargin, setAverageProfitMargin] = useState(0);
  const [estimatedMonthlyProfit, setEstimatedMonthlyProfit] = useState<number | null>(null);

  const canCalculate =
    averageSalesPerMonth > 0 &&
    averageSaleValue > 0 &&
    averageCommissionRate > 0 &&
    averageProfitMargin > 0;

  const handleCalculate = () => {
    if (!canCalculate) return;
    const profit = calculateProfitability(
      averageSalesPerMonth,
      averageSaleValue,
      averageCommissionRate,
      averageProfitMargin
    );
    setEstimatedMonthlyProfit(profit);
  };

  const handleReset = () => {
    setAverageSalesPerMonth(0);
    setAverageSaleValue(0);
    setAverageCommissionRate(0);
    setAverageProfitMargin(0);
    setEstimatedMonthlyProfit(null);
  };

  const ctaAffiliateLink =
    'https://15216xc6f12w0y8h3ogafrfva3.hop.clickbank.net/?&traffic_source=niche_prof_calc_pg';

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaAffiliateLink, '_blank', 'noopener,noreferrer');
  };

  // SEO meta
  const pageTitle = 'Niche Profitability Calculator: End Uncertainty, Predict Earnings'; // 57 chars
  const pageDesc =
    'Stop guessing! Our free AI-powered calculator helps you confidently identify profitable affiliate niches, ensuring predictable earnings & avoiding costly mistakes.'; // 150 chars

  const productDescription =
    "Get instant access to John Crestani's AI Marketing Club for just $27, and unlock the exclusive opportunity to upgrade to Super Affiliate System Pro for only $197 (original price: $997). This is the ultimate blueprint to future-proof your income and build genuine financial independence in the AI economy.";

  const courseName = 'Super Affiliate System Pro';
  const courseUrl = 'https://johncrestani.me/super-affiliate-system-pro';
  const courseDescription =
    "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program's core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community.";
  const courseProviderName = 'John Crestani';
  const courseProviderUrl = 'https://johncrestani.me';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Head>

      {/* Global no-hover styling for affiliate button */}
      <style jsx global>{`
        .no-hover,
        .no-hover:hover,
        .no-hover:focus,
        .no-hover:active,
        .no-hover:visited {
          background: linear-gradient(to right, #ec4899, #a21caf) !important;
          color: #fff !important;
          outline: none;
          box-shadow: none !important;
          text-decoration: none !important;
          cursor: pointer !important;
          transition: none !important;
          filter: none !important;
          opacity: 1 !important;
        }
      `}</style>

      {/* Structured data — WebPage with SoftwareApplication */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: pageTitle,
          url: pageUrl,
          description: pageDesc,
          mainEntity: {
            '@type': 'SoftwareApplication',
            name: 'Niche Profitability Calculator',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            operatingSystem: 'Any',
            description:
              'Eliminate market uncertainty and confidently identify the most lucrative affiliate marketing niches. Our free AI-powered calculator helps you estimate true profit potential, ensuring predictable earnings and avoiding costly ventures.',
            creator: {
              '@type': 'Person',
              name: 'John Crestani',
              sameAs: [
                'https://linkedin.com/in/johncrestani',
                'https://twitter.com/johncrestani',
                'https://instagram.com/johncrestani',
              ],
            },
            featureList: [
              'Input average sales per month',
              'Define average sale value',
              'Set commission rate and profit margin',
              'Calculate estimated monthly profit quickly',
            ],
            softwareHelp: {
              '@type': 'CreativeWork',
              name: 'How to Use This Calculator',
              text: 'Input your estimated sales, sale value, commission rate, and profit margin percentages, then calculate to estimate your monthly profit.',
            },
          },
        }}
      />

      {/* BreadcrumbList */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://johncrestani.me',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Affiliate Marketing Tools',
              item: 'https://johncrestani.me/affiliate-marketing-tools',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Niche Profitability Calculator',
              item: pageUrl,
            },
          ],
        }}
      />

      {/* FAQPage */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How accurate is the Niche Profitability Calculator?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'The calculator provides estimates based on the data you input. Its accuracy depends on the realism of your average sales, sale value, commission rate, and profit margin. It’s a powerful tool to guide your decisions and reduce uncertainty, but real-world results can vary.',
              },
            },
            {
              '@type': 'Question',
              name: "What if I'm not sure what niche to choose?",
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  "Many aspiring affiliates struggle with niche selection. Our calculator helps you quantify potential, but finding genuinely profitable, sustainable niches and knowing how to monetize them is a skill. John Crestani's AI Marketing Club provides the advanced AI tools and proven strategies to confidently identify lucrative niches and build predictable income streams from scratch.",
              },
            },
            {
              '@type': 'Question',
              name: 'Can this calculator help me avoid wasting time on unprofitable niches?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  "Absolutely. By providing a clear financial projection, this calculator allows you to quickly assess a niche's potential before investing significant time and resources. It's designed to help you make data-driven decisions, eliminating the guesswork and reducing the risk of costly mistakes.",
              },
            },
            {
              '@type': 'Question',
              name: 'How can I find my niche?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  "To find your niche, consider your passions, expertise, market demand, and competition. Use tools like keyword research and competitive analysis to identify underserved areas. John Crestani's Super Affiliate System Pro provides advanced strategies and tools to help you pinpoint highly profitable niches quickly and efficiently.",
              },
            },
            {
              '@type': 'Question',
              name: 'What makes a niche profitable?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  "A profitable niche typically has strong demand, a clear problem that needs solving, products or services with good commission rates, and an audience willing to spend. It's also important to consider the level of competition and your ability to stand out.",
              },
            },
          ],
        }}
      />

      {/* Product schema for the CTA offer */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: "John Crestani's AI Marketing Club & Super Affiliate System Pro Upgrade Offer",
          description: productDescription,
          url: ctaAffiliateLink,
          image: 'https://johncrestani.me/new_super_affiliate_system_pro_2025.webp',
          brand: {
            '@type': 'Brand',
            name: 'John Crestani',
          },
          offers: {
            '@type': 'Offer',
            url: ctaAffiliateLink,
            priceCurrency: 'USD',
            price: '27',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 60,
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '550',
          },
          isRelatedTo: {
            '@type': 'Course',
            name: courseName,
            url: courseUrl,
          },
        }}
      />

      {/* Course schema for Super Affiliate System Pro */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: courseName,
          description: courseDescription,
          url: courseUrl,
          provider: {
            '@type': 'Organization',
            name: courseProviderName,
            url: courseProviderUrl,
          },
          offers: {
            '@type': 'Offer',
            url: courseUrl,
            priceCurrency: 'USD',
            price: '197',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            category: 'Online Course',
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'PT50H',
            instructor: {
              '@type': 'Person',
              name: 'John Crestani',
              sameAs: [
                'https://linkedin.com/in/johncrestani',
                'https://instagram.com/johncrestani',
                'https://twitter.com/johncrestani',
              ],
            },
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white pt-32 pb-20"
      >
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 max-w-3xl"
        >
          {/* Back Link */}
          <Link href={backUrl} className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4"
          >
            Conquer Market Uncertainty:<br />
            Your AI-Powered Niche Profitability &amp; Predictability Calculator
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-center mb-12 text-gray-300"
          >
            Are you <strong>nervous about picking the wrong niche</strong> and wasting time or money? Eliminate the guesswork! Our free,&nbsp;
            <strong>AI-powered Niche Profitability Calculator</strong> gives you the <strong>clarity and confidence</strong> to accurately assess market potential.&nbsp;
            Quickly estimate the true profitability of your affiliate marketing niche to <strong>identify lucrative opportunities</strong> and <strong>ensure predictable earnings</strong> from your campaigns, letting you <strong>invest your efforts with certainty</strong>.
          </motion.p>

          {/* Calculator Form */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gray-900 p-8 rounded-lg mb-10">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleCalculate();
              }}
              className="space-y-6"
            >
              {[
                {
                  id: 'averageSalesPerMonth',
                  label: 'Average Sales per Month',
                  type: 'number',
                  value: averageSalesPerMonth,
                  onChange: (val: number) => setAverageSalesPerMonth(val),
                  placeholder: 'e.g. 100',
                  min: 0,
                },
                {
                  id: 'averageSaleValue',
                  label: 'Average Sale Value ($)',
                  type: 'number',
                  value: averageSaleValue,
                  onChange: (val: number) => setAverageSaleValue(val),
                  placeholder: 'e.g. 50.00',
                  min: 0,
                  step: 0.01,
                },
                {
                  id: 'averageCommissionRate',
                  label: 'Average Commission Rate (%)',
                  type: 'number',
                  value: averageCommissionRate,
                  onChange: (val: number) => setAverageCommissionRate(val),
                  placeholder: 'e.g. 10',
                  min: 0,
                  max: 100,
                  step: 0.1,
                },
                {
                  id: 'averageProfitMargin',
                  label: 'Average Profit Margin (%)',
                  type: 'number',
                  value: averageProfitMargin,
                  onChange: (val: number) => setAverageProfitMargin(val),
                  placeholder: 'e.g. 40',
                  min: 0,
                  max: 100,
                  step: 0.1,
                },
              ].map(({ id, label, type, value, onChange, placeholder, min, max, step }) => (
                <div key={id}>
                  <label htmlFor={id} className="block mb-2 font-semibold text-pink-500">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    min={min}
                    max={max}
                    step={step}
                    placeholder={placeholder}
                    className="w-full rounded-md border border-gray-700 bg-black p-3 text-white"
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    required
                  />
                </div>
              ))}

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={!canCalculate}
                  className="flex-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Calculate Profitability
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 rounded-full border border-pink-500 py-3 font-semibold text-pink-500 hover:bg-pink-500 hover:text-black transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </motion.div>

          {/* Result Display */}
          {estimatedMonthlyProfit !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-pink-500 rounded-lg p-6 text-black font-semibold text-center text-xl mb-12"
            >
              Estimated Monthly Profit: ${estimatedMonthlyProfit.toFixed(2)}
            </motion.div>
          )}

          {/* How to Use This Calculator Section */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gray-900 p-8 rounded-lg mb-10">
            <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl font-semibold mb-4 text-white">
              Gain Clarity Instantly: How to Use This Calculator
            </motion.h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Estimate the average number of sales you expect to make per month in your niche.</li>
              <li>Enter the average sale value (price) for each sale.</li>
              <li>Input the typical commission rate percentage you earn per sale.</li>
              <li>Enter the profit margin percentage to factor in your costs and expenses.</li>
              <li>Click &quot;Calculate Profitability&quot; to see your estimated monthly profit.</li>
            </ol>
          </motion.div>

          {/* CTA Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gray-900 p-8 rounded-lg">
            <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-2xl font-semibold mb-4 text-white">
              Beyond Niche Selection: Secure Your Predictable AI Income
            </motion.h2>
            <p className="text-gray-300 mb-4">
              Knowing your niche potential is powerful, but true <strong>financial freedom and stability</strong> come from having a proven blueprint to consistently generate high-ticket income. John Crestani&apos;s AI Marketing Club (SAS Pro) provides the step-by-step system to <strong>confidently navigate the AI economy, eliminate guesswork</strong>, and <strong>future-proof your career</strong>. Learn how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                'Identify and validate profitable niches with cutting-edge AI insights.',
                'Craft high-converting campaigns effortlessly with AI tools, ensuring consistent engagement and sales.',
                'Scale your affiliate business with confidence, building a long-term asset that provides stability.',
                'Diversify your income streams for true financial freedom, moving beyond single points of failure.',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                >
                  <strong>{item}</strong>
                </motion.li>
              ))}
            </ul>
            <motion.button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold select-none"
              tabIndex={0}
              type="button"
              aria-label="Unlock My Predictable AI Income Blueprint Now!"
              style={{ boxShadow: 'none', textDecoration: 'none', outline: 'none', filter: 'none', cursor: 'pointer' }}
            >
              Unlock My Predictable AI Income Blueprint Now!
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Social share buttons */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-16 max-w-3xl mx-auto">
          <ShareButtons url={pageUrl} title={pageTitle} />
        </motion.div>
      </motion.div>
    </>
  );
}
