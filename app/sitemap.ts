import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johncrestani.me'
  const pages = [
    '',
    'affiliate-marketing-tools',
    'affiliate-marketing-tools/earnings-calculator',
    'affiliate-marketing-tools/niche-profitability-calculator',
    'affiliate-marketing-tools/link-ctr-optimizer',
    'financial-tools/investment-calculator',
    'ecommerce-tools/dropshipping-profit-calculator',
    'advertising-tools/roas-calculator',
    'influencer-marketing-tools/earnings-calculator',
    'content-creation-tools/youtube-earnings-calculator',
    'contact',
    'privacy-policy'
  ]

  const now = new Date()

  return pages.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: now,
  }))
}
