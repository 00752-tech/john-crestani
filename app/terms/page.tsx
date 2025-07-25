import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'

const pageCanonicalUrl = 'https://johncrestani.me/terms-and-conditions';

export const metadata = {
  title: 'Terms & Conditions | Your Trust & Clarity at JohnCrestani.me',
  description:
    'Understand the clear terms and conditions governing your use of JohnCrestani.me. We value transparency to ensure your confidence and control in our partnership.',
  alternates: {
    canonical: pageCanonicalUrl,
  },
  openGraph: {
    title: 'Terms & Conditions | Your Trust & Clarity at JohnCrestani.me',
    description:
      'Understand the clear terms and conditions governing your use of JohnCrestani.me. We value transparency to ensure your confidence and control in our partnership.',
    url: pageCanonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Your Trust & Clarity at JohnCrestani.me',
    description:
      'Understand the clear terms and conditions governing your use of JohnCrestani.me. We value transparency to ensure your confidence and control in our partnership.',
  },
};

export default function TermsAndConditions() {
  const lastUpdatedDate = "July 24, 2025";

  return (
    <>
      {/* Schema Markup for WebPage */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": metadata.title,
          "description": metadata.description,
          "url": pageCanonicalUrl,
          "dateModified": lastUpdatedDate,
          "isPartOf": {
            "@type": "WebSite",
            "name": "JohnCrestani.me",
            "url": "https://johncrestani.me"
          }
        }}
      />

      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Terms and Conditions</h1>
          <div className="space-y-6 text-gray-300 text-lg">
            <p className="mb-4 text-center italic">Last updated: {lastUpdatedDate}</p>
            
            <p className="text-lg leading-relaxed">
              At JohnCrestani.me, we believe in <strong>clarity and mutual respect</strong>. These Terms and Conditions are designed to ensure a transparent and secure experience for everyone. By using our website, you agree to these terms, which establish the framework for your <strong>control</strong> over our services and your <strong>confidence</strong> in how we operate.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms – Your Foundation for Engagement</h2>
              <p>
                By accessing our website at JohnCrestani.me, you signify your agreement to be bound by these Terms of Service. This forms a clear understanding of our shared responsibilities, ensuring a fair and compliant environment for all users under applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Intellectual Property Rights – Protecting Shared Value</h2>
              <p>
                All content on JohnCrestani.me, excluding content you personally own, is the intellectual property of JohnCrestani.me and/or its licensors. We grant you a limited, non-transferable license solely for viewing and engaging with the valuable material on this Website. This protects the integrity and uniqueness of the resources provided to our community.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Restrictions – Maintaining a Secure &amp; Ethical Environment</h2>
              <p>To ensure a safe and productive environment for all users, specific restrictions apply to the use of Website material. These measures are in place to safeguard our content&apos;s value and prevent misuse, thereby protecting the integrity of our platform and community:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Publishing any Website material in any other media without permission</li>
                <li>Selling, sublicensing, or otherwise commercializing any Website material</li>
                <li>Publicly performing or showing any Website material</li>
                <li>Using this Website in any way that is or may be damaging to the Website&apos;s functionality or security</li>
                <li>Using this Website contrary to applicable laws and regulations, or in a way that causes harm to the Website, any person, or business entity</li>
                <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website</li>
                <li>Using this Website to engage in any advertising or marketing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Purchase Terms – Your Investment, Our Commitment</h2>
              <p>
                When you invest in our programs or services via JohnCrestani.me, you agree to the following transparent terms. We aim for clarity and fairness in all transactions, ensuring you have <strong>confidence</strong> in your purchase decisions:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>All sales are final unless otherwise specified, ensuring clear expectations</li>
                <li>You have 30 days to request a refund if you are not completely satisfied with your purchase, offering a period of <strong>reassurance</strong></li>
                <li>Access to the program is strictly for your personal use only, safeguarding value for all legitimate members</li>
                <li>Sharing or reselling access is prohibited to maintain the integrity and exclusivity of the program</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Disclaimer – Our Promise, Your Understanding</h2>
              <p>
                The materials and services on JohnCrestani.me&apos;s website are provided on an &apos;as is&apos; basis. While we strive for excellence, JohnCrestani.me makes no warranties, expressed or implied, and disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. This ensures clarity regarding liability and your understanding of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Limitations – Defining Boundaries for Mutual Protection</h2>
              <p>
                In no event shall JohnCrestani.me or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JohnCrestani.me&apos;s website. These limitations are defined to protect both parties and set clear boundaries of responsibility.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Contact Information – We&apos;re Here to Help</h2>
              <p>
                Your <strong>clarity and peace of mind</strong> are important to us. If you have any questions or require further understanding about these Terms and Conditions, please do not hesitate to reach out. We&apos;re committed to providing the answers you need:
              </p>
              <p>Email: <a href="mailto:info@johncrestani.me" className="text-pink-500 underline hover:text-pink-400">info@johncrestani.me</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
