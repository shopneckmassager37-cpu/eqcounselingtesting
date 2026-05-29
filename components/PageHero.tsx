interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-hero-gradient" aria-label="Page header">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
      </div>

      <div className="container-custom relative z-10 text-center">
        {breadcrumb && (
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 50" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
          <path d="M0,20 C360,50 1080,0 1440,30 L1440,50 L0,50 Z" />
        </svg>
      </div>
    </section>
  )
}
