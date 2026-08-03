import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact EQ Counseling & Testing in Orlando, FL. Call 407-461-9721 or email ronit@eqcounselingtesting.com. Multiple office locations across Orange and Seminole counties.',
  alternates: { canonical: '/contact' },
}

const offices = [
  {
    name: 'Downtown Orlando',
    address: '390 N Orange Ave, Suite 2300, Orlando, FL 32801',
    county: 'Orange County',
    mapsUrl: 'https://maps.google.com/?q=390+N+Orange+Ave+Suite+2300+Orlando+FL+32801',
    notes: 'Main administrative office. Counseling, testing, and supervision services.',
  },
  {
    name: 'Lake Mary',
    address: '255 Primera Blvd, Suite 160, Lake Mary, FL 32746',
    county: 'Seminole County',
    mapsUrl: 'https://maps.google.com/?q=255+Primera+Blvd+Suite+160+Lake+Mary+FL+32746',
    notes: 'Individual, couples, family counseling, and psychological evaluations.',
  },
  {
    name: 'Windermere / Winter Garden',
    address: '7345 W Sand Lake Rd, Suite 310, Orlando, FL 32819',
    county: 'Orange County',
    mapsUrl: 'https://maps.google.com/?q=7345+W+Sand+Lake+Rd+Suite+310+Orlando+FL+32819',
    notes: 'Individual, couples, and family counseling.',
  },
  {
    name: 'South Orlando / Millenia',
    address: '4700 Millenia Blvd, Suite 175, Orlando, FL 32839',
    county: 'Orange County',
    mapsUrl: 'https://maps.google.com/?q=4700+Millenia+Blvd+Suite+175+Orlando+FL+32839',
    notes: 'Counseling and assessment services.',
  },
  {
    name: 'Colonial Town Center',
    address: '1060 Woodcock Rd, Orlando, FL 32803',
    county: 'Orange County',
    mapsUrl: 'https://maps.google.com/?q=1060+Woodcock+Rd+Orlando+FL+32803',
    notes: 'Individual and family counseling.',
  },
]

const hours = [
  { day: 'Monday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

const siteUrl = 'https://www.eqcounselingtesting.com'

function officeSchema(office: (typeof offices)[number]) {
  const match = office.address.match(/^(.*), ([A-Za-z .]+), ([A-Z]{2}) (\d{5})$/)
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `EQ Counseling & Testing — ${office.name}`,
    parentOrganization: { '@type': 'MedicalBusiness', name: 'EQ Counseling & Testing LLC', url: siteUrl },
    telephone: '+1-407-461-9721',
    email: 'ronit@eqcounselingtesting.com',
    url: `${siteUrl}/contact`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: match?.[1] ?? office.address,
      addressLocality: match?.[2],
      addressRegion: match?.[3] ?? 'FL',
      postalCode: match?.[4],
      addressCountry: 'US',
    },
    areaServed: office.county,
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offices.map(officeSchema)) }}
      />

      <PageHero
        title="Contact Us"
        subtitle="We're here to answer your questions and help you take the first step toward better mental health."
        breadcrumb="Get In Touch"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            {/* Phone */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-xl text-neutral-800 mb-2">Phone</h2>
              <p className="text-neutral-500 text-sm mb-4">Call or text us directly</p>
              <a
                href="tel:4074619721"
                className="text-primary font-heading font-bold text-2xl hover:text-primary-dark transition-colors"
              >
                407-461-9721
              </a>
            </div>

            {/* Email */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-heading font-bold text-xl text-neutral-800 mb-2">Email</h2>
              <p className="text-neutral-500 text-sm mb-4">We respond within 24 hours</p>
              <a
                href="mailto:ronit@eqcounselingtesting.com"
                className="text-secondary font-medium text-sm hover:text-secondary-dark transition-colors break-all"
              >
                ronit@eqcounselingtesting.com
              </a>
            </div>

            {/* Location */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-8 h-8 text-teal" />
              </div>
              <h2 className="font-heading font-bold text-xl text-neutral-800 mb-2">Location</h2>
              <p className="text-neutral-500 text-sm mb-4">Multiple offices in Central Florida</p>
              <p className="text-teal font-medium text-sm">
                Orange &amp; Seminole Counties, FL
              </p>
            </div>
          </div>

          {/* Contact form placeholder + Hours */}
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            {/* Contact form */}
            <div className="card p-8">
              <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-2">Send a Message</h2>
              <p className="text-neutral-500 text-sm mb-6">
                Fill out the form below and we'll get back to you within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Hours */}
            <div>
              <div className="card p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-neutral-800">Practice Hours</h2>
                </div>
                <div className="space-y-2">
                  {hours.map(({ day, hours: h }) => {
                    const isClosed = h === 'Closed'
                    const isWeekend = day === 'Saturday' || day === 'Sunday'
                    return (
                      <div
                        key={day}
                        className={`flex justify-between items-center py-2.5 border-b border-neutral-100 last:border-0 text-sm ${
                          isClosed ? 'opacity-50' : ''
                        }`}
                      >
                        <span className={`font-medium ${isWeekend ? 'text-neutral-500' : 'text-neutral-700'}`}>
                          {day}
                        </span>
                        <span className={`${isClosed ? 'text-neutral-400' : isWeekend ? 'text-amber-600' : 'text-neutral-700'} font-medium`}>
                          {h}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <p className="text-neutral-400 text-xs mt-4">
                  * Teletherapy sessions may be available outside regular hours by arrangement.
                </p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <div className="text-center mb-10">
              <span className="badge bg-teal/10 text-teal mb-3">Our Offices</span>
              <h2 className="section-title mb-3">Practice Locations</h2>
              <p className="section-subtitle max-w-xl mx-auto">
                We serve clients across multiple locations in Central Florida for your convenience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div key={office.name} className="card p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-neutral-800 mb-1">{office.name}</h3>
                  <span className="text-xs font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full w-fit mb-3">
                    {office.county}
                  </span>
                  <p className="text-neutral-600 text-sm mb-2">{office.address}</p>
                  <p className="text-neutral-400 text-xs mb-5 flex-1">{office.notes}</p>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal text-sm font-semibold hover:text-teal-dark transition-colors mt-auto"
                  >
                    Get Directions
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>

            {/* Google Maps embed — Downtown Orlando main office */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-md border border-neutral-200">
              <iframe
                title="EQ Counseling & Testing — Downtown Orlando Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4!2d-81.3793!3d28.5420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b43c1a97265%3A0x6c15d6741d4dba38!2s390%20N%20Orange%20Ave%2C%20Orlando%2C%20FL%2032801!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
