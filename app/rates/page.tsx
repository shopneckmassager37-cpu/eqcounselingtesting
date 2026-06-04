import type { Metadata } from 'next'
import Link from 'next/link'
import { DollarSign, CreditCard, Shield, CheckCircle, ChevronRight, AlertCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Rates & Insurance',
  description:
    'Transparent pricing for counseling, psychological testing, and supervision at EQ Counseling & Testing. Insurance accepted. Private pay options available.',
}

const counselingRates = [
  { service: 'Individual Therapy Session (60 min)', rate: '$150' },
  { service: 'Couples / Family Session (75 min)', rate: '$175' },
  { service: 'Online / Teletherapy Session (60 min)', rate: '$80' },
  { service: 'Clinical Supervision — Group (90 min)', rate: 'Contact for rates' },
  { service: 'Clinical Supervision — Individual (50 min)', rate: 'Contact for rates' },
]

const prepaidPackages = [
  { name: '5-Session Package', desc: 'Individual Therapy (50 min)', rate: '$650', savings: 'Best Value' },
  { name: '5-Session Package', desc: 'Individual Therapy (60 min)', rate: '$700', savings: 'Popular' },
]

const testingRates = [
  { service: 'Psychological Evaluation — Comprehensive', rate: '$800 – $1,500' },
  { service: 'ADHD Evaluation (Child or Adult)', rate: '$600 – $900' },
  { service: 'Autism Spectrum Disorder Evaluation', rate: '$900 – $1,400' },
  { service: 'Academic / Learning Disability Assessment', rate: '$500 – $800' },
  { service: 'Intelligence (IQ) Testing Only', rate: '$350 – $500' },
  { service: 'Personality Assessment', rate: '$400 – $700' },
  { service: 'Career Assessment', rate: '$250 – $400' },
  { service: 'Forensic / Specialized Evaluation', rate: 'Contact for quote' },
]

const insuranceProviders = [
  'Aetna', 'Anthem Blue Cross Blue Shield', 'Cigna / Evernorth',
  'Florida Blue', 'Oscar Health', 'Optum',
  'United Healthcare / UHC', 'ComPsych', 'TRICARE',
  'Empire Blue Cross Blue Shield', 'Medicare PPO & HMOs',
]

const paymentMethods = [
  { icon: CreditCard, label: 'Credit & Debit Cards', desc: 'Visa, Mastercard, American Express, Discover' },
  { icon: DollarSign, label: 'Cash', desc: 'Accepted at all locations' },
  { icon: Shield, label: 'Health Savings Account (HSA/FSA)', desc: 'HSA and FSA cards accepted' },
  { icon: CheckCircle, label: 'Check', desc: 'Personal or cashier\'s checks accepted' },
]

export default function RatesPage() {
  return (
    <>
      <PageHero
        title="Rates & Insurance"
        subtitle="Transparent, fair pricing for all our services. We accept most major insurance plans and offer private pay options."
        breadcrumb="Information"
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-14">
          {/* Counseling Rates */}
          <div>
            <div className="mb-6">
              <span className="badge bg-primary/10 text-primary mb-2">Service Fees</span>
              <h2 className="section-title">Counseling Session Rates</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full text-sm" aria-label="Counseling session rates">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-semibold font-heading">Service</th>
                    <th className="text-right px-6 py-4 font-semibold font-heading">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {counselingRates.map((row, i) => (
                    <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 text-neutral-700">{row.service}</td>
                      <td className="px-6 py-4 text-right font-semibold text-neutral-800">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prepaid Packages */}
          <div>
            <div className="mb-6">
              <span className="badge bg-secondary/10 text-secondary mb-2">Value Packages</span>
              <h2 className="section-title">Prepaid Session Packages</h2>
            </div>
            <div className="grid sm:grid-cols-2 max-w-xl gap-5">
              {prepaidPackages.map((pkg) => (
                <div key={pkg.name} className="card p-6 text-center relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {pkg.savings}
                  </div>
                  <h3 className="font-heading font-bold text-neutral-800 mb-1">{pkg.name}</h3>
                  <p className="text-neutral-500 text-sm mb-4">{pkg.desc}</p>
                  <p className="font-heading font-extrabold text-3xl text-primary">{pkg.rate}</p>
                  <Link href="/contact" className="mt-5 btn-secondary text-sm w-full justify-center">
                    Get This Package
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Rates */}
          <div>
            <div className="mb-6">
              <span className="badge bg-teal/10 text-teal mb-2">Psychological Testing</span>
              <h2 className="section-title">Typical Cost of Testing</h2>
              <p className="text-neutral-500 mt-2 text-sm max-w-2xl">
                Testing fees vary based on the complexity and scope of the evaluation. All evaluations
                include testing sessions, scoring, clinical interpretation, and a comprehensive written report.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full text-sm" aria-label="Psychological testing rates">
                <thead>
                  <tr className="bg-teal text-white">
                    <th className="text-left px-6 py-4 font-semibold font-heading">Evaluation Type</th>
                    <th className="text-right px-6 py-4 font-semibold font-heading">Estimated Range</th>
                  </tr>
                </thead>
                <tbody>
                  {testingRates.map((row, i) => (
                    <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 text-neutral-700">{row.service}</td>
                      <td className="px-6 py-4 text-right font-semibold text-neutral-800">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deposit & No-Show Policy */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-heading font-bold text-neutral-800 text-xl mb-3">Deposit &amp; No-Show Policy</h2>
                <div className="space-y-2 text-sm text-neutral-700">
                  <p><strong>Deposit:</strong> A credit card on file is required to hold appointments for psychological evaluations.</p>
                  <p><strong>Cancellation:</strong> Please provide at least 24 hours' notice to cancel or reschedule your appointment.</p>
                  <p><strong>Late Cancellation:</strong> Cancellations within 24 hours may be charged 50% of the session fee.</p>
                  <p><strong>No-Show:</strong> Missed appointments without notice will be charged the full session fee.</p>
                  <p><strong>Insurance:</strong> No-show fees are typically not covered by insurance and are the client's responsibility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div>
            <div className="mb-6">
              <span className="badge bg-primary/10 text-primary mb-2">Accepted Insurance</span>
              <h2 className="section-title">Insurance Providers We Accept</h2>
              <p className="text-neutral-500 mt-2 text-sm max-w-2xl">
                We are in-network with many major insurance carriers. Please contact us to verify
                your specific plan's coverage before your appointment.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {insuranceProviders.map((provider) => (
                <div key={provider} className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-sm text-neutral-700 font-medium">
                  <CheckCircle size={15} className="text-primary flex-shrink-0" />
                  {provider}
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-sm">
              Don't see your insurance? Contact us — we may still be able to work with your plan
              as an out-of-network provider. Additional plans may be accepted; please inquire.
            </p>
          </div>

          {/* Payment Methods */}
          <div>
            <div className="mb-6">
              <span className="badge bg-secondary/10 text-secondary mb-2">Payment Options</span>
              <h2 className="section-title">Accepted Forms of Payment</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {paymentMethods.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="card p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-neutral-800 text-sm mb-1">{label}</h3>
                  <p className="text-neutral-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Out-of-Network & Private Pay */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8">
              <h2 className="font-heading font-bold text-xl text-neutral-800 mb-3">Out-of-Network Provider</h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                If we are not in-network with your insurance provider, you may still be eligible for
                reimbursement through your plan's out-of-network benefits. Upon request, we can provide
                a superbill (detailed receipt) to submit to your insurance for potential reimbursement.
              </p>
              <p className="text-neutral-500 text-sm">
                We recommend calling your insurance provider to inquire about your out-of-network mental
                health benefits before your first appointment.
              </p>
            </div>
            <div className="card p-8 bg-card-gradient">
              <h2 className="font-heading font-bold text-xl text-neutral-800 mb-3">Benefits of Private Pay</h2>
              <ul className="space-y-2.5">
                {[
                  'Complete confidentiality — no diagnosis required for insurance',
                  'No insurance pre-authorization delays',
                  'Greater flexibility in session length and frequency',
                  'Your treatment is between you and your therapist',
                  'No insurance-mandated treatment limitations',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle size={15} className="text-secondary mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cta-gradient mt-8">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Have Questions About Fees or Insurance?
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
            Contact us and we'll be happy to verify your benefits and answer any billing questions.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
