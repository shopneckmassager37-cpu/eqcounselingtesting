'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  className?: string
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const numeric = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/\d/g, '')
  const [display, setDisplay] = useState('0' + suffix)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || isNaN(numeric)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = Date.now()
          const duration = 1600

          const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(String(Math.round(eased * numeric)) + suffix)
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [numeric, suffix])

  return <span ref={ref} className={className}>{display}</span>
}
