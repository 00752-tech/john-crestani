// 1. DEFINE ALL COMPONENTS FIRST
const ctaAffiliateLink = "https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro";

const CtaLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
  >
    {children}
  </Link>
);

const Section = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16 max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="prose prose-lg max-w-none text-gray-200 leading-relaxed">
      {content}
    </div>
  </motion.section>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    whileInView={{ opacity: 1, height: "auto" }}
    viewport={{ once: true }}
    className="mb-6 border border-gray-800 rounded-xl p-6 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300"
  >
    <h3 className="text-xl font-semibold mb-3 text-white">{question}</h3>
    <p className="text-gray-300 leading-relaxed">{answer}</p>
  </motion.div>
);

// 2. THEN MAIN COMPONENT
export default function WhereIsSASPro2025() {
  return (
    <article className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <main className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Where is Super Affiliate System Pro in 2025?
          <br />
          Get Exclusive Access + a Secret Discount to John Crestani's AI Marketing Club
        </motion.h1>

        {/* Intro */}
        <motion.p className="text-xl text-gray-300 mb-10 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Searching for Super Affiliate System Pro? John Crestani's legendary program is now exclusively inside the AI Marketing Club. 
          Discover 2025 access, what's new, and how to get an <strong>$800 SAS Pro discount!</strong>
        </motion.p>

        {/* Sections */}
        <Section title="The Evolution of SAS Pro" content={
          <>
            <p>For years, <strong>Super Affiliate System Pro</strong> (SAS Pro) was John Crestani's flagship training...</p>
            {/* Add your content */}
            <div className="text-center mt-6">
              <CtaLink href={ctaAffiliateLink}>Get Started with AI Marketing Club</CtaLink>
            </div>
          </>
        } />

        <Section title="Unlocking Super Affiliate System Pro" content={
          <>
            <p>Once inside AIMC, unlock an exclusive $800 discount on SAS Pro...</p>
            {/* Add your content */}
            <div className="text-center mt-6">
              <CtaLink href={ctaAffiliateLink}>Access SAS Pro ($800 OFF)</CtaLink>
            </div>
          </>
        } />

        <Section title="Frequently Asked Questions" content={
          <>
            <FaqItem question="Is SAS Pro still relevant?" answer="Absolutely..." />
            <FaqItem question="Can I buy SAS Pro standalone?" answer="No, it's exclusive to AIMC..." />
            {/* More FAQs */}
          </>
        } />

        {/* Final CTA */}
        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <CtaLink href={ctaAffiliateLink}>Start Your AI Affiliate Journey Now</CtaLink>
        </motion.div>
      </main>
    </article>
  );
}
