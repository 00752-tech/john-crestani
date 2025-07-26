export const metadata = {
  title: 'Affiliate Commission Calculator: Predict Profits Instantly',
  description: 'End affiliate earning uncertainty. Use our free AI-powered calculator to predict commissions, optimize campaigns, and scale your income faster with confidence.',
};

export default function Head() {
  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools/earnings-calculator';

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Super Affiliate System Pro",
    "description": "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program's core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community.",
    "url": "https://johncrestani.me/super-affiliate-system-pro",
    "provider": {
      "@type": "Organization",
      "name": "John Crestani",
      "url": "https://johncrestani.me"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://johncrestani.me/super-affiliate-system-pro",
      "priceCurrency": "USD",
      "price": "197",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "category": "Online Course"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT50H",
        "instructor": {
          "@type": "Person",
          "name": "John Crestani",
          "sameAs": [
            "https://linkedin.com/in/johncrestani",
            "https://instagram.com/johncrestani",
            "https://twitter.com/johncrestani"
          ]
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "John Crestani's AI Marketing Club & Super Affiliate System Pro Upgrade Offer",
    "description": "Get instant access to John Crestani's AI Marketing Club for just $27, and unlock the exclusive opportunity to upgrade to Super Affiliate System Pro for only $197 (original price: $997). This is the ultimate blueprint to future-proof your income and build genuine financial independence in the AI economy.",
    "url": "https://36833m53eb3x6kfb8ji15p2sc4.hop.clickbank.net/?&traffic_source=aff_mkt_erngs_calc_pg",
    "image": "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
    "brand": {
      "@type": "Brand",
      "name": "John Crestani"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://36833m53eb3x6kfb8ji15p2sc4.hop.clickbank.net/?&traffic_source=aff_mkt_erngs_calc_pg",
      "priceCurrency": "USD",
      "price": "27",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 60
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "550"
    },
    "isRelatedTo": {
      "@type": "Course",
      "name": "Super Affiliate System Pro",
      "url": "https://johncrestani.me/super-affiliate-system-pro"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title,
    url: pageUrl,
    description: metadata.description,
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
      { "@type": "ListItem", position: 2, name: "Affiliate Marketing Tools", item: "https://johncrestani.me/affiliate-marketing-tools" },
      { "@type": "ListItem", position: 3, name: "Affiliate Earnings Calculator", item: pageUrl }
    ]
  };

  const faqSchema = {
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
  };

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
