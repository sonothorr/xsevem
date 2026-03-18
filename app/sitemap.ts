import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://xsevem.com',
      lastModified: '2026-03-18T02:20:00.000Z',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
