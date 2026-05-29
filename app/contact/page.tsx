import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact EQ Counseling & Testing in Orlando, FL. Call 407-461-9721 or email ronit@eqcounselingtesting.com. Multiple office locations across Orange and Seminole counties.',
}

const offices = [
  {
    name: 'Primary Office — Orlando',
    address: 'Orlando, FL 32807',
    county: 'Orange County',
    mapsUrl: 'https://maps.google.com/?q=Orlando+FL+32807',
    notes: 'Main administrative office. Counseling, testing, and supervision services.',
  },
  {
    name: 'Altamonte Springs Office',
    address: 'Altamonte Springs, FL 32701',
    county: 'Seminole County',
    mapsUrl: 'https://maps.google.com/?q=Altamonte+Springs+FL+32701',
    notes: 'Individual, couples, and family counseling.',
  },
  {
    name: 'Sanford Office',
    address: 'Sanford, FL 32771',
    county: 'Seminole County',
    mapsUrl: 'https://maps.google.com/?q=Sanford+FL+32771',
    notes: 'Individual and family counseling. Limited availability.',
  },
]

const hours = [
  { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: 'By Appointment Only' },
  { day: 'Sunday', hours: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
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

              {/* Placeholder contact form */}
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name</label>
                    <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-400 text-sm cursor-not-allowed" aria-label="First name field — coming soon">
                      First name
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                    <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-400 text-sm cursor-not-allowed" aria-label="Last name field — coming soon">
                      Last name
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address</label>
                  <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-400 text-sm cursor-not-allowed">
                    email@example.com
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone (optional)</label>
                  <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-400 text-sm cursor-not-allowed">
                    Phone number
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Service of Interest</label>
                  <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-400 text-sm cursor-not-allowed">
                    Select a service...
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                  <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-400 text-sm h-28 cursor-not-allowed">
                    Your message...
                  </div>
                </div>

                <div
                  className="w-full flex justify-center items-center px-6 py-3.5 bg-neutral-300 text-neutral-500 rounded-full font-semibold text-sm cursor-not-allowed"
                  aria-label="Contact form coming soon"
                >
                  Send Message
                  <span className="ml-2 text-xs bg-neutral-400/30 text-neutral-400 px-2 py-0.5 rounded-full">Coming Soon</span>
                </div>
                {/* <!-- Placeholder for contact form integration --> */}
              </div>

              <p className="text-center text-neutral-400 text-xs mt-4">
                For immediate assistance, please call{' '}
                <a href="tel:4074619721" className="text-primary hover:underline">407-461-9721</a>
              </p>
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

            <div className="grid md:grid-cols-3 gap-6">
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

            {/* Map placeholder */}
            <div className="mt-8 bg-neutral-100 rounded-3xl overflow-hidden h-64 flex items-center justify-center border border-neutral-200">
              <div className="text-center text-neutral-400">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-neutral-300" />
                <p className="text-sm font-medium">Interactive Map</p>
                <p className="text-xs">Google Maps embed will appear here</p>
                {/* <!-- Placeholder for Google Maps embed --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
