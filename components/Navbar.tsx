'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react'
import Logo from './Logo'

const assessmentTypes = [
  { label: 'Comprehensive Mental Health Assessment', href: '/assessments#comprehensive-mental-health-assessment' },
  { label: 'Psychosocial Assessment', href: '/assessments#psychosocial-assessment' },
  { label: 'ADHD Screening', href: '/assessments#adhd-screening' },
  { label: 'Psychoeducational Evaluation', href: '/assessments#psychoeducational-evaluation' },
  { label: 'ASD - Autism/Spectrum Disorder', href: '/assessments#asd-autism-spectrum-disorder' },
  { label: 'Personality Tests - MMPI', href: '/assessments#personality-tests-mmpi' },
  { label: 'Custody Evaluation', href: '/assessments#custody-evaluation' },
  { label: 'Substance Abuse Evaluation', href: '/assessments#substance-abuse-evaluation' },
  { label: 'Pre Treatment/Surgical Evaluations', href: '/assessments#pre-treatment-surgical-evaluations' },
  { label: 'Social Security Evaluation', href: '/assessments#social-security-evaluation' },
  { label: 'Immigration Comprehensive Evaluation', href: '/assessments#immigration-comprehensive-evaluation' },
  { label: 'Fit for Duty Evaluation', href: '/assessments#fit-for-duty-evaluation' },
]

const services = [
  { label: 'Assessments & Testing', href: '/assessments', children: assessmentTypes },
  { label: 'Counseling', href: '/counseling' },
  { label: 'Mediation', href: '/mediation' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Therapists', href: '/therapists' },
  { label: 'Services', href: '#', children: services },
  { label: 'Rates & Insurance', href: '/rates' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Forms', href: '/forms' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled || !isHome
    ? 'shadow-nav'
    : 'bg-transparent'

  const navStyle = scrolled || !isHome ? { backgroundColor: '#FFFDF9' } : undefined

  const textColor = scrolled || !isHome ? 'text-neutral-700' : 'text-white/90'
  const hoverColor = scrolled || !isHome ? 'hover:text-primary' : 'hover:text-white'
  const activeColor = scrolled || !isHome ? 'text-primary font-semibold' : 'text-white font-semibold'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`} style={navStyle}>
      {/* Top info bar */}
      <div className={`hidden md:block transition-all duration-300 ${scrolled || !isHome ? 'bg-primary' : 'bg-primary/40 backdrop-blur-sm'}`}>
        <div className="container-custom py-1.5 flex justify-between items-center text-sm text-white/90">
          <span className="text-blue-100 text-xs">
            💙 You don't have to figure it out alone — we're here to help, no judgment.
          </span>
          <div className="flex items-center gap-5">
            <a href="tel:4074619721" className="flex items-center gap-1.5 hover:text-white transition-colors text-xs">
              <Phone size={13} />
              <span>407-461-9721</span>
            </a>
            <a href="mailto:ronit@eqcounselingtesting.com" className="flex items-center gap-1.5 hover:text-white transition-colors text-xs">
              <Mail size={13} />
              <span>ronit@eqcounselingtesting.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className={`border-b transition-colors duration-300 ${scrolled || !isHome ? 'border-neutral-200' : 'border-white/10'}`}>
        <div className="container-custom py-3 flex items-center justify-between gap-4">
          <Logo variant={scrolled || !isHome ? 'dark' : 'light'} />

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${textColor} ${hoverColor}`}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl border border-neutral-100
                                 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                 transition-all duration-200 origin-top-left"
                      style={{ backgroundColor: '#FFFDF9' }}
                      role="menu"
                    >
                      <div className="p-1.5">
                        {link.children.map((child) => {
                          if ('children' in child && child.children) {
                            return (
                              <div key={child.href} className="relative group/sub">
                                <Link
                                  href={child.href}
                                  className="flex items-center justify-between gap-2 px-3 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-primary-50 hover:text-primary transition-colors"
                                  role="menuitem"
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
                                    {child.label}
                                  </span>
                                  <ChevronRight size={14} className="text-neutral-400" />
                                </Link>
                                {/* Nested flyout */}
                                <div
                                  className="absolute top-0 left-full ml-1 w-80 rounded-xl shadow-xl border border-neutral-100
                                             opacity-0 invisible translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0
                                             transition-all duration-200 origin-top-left max-h-[70vh] overflow-y-auto"
                                  style={{ backgroundColor: '#FFFDF9' }}
                                  role="menu"
                                >
                                  <div className="p-1.5">
                                    {child.children.map((grandchild) => (
                                      <Link
                                        key={grandchild.href}
                                        href={grandchild.href}
                                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-primary-50 hover:text-primary transition-colors"
                                        role="menuitem"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                                        {grandchild.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-primary-50 hover:text-primary transition-colors"
                              role="menuitem"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive ? activeColor : `${textColor} ${hoverColor}`
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-secondary hover:bg-secondary-dark text-white rounded-full text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Let's Talk 💬
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || !isHome ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-b border-neutral-100 shadow-lg overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[80vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#FFFDF9' }}
        aria-hidden={!mobileOpen}
      >
        <nav className="container-custom py-4 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-primary-100 ml-3">
                      {link.children.map((child) => {
                        if ('children' in child && child.children) {
                          const isOpen = mobileSubOpen === child.label
                          return (
                            <div key={child.href}>
                              <div className="flex items-center justify-between rounded-lg hover:bg-neutral-50">
                                <Link
                                  href={child.href}
                                  className="flex-1 px-3 py-2.5 text-sm text-neutral-600 hover:text-primary transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                                <button
                                  onClick={() => setMobileSubOpen(isOpen ? null : child.label)}
                                  className="px-3 py-2.5 text-neutral-400"
                                  aria-label={`Toggle ${child.label} submenu`}
                                  aria-expanded={isOpen}
                                >
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                  />
                                </button>
                              </div>
                              {isOpen && (
                                <div className="pl-4 space-y-1 border-l-2 border-secondary/20 ml-3">
                                  {child.children.map((grandchild) => (
                                    <Link
                                      key={grandchild.href}
                                      href={grandchild.href}
                                      className="block px-3 py-2 text-xs text-neutral-500 hover:text-primary rounded-lg hover:bg-neutral-50 transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {grandchild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        }
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-primary rounded-lg hover:bg-neutral-50 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-3 font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-primary-50 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-neutral-100 mt-2">
            <Link
              href="/contact"
              className="w-full flex justify-center items-center px-5 py-3 bg-secondary text-white rounded-full font-semibold text-sm hover:bg-secondary-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk — We're Here 💙
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
