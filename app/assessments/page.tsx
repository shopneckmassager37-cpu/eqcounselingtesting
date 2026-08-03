import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  Users,
  Lightbulb,
  BookOpen,
  Dna,
  User,
  Scale,
  ShieldAlert,
  Stethoscope,
  FileCheck,
  Globe,
  Briefcase,
  ChevronRight,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Assessments & Testing',
  description:
    'Comprehensive psychological evaluations and testing at EQ Counseling & Testing in Orlando, FL — mental health, psychosocial, ADHD, psychoeducational, ASD, personality, custody, substance abuse, pre-surgical, Social Security, immigration, and fit-for-duty evaluations.',
}

const serviceSections = [
  {
    id: 'comprehensive-mental-health-assessment',
    icon: Brain,
    title: 'Comprehensive Mental Health Assessment',
    description:
      'A full clinical evaluation of emotional, behavioral, and cognitive functioning, used to establish an accurate diagnosis and guide an effective treatment plan.',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    id: 'psychosocial-assessment',
    icon: Users,
    title: 'Psychosocial Assessment',
    description:
      'An in-depth review of personal history, relationships, and life circumstances to understand how social and environmental factors affect mental health and functioning.',
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
  },
  {
    id: 'adhd-screening',
    icon: Lightbulb,
    title: 'ADHD Screening',
    description:
      'Standardized screening and clinical interviews to identify symptoms of ADHD in children and adults and determine appropriate next steps.',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    id: 'psychoeducational-evaluation',
    icon: BookOpen,
    title: 'Psychoeducational Evaluation',
    description:
      'Testing that measures cognitive ability and academic achievement to identify learning strengths and challenges and support requests for school accommodations.',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    id: 'asd-autism-spectrum-disorder',
    icon: Dna,
    title: 'ASD - Autism/Spectrum Disorder',
    description:
      'Specialized evaluations for Autism Spectrum Disorder using evidence-based protocols, behavioral observation, and interviews with caregivers or teachers.',
    iconColor: 'text-accent-dark',
    iconBg: 'bg-accent/10',
  },
  {
    id: 'personality-tests-mmpi',
    icon: User,
    title: 'Personality Tests - MMPI',
    description:
      'In-depth personality assessment using the MMPI and related instruments to evaluate emotional functioning and behavioral patterns for clinical or legal purposes.',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
  {
    id: 'custody-evaluation',
    icon: Scale,
    title: 'Custody Evaluation',
    description:
      'Objective, court-informed evaluations that assess parenting capacity and the best interests of the child in custody and family law matters.',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    id: 'substance-abuse-evaluation',
    icon: ShieldAlert,
    title: 'Substance Abuse Evaluation',
    description:
      'Clinical evaluations that assess substance use patterns and their impact on functioning, often required for legal, employment, or treatment purposes.',
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
  },
  {
    id: 'pre-treatment-surgical-evaluations',
    icon: Stethoscope,
    title: 'Pre Treatment/Surgical Evaluations',
    description:
      'Psychological readiness evaluations required before certain medical treatments or surgical procedures, such as bariatric surgery or organ transplant.',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    id: 'social-security-evaluation',
    icon: FileCheck,
    title: 'Social Security Evaluation',
    description:
      'Comprehensive psychological evaluations to support Social Security Disability (SSI/SSDI) claims with documentation that meets agency requirements.',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    id: 'immigration-comprehensive-evaluation',
    icon: Globe,
    title: 'Immigration Comprehensive Evaluation',
    description:
      'Psychological evaluations for immigration proceedings, including hardship and asylum cases, prepared to support legal filings.',
    iconColor: 'text-accent-dark',
    iconBg: 'bg-accent/10',
  },
  {
    id: 'fit-for-duty-evaluation',
    icon: Briefcase,
    title: 'Fit for Duty Evaluation',
    description:
      'Independent evaluations that assess an employee’s psychological fitness to safely and effectively perform their job duties.',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
]

export default function AssessmentsPage() {
  return (
    <>
      <PageHero
        title="Assessments & Testing"
        subtitle="Comprehensive, multi-faceted psychological evaluations that provide clarity, insight, and a roadmap for your next steps."
        breadcrumb="Our Services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="badge bg-primary/10 text-primary mb-3">Our Approach</span>
            <h2 className="section-title mb-0">Why Psychological Testing Matters</h2>
            <span className="accent-bar" />
            <p className="section-subtitle">
              Our multi-faceted evaluations give clinicians, educators, courts, and families
              the objective insight needed to make informed decisions.
            </p>
          </div>

          {/* Evaluation type sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceSections.map(({ id, icon: Icon, title, description, iconColor, iconBg }, i) => (
              <div
                key={id}
                id={id}
                className="card p-8 flex flex-col reveal relative overflow-hidden scroll-mt-36"
                style={{ transitionDelay: `${(i % 6) * 80}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-teal to-secondary opacity-50" />
                <div className="relative w-14 h-14 mb-5">
                  <div className={`absolute -inset-1 ${iconBg} rounded-xl blur-md opacity-80`} />
                  <div className={`relative w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-neutral-800 mb-3">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">{description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Request This Evaluation
                  <ChevronRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mt-16 text-center">
            <span className="badge bg-teal/10 text-teal mb-3">The Process</span>
            <h2 className="section-title mb-0">What to Expect</h2>
            <span className="accent-bar" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Initial Consultation', desc: 'Discuss your needs and determine the appropriate assessment battery.' },
                { step: '02', title: 'Testing Session(s)', desc: 'Complete standardized assessments in a comfortable, supportive environment.' },
                { step: '03', title: 'Scoring & Analysis', desc: 'Clinician analyzes results using current professional standards.' },
                { step: '04', title: 'Feedback & Report', desc: 'Receive a comprehensive written report with clear findings and recommendations.' },
              ].map(({ step, title, desc }, i) => (
                <div key={step} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative w-14 h-14 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-md scale-125" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg shadow-primary/30">
                      {step}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-800 mb-2">{title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cta-gradient">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Get Clarity Through Assessment
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
            Contact us to discuss which evaluation is right for you or your child.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule an Evaluation
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
