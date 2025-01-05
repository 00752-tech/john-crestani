import Head from 'next/head'
import personSchema from './personSchema'
import websiteSchema from './websiteSchema'
import articleSchema from './articleSchema'
import reviewSchema from './reviewSchema'
import faqSchema from './faqSchema'

export default function StructuredData() {
  const schemas = [
    personSchema,
    websiteSchema,
    articleSchema,
    reviewSchema,
    faqSchema,
  ]

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  )
}
