import type { Metadata } from 'next'
import Link from 'next/link'
import { Scale, CheckCircle, ChevronRight, Heart, Shield, Clock, DollarSign } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Family Mediation',
  description:
    'EQ Divorce Mediation — "Divorce with less trauma." Compassionate family mediation services in Orlando, FL helping families reach dignified agreements.',
}

const benefits = [
  {
    icon: Heart,
    title: 'Less Emotional Trauma',
    description: 'Mediation reduces the adversarial nature of separation, protecting the emotional well-being of all family members — especially children.',
  },
  {
    icon: DollarSign,
    title: 'More Affordable',
    description: 'Mediation is significantly less costly than contested litigation, allowing both parties to preserve resources for their futures.',
  },
  {
    icon: Clock,
    title: 'Faster Resolution',
    description: 'Cases settled through mediation typically resolve in weeks rather than months or years of court proceedings.',
  },
  {
    icon: Shield,
    title: 'Confidential Process',
    description: 'All mediation discussions are private and confidential, unlike court proceedings which are part of the public record.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'Meet with the mediator to understand the process, discuss your situation, and determine if mediation is right for your family.',
  },
  {
    step: '02',
    title: 'Joint Sessions',
    description: 'Both parties meet together with the mediator in a structured, guided environment to identify issues and explore solutions.',
  },
  {
    step: '03',
    title: 'Private Caucuses',
    description: 'When needed, the mediator meets separately with each party to explore concerns and options in a confidential setting.',
  },
  {
    step: '04',
    title: 'Agreement Drafting',
    description: 'Once consensus is reached, a written Memorandum of Understanding is prepared for attorney review and court submission.',
  },
]

const issuesCovered = [
  'Division of Marital Assets & Debts',
  'Child Custody & Parenting Plans',
  'Child Support Arrangements',
  'Spousal Support / Alimony',
  'Property & Real Estate Division',
  'Business Asset Division',
  'Retirement Account Distribution',
  'Co-Parenting Communication Plans',
]

export default function MediationPage() {
  return (
    <>
      <PageHero
        title="Family Mediation"
        subtitle='"Divorce with less trauma" — compassionate mediation that helps families resolve conflict with dignity and respect.'
        breadcrumb="Our Services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-accent-dark" />
            </div>
            <span className="badge bg-accent/15 text-accent-dark mb-3">EQ Divorce Mediation</span>
            <h2 className="section-title mb-4">A Healthier Path Through Divorce</h2>
            <p className="section-subtitle">
              EQ Counseling &amp; Testing offers specialized family mediation services designed
              to help separating couples reach fair, lasting agreements while minimizing conflict
              and protecting the emotional health of the entire family — especially children.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent-dark" />
                </div>
                <h3 className="font-heading font-bold text-base text-neutral-800 mb-2">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Issues covered + Process */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Issues */}
            <div className="bg-neutral-50 rounded-3xl p-8">
              <span className="badge bg-accent/15 text-accent-dark mb-4">What We Address</span>
              <h2 className="section-title mb-4">Issues Covered in Mediation</h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Our mediation process covers all the key issues involved in family separation,
                helping you reach comprehensive agreements without court intervention.
              </p>
              <div className="grid grid-cols-1 gap-2">
                {issuesCovered.map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 bg-white rounded-xl p-3 shadow-sm text-sm text-neutral-700">
                    <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>

            {/* Mediation vs Litigation */}
            <div className="bg-neutral-50 rounded-3xl p-8">
              <span className="badge bg-primary/10 text-primary mb-4">Comparison</span>
              <h2 className="section-title mb-4">Mediation vs. Litigation</h2>
              <div className="space-y-3">
                {[
                  ['Cost', 'Fraction of litigation cost', 'Can reach $15,000–$30,000+'],
                  ['Duration', 'Weeks to a few months', 'Months to years'],
                  ['Privacy', 'Fully confidential', 'Public court record'],
                  ['Control', 'Both parties decide', 'Judge decides'],
                  ['Emotional Impact', 'Collaborative, less stress', 'Adversarial, higher stress'],
                  ['Children\'s Impact', 'Shielded from conflict', 'Can be caught in middle'],
                ].map(([category, mediation, litigation]) => (
                  <div key={category} className="grid grid-cols-3 gap-2 text-xs">
                    <div className="font-semibold text-neutral-700 pt-2">{category}</div>
                    <div className="bg-secondary/10 text-secondary rounded-lg p-2 font-medium">{mediation}</div>
                    <div className="bg-neutral-200 text-neutral-500 rounded-lg p-2">{litigation}</div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div />
                  <div className="text-center text-secondary font-semibold">Mediation</div>
                  <div className="text-center text-neutral-400">Litigation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="text-center mb-10">
            <span className="badge bg-teal/10 text-teal mb-3">Our Process</span>
            <h2 className="section-title mb-4">How Mediation Works</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              A structured, step-by-step process guided by a neutral professional.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {processSteps.map(({ step, title, description }, i) => (
              <div key={step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-neutral-200" aria-hidden="true" />
                )}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center font-heading font-bold text-accent-dark text-lg mx-auto mb-4 relative z-10 bg-white">
                    {step}
                  </div>
                  <h3 className="font-heading font-bold text-neutral-800 mb-2">{title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Who should consider */}
          <div className="card p-8 md:p-12 bg-card-gradient">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge bg-accent/15 text-accent-dark mb-3">Is This Right for You?</span>
                <h2 className="section-title mb-4">Who Can Benefit from Mediation?</h2>
                <p className="text-neutral-500 leading-relaxed">
                  Mediation is most effective when both parties are willing to communicate
                  respectfully and work toward mutually acceptable solutions. It is particularly
                  valuable for families with children who wish to minimize conflict and maintain
                  a cooperative co-parenting relationship.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Couples considering separation or divorce',
                  'Parents wanting to minimize impact on children',
                  'Individuals seeking a cost-effective alternative to court',
                  'Couples who want to maintain respectful communication',
                  'Blended families navigating custody adjustments',
                  'Anyone who values privacy and confidentiality',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cta-gradient">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Start a Healthier Resolution Process
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Contact us to schedule a confidential mediation consultation.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Mediation Consultation
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
