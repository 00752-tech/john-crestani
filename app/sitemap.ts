import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://johncrestani.me/sitemap0.xml',
      lastModified: new Date('2026-01-15'),
    },
    {
      url: 'https://johncrestani.me/llms.txt',
      lastModified: new Date('2026-01-15'),
    },
    {
      url: 'https://johncrestani.me/llms-full.txt',
      lastModified: new Date('2026-01-15'),
    },
    {
      url: 'https://johncrestani.me/discovery.json',
      lastModified: new Date('2026-01-15'),
    }
  ]
}
