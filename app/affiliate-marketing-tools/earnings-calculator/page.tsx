/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Head from 'next/head';
import { motion } from 'framer-motion';
import ShareButtons from '@/components/ShareButtons';
import { JsonLd } from 'react-schemaorg';
import ClientCalculatorPage from './ClientCalculatorPage';
import React from 'react';

export default function CalculatorPage() {
  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools/earnings-calculator';
  const pageTitle = 'Affiliate Commission Calculator: Predict Profits Instantly';
  const pageDescription =
    "End affiliate earning uncertainty. Use our free AI-powered calculator to predict commissions, optimize campaigns, and scale your income faster with confidence.";

  // Updated no-hover CTA button affiliate link as provided
  const ctaAffiliateLink = "https://36833m53eb3x6kfb8ji15p2sc4.hop.clickbank.net/?&traffic_source=aff_mkt_erngs_calc_pg";

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaAffiliateLink, "_blank", "noopener,noreferrer");
  };

  const productDescription =
    "Get instant access to John Crestani's AI Marketing Club for just $27, and unlock the exclusive opportunity to upgrade to Super Affiliate System Pro for only $197 (original price: $997). This is the ultimate blueprint to future-proof your income and build genuine financial independence in the AI economy.";

  const courseName = "Super Affiliate System Pro";
  const courseUrl = "https://johncrestani.me/super-affiliate-system-pro";
  const courseDescription =
    "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program's core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community.";
  const courseProviderName = "John Crestani";
  const courseProviderUrl = "https://johncrestani.me";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {/* WebPage schema with mainEntity SoftwareApplication */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          url: pageUrl,
          description: pageDescription,
          mainEntity: {
            "@type": "SoftwareApplication",
            name: "Affiliate Earnings Calculator",
            description:
              "Estimate your affiliate income by entering traffic, conversion, and commission numbers. Built for marketers who want clarity and ROI instantly, helping you predict exact earnings before spending ad dollars.",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            isAccessibleForFree: true,
            creator: {
              "@type": "Person",
              name: "John Crestani",
              sameAs: [
                "https://linkedin.com/in/johncrestani",
                "https://twitter.com/johncrestani",
                "https://instagram.com/johncrestani"
              ]
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          }
        }}
      />

      {/* BreadcrumbList schema */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
            { "@type": "ListItem", position: 2, name: "Affiliate Marketing Tools", item: "https://johncrestani.me/affiliate-marketing-tools" },
            { "@type": "ListItem", position: 3, name: "Affiliate Earnings Calculator", item: pageUrl }
          ]
        }}
      />

      {/* FAQPage schema */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I calculate affiliate earnings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Input your monthly traffic, conversion rate, and commission per sale. The calculator multiplies these to estimate your monthly income."
              }
            },
            {
              "@type": "Question",
              name: "Is this affiliate earnings calculator really free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, this calculator is completely free to use. We provide it as a valuable resource for affiliate marketers at all levels."
              }
            },
            {
              "@type": "Question",
              name: "How accurate is the affiliate earnings calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The calculator provides estimates based on the input values you provide. Actual earnings may vary depending on factors such as niche, product quality, marketing strategy, and market conditions."
              }
            },
            {
              "@type": "Question",
              name: "What is a good conversion rate for affiliate marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Conversion rates typically range from 1–5% in affiliate marketing, though this can vary significantly by niche and traffic quality. Some highly targeted campaigns can achieve even higher rates."
              }
            },
            {
              "@type": "Question",
              name: "How can I increase my affiliate marketing earnings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can increase earnings by improving traffic quality, optimizing conversion rates, choosing higher-commission products, and implementing effective marketing strategies. John Crestani's Super Affiliate System Pro teaches all these aspects in detail."
              }
            }
          ]
        }}
      />

      {/* Product schema for the CTA offer */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "John Crestani's AI Marketing Club & Super Affiliate System Pro Upgrade Offer",
          description: productDescription,
          url: ctaAffiliateLink,
          image: "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
          brand: {
            "@type": "Brand",
            name: "John Crestani"
          },
          offers: {
            "@type": "Offer",
            url: ctaAffiliateLink,
            priceCurrency: "USD",
            price: "27",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 60
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "550"
          },
          isRelatedTo: {
            "@type": "Course",
            name: courseName,
            url: courseUrl
          }
        }}
      />

      {/* Course schema for Super Affiliate System Pro */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: courseName,
          description: courseDescription,
          url: courseUrl,
          provider: {
            "@type": "Organization",
            name: courseProviderName,
            url: courseProviderUrl
          },
          offers: {
            "@type": "Offer",
            url: courseUrl,
            priceCurrency: "USD",
            price: "197",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            category: "Online Course"
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT50H",
            instructor: {
              "@type": "Person",
              name: "John Crestani",
              sameAs: [
                "https://linkedin.com/in/johncrestani",
                "https://instagram.com/johncrestani",
                "https://twitter.com/johncrestani"
              ]
            }
          }
        }}
      />

      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <style jsx global>{`
          .no-hover,
          .no-hover:hover,
          .no-hover:active,
          .no-hover:focus,
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

        <div className="container mx-auto px-4">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-tight"
          >
            End Affiliate Income Uncertainty. <br className="hidden sm:inline" />Predict Your Profits Now.
          </motion.h1>

          {/* Intro copy in Jon Benson style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center space-y-6 mb-12"
          >
            <p>Tired of launching affiliate campaigns blind?</p>

            <p>
              Our free, AI-powered <strong>Affiliate Earnings Calculator</strong> eliminates the guesswork, giving you <em>crystal-clear financial foresight</em>.
            </p>

            <p>Input your traffic, conversion rates, and commissions to instantly project your potential earnings.</p>

            <p>No more costly surprises. Just <strong>predictable profitability</strong> and the confidence to scale.</p>
          </motion.div>

          {/* Calculator Component */}
          <ClientCalculatorPage
            pageUrlPath="/affiliate-marketing-tools/earnings-calculator"
            backUrl="/affiliate-marketing-tools"
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center max-w-3xl mx-auto px-4"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text leading-snug">
              Calculated Your Future. Now, <br className="hidden sm:inline" />Build It With Certainty.
            </h2>

            <div className="text-xl text-gray-300 space-y-6 max-w-xl mx-auto leading-relaxed">
              <p>This calculator shows you what’s possible.</p>
              <p>
                The <em>Super Affiliate System Pro</em> shows you how to get there.
              </p>
              <p>
                Brought to you by John Crestani, this is the <strong>proven blueprint</strong> to future-proof your income.
              </p>
              <p>
                Get started today with <strong>John Crestani&apos;s AI Marketing Club</strong> for just <em>$27</em>.
              </p>
              <p>
                Then, unlock the full power: upgrade to <strong>Super Affiliate System Pro</strong> for only <em>$197</em> (<s>$997</s>).
              </p>
              <p>
                That&apos;s an <strong>$800 saving</strong>!
              </p>
              <p>
                Transform uncertainty into genuine financial independence in the AI economy.
              </p>
            </div>

            <button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-10 rounded-full text-xl font-bold mt-10 select-none"
              tabIndex={0}
              type="button"
              aria-label="Unlock My AI Income Blueprint Now!"
              style={{
                boxShadow: "none",
                textDecoration: "none",
                outline: "none",
                filter: "none",
                cursor: "pointer"
              }}
            >
              Unlock My AI Income Blueprint Now!
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <ShareButtons url={pageUrl} title={pageTitle} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
