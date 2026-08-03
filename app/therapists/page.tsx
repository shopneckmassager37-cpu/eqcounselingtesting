import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ChevronRight, GraduationCap } from 'lucide-react'
import PageHero from '@/components/PageHero'
import { therapists } from '@/lib/therapists'

export const metadata: Metadata = {
  title: 'Our Therapists',
  description:
    'Meet the experienced, licensed therapists at EQ Counseling & Testing. Our diverse team specializes in counseling, psychological evaluations, and more.',
  alternates: { canonical: '/therapists' },
}

export default function TherapistsPage() {
  return (
    <>
      <PageHero
        title="Our Therapists"
        subtitle="A dedicated team of licensed specialists committed to your well-being and growth."
        breadcrumb="Meet The Team"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro */}
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="section-subtitle">
              Our diverse team brings together specialized expertise and genuine commitment
              to each client's unique journey.
            </p>
          </div>

          {/* Therapist cards */}
          <div className="space-y-12">
            {therapists.map((therapist, index) => (
              <article
                key={therapist.name}
                className={`card p-8 md:p-10 flex flex-col md:flex-row gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Photo + credentials */}
                <div className="flex flex-col items-center md:items-start gap-4 md:w-64 flex-shrink-0">
                  <Link href={`/therapists/${therapist.slug}`} className="block group">
                    <div className="relative w-44 h-44 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/10 flex-shrink-0 group-hover:ring-primary/30 transition-all">
                      <Image
                        src={therapist.image}
                        alt={`${therapist.name} — ${therapist.title} at EQ Counseling & Testing`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 176px, 176px"
                      />
                    </div>
                  </Link>

                  <div className="text-center md:text-left">
                    <Link href={`/therapists/${therapist.slug}`}>
                      <h2 className="font-heading font-bold text-xl text-neutral-800 hover:text-primary transition-colors">{therapist.name}</h2>
                    </Link>
                    <p className="text-neutral-500 text-sm mt-1 leading-snug">{therapist.title}</p>
                  </div>

                  {/* Credentials */}
                  <div className="w-full">
                    {therapist.credentials.map((cred) => (
                      <div key={cred} className="flex items-start gap-1.5 text-xs text-neutral-600 mb-1.5">
                        <GraduationCap size={13} className="text-primary mt-0.5 flex-shrink-0" />
                        {cred}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/therapists/${therapist.slug}`}
                    className="w-full text-center px-4 py-2.5 border-2 border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full text-sm font-semibold transition-all duration-200"
                  >
                    View Full Profile
                  </Link>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-neutral-600 leading-relaxed mb-6">{therapist.bio}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading font-semibold text-neutral-700 text-sm uppercase tracking-wide mb-3">
                        Specialties
                      </h3>
                      <ul className="space-y-1.5">
                        {therapist.specialties.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-neutral-600">
                            <CheckCircle size={14} className="text-secondary flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {therapist.testing.length > 0 && (
                      <div>
                        <h3 className="font-heading font-semibold text-neutral-700 text-sm uppercase tracking-wide mb-3">
                          Testing Services
                        </h3>
                        <ul className="space-y-1.5">
                          {therapist.testing.map((t) => (
                            <li key={t} className="flex items-center gap-2 text-sm text-neutral-600">
                              <CheckCircle size={14} className="text-primary flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-neutral-500 mb-6 text-lg">
              Ready to connect with one of our specialists?
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Schedule a Consultation
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
