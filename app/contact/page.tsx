// app/contact/page.tsx
import ClientContactPage from './ClientContactPage'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Contact Us | John Crestani - AI Marketing Club',
  description: 'Have questions about AI-powered affiliate marketing, predictable income, or the AI Marketing Club? Contact John Crestani directly via email for support and inquiries.',
}

export default function ContactPage() {
  const pageUrl = 'https://johncrestani.me/contact'

  return (
    <>
      {/* Schema Markup for ContactPage */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: pageUrl,
          name: "Contact John Crestani's AI Marketing Club",
          description: "Reach out to John Crestani's team for support, inquiries about AI-powered affiliate marketing, the AI Marketing Club, or predictable income strategies.",
          mainEntity: {
            '@type': 'Organization',
            name: "John Crestani's AI Marketing Club",
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'info@johncrestani.me',
              url: pageUrl,
              areaServed: 'Worldwide',
              availableLanguage: 'en',
            },
            sameAs: [
              'https://www.youtube.com/user/johncrestani',
              'https://www.facebook.com/johncrestani',
              'https://twitter.com/johncrestani',
              'https://www.instagram.com/johncrestani',
            ],
          },
        }}
      />
      <ClientContactPage />
    </>
  )
}
