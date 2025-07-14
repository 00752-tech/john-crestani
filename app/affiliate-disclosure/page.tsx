'use client';

import Head from 'next/head';

export default function AffiliateDisclosure() {
  const pageTitle = "Affiliate Disclosure | John Crestani's AI Marketers Club";
  const pageDescription =
    "Transparency is a core value at johncrestani.me. Learn how affiliate links support our mission, what we promote, and your choices as a visitor.";
  const pageUrl = "https://johncrestani.me/affiliate-disclosure";
  const ogImage = "https://johncrestani.me/hero_man_hat.webp";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={pageUrl} />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-16 sm:px-12 md:px-24 lg:px-32">
        <article className="max-w-4xl mx-auto">
          <header>
            <h1 className="text-4xl font-light mb-4 tracking-tight">📜 Affiliate Disclosure</h1>
            <p className="text-gray-400 mb-12">Last Updated: July 2025</p>
          </header>

          <section className="mb-12">
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold text-yellow-400">johncrestani.me</span>, transparency is a core value. We believe in earning your trust by being upfront about how this site operates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">💼 What You Should Know</h2>
            <p className="text-lg leading-relaxed mb-3">
              Some of the links on this website are affiliate links. This means that if you click on a link and make a purchase, we may earn a commission—at no additional cost to you.
            </p>
            <p className="text-lg leading-relaxed">
              We only promote products, services, and tools that we genuinely believe in and have either used ourselves or vetted thoroughly. Our goal is to recommend resources that help you build income online, not just to earn commissions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">🤝 Why We Use Affiliate Links</h2>
            <p className="text-lg leading-relaxed mb-4">
              Affiliate marketing allows us to keep this site running, create free content, and continue sharing strategies that help you escape the 9–5 grind. It’s how we fund the coffee, the hosting, and the late-night funnel testing.
            </p>
            <p className="text-lg leading-relaxed">
              We’re proud to be affiliates for programs like:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-lg text-yellow-400 font-semibold">
              <li>John Crestani’s AI Marketers Club</li>
              <li>SAS Pro System</li>
              <li>Other select tools and platforms that align with our mission</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">🧠 Your Choice Matters</h2>
            <p className="text-lg leading-relaxed mb-4">
              You’re never obligated to use our links. But when you do, it helps support this site and the work we put into it. We appreciate it more than you know.
            </p>
            <p className="text-lg leading-relaxed">
              If you have any questions about our affiliate relationships, feel free to contact us at{' '}
              <a href="mailto:info@johncrestani.me" className="text-yellow-400 underline hover:text-yellow-300">
                info@johncrestani.me
              </a>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
