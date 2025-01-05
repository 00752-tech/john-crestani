const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is John Crestani?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "John Crestani is an internet entrepreneur and business coach known for his expertise in affiliate marketing and online business strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Super Affiliate System?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Super Affiliate System is John Crestani's comprehensive course that teaches individuals how to build successful affiliate marketing businesses.",
      },
    },
  ],
};

export default faqSchema;
