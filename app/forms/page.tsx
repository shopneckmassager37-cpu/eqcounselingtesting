import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Lock, ExternalLink, ChevronRight, Info } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Client Forms',
  description:
    'Access client intake forms and paperwork for EQ Counseling & Testing. New client forms are available through our secure client portal.',
}

const formCategories = [
  {
    title: 'New Client Intake Packet',
    description: 'Complete this before your first appointment. Includes demographic information, consent to treatment, and HIPAA authorization.',
    icon: FileText,
    status: 'portal',
  },
  {
    title: 'Insurance & Billing Authorization',
    description: 'Authorization to bill your insurance provider and understand your financial responsibilities.',
    icon: FileText,
    status: 'portal',
  },
  {
    title: 'Telehealth Consent Form',
    description: 'Required for all clients participating in teletherapy or video supervision sessions.',
    icon: FileText,
    status: 'portal',
  },
  {
    title: 'Release of Information',
    description: 'Authorize us to communicate with other providers, schools, or legal representatives on your behalf.',
    icon: FileText,
    status: 'portal',
  },
  {
    title: 'Assessment / Testing Consent',
    description: 'Specific consent form for clients undergoing psychological evaluations and testing.',
    icon: FileText,
    status: 'portal',
  },
  {
    title: 'Supervision Agreement',
    description: 'For clinical supervisees — outlines the terms, expectations, and responsibilities of the supervisory relationship.',
    icon: FileText,
    status: 'portal',
  },
]

export default function FormsPage() {
  return (
    <>
      <PageHero
        title="Client Forms"
        subtitle="All client forms are available securely through our client portal or provided during the booking process."
        breadcrumb="Resources"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Notice */}
          <div className="max-w-3xl mx-auto mb-14">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-heading font-semibold text-neutral-800 mb-2">About Our Forms</h2>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  To protect your privacy and comply with HIPAA regulations, all client intake forms
                  and paperwork are handled through our secure, encrypted client portal. After scheduling
                  your appointment, you will receive a link to complete your forms electronically at your
                  convenience — before your first visit.
                </p>
              </div>
            </div>
          </div>

          {/* Forms grid */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="text-center mb-10">
              <span className="badge bg-primary/10 text-primary mb-3">Available Forms</span>
              <h2 className="section-title mb-3">Client Paperwork</h2>
              <p className="section-subtitle max-w-xl mx-auto">
                All forms listed below are available through our secure client portal
                after scheduling your appointment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {formCategories.map(({ title, description, icon: Icon }) => (
                <div key={title} className="card p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-neutral-800 text-sm mb-1">{title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-3">{description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Lock size={11} />
                      <span>Available via Secure Client Portal</span>
                    </div>
                    {/* <!-- Placeholder for online form link --> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Portal CTA */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading font-bold text-2xl text-white mb-3">Secure Client Portal</h2>
                <p className="text-purple-100 text-sm leading-relaxed mb-6">
                  Our HIPAA-compliant client portal allows you to complete forms, review documents,
                  and communicate securely with your therapist — all in one convenient place.
                  You'll receive access after scheduling your appointment.
                </p>

                {/* Placeholder for portal link */}
                <div className="inline-flex flex-col items-center gap-2">
                  <div
                    className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white/80 px-6 py-3 rounded-full text-sm cursor-not-allowed"
                    aria-label="Client portal — coming soon"
                  >
                    <ExternalLink size={16} />
                    Access Client Portal
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Coming Soon</span>
                  </div>
                  {/* <!-- Placeholder for client portal widget integration --> */}
                  <p className="text-purple-300 text-xs">
                    After scheduling, you'll receive a secure access link by email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Need help */}
          <div className="mt-14 text-center">
            <p className="text-neutral-500 mb-2">
              Need assistance with your forms, or prefer paper forms?
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              Call our office and a staff member will be happy to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:4074619721" className="btn-secondary">
                Call Us: 407-461-9721
              </a>
              <Link href="/contact" className="btn-outline-white text-neutral-600 border-neutral-300 hover:bg-neutral-50">
                Send a Message
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
