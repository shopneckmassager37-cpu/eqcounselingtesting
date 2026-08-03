import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
  CheckCircle,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Assessments & Testing',
  description:
    'Comprehensive psychological evaluations and testing at EQ Counseling & Testing in Orlando, FL — mental health, psychosocial, ADHD, psychoeducational, ASD, personality, custody, substance abuse, pre-surgical, Social Security, immigration, and fit-for-duty evaluations.',
  alternates: { canonical: '/assessments' },
}

type Fact =
  | { label: string; value: string; items?: undefined }
  | { label: string; items: string[]; value?: undefined }

interface ServiceSection {
  id: string
  icon: typeof Brain
  image: string
  title: string
  iconColor: string
  iconBg: string
  description: string[]
  facts?: Fact[]
}

const serviceSections: ServiceSection[] = [
  {
    id: 'comprehensive-mental-health-assessment',
    icon: Brain,
    image: '/images/services/comprehensive-mental-health-assessment.avif',
    title: 'Comprehensive Mental Health Assessment',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    description: [
      'Also known as a psychological evaluation, this assessment refers to a series of tests administered to evaluate a person’s intellectual, learning, emotional, and/or behavioral functioning. The scope of the evaluation varies depending on the nature of the referral.',
      'It provides current, evidence-based information regarding diagnosis, treatment and rehabilitation recommendations, and a person’s ability to participate in and benefit from treatment.',
    ],
    facts: [
      {
        label: 'The Evaluation Includes',
        items: [
          'A comprehensive clinical interview',
          'Psychological testing',
          'Interpretation of test results',
          'Review of patient records',
          'Diagnosis',
          'Recommendations for treatment',
        ],
      },
      {
        label: 'Duration',
        value: 'In-depth interviews and testing typically span 2–3 meetings, up to 3 hours each.',
      },
      {
        label: 'What to Expect',
        items: [
          'Initial meeting — discuss the evaluation, complete consent forms, and gather background information',
          'Follow-up session(s) — relevant psychological testing is administered',
          'Final meeting — results and recommendations are discussed, with two copies of the final report provided',
        ],
      },
      {
        label: 'Common Reasons Children Are Referred',
        items: [
          'Academic readiness',
          'ADHD, with or without hyperactivity',
          'Autism Spectrum Disorders',
          'Disruptive behavior disorders',
          'Emotional disturbances',
          'Depression, anxiety, mood disorders',
          'Giftedness',
          'Learning disabilities & processing problems',
          'Parent-child relational problems',
        ],
      },
    ],
  },
  {
    id: 'psychosocial-assessment',
    icon: Users,
    image: '/images/services/psychosocial-assessment.avif',
    title: 'Psychosocial Assessment',
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
    description: [
      'A psychosocial assessment evaluates the full range of mental health disorders, provides an ICD-10 diagnosis, and develops a treatment plan without standardized psychological testing to support the diagnosis.',
      'The diagnosis is based solely on the individual’s self-report — or a parent’s report when a minor is involved.',
    ],
    facts: [{ label: 'Assessment Fee', value: '$250' }],
  },
  {
    id: 'adhd-screening',
    icon: Lightbulb,
    image: '/images/services/adhd-screening.avif',
    title: 'ADHD Screening & Assessment',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
    description: [
      'This assessment includes a clinical interview, a review of medical and educational records as needed, a comprehensive IQ test, a test of sustained attention, a structured interview of ADHD symptoms, and screening measures for mood factors that impact attention when relevant.',
    ],
    facts: [
      {
        label: 'The Final Report Includes',
        items: [
          'A full explanation of the results',
          'An accurate diagnosis',
          'Documentation of appropriate accommodations',
          'Treatment recommendations',
          'Referral information',
        ],
      },
    ],
  },
  {
    id: 'psychoeducational-evaluation',
    icon: BookOpen,
    image: '/images/services/psychoeducational-evaluation.avif',
    title: 'Psychoeducational Evaluation',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    description: [
      'This evaluation determines whether someone has a learning disability or another issue that negatively impacts their ability to learn. It assesses cognitive (intellectual) abilities, academic achievement levels, information processing abilities, and general emotional and behavioral functioning, along with their impact on academic success.',
      'It also helps young adults and adults pursuing a degree or certification receive accommodations suited to their needs.',
    ],
    facts: [
      {
        label: 'Testing Typically Includes',
        items: [
          'Intelligence test for cognitive abilities',
          'Academic achievement levels',
          'Memory test for the ability to retain and recall information',
          'Information processing tests (visual-motor integration, phonological processing, etc.)',
          'Tests of general emotional and personality functioning',
          'Interviews with the child, parents, and other relevant people',
          'Review of relevant records',
        ],
      },
      {
        label: 'Outcome',
        value: 'Results clarify the presence and extent of a learning disability and support the formulation of an IEP or 504 plan.',
      },
    ],
  },
  {
    id: 'asd-autism-spectrum-disorder',
    icon: Dna,
    image: '/images/services/asd-autism-spectrum-disorder.avif',
    title: 'ASD - Autism/Spectrum Disorder',
    iconColor: 'text-accent-dark',
    iconBg: 'bg-accent/10',
    description: [
      'This evaluation includes screening and assessment to rule out or confirm a diagnosis of Autism Spectrum Disorder, with a treatment plan tailored to the individual.',
    ],
    facts: [
      {
        label: 'Testing for All Ages Includes',
        items: [
          'ADOS-2 — Autism Diagnostic Observation Schedule',
          'ADI-R — Autism Diagnostic Interview, Revised',
          'GARS-3 — Gilliam Autism Rating Scale',
          'Other relevant screening methods as needed',
        ],
      },
    ],
  },
  {
    id: 'personality-tests-mmpi',
    icon: User,
    image: '/images/services/personality-tests-mmpi.avif',
    title: 'Personality Tests - MMPI',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    description: [
      'Personality assessment using the MMPI, along with an occupational inventory and related measures of interpersonal strengths, with detailed written feedback.',
    ],
  },
  {
    id: 'custody-evaluation',
    icon: Scale,
    image: '/images/services/custody-evaluation.avif',
    title: 'Custody Evaluation',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    description: [],
    facts: [
      {
        label: 'Two Evaluation Types',
        items: [
          'Custody Evaluation — a comprehensive assessment of the family that results in a recommendation to the court on custody matters, typically including residential custody, visitation, and a parenting plan.',
          'Parenting Capacity Evaluation (Reunification) — a comprehensive clinical assessment of a parent’s fitness and adequacy to care for their child.',
        ],
      },
      { label: 'Note', value: 'Both evaluations include home visits.' },
    ],
  },
  {
    id: 'substance-abuse-evaluation',
    icon: ShieldAlert,
    image: '/images/services/substance-abuse-evaluation.avif',
    title: 'Substance Abuse Evaluation',
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
    description: [
      'This evaluation determines whether an individual has a drug or alcohol addiction and the extent of the substance use disorder, identifies any co-occurring physical or mental health conditions, assesses how substance use affects the person’s life, and determines the level of treatment best suited for recovery.',
    ],
    facts: [
      {
        label: 'The Process',
        items: [
          'Screening — gathering personal information including marital and family history, work history, legal history, substance use history, and relevant medical and psychiatric history',
          'Assessment — administering relevant psychological assessment tools to support the findings',
        ],
      },
      {
        label: 'Outcome',
        value: 'A report with diagnosis and recommendations is provided to you and, when applicable, sent to your attorney.',
      },
    ],
  },
  {
    id: 'pre-treatment-surgical-evaluations',
    icon: Stethoscope,
    image: '/images/services/pre-treatment-surgical-evaluations.avif',
    title: 'Pre Treatment/Surgical Evaluations',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    description: [
      'These evaluations determine a person’s capacity to cope with the consequences of a recommended medical intervention and the major life changes that follow a treatment or surgical procedure.',
      'The process includes understanding the procedure, obtaining prior and current mental health history, and assessing willingness to modify behaviors and adjust to a new, often healthier, lifestyle.',
    ],
    facts: [
      {
        label: 'Procedures That Often Require This Evaluation',
        items: [
          'Organ transplant',
          'Cosmetic surgery',
          'Gastric bypass',
          'Bariatric surgery',
          'In vitro fertilization',
          'Egg donation',
        ],
      },
    ],
  },
  {
    id: 'social-security-evaluation',
    icon: FileCheck,
    image: '/images/services/social-security-evaluation.avif',
    title: 'Social Security Evaluation',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
    description: [
      'This evaluation determines the emotional and physical disabilities of an individual pursuing financial compensation from Social Security (SSI).',
    ],
  },
  {
    id: 'immigration-comprehensive-evaluation',
    icon: Globe,
    image: '/images/services/immigration-comprehensive-evaluation.avif',
    title: 'Immigration Comprehensive Evaluation',
    iconColor: 'text-accent-dark',
    iconBg: 'bg-accent/10',
    description: [
      'This evaluation assists the immigration process and can be used by your attorney to support your case and move it forward.',
      'It includes in-depth interviews spread over 2–3 meetings, covering your current immigration circumstances, personal, marital, and family history, work history, and relevant medical and psychiatric history, along with relevant psychological assessment tools.',
    ],
    facts: [
      {
        label: 'Used For',
        items: [
          'Extreme hardship cases',
          'Spousal abuse (VAWA)',
          'Political asylum cases',
          'U Visa',
          'T Visa',
        ],
      },
      {
        label: 'Languages Offered',
        value: 'English, Spanish, Portuguese, and Hebrew — interpreters for other languages available as needed.',
      },
      {
        label: 'Outcome',
        value: 'A report with diagnosis and recommendations is provided to you and, when applicable, sent to your attorney.',
      },
    ],
  },
  {
    id: 'fit-for-duty-evaluation',
    icon: Briefcase,
    image: '/images/services/fit-for-duty-evaluation.avif',
    title: 'Fit for Duty Evaluation',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    description: [
      'A thorough psychological assessment that determines whether an employee’s mental condition allows them to perform their job duties safely and effectively. It’s generally initiated when there are concerns about behavior or mental health that could affect their work — evaluating whether it might endanger the employee, colleagues, or the public.',
    ],
    facts: [
      {
        label: 'Evaluation Components',
        items: [
          'Review of records — performance reviews, disciplinary records, medical history, and incident reports',
          'Employee interview — an in-depth discussion of psychological state, workplace stress, and significant personal events',
          'Psychological testing — standardized tests for issues such as depression, anxiety, or cognitive deficits',
        ],
      },
      {
        label: 'Job Demands',
        value: 'The evaluation also considers how well the employee’s mental health aligns with job-specific demands such as stress management, public interaction, and decision-making.',
      },
    ],
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Psychological Assessment & Testing',
  name: 'Assessments & Testing',
  provider: { '@type': 'MedicalBusiness', name: 'EQ Counseling & Testing LLC', url: 'https://www.eqcounselingtesting.com' },
  areaServed: ['Orange County, FL', 'Seminole County, FL', 'Florida'],
  description:
    'Comprehensive psychological evaluations and testing including mental health, psychosocial, ADHD, psychoeducational, ASD, personality, custody, substance abuse, pre-surgical, Social Security, immigration, and fit-for-duty evaluations.',
}

export default function AssessmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        title="Assessments & Testing"
        subtitle="Comprehensive, multi-faceted psychological evaluations that provide clarity, insight, and a roadmap for your next steps."
        breadcrumb="Our Services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="badge bg-primary/10 text-primary mb-3">Our Approach</span>
            <h2 className="section-title mb-0">Why Psychological Testing Matters</h2>
            <span className="accent-bar" />
            <p className="section-subtitle">
              Our multi-faceted evaluations give clinicians, educators, courts, and families
              the objective insight needed to make informed decisions.
            </p>
          </div>

          {/* Quick jump */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-16">
            {serviceSections.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-3.5 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {title}
              </a>
            ))}
          </div>

          {/* Evaluation sections */}
          <div className="space-y-8">
            {serviceSections.map(({ id, icon: Icon, image, title, iconColor, iconBg, description, facts }, i) => {
              const imageOnRight = i % 2 === 1
              return (
                <div
                  key={id}
                  id={id}
                  className={`rounded-[2rem] border border-neutral-100 bg-neutral-50/60 p-6 md:p-10 lg:p-12 scroll-mt-36 ${
                    imageOnRight ? 'reveal-right' : 'reveal-left'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className={imageOnRight ? 'lg:order-2' : ''}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card ring-1 ring-black/5">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          sizes="(min-width: 1024px) 45vw, 90vw"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className={imageOnRight ? 'lg:order-1' : ''}>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                        <span className="w-8 h-px bg-primary/40" />
                        Evaluation {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                        <Icon className={`w-7 h-7 ${iconColor}`} />
                      </div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 mb-4">{title}</h3>

                      {description.map((paragraph, pi) => (
                        <p key={pi} className="text-neutral-500 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}

                      {facts && facts.length > 0 && (
                        <div className="space-y-5 mt-6">
                          {facts.map((fact) => (
                            <div key={fact.label} className="bg-white border border-neutral-100 rounded-2xl p-5 shadow-sm">
                              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2.5">
                                {fact.label}
                              </p>
                              {fact.items ? (
                                <ul className="space-y-1.5">
                                  {fact.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                                      <CheckCircle size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm text-neutral-600">{fact.value}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                      >
                        Request This Evaluation
                        <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
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
