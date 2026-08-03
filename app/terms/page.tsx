import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for EQ Counseling & Testing LLC website and services. Please read these terms carefully before using our website.',
  alternates: { canonical: '/terms' },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the EQ Counseling & Testing LLC website (eqcounselingtesting.com), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.

These terms apply to all visitors, users, and prospective clients. EQ Counseling & Testing LLC reserves the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.`,
  },
  {
    title: '2. Not a Substitute for Professional Services',
    content: `IMPORTANT: The information provided on this website is for general informational purposes only and does not constitute medical advice, psychological advice, or a therapeutic relationship.

The content on this website — including descriptions of mental health conditions, therapy approaches, and services — is not a substitute for professional diagnosis, treatment, or care from a licensed mental health provider. Always seek the advice of a qualified mental health professional for any questions you may have regarding a mental health condition.

Visiting this website or submitting a contact form does not establish a therapist-client relationship. A therapeutic relationship is only established through a formal intake process and signed consent documents.`,
  },
  {
    title: '3. Crisis Disclaimer',
    content: `This website and its contact forms are NOT monitored 24 hours a day and are NOT appropriate for crisis situations or emergencies.

If you are experiencing a mental health emergency, suicidal thoughts, or are in immediate danger, please:

• Call 911 (emergency services)
• Call or text 988 (Suicide & Crisis Lifeline — available 24/7)
• Go to your nearest emergency room
• Call the Crisis Text Line: Text HOME to 741741

Do not rely on this website for emergency assistance.`,
  },
  {
    title: '4. Telehealth Services',
    content: `EQ Counseling & Testing LLC offers telehealth (video counseling) services to residents of the State of Florida. By participating in telehealth services, you acknowledge:

• Telehealth sessions are conducted via secure, HIPAA-compliant platforms
• You must be physically located in Florida during telehealth sessions
• Technology limitations may occasionally affect session quality
• Your therapist may determine that in-person services are more appropriate for your needs
• Telehealth has the same confidentiality protections as in-person sessions`,
  },
  {
    title: '5. Appointments, Cancellations & Fees',
    content: `Scheduling an appointment via our website, contact form, or phone constitutes agreement to our scheduling and payment policies.

Cancellation Policy: We require at least 24 hours' notice to cancel or reschedule an appointment. Late cancellations (less than 24 hours) may be charged 50% of the session fee. No-shows without notice will be charged the full session fee.

Payment: Services are due at the time of each session. We accept credit/debit cards, HSA/FSA cards, cash, and checks. A credit card on file is required for psychological evaluations.

Fee schedules are subject to change with reasonable notice. Please contact us for current fees.`,
  },
  {
    title: '6. Insurance & Billing',
    content: `While we accept many major insurance plans, it is the client's responsibility to verify their benefits and coverage prior to services. We will make reasonable efforts to verify insurance eligibility, but we cannot guarantee coverage.

Any amounts not covered by insurance — including copayments, deductibles, and non-covered services — are the client's financial responsibility. Providing incorrect or fraudulent insurance information may result in termination of services and potential legal action.`,
  },
  {
    title: '7. Intellectual Property',
    content: `All content on this website — including text, graphics, logos, images, and software — is the property of EQ Counseling & Testing LLC and is protected by applicable copyright, trademark, and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without express written permission from EQ Counseling & Testing LLC.`,
  },
  {
    title: '8. Website Accuracy',
    content: `We strive to keep the information on this website accurate and current, but we make no warranties or representations about the completeness, accuracy, or reliability of any content. Service descriptions, fees, therapist availability, and other details are subject to change without notice.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website may contain links to third-party websites (such as Google Maps or insurance provider portals). These links are provided for convenience only. EQ Counseling & Testing LLC is not responsible for the content, privacy practices, or accuracy of any third-party websites. Visiting third-party links is at your own risk.`,
  },
  {
    title: '10. Limitation of Liability',
    content: `To the fullest extent permitted by law, EQ Counseling & Testing LLC, its staff, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.

This website is provided "as is" without warranties of any kind, express or implied.`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms of Use are governed by the laws of the State of Florida. Any disputes arising from these terms or your use of our website shall be resolved in the courts of Orange County, Florida.`,
  },
  {
    title: '12. Contact',
    content: `If you have questions about these Terms of Use, please contact:

EQ Counseling & Testing LLC
Phone: 407-461-9721
Email: ronit@eqcounselingtesting.com
Location: Orlando, FL — Orange & Seminole Counties`,
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Please read these terms carefully before using our website or services."
        breadcrumb="Legal"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Crisis notice — always prominent */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10">
              <p className="font-heading font-bold text-red-700 text-sm mb-1">
                🚨 Mental Health Emergency?
              </p>
              <p className="text-red-600 text-sm">
                This website is not monitored 24/7. If you or someone you know is in crisis,
                call <strong>911</strong>, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline),
                or go to your nearest emergency room.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 mb-10 text-sm text-neutral-700">
              <strong className="font-semibold">Last Updated: May 2025</strong>
              <p className="mt-1 text-neutral-600">
                These terms govern your use of the EQ Counseling &amp; Testing LLC website.
                Use of this website constitutes acceptance of these terms.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map(({ title, content }) => (
                <div key={title}>
                  <h2 className="font-heading font-bold text-xl text-neutral-800 mb-3">{title}</h2>
                  <div className="text-neutral-600 leading-relaxed text-sm whitespace-pre-line">
                    {content}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom links */}
            <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-wrap gap-4 text-sm">
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>
              <a href="/" className="text-primary hover:underline">Back to Home</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
