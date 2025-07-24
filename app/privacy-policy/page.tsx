import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Privacy Policy | JohnCrestani.me - Your Data, Your Control',
  description:
    "Understand JohnCrestani.me's comprehensive Privacy Policy. Learn how we collect, use, and protect your personal information to ensure global compliance with GDPR, CCPA, and other privacy regulations.",
}

export default function PrivacyPolicy() {
  const pageUrl = 'https://johncrestani.me/privacy-policy'

  return (
    <>
      {/* Schema Markup for Privacy Policy WebPage */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy | JohnCrestani.me',
          description:
            'Comprehensive Privacy Policy for JohnCrestani.me, detailing data collection, usage, and user rights globally.',
          url: pageUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'JohnCrestani.me',
            url: 'https://johncrestani.me',
          },
          about: {
            '@type': 'Organization',
            name: "John Crestani's AI Marketing Club",
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'info@johncrestani.me',
            },
          },
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

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-300 text-lg">
            <p className="text-center italic">Last updated: July 24, 2025</p>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p>
                Welcome to JohnCrestani.me (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (JohnCrestani.me), including any related services, tools, or content (collectively, the &quot;Service&quot;). It also informs you about your privacy rights and how the law protects you, particularly in compliance with global regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance with this policy. Please read this Privacy Policy carefully to understand our practices regarding your data and how we will treat it. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            {/* 2. Contact Details */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Contact Details</h2>
              <p>
                If you have any questions about this Privacy Policy, our privacy practices, or wish to exercise your legal rights, please contact us at:
              </p>
              <p>
                <strong>Email: </strong>
                <a
                  href="mailto:info@johncrestani.me"
                  className="text-purple-400 hover:underline"
                  aria-label="Email info@johncrestani.me"
                >
                  info@johncrestani.me
                </a>
              </p>
              <p>
                Please note that for security purposes and to protect your privacy, we may need to verify your identity before processing any requests related to your personal data.
              </p>
            </section>

            {/* 3. Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you. This data is generally categorized as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Identity Data:</strong> Includes first name, last name, username, or similar identifier. We collect this primarily when you register for services, sign up for newsletters, or interact with personalized features.
                </li>
                <li>
                  <strong>Contact Data:</strong> Email address, essential for communication and account management.
                </li>
                <li>
                  <strong>Technical Data:</strong> Your IP address, browser type and version, location, operating system, and platform details. Used for service delivery and security.
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our Service, including pages viewed and link clicks. Used to improve user experience.
                </li>
                <li>
                  <strong>Marketing and Communications Data:</strong> Your preferences regarding marketing communications.
                </li>
                <li>
                  <strong>Affiliate Data:</strong> Includes tracking information like traffic_source parameters from affiliate programs (e.g., ClickBank). Typically pseudonymous or aggregated for marketing attribution.
                </li>
              </ul>
              <p>
                We do not collect Special Categories of Personal Data or information about criminal convictions and offenses.
              </p>
            </section>

            {/* 4. How We Collect Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. How We Collect Your Information</h2>
              <p>
                We collect data mainly through:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Direct interactions:</strong> Completing forms, contacting support, subscribing, or opting into communications.</li>
                <li><strong>Automated technologies:</strong> Cookies, server logs, and tracking technologies while browsing our site.</li>
                <li><strong>Third parties:</strong> Affiliate networks, analytics providers, and public sources.</li>
              </ul>
            </section>

            {/* 5. How We Use Your Information (Purposes and Legal Basis) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. How We Use Your Information (Purposes and Legal Basis)</h2>
              <p>
                We use your personal data in line with applicable laws, commonly for:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Service provision and maintenance</strong> (legal basis: contract performance)</li>
                <li><strong>Customer support and updates</strong> (legal basis: contract performance or legitimate interests)</li>
                <li><strong>Improving services and website</strong> (legal basis: legitimate interests)</li>
                <li><strong>Marketing and promotional communications</strong> (legal basis: consent or legitimate interests)</li>
                <li><strong>Affiliate tracking and attribution</strong> (legal basis: legitimate interests)</li>
                <li><strong>Security and fraud prevention</strong> (legal basis: legitimate interests)</li>
              </ul>
            </section>

            {/* 6. Disclosure of Your Personal Data */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Disclosure of Your Personal Data</h2>
              <p>We may share your data with:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Service providers for IT, analytics, and marketing</li>
                <li>Affiliate networks to track and attribute sales</li>
                <li>Legal authorities if required by law or to protect rights</li>
                <li>In case of business transfers like mergers or acquisitions</li>
              </ul>
              <p>We do not sell your personal data.</p>
            </section>

            {/* 7. International Data Transfers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. International Data Transfers</h2>
              <p>
                Your data may be transferred and processed outside your jurisdiction. We ensure any such transfers are protected by appropriate measures (including Standard Contractual Clauses where applicable).
              </p>
            </section>

            {/* 8. Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Data Security</h2>
              <p>
                We implement security measures to protect your data but remind you that no internet transmission is guaranteed 100% secure.
              </p>
            </section>

            {/* 9. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Data Retention</h2>
              <p>
                We retain personal data only as long as required to fulfill legal or business obligations.
              </p>
            </section>

            {/* 10. Cookies and Tracking Technologies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">10. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies to improve your experience, including essential, performance, functionality, and advertising cookies, including affiliate tracking. You can manage cookie preferences in your browser.
              </p>
            </section>

            {/* 11. Your Legal Rights (Global) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">11. Your Legal Rights (Global)</h2>
              <p>
                You may have rights including access, correction, erasure, restriction, objection, data portability, and withdrawing consent. Contact us to exercise these rights.
              </p>
            </section>

            {/* 12. California Privacy Rights (CCPA/CPRA) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">12. California Privacy Rights (CCPA/CPRA)</h2>
              <p>
                California residents have rights to access, delete, and opt out of the sale/sharing of personal data. We do not sell your data but may share it for affiliate marketing attribution.
              </p>
              <p>
                Contact us to exercise your rights.
              </p>
            </section>

            {/* 13. Children’s Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">13. Children’s Privacy</h2>
              <p>
                Our Service is not directed to children under 18. We do not knowingly collect personal data from minors and take steps to remove such data if discovered.
              </p>
            </section>

            {/* 14. Links to Other Websites */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">14. Links to Other Websites</h2>
              <p>
                Our site may contain links to third-party sites. We are not responsible for their content or privacy practices. Review their policies before providing personal information.
              </p>
            </section>

            {/* 15. Changes to This Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">15. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Updates will be posted here with the revised date. We encourage you to review the policy regularly.
              </p>
            </section>

            {/* 16. Your Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">16. Your Responsibilities</h2>
              <p>
                While we protect your data, please do not share sensitive information over insecure channels. Always use secure environments when accessing our services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
