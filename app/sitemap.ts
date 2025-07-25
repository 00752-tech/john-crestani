import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johncrestani.me';
  const now = new Date().toISOString();

  const paths = [
    '',
    'affiliate-marketing-tools',
    'affiliate-marketing-tools/earnings-calculator',
    'affiliate-marketing-tools/niche-profitability-calculator',
    'affiliate-marketing-tools/link-ctr-optimizer',

    // Add Super Affiliate System Pro here:
    'super-affiliate-system-pro',

    'financial-tools/investment-calculator',
    'ecommerce-tools/dropshipping-profit-calculator',
    'advertising-tools/roas-calculator',
    'influencer-marketing-tools/earnings-calculator',
    'content-creation-tools/youtube-earnings-calculator',
    'contact',
    'privacy-policy',
    'affiliate-disclosure',
  ];

  return paths.map((path) => ({
    url: path ? `${baseUrl}/${path}` : `${baseUrl}/`,
    lastModified: now,
  }));
}
