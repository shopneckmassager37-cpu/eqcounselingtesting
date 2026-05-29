import { MetadataRoute } from 'next'

const base = 'https://www.eqcounselingtesting.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/therapists`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/assessments`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/counseling`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/supervision`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/mediation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/rates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/forms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
