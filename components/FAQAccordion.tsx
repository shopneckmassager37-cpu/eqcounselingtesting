'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ questions }: { questions: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {questions.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-colors ${
              isOpen ? 'border-primary/30 bg-primary/2' : 'border-neutral-200 bg-white hover:border-primary/20'
            }`}
          >
            <button
              className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-neutral-800 text-sm leading-snug">{item.q}</span>
              <ChevronDown
                size={18}
                className={`text-primary flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-neutral-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
