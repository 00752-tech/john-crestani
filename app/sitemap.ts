import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://johncrestani.me',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/affiliate-marketing-tools',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/affiliate-marketing-tools/earnings-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/affiliate-marketing-tools/niche-profitability-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/affiliate-marketing-tools/link-ctr-optimizer',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/financial-tools/investment-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/ecommerce-tools/dropshipping-profit-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/advertising-tools/roas-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/influencer-marketing-tools/earnings-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://johncrestani.me/content-creation-tools/youtube-earnings-calculator',
      lastModified: new Date(),
    },
    // Add more actual page URLs below as you create them:
    // {
    //   url: 'https://johncrestani.me/contact',
    //   lastModified: new Date(),
    // },
    // {
    //   url: 'https://johncrestani.me/privacy-policy',
    //   lastModified: new Date(),
    // },
  ]
}
