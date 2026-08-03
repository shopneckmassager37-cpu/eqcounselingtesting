'use client'

import { useState, FormEvent } from 'react'
import { ChevronRight, CheckCircle, AlertCircle } from 'lucide-react'

const services = [
  'Individual Counseling',
  'Couples Counseling',
  'Family Therapy',
  'Comprehensive Assessments & Testing',
  'Mediation',
  'Veterans Care',
  'Other / Not Sure',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again or call us at 407-461-9721.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or call us at 407-461-9721.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="font-heading font-bold text-xl text-neutral-800 mb-2">Message Sent!</h3>
        <p className="text-neutral-500 text-sm">
          Thank you for reaching out. We'll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1.5">
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First name"
            className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Last Name <span className="text-red-400">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last name"
            className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@example.com"
          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(407) 000-0000"
          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you're looking for and how we can help..."
          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="flex-shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex justify-center items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full font-semibold text-sm transition-all hover:shadow-md hover:-translate-y-0.5"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
        {status !== 'submitting' && <ChevronRight size={16} />}
      </button>

      <p className="text-center text-neutral-400 text-xs">
        For immediate assistance, please call{' '}
        <a href="tel:4074619721" className="text-primary hover:underline">407-461-9721</a>
      </p>
    </form>
  )
}
