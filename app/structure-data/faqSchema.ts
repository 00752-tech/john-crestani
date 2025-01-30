// app/structure-data/faqSchema.ts

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is John Crestani?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "John Crestani is a renowned internet entrepreneur and business coach, specializing in affiliate marketing and online business strategies. With years of experience in the digital marketing space, John has helped thousands of students build successful online businesses through his courses and mentorship programs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Super Affiliate System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Super Affiliate System is John Crestani's flagship course designed to teach individuals how to create and scale successful affiliate marketing businesses. This comprehensive program covers everything from niche selection and ad creation to traffic generation and conversion optimization. It includes step-by-step video lessons, live coaching calls, and a supportive community to help students achieve their online income goals."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results with the Super Affiliate System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Results can vary depending on factors such as dedication, prior experience, and niche selection. Many students report seeing their first sales within weeks of implementing the strategies taught in the course. However, building a sustainable and profitable affiliate marketing business typically takes several months of consistent effort and optimization."
      }
    }
  ]
};

export default faqSchema;
