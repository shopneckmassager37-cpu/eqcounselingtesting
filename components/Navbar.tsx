'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import Logo from './Logo'

const services = [
  { label: 'Assessments & Testing', href: '/assessments' },
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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled || !isHome
    ? 'bg-white shadow-nav'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-neutral-700' : 'text-white/90'
  const hoverColor = scrolled || !isHome ? 'hover:text-primary' : 'hover:text-white'
  const activeColor = scrolled || !isHome ? 'text-primary font-semibold' : 'text-white font-semibold'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
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
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-100
                                 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                 transition-all duration-200 origin-top-left"
                      role="menu"
                    >
                      <div className="p-1.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-primary-50 hover:text-primary transition-colors"
                            role="menuitem"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
                            {child.label}
                          </Link>
                        ))}
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
        className={`lg:hidden bg-white border-b border-neutral-100 shadow-lg overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
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
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-primary rounded-lg hover:bg-neutral-50 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
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
