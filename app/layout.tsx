import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ScrollRevealScript from '@/components/ScrollRevealScript'
import ScrollProgress from '@/components/ScrollProgress'
import DevWidget from '@/components/DevWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const siteUrl = 'https://www.eqcounselingtesting.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | EQ Counseling & Testing',
    default: 'EQ Counseling & Testing | Mental Health Services in Orlando, FL',
  },
  description:
    'Professional counseling, psychological evaluations, supervision, and mediation in Orlando, FL. Serving Orange and Seminole counties since 2012. Licensed therapists, solution-focused approach.',
  keywords: [
    'counseling Orlando FL',
    'therapy Orlando',
    'psychological testing Orlando',
    'mental health counseling Florida',
    'ADHD evaluation Orlando',
    'anxiety therapy Orlando',
    'depression counseling Orlando',
    'family therapy Orlando',
    'couples counseling Orlando',
    'autism evaluation Florida',
    'EQ Counseling Testing',
    'Dr. Ronit Navon',
  ],
  authors: [{ name: 'EQ Counseling & Testing LLC' }],
  creator: 'EQ Counseling & Testing LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'EQ Counseling & Testing',
    title: 'EQ Counseling & Testing | Mental Health Services in Orlando, FL',
    description:
      'Compassionate, evidence-based counseling, psychological evaluations, supervision, and mediation serving Orlando and Central Florida since 2012.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EQ Counseling & Testing | Mental Health Services in Orlando, FL',
    description:
      'Compassionate counseling & psychological evaluations in Orlando, FL. Licensed therapists. Solution-focused approach since 2012.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: siteUrl },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'EQ Counseling & Testing LLC',
  description:
    'Professional mental health counseling, psychological evaluations, clinical supervision, and family mediation in Orlando, FL.',
  url: siteUrl,
  foundingDate: '2012',
  telephone: '+1-407-461-9721',
  email: 'ronit@eqcounselingtesting.com',
  image: `${siteUrl}/opengraph-image`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: ['Orange County, FL', 'Seminole County, FL', 'Florida'],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
  ],
  employee: {
    '@type': 'Person',
    name: 'Dr. Ronit Navon',
    jobTitle: 'Practice Director',
    hasCredential: ['PhD', 'LMHC', 'NCC'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <ScrollRevealScript />
        <DevWidget />
      </body>
    </html>
  )
}
