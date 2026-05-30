import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'

const serviceLinks = [
  { label: 'Assessments & Testing', href: '/assessments' },
  { label: 'Counseling', href: '/counseling' },
  { label: 'Mediation', href: '/mediation' },
]

const quickLinks = [
  { label: 'Our Therapists', href: '/therapists' },
  { label: 'Rates & Insurance', href: '/rates' },
  { label: 'Client Forms', href: '/forms' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main footer */}
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-blue-200 text-sm leading-relaxed">
            Empowering individuals, couples, and families through compassionate,
            evidence-based mental health services since 2012.
          </p>
          <p className="mt-4 text-blue-300 text-xs italic">
            "For any encountered obstacle, there is a solution and the solution
            comes from within the individual."
          </p>
          <p className="mt-1 text-blue-400 text-xs">— Dr. Ronit Navon</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-blue-200 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/60 group-hover:bg-teal transition-colors" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-blue-200 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/60 group-hover:bg-teal transition-colors" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="tel:4074619721" className="flex items-start gap-2.5 text-blue-200 text-sm hover:text-white transition-colors">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-teal" />
                <span>407-461-9721</span>
              </a>
            </li>
            <li>
              <a href="mailto:ronit@eqcounselingtesting.com" className="flex items-start gap-2.5 text-blue-200 text-sm hover:text-white transition-colors break-all">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-teal" />
                <span>ronit@eqcounselingtesting.com</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-blue-200 text-sm">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-teal" />
              <span>5 Locations — Orlando Area &amp; Lake Mary, FL</span>
            </li>
            <li className="flex items-start gap-2.5 text-blue-200 text-sm">
              <Clock size={15} className="mt-0.5 flex-shrink-0 text-teal" />
              <span>Mon–Fri: 9am–7pm<br />Sat: 9am–4pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} EQ Counseling &amp; Testing LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              HIPAA Compliant
            </span>
            <span>Licensed in Florida</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
