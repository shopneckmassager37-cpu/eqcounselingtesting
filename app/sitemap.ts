import { MetadataRoute } from 'next'
import { therapists } from '@/lib/therapists'

const base = 'https://www.eqcounselingtesting.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/therapists`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...therapists.map((t) => ({
      url: `${base}/therapists/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${base}/assessments`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/counseling`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/supervision`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/mediation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/rates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/forms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
