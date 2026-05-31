'use client'

import { useState } from 'react'
import { X, Mail, Globe, Code2 } from 'lucide-react'

export default function DevWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Expanded card */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 w-72 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-teal px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 size={15} className="text-white" />
              <span className="text-white text-sm font-semibold">Want a site like this?</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-4">
            <p className="text-neutral-500 text-xs leading-relaxed mb-4">
              This site was built by <span className="font-semibold text-neutral-700">Daniel Gitlin</span> — full-stack developer specializing in modern, fast websites.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:danielgitlin2011@gmail.com"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/8 hover:bg-primary/15 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-700">Send an Email</p>
                  <p className="text-[10px] text-neutral-400">danielgitlin2011@gmail.com</p>
                </div>
              </a>

              <a
                href="https://dandev.live"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-teal/8 hover:bg-teal/15 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Globe size={15} className="text-teal" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-700">Visit Portfolio</p>
                  <p className="text-[10px] text-neutral-400">dandev.live</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-gradient-to-r from-primary to-teal text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Want a website like this?"
      >
        <Code2 size={13} />
        Want a site like this?
      </button>
    </div>
  )
}
