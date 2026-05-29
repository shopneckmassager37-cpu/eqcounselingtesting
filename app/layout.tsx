import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

export const metadata: Metadata = {
  title: {
    template: '%s | EQ Counseling & Testing',
    default: 'EQ Counseling & Testing | Mental Health Services in Orlando, FL',
  },
  description:
    'Professional counseling, psychological evaluations, supervision, and mediation services in Orlando, Florida. Serving Orange and Seminole counties since 2012.',
  keywords: [
    'counseling', 'therapy', 'psychological testing', 'assessment',
    'ADHD', 'anxiety', 'depression', 'Orlando', 'Florida',
    'mental health', 'family therapy', 'couples counseling',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'EQ Counseling & Testing',
  },
  other: {
    'schema-org': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      name: 'EQ Counseling & Testing LLC',
      foundingDate: '2012',
      telephone: '407-461-9721',
      email: 'ronit@eqcounselingtesting.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Orlando',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    }),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
