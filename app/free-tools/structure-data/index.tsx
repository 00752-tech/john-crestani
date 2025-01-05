import Head from 'next/head'
import toolsPageSchema from './toolsPageSchema'
import toolsListSchema from './toolsListsSchema'

export default function FreeToolsStructuredData() {
  const schemas = [toolsPageSchema, toolsListSchema]

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
