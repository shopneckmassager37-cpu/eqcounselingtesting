import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, Baby, UserCheck, ChevronRight, CheckCircle, Monitor } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Counseling Services',
  description:
    'Individual, couples, and family counseling for adults, teens, and children in Orlando, FL. Treatment for depression, anxiety, ADHD, PTSD, and more.',
}

const counselingTypes = [
  {
    icon: UserCheck,
    title: 'Individual Counseling',
    audience: 'Adults • Geriatric',
    description:
      'One-on-one therapy tailored to your needs in a safe, non-judgmental space for growth and healing.',
    treats: [
      'Depression & Low Mood',
      'Anxiety & Panic Attacks',
      'PTSD & Trauma',
      'ADHD Management',
      'Substance Abuse & Recovery',
      'Grief & Life Transitions',
      'Self-Esteem & Identity',
      'Stress Management',
    ],
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: Heart,
    title: 'Couples & Marriage Counseling',
    audience: 'Couples • Married Pairs',
    description:
      'Rebuild connection and improve communication in a structured, compassionate setting — for couples at any stage.',
    treats: [
      'Communication Breakdown',
      'Trust & Infidelity Issues',
      'Divorce & Separation Planning',
      'Pre-Marital Counseling',
      'Parenting Disagreements',
      'Intimacy & Connection',
      'Blended Family Challenges',
    ],
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
  },
  {
    icon: Users,
    title: 'Family Therapy',
    audience: 'Families • All Ages',
    description:
      'Strengthen family bonds and build healthier communication across the whole family system.',
    treats: [
      'Parent-Child Conflict',
      'Blended Family Adjustment',
      'Divorce Impact on Children',
      'Sibling Rivalry',
      'Family Trauma Processing',
      'Behavioral Issues in Children',
    ],
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    icon: Baby,
    title: 'Teens & Children',
    audience: 'Children • Adolescents',
    description:
      'Age-appropriate therapy for children and teens using play therapy, CBT, and other child-friendly modalities.',
    treats: [
      'ADHD & Attention Issues',
      'School Anxiety & Refusal',
      'Bullying & Social Skills',
      'Adolescent Depression',
      'Autism-Related Challenges',
      'Behavioral Disorders',
      'Adjustment to Change',
    ],
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
  },
]

const conditions = [
  'Depression', 'Anxiety Disorders', 'ADHD',
  'PTSD & Trauma', 'Bipolar Disorder', 'Substance Abuse',
  'Divorce & Separation', 'Grief & Loss', 'Family Conflict',
  'Relationship Issues', 'Eating Disorders', 'OCD',
  'Autism Spectrum', 'Life Transitions', 'Self-Esteem Issues',
  'Elder Care Issues',
]

export default function CounselingPage() {
  return (
    <>
      <PageHero
        title="Counseling Services"
        subtitle="Compassionate, evidence-based therapy for individuals, couples, and families — in person or via teletherapy."
        breadcrumb="Our Services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge bg-secondary/10 text-secondary mb-3">How We Help</span>
            <h2 className="section-title mb-0">Therapy That Meets You Where You Are</h2>
            <span className="accent-bar" />
            <p className="section-subtitle">
              Serving adults, teens, and children across Orange and Seminole counties and via
              secure teletherapy, using a solution-focused approach that builds on your strengths.
            </p>
          </div>

          {/* Counseling types */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {counselingTypes.map(({ icon: Icon, title, audience, description, treats, iconColor, iconBg }, i) => (
              <div key={title} className={`card p-8 reveal${i % 2 === 0 ? '-left' : '-right'}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <div className={`absolute -inset-1 ${iconBg} rounded-xl blur-md opacity-80`} />
                    <div className={`relative w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-neutral-800">{title}</h3>
                    <p className={`text-sm font-semibold mt-0.5 ${iconColor}`}>{audience}</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">{description}</p>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Addresses:</p>
                  <div className="flex flex-wrap gap-2">
                    {treats.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">
                        <CheckCircle size={11} className="text-secondary" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conditions we treat */}
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <span className="badge bg-primary/10 text-primary mb-3">Conditions We Treat</span>
              <h2 className="section-title">Comprehensive Mental Health Care</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm text-sm text-neutral-700 font-medium">
                  <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                  {condition}
                </div>
              ))}
            </div>
          </div>

          {/* Teletherapy */}
          <div className="card p-8 md:p-12 bg-card-gradient">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h2 className="section-title mb-4">Teletherapy Available</h2>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  Secure, HIPAA-compliant video counseling available statewide — same quality
                  care with the flexibility to join from anywhere.
                </p>
                <Link href="/contact" className="btn-secondary">
                  Schedule a Teletherapy Session
                  <ChevronRight size={18} />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  ['Secure & HIPAA Compliant', 'All sessions use encrypted, private video technology.'],
                  ['Flexible Scheduling', 'Morning, afternoon, and evening appointments available.'],
                  ['Available Statewide', 'Available to all Florida residents.'],
                  ['Same Quality of Care', 'Identical therapeutic approach to in-person sessions.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-neutral-800 text-sm">{title}</p>
                      <p className="text-neutral-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cta-gradient">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Take the First Step</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Reaching out for help takes courage. We're here to support you every step of the way.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Your First Session
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
