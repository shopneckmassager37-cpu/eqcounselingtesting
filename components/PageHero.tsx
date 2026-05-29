import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-hero-gradient" aria-label="Page header">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-hero-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-dots)" />
        </svg>

        {/* Circles */}
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-white/[0.06] animate-float" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-teal/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/[0.06]" />
        <div className="absolute top-10 left-[15%] w-20 h-20 rounded-full border border-white/15 animate-float" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-16 right-[20%] w-12 h-12 rounded-full bg-secondary/20" />
      </div>

      <div className="container-custom relative z-10 text-center">
        {breadcrumb && (
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wider uppercase">
            <ChevronRight size={11} className="opacity-70" />
            {breadcrumb}
          </div>
        )}
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3 leading-tight">
          {title}
        </h1>
        {/* Accent bar */}
        <div className="w-14 h-1 rounded-full bg-gradient-to-r from-secondary to-teal-light mx-auto mb-5" />
        {subtitle && (
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[35px] md:h-[60px]">
          <path d="M0,20 C240,60 480,0 720,30 C960,60 1200,5 1440,25 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
