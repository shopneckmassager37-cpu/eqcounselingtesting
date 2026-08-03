import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Users, User, ChevronRight, CheckCircle, Clock, DollarSign } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Clinical Supervision',
  description:
    'Clinical supervision for Licensed Mental Health Counselors and Marriage & Family Therapists seeking Florida licensure. Group and individual formats available.',
  alternates: { canonical: '/supervision' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Clinical Supervision',
  name: 'Clinical Supervision',
  provider: { '@type': 'MedicalBusiness', name: 'EQ Counseling & Testing LLC', url: 'https://www.eqcounselingtesting.com' },
  areaServed: 'Florida',
  description:
    'Clinical supervision for Licensed Mental Health Counselors and Marriage & Family Therapists seeking Florida licensure. Group and individual formats available.',
}

export default function SupervisionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        title="Clinical Supervision"
        subtitle="Expert guidance for Mental Health and Marriage & Family Therapy graduates pursuing Florida licensure."
        breadcrumb="Our Services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge bg-teal/10 text-teal mb-3">Professional Development</span>
            <h2 className="section-title mb-0">Build Your Clinical Foundation</h2>
            <span className="accent-bar" />
            <p className="section-subtitle">
              Dr. Ronit Navon provides qualified clinical supervision for LMHC and LMFT post-master's
              graduates in Florida, in group or individual formats.
            </p>
          </div>

          {/* Two supervision types */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Group Supervision */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-teal" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-2">Group Supervision</h2>
              <p className="text-teal font-semibold text-sm mb-4">Collaborative Learning Environment</p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Small-cohort sessions to discuss cases, share perspectives, and build professional
                community under Dr. Navon's guidance.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <Clock className="w-5 h-5 text-teal flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Meets:</span>
                    <span className="text-neutral-500 ml-1">Tuesday or Thursday, via telehealth</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <Users className="w-5 h-5 text-teal flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Group Size:</span>
                    <span className="text-neutral-500 ml-1">Small-cohort format</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <DollarSign className="w-5 h-5 text-teal flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Fee:</span>
                    <span className="text-neutral-500 ml-1">Contact for current group rates</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Case conceptualization & consultation',
                  'Ethical and legal discussions',
                  'Peer feedback and support',
                  'Professional development topics',
                  'Counts toward Florida licensure hours',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle size={14} className="text-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-secondary w-full justify-center">
                Inquire About Group Supervision
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Individual Supervision */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-2">Individual Supervision</h2>
              <p className="text-primary font-semibold text-sm mb-4">Personalized Mentorship</p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Dedicated one-on-one time with Dr. Navon for in-depth case review, professional
                development, and targeted feedback.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Meets:</span>
                    <span className="text-neutral-500 ml-1">Tuesday or Thursday, via telehealth</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <User className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Format:</span>
                    <span className="text-neutral-500 ml-1">One-on-one video supervision</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Fee:</span>
                    <span className="text-neutral-500 ml-1">Contact for current individual rates</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Personalized feedback on your cases',
                  'Skill development in specific modalities',
                  'Documentation & ethical compliance guidance',
                  'Career and professional mentorship',
                  'Counts toward Florida licensure hours',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle size={14} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary w-full justify-center">
                Inquire About Individual Supervision
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <span className="badge bg-teal/10 text-teal mb-3">Requirements</span>
                <h2 className="section-title mb-4">Supervisee Requirements</h2>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  To begin supervised clinical hours, you must meet Florida's requirements
                  for registered intern status.
                </p>
                <ul className="space-y-3">
                  {[
                    "Master's degree from an accredited program in Mental Health Counseling or Marriage & Family Therapy",
                    'Active Florida Registered Intern License (RMHCI or RMFTI)',
                    'Active professional liability insurance',
                    'Employment or volunteer placement providing direct client contact',
                    'Commitment to ethical professional practice',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="badge bg-primary/10 text-primary mb-3">Supervision Focus Areas</span>
                <h3 className="font-heading font-bold text-xl text-neutral-800 mb-4">What You'll Learn</h3>
                <div className="space-y-3">
                  {[
                    ['Solution-Focused Brief Therapy', 'Master the SFT approach central to our practice philosophy.'],
                    ['Psychological Assessment', 'Understand the evaluation process and report writing.'],
                    ['Ethical & Legal Standards', 'Navigate complex ethical situations with confidence.'],
                    ['Multicultural Competence', 'Develop skills to serve diverse client populations.'],
                    ['Documentation & Compliance', 'Maintain accurate, legally sound clinical records.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-neutral-800 text-sm">{title}</p>
                      <p className="text-neutral-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supervisor spotlight */}
      <section className="section-padding bg-cta-gradient">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-heading font-bold text-2xl mx-auto mb-5">
              RN
            </div>
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Your Supervisor</h2>
            <p className="text-purple-100 leading-relaxed mb-6">
              Dr. Ronit Navon — PhD, LMHC, NCC — brings 22+ years of clinical experience and a
              solution-focused philosophy that empowers supervisees to find their own professional voice.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Apply for Supervision
                <ChevronRight size={18} />
              </Link>
              <Link href="/therapists" className="btn-outline-white">
                Learn About Dr. Navon
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
