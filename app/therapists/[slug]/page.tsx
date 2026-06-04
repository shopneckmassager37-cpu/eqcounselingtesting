import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, GraduationCap, ChevronRight, ArrowLeft, Phone, Mail } from 'lucide-react'
import { therapists, getTherapistBySlug } from '@/lib/therapists'

const siteUrl = 'https://www.eqcounselingtesting.com'

export function generateStaticParams() {
  return therapists.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const therapist = getTherapistBySlug(params.slug)
  if (!therapist) return {}
  return {
    title: therapist.name,
    description: `Meet ${therapist.name} — ${therapist.title} at EQ Counseling & Testing in Orlando, FL. ${therapist.bio.slice(0, 120)}...`,
    openGraph: {
      title: `${therapist.name} | EQ Counseling & Testing`,
      description: therapist.bio,
      url: `${siteUrl}/therapists/${therapist.slug}`,
      images: [{ url: `${siteUrl}${therapist.image}`, width: 400, height: 400, alt: `Photo of ${therapist.name}` }],
    },
    alternates: { canonical: `${siteUrl}/therapists/${therapist.slug}` },
  }
}

export default function TherapistProfilePage({ params }: { params: { slug: string } }) {
  const therapist = getTherapistBySlug(params.slug)
  if (!therapist) notFound()

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: therapist.name,
    jobTitle: therapist.schema.jobTitle,
    image: `${siteUrl}${therapist.image}`,
    url: `${siteUrl}/therapists/${therapist.slug}`,
    telephone: therapist.schema.telephone,
    email: 'ronit@eqcounselingtesting.com',
    hasCredential: therapist.schema.hasCredential.map((c) => ({ '@type': 'EducationalOccupationalCredential', credentialCategory: c })),
    knowsAbout: therapist.schema.knowsAbout,
    ...(therapist.schema.alumniOf ? { alumniOf: { '@type': 'CollegeOrUniversity', name: therapist.schema.alumniOf } } : {}),
    worksFor: {
      '@type': 'MedicalBusiness',
      name: therapist.schema.worksFor,
      url: siteUrl,
      telephone: therapist.schema.telephone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '390 N Orange Ave, Suite 2300',
        addressLocality: 'Orlando',
        addressRegion: 'FL',
        postalCode: '32801',
        addressCountry: 'US',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Page hero */}
      <div className="bg-hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal/10" />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/therapists"
            className="inline-flex items-center gap-2 text-purple-200 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Therapists
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl flex-shrink-0">
              <Image
                src={therapist.image}
                alt={`Portrait of ${therapist.name}, ${therapist.title} at EQ Counseling & Testing`}
                fill
                className="object-cover object-top"
                sizes="96px"
                priority
              />
            </div>
            <div>
              <p className="text-purple-300 text-sm font-semibold uppercase tracking-widest mb-1">Meet Your Therapist</p>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">{therapist.name}</h1>
              <p className="text-purple-200 mt-1">{therapist.title}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Photo */}
              <div className="card p-6">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4">
                  <Image
                    src={therapist.image}
                    alt={`${therapist.name} — ${therapist.title} at EQ Counseling & Testing in Orlando, FL`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
                <h2 className="font-heading font-bold text-xl text-neutral-800">{therapist.name}</h2>
                <p className="text-neutral-500 text-sm mt-1 mb-4 leading-snug">{therapist.title}</p>
                <div className="space-y-2">
                  {therapist.credentials.map((cred) => (
                    <div key={cred} className="flex items-start gap-2 text-xs text-neutral-600">
                      <GraduationCap size={13} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="card p-6 bg-primary/5 border-primary/10">
                <h3 className="font-heading font-semibold text-neutral-800 mb-4">Book a Consultation</h3>
                <a
                  href="tel:4074619721"
                  className="flex items-center gap-3 mb-3 text-sm text-neutral-700 hover:text-primary transition-colors"
                >
                  <Phone size={15} className="text-primary flex-shrink-0" />
                  407-461-9721
                </a>
                <a
                  href="mailto:ronit@eqcounselingtesting.com"
                  className="flex items-center gap-3 mb-4 text-sm text-neutral-700 hover:text-primary transition-colors break-all"
                >
                  <Mail size={15} className="text-primary flex-shrink-0" />
                  ronit@eqcounselingtesting.com
                </a>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Schedule Appointment
                  <ChevronRight size={16} />
                </Link>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="card p-8">
                <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-4">About {therapist.name.split(' ')[0]}</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">{therapist.bio}</p>
              </div>

              {/* Specialties */}
              <div className="card p-8">
                <h2 className="font-heading font-bold text-xl text-neutral-800 mb-5">Areas of Specialization</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {therapist.specialties.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testing services if applicable */}
              {therapist.testing.length > 0 && (
                <div className="card p-8">
                  <h2 className="font-heading font-bold text-xl text-neutral-800 mb-5">Testing & Assessment Services</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {therapist.testing.map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-neutral-700">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-hero-gradient rounded-2xl p-8 text-center">
                <p className="text-purple-200 text-sm uppercase tracking-widest font-semibold mb-2">Ready to Take the First Step?</p>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Schedule a Session with {therapist.name.split(' ')[0]}
                </h3>
                <p className="text-purple-100 mb-6 text-sm">
                  We offer in-person and teletherapy sessions across Central Florida.
                </p>
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Other therapists */}
          <div className="mt-16 pt-12 border-t border-neutral-100">
            <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-6 text-center">Meet Our Full Team</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {therapists.filter((t) => t.slug !== therapist.slug).map((t) => (
                <Link
                  key={t.slug}
                  href={`/therapists/${t.slug}`}
                  className="flex items-center gap-3 px-4 py-3 card hover:shadow-md transition-shadow"
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/10">
                    <Image
                      src={t.image}
                      alt={`Photo of ${t.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.credentials[0]?.split('—')[0]?.trim()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
