'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setWidth(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[3px] z-[9999] transition-[width] duration-100"
      style={{
        width: `${width}%`,
        background: 'linear-gradient(90deg, #3B9E6E, #2B5FA5, #3D8B9E)',
      }}
    />
  )
}
