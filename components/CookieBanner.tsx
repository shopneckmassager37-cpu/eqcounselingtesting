'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Check } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('eq-cookie-consent')
    if (!consent) {
      // Small delay so banner slides in after page load
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('eq-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('eq-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-neutral-200 p-5 pointer-events-auto animate-fade-in-up">
        <div className="flex gap-4 items-start">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-primary" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-heading font-semibold text-neutral-800 text-sm mb-1">
              We use cookies to improve your experience
            </p>
            <p className="text-neutral-500 text-xs leading-relaxed">
              This website uses essential cookies for functionality and analytics to understand
              how visitors interact with our site. We do not share or sell your data.{' '}
              <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-primary-dark">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Dismiss */}
          <button
            onClick={decline}
            className="text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0 p-1"
            aria-label="Dismiss cookie banner"
          >
            <X size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 mt-4 pl-14">
          <button
            onClick={accept}
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-full text-xs font-semibold transition-colors"
          >
            <Check size={13} />
            Accept All
          </button>
          <button
            onClick={decline}
            className="px-5 py-2 border border-neutral-200 text-neutral-600 hover:bg-neutral-50 rounded-full text-xs font-semibold transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  )
}
