import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ChevronRight, GraduationCap } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Our Therapists',
  description:
    'Meet the experienced, licensed therapists at EQ Counseling & Testing. Our diverse team specializes in counseling, psychological evaluations, and more.',
}

const therapists = [
  {
    name: 'Dr. Ronit Navon',
    title: 'Practice Director, PhD, LMHC, NCC',
    image: '/images/dr-ronit-navon.png',
    bio: "Dr. Navon founded EQ Counseling & Testing in 2012 and holds a PhD in Counseling, specializing in Marriage and Family Therapy. With 22+ years in psychological evaluations, her Solution-Focused approach builds on client strengths to achieve confidence and lasting change.",
    specialties: [
      'Bipolar Disorder & Depression',
      'Anxiety & Substance Abuse',
      'Grief & Family Counseling',
      'Elder Care & Couples Counseling',
      'Psychological Evaluations for Juveniles',
      'Custody Cases & Immigration Assessments',
      'SSI & Pre-Surgical Assessments',
      'Learning Disability Evaluations',
    ],
    testing: [
      'Academic & Intelligence Testing',
      'DSM-IV Diagnosis',
      'Autism/Spectrum Disorder',
      'Career & Personality Tests',
    ],
    credentials: [
      'PhD in Counseling',
      'LMHC — Licensed Mental Health Counselor',
      'NCC — Nationally Certified Counselor',
    ],
  },
  {
    name: 'Dr. Danilo Polanco',
    title: 'PhD, Christian Clinical License Counselor, NBCP, CCFC',
    image: '/images/dr-danilo-polanco.png',
    bio: 'Dr. Polanco brings 20+ years of experience counseling children and families, with expertise in temperament modality and theology integration. He also serves as Professor of Psychology at Florida Christian University.',
    specialties: [
      'Children & Family Counseling',
      'Forensic Counseling',
      'Temperament Modality',
      'Theology-Integrated Counseling',
      'Adolescent Behavioral Issues',
    ],
    testing: [],
    credentials: [
      'PhD in Counseling',
      'Christian Clinical License Counselor',
      'NBCP — Nationally Board Certified Psychologist',
      'CCFC — Clinically Certified Forensic Counselor',
    ],
  },
  {
    name: 'Sandra DeOliveira Zeni',
    title: 'Licensed Mental Health Counselor (LMHC MH16908)',
    image: '/images/sandra-deoliveira-zeni.png',
    bio: 'Sandra is a bilingual (English/Portuguese) LMHC who graduated from UCF in 2008. Using unconditional positive regard, she works with adults, teens, children, couples, and families across diverse cultures including the LGBT community.',
    specialties: [
      'Depression & Anxiety',
      'Couples Counseling',
      'Family Therapy',
      'Adolescent Advice',
      'Multicultural Counseling',
      'LGBT Affirmative Therapy',
    ],
    testing: [],
    credentials: [
      'LMHC MH16908 — Florida',
      'Bilingual (English & Portuguese)',
      'University of Central Florida, 2008',
    ],
  },
  {
    name: 'Veronica Dickens',
    title: 'Licensed Marriage and Family Therapist',
    image: '/images/veronica-dickens.png',
    bio: 'With 20 years of experience across juvenile, dependency, and mental health settings, Veronica specializes in reframing family systems and creating meaningful change for individuals, couples, and families.',
    specialties: [
      'Marriage & Family Therapy',
      'Juvenile & Adolescent Issues',
      'Dependency & Mental Health Facilities',
      'Family Systems Reframing',
      'Adult & Child Counseling',
    ],
    testing: [],
    credentials: [
      'LMFT — Licensed Marriage and Family Therapist',
      '20+ Years of Clinical Experience',
    ],
  },
  {
    name: 'Betzaida Garcia',
    title: 'Licensed Mental Health Counselor',
    image: '/images/therapist-5.png',
    bio: "Betzaida is a warm, culturally sensitive LMHC who creates a safe space where clients feel heard and empowered. She works with adults, adolescents, and couples using evidence-based approaches tailored to each person's unique goals.",
    specialties: [
      'Individual & Couples Counseling',
      'Anxiety & Stress Management',
      'Depression & Mood Disorders',
      'Life Transitions & Adjustment',
      'Trauma-Informed Care',
      'Cultural & Identity Issues',
    ],
    testing: [],
    credentials: [
      'LMHC — Licensed Mental Health Counselor, Florida',
    ],
  },
]

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
          <div className="max-w-2xl mx-auto text-center mb-14">
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
                }`}
              >
                {/* Photo + credentials */}
                <div className="flex flex-col items-center md:items-start gap-4 md:w-64 flex-shrink-0">
                  {/* Therapist photo */}
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/10 flex-shrink-0">
                    <Image
                      src={therapist.image}
                      alt={`Photo of ${therapist.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 176px, 176px"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <h2 className="font-heading font-bold text-xl text-neutral-800">{therapist.name}</h2>
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

                  {/* Booking CTA placeholder */}
                  <div className="w-full">
                    <div
                      className="w-full text-center px-4 py-2.5 border-2 border-neutral-200 text-neutral-400 rounded-full text-sm cursor-not-allowed"
                      title="Online booking coming soon"
                    >
                      Book Appointment
                      <span className="block text-xs text-neutral-300 mt-0.5">Coming soon</span>
                    </div>
                    {/* <!-- Placeholder for online booking widget --> */}
                  </div>
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
