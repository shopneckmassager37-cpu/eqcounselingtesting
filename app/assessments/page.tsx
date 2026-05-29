import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, BookOpen, Dna, Briefcase, User, Lightbulb, ChevronRight, CheckCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Assessments & Testing',
  description:
    'Comprehensive psychological evaluations and testing at EQ Counseling & Testing in Orlando, FL. Academic, Intelligence, Autism, Career, and Personality assessments.',
}

const assessmentTypes = [
  {
    icon: BookOpen,
    title: 'Academic Testing',
    description:
      'Identifies learning strengths and challenges to inform educational planning and qualify students for accommodations.',
    includes: [
      'Reading & Reading Comprehension',
      'Mathematics Achievement',
      'Written Language Skills',
      'Oral Language Abilities',
    ],
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: Brain,
    title: 'Intelligence Testing (IQ)',
    description:
      'Measures cognitive abilities, processing speed, memory, and reasoning for a clear picture of intellectual functioning.',
    includes: [
      'Cognitive Abilities Assessment',
      'Processing Speed Evaluation',
      'Working Memory Testing',
      'Verbal & Non-Verbal Reasoning',
    ],
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
  },
  {
    icon: Lightbulb,
    title: 'DSM-5 Diagnostic Evaluation',
    description:
      'Clinical diagnosis of ADHD, Depression, Anxiety, Bipolar Disorder, and other conditions using current DSM-5 criteria.',
    includes: [
      'ADHD Evaluation (Adults & Children)',
      'Depression & Anxiety Diagnosis',
      'Bipolar Disorder Assessment',
      'Substance Use Disorder Evaluation',
    ],
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    icon: Dna,
    title: 'Autism / Spectrum Disorder',
    description:
      'Evidence-based ASD evaluations using behavioral observation protocols across home, school, and clinical settings.',
    includes: [
      'ADOS-2 Administration',
      'Adaptive Behavior Assessment',
      'Social Communication Evaluation',
      'Parent & Teacher Interviews',
    ],
    iconColor: 'text-accent-dark',
    iconBg: 'bg-accent/10',
  },
  {
    icon: Briefcase,
    title: 'Career Assessment',
    description:
      'Identify your strengths, interests, and aptitudes to guide career decisions — for students, career changers, and professionals.',
    includes: [
      'Interest Inventory',
      'Skills & Aptitude Assessment',
      'Personality-Career Fit',
      'Values Clarification',
    ],
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    icon: User,
    title: 'Personality Assessment',
    description:
      'Evaluates behavioral patterns, emotional functioning, and psychological strengths for clinical, legal, and personal growth purposes.',
    includes: [
      'MMPI-3 Administration',
      'Projective Techniques',
      'Temperament Assessment',
      'Emotional Functioning Review',
    ],
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
]

const specializedEvaluations = [
  'Juvenile Evaluations',
  'Custody Case Assessments',
  'SSI (Social Security Income) Evaluations',
  'Pre-Surgical Psychological Assessments',
  'Immigration Psychological Evaluations',
  'Learning Disability Assessments',
  'Substance Abuse Evaluations',
  'Mental Health Diagnosis for Legal Purposes',
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

          {/* Assessment types grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {assessmentTypes.map(({ icon: Icon, title, description, includes, iconColor, iconBg }, i) => (
              <div key={title} className="card p-8 flex flex-col reveal relative overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-teal to-secondary opacity-50" />
                <div className="relative w-14 h-14 mb-5">
                  <div className={`absolute -inset-1 ${iconBg} rounded-xl blur-md opacity-80`} />
                  <div className={`relative w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-neutral-800 mb-3">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">{description}</p>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                        <CheckCircle size={13} className="text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Specialized evaluations */}
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="badge bg-primary/10 text-primary mb-3">Specialized Services</span>
                <h2 className="section-title mb-4">Forensic & Specialized Evaluations</h2>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  Dr. Ronit Navon provides specialized psychological evaluations for legal, medical,
                  and social service contexts, each resulting in a comprehensive written report.
                </p>
                <Link href="/contact" className="btn-primary">
                  Request an Evaluation
                  <ChevronRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specializedEvaluations.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm text-sm text-neutral-700">
                    <CheckCircle size={15} className="text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
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
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
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
