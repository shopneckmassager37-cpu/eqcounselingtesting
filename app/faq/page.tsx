import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Phone, Mail } from 'lucide-react'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about counseling, psychological assessments, insurance, teletherapy, and what to expect at EQ Counseling & Testing in Orlando, FL.',
  alternates: { canonical: '/faq' },
}

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I schedule an appointment?',
        a: 'You can reach us by phone at 407-461-9721, by email at ronit@eqcounselingtesting.com, or by submitting the contact form on our website. We typically respond within one business day and will match you with the therapist who best fits your needs.',
      },
      {
        q: 'What happens during the first session?',
        a: 'Your first session is a consultation where your therapist will get to know you, understand your goals, and discuss what brings you in. There is no pressure to share everything at once — this is simply a chance to see if we are a good fit and to start building a comfortable therapeutic relationship.',
      },
      {
        q: 'Do I need a referral to start therapy?',
        a: 'No referral is needed for most services. You can contact us directly to schedule. If you are using VA Community Care or a managed care plan, a referral from your primary care provider may be required — feel free to call us and we can help clarify.',
      },
      {
        q: 'How long does each session last?',
        a: 'Standard individual therapy sessions are 50–60 minutes. Comprehensive psychological assessments are scheduled differently and may span several sessions depending on the evaluation type. Your therapist will give you a clear timeline during your intake.',
      },
    ],
  },
  {
    category: 'Services & Specialties',
    questions: [
      {
        q: 'What types of counseling do you offer?',
        a: 'We offer individual therapy, couples counseling, family therapy, and group sessions. Our clinicians specialize in depression, anxiety, ADHD, trauma/PTSD, grief, substance abuse, life transitions, and more. We also provide specialized care for veterans and active military.',
      },
      {
        q: 'What is a comprehensive psychological assessment?',
        a: 'A psychological assessment is a thorough evaluation using standardized tests and clinical interviews to better understand a person\'s cognitive abilities, emotional functioning, learning style, or behavioral patterns. Assessments are used to diagnose conditions such as ADHD, autism spectrum disorder, learning disabilities, and more — providing clarity and a roadmap for support.',
      },
      {
        q: 'Do you offer divorce or family mediation?',
        a: 'Yes. Our EQ Divorce Mediation service helps families resolve disputes with dignity and compassion. Mediation is an alternative to litigation and is typically faster, less stressful, and more cost-effective. We guide both parties to reach agreements on custody, parenting plans, and asset division.',
      },
      {
        q: 'Do you work with children and teenagers?',
        a: 'Yes. We work with children (typically age 6 and up), adolescents, and teens. Our therapists are experienced in child-centered therapy, play therapy principles, school-related issues, ADHD, behavioral concerns, and adolescent emotional support.',
      },
    ],
  },
  {
    category: 'Insurance & Fees',
    questions: [
      {
        q: 'Do you accept insurance?',
        a: 'Yes. We work with several major insurance plans, including TriCare for veterans and active military, and can assist with VA Community Care referrals. We also offer private-pay sessions with transparent rates. Please contact us to verify your specific plan coverage — our rates page has more details.',
      },
      {
        q: 'How much do sessions cost?',
        a: 'Session fees vary by service type and therapist. We offer competitive rates and accept multiple forms of payment. Many clients use insurance, HSA/FSA funds, or out-of-network reimbursement. Visit our Rates & Insurance page or call us for current pricing.',
      },
      {
        q: 'Can I use my HSA or FSA for therapy?',
        a: 'Yes! Mental health services are a qualified medical expense, so you can typically use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for counseling and assessments. We can provide a superbill / receipt for reimbursement purposes.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'We ask for at least 24 hours notice if you need to cancel or reschedule. Late cancellations and no-shows may incur a fee. We understand that life happens, so please contact us as soon as possible and we will do our best to accommodate you.',
      },
    ],
  },
  {
    category: 'Teletherapy & Convenience',
    questions: [
      {
        q: 'Do you offer teletherapy (online therapy)?',
        a: 'Yes. We offer secure, HIPAA-compliant video sessions for most of our counseling services throughout Florida. Teletherapy is a convenient option if you cannot visit an office, prefer the comfort of your own home, or live outside our immediate service area.',
      },
      {
        q: 'Where are your offices located?',
        a: 'We have multiple offices across Central Florida: Downtown Orlando (390 N Orange Ave), Lake Mary (255 Primera Blvd), Windermere/Winter Garden (7208 W Sand Lake Rd), South Orlando/Millenia (4700 Millenia Blvd), and Colonial Town Center (1060 Woodcock Rd). Visit our Contact page for maps and directions.',
      },
      {
        q: 'What are your hours?',
        a: 'Our offices are open Monday through Friday, 9:00 AM – 7:00 PM, and Saturday 9:00 AM – 4:00 PM. Teletherapy sessions may be available outside regular hours by arrangement — contact us to discuss scheduling options.',
      },
    ],
  },
  {
    category: 'Privacy & Confidentiality',
    questions: [
      {
        q: 'Is what I share in therapy confidential?',
        a: 'Yes. Everything you share with your therapist is protected by state and federal privacy laws (HIPAA). We cannot disclose your information without your written consent, except in limited circumstances required by law — such as if there is an imminent risk of harm to yourself or others. Your privacy and trust are of the utmost importance to us.',
      },
      {
        q: 'Is therapy confidential for veterans? Will it affect my clearance?',
        a: 'Absolutely. Seeking mental health treatment does not automatically affect your security clearance or service record. Therapy is confidential and the content of your sessions is protected. Only rare mandatory reporting situations apply, none of which relate to seeking mental health support.',
      },
    ],
  },
]

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about getting started with counseling, assessments, and our services."
        breadcrumb="FAQ"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-12">
              <h2 className="font-heading font-bold text-xl text-primary mb-5 pb-2 border-b-2 border-primary/10">
                {cat.category}
              </h2>
              <FAQAccordion questions={cat.questions} />
            </div>
          ))}

          {/* Still have questions CTA */}
          <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-center">
            <h3 className="font-heading font-bold text-2xl text-white mb-3">Still Have Questions?</h3>
            <p className="text-purple-100 mb-6">
              We're happy to answer any questions before you book. Reach out and we'll get back to you promptly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Send a Message <ChevronRight size={16} />
              </Link>
              <a href="tel:4074619721" className="btn-outline-white">
                <Phone size={16} />
                407-461-9721
              </a>
            </div>
            <a
              href="mailto:ronit@eqcounselingtesting.com"
              className="inline-flex items-center gap-2 text-purple-200 hover:text-white text-sm mt-4 transition-colors"
            >
              <Mail size={14} />
              ronit@eqcounselingtesting.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
