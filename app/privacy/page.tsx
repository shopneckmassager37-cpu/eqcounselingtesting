import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for EQ Counseling & Testing LLC. Learn how we collect, use, and protect your personal and health information in accordance with HIPAA.',
  alternates: { canonical: '/privacy' },
}

const sections = [
  {
    title: '1. Introduction',
    content: `EQ Counseling & Testing LLC ("we," "us," or "our") is committed to protecting your privacy and safeguarding your personal and health information. This Privacy Policy describes how we collect, use, disclose, and protect information when you visit our website (eqcounselingtesting.com) or use our services.

This policy applies to all visitors, clients, and prospective clients. By using our website, you consent to the practices described in this policy.`,
  },
  {
    title: '2. HIPAA Compliance',
    content: `As a healthcare provider, EQ Counseling & Testing LLC is subject to the Health Insurance Portability and Accountability Act (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act. We maintain strict policies and procedures to protect the privacy and security of all Protected Health Information (PHI).

Your clinical records, session notes, assessments, and any health-related information shared during treatment are protected under HIPAA and will not be disclosed without your written authorization, except as permitted or required by law (e.g., mandatory reporting, court orders, emergencies involving risk of harm).

Our full HIPAA Notice of Privacy Practices is provided at your first appointment and is available upon request.`,
  },
  {
    title: '3. Information We Collect',
    content: `We may collect the following types of information:

Website Information: When you visit our website, we may automatically collect technical data such as IP address, browser type, pages visited, and time spent on pages. This is used for analytics purposes only.

Contact Information: When you fill out a contact form, call, or email us, we collect your name, phone number, email address, and the content of your message in order to respond to your inquiry.

Client Information: Once you become a client, we collect clinical and administrative information necessary to provide mental health services, including your name, date of birth, contact information, insurance information, and health history.`,
  },
  {
    title: '4. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

• To respond to inquiries and schedule appointments
• To provide mental health counseling, assessment, and related services
• To process insurance claims and billing
• To comply with legal and regulatory requirements
• To improve our website and services
• To communicate important updates about your care
• For internal administrative purposes

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `Our website uses cookies — small text files stored on your device — to improve functionality and understand how visitors use our site.

Essential Cookies: Required for the website to function properly. These cannot be disabled.

Analytics Cookies: We may use analytics tools (such as Google Analytics) to understand visitor behavior in an anonymized, aggregated form. These cookies can be declined via our cookie consent banner.

You can control cookies through your browser settings. Disabling cookies may affect some website functionality. Our cookie consent banner allows you to choose your preference.`,
  },
  {
    title: '6. Third-Party Services',
    content: `We may use trusted third-party service providers to assist with website hosting, analytics, scheduling, and secure client portals. These providers are contractually obligated to maintain the confidentiality and security of your information and may not use it for any purpose other than providing services to us.

When you click external links on our website (such as Google Maps), you will be subject to that third party's privacy policy.`,
  },
  {
    title: '7. Data Security',
    content: `We implement appropriate technical and organizational safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. All clinical communications and records use secure, encrypted systems.

While we take every reasonable precaution, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of information transmitted over the internet.`,
  },
  {
    title: '8. Data Retention',
    content: `We retain client records for the period required by Florida state law and professional licensing standards — typically a minimum of 7 years for adult clients and until age 25 for minors, from the date of last service.

Website analytics data is retained for a period consistent with the analytics provider's policy.`,
  },
  {
    title: '9. Your Rights',
    content: `Depending on your location and applicable law, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your information (subject to legal retention requirements)
• Opt out of non-essential cookies via our cookie banner
• Receive a copy of our HIPAA Notice of Privacy Practices

To exercise any of these rights, contact us at ronit@eqcounselingtesting.com or call 407-461-9721.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 through our website without parental consent. Clinical services for minors are provided with appropriate parental or guardian consent as required by Florida law.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last Updated" date at the bottom of this page indicates when the policy was last revised. Continued use of our website after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have questions about this Privacy Policy or our privacy practices, please contact us:

EQ Counseling & Testing LLC
Phone: 407-461-9721
Email: ronit@eqcounselingtesting.com
Location: Orlando, FL — Orange & Seminole Counties`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy and confidentiality are fundamental to everything we do."
        breadcrumb="Legal"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Intro notice */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-10 text-sm text-neutral-700">
              <strong className="font-semibold text-primary">Last Updated: May 2025</strong>
              <p className="mt-1 text-neutral-600">
                This policy applies to EQ Counseling &amp; Testing LLC and covers our website and clinical services.
                As a HIPAA-covered entity, our clinical privacy practices are also governed by our Notice of Privacy
                Practices, provided at your first appointment.
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
              <a href="/terms" className="text-primary hover:underline">Terms of Use</a>
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>
              <a href="/" className="text-primary hover:underline">Back to Home</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
