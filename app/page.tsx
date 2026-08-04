import Image from 'next/image'
import Link from 'next/link'
import {
  Brain, Heart, Scale,
  Phone, Mail, MapPin, ChevronRight,
  Star, CheckCircle, Users, Award, CalendarDays,
  Shield, Zap, Globe, Medal,
} from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'
import ContactForm from '@/components/ContactForm'

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Welcome to EQ Counseling & Testing">
      {/* Background: gradient + optional photo overlay */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        aria-hidden="true"
      />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 animate-drift" />
        <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-teal/10 animate-drift-slow" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-white/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-white/10 animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full bg-white/3 animate-drift" style={{ animationDelay: '4s' }} />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Stacked stones — bottom-left zen decoration */}
        <div className="absolute bottom-16 left-6 lg:left-12 w-24 h-32 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="50" cy="18" rx="22" ry="11" fill="white" />
            <ellipse cx="50" cy="52" rx="32" ry="15" fill="white" />
            <ellipse cx="50" cy="92" rx="44" ry="20" fill="white" />
            <line x1="6" y1="118" x2="94" y2="118" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Tree — upper-left nature accent */}
        <div className="absolute top-8 left-[15%] w-20 h-28 opacity-10 animate-drift-slow">
          <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="43" y="92" width="14" height="30" rx="5" fill="white" />
            <ellipse cx="50" cy="78" rx="36" ry="26" fill="white" />
            <ellipse cx="50" cy="56" rx="27" ry="22" fill="white" />
            <ellipse cx="50" cy="36" rx="19" ry="17" fill="white" />
            <ellipse cx="50" cy="20" rx="12" ry="12" fill="white" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Main content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
              Professional Mental Health Services
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-white mb-5">
              Empowering<br />
              <span className="text-teal-light">Wellness</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-purple-100 leading-relaxed mb-7 max-w-lg">
              Compassionate, evidence-based counseling and comprehensive assessments
              serving Orlando and the surrounding communities since 2012.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <Link href="/contact" className="btn-primary justify-center sm:justify-start">
                Schedule a Consultation
                <ChevronRight size={18} />
              </Link>
              <Link href="#services" className="btn-outline-white justify-center sm:justify-start">
                Explore Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-purple-100/80 text-sm">
              {[
                'Est. 2012',
                'Licensed Therapists',
                'Teletherapy Available',
                'Multiple Locations',
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Floating card */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in delay-300">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-sm shadow-2xl animate-float">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/30 shadow-lg flex-shrink-0">
                    <Image
                      src="/images/dr-ronit-navon.png"
                      alt="Dr. Ronit Navon"
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-heading font-bold text-base">Dr. Ronit Navon</p>
                    <p className="text-purple-200 text-sm">PhD, LMHC, NCC</p>
                    <p className="text-purple-300 text-xs">Practice Director</p>
                  </div>
                </div>
                <p className="text-purple-100 text-sm leading-relaxed italic">
                  "For any encountered obstacle, there is a solution and the solution
                  comes from within the individual, to pursue their goals, dreams, and happiness."
                </p>
                <div className="mt-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />
                  ))}
                  <span className="text-purple-200 text-xs ml-1">Solution-Focused Approach</span>
                </div>
              </div>

              {/* Floating stat pills */}
              <div className="absolute -top-5 -right-6 bg-white rounded-2xl px-5 py-3 shadow-xl text-center animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-3xl font-extrabold text-primary font-heading leading-none">22+</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-medium">Years Experience</p>
              </div>
              <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-5 py-3 shadow-xl text-center animate-float" style={{ animationDelay: '2.2s' }}>
                <p className="text-3xl font-extrabold text-secondary font-heading leading-none">4+</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-medium">Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 70" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[70px]">
          <path d="M0,30 C240,70 480,0 720,35 C960,70 1200,10 1440,30 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { icon: CalendarDays, value: '2012', label: 'Founded' },
    { icon: Award, value: '22+', label: 'Years of Experience' },
    { icon: MapPin, value: '10', label: 'Practice Locations' },
    { icon: Users, value: '4', label: 'Licensed Specialists' },
  ]

  return (
    <section className="bg-primary py-12 relative overflow-hidden" aria-label="Practice highlights">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x md:divide-white/10">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="text-center group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Glowing icon */}
              <div className="relative w-14 h-14 mx-auto mb-4">
                <div className="absolute inset-0 rounded-xl bg-white/10 blur-sm scale-110" />
                <div className="relative w-14 h-14 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Icon className="w-7 h-7 text-purple-200" />
                </div>
              </div>
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-none tracking-tight">
                {label === 'Founded' ? value : <AnimatedCounter value={value} />}
              </p>
              <p className="text-purple-300 text-xs mt-2 font-semibold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services Overview ────────────────────────────────────────────────────────

const servicesData = [
  {
    icon: Brain,
    title: 'Comprehensive Assessments & Psychological Testing',
    description:
      'In-depth evaluations including Academic, Intelligence, Autism/Spectrum, Career, and Personality testing for juveniles and adults — clear results, actionable next steps.',
    href: '/assessments',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: Heart,
    title: 'Counseling',
    description:
      'Individual, couples, and family therapy for Depression, Anxiety, ADHD, PTSD, and more — serving adults, teens, and children in person or via teletherapy.',
    href: '/counseling',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    icon: Scale,
    title: 'Mediation',
    description:
      '"Divorce with less trauma" — EQ Divorce Mediation provides compassionate family mediation to resolve conflict and reach agreements with dignity.',
    href: '/mediation',
    iconColor: 'text-accent-dark',
    iconBg: 'bg-accent/10',
  },
]

function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-custom">
        <div className="text-center mb-14 reveal">
          <span className="badge bg-primary/10 text-primary mb-3">What We Offer</span>
          <h2 id="services-heading" className="section-title mb-0">
            Comprehensive Mental Health Services
          </h2>
          <span className="accent-bar" />
          <p className="section-subtitle max-w-2xl mx-auto">
            We offer a full spectrum of services tailored to individuals, couples, families,
            and professionals across Orange and Seminole counties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map(({ icon: Icon, title, description, href, iconColor, iconBg }, i) => (
            <div key={href} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
            <Link
              href={href}
              className="card p-8 flex flex-col group h-full"
              aria-label={`Learn more about ${title}`}
            >
              <div className="relative w-14 h-14 mb-5">
                <div className={`absolute -inset-1 ${iconBg} rounded-xl blur-md opacity-70`} />
                <div className={`relative w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg text-neutral-800 mb-3 leading-snug">{title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed flex-1">{description}</p>
              <div className={`mt-5 flex items-center gap-1 text-sm font-semibold ${iconColor} group-hover:gap-2 transition-all`}>
                Learn more <ChevronRight size={16} />
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About Dr. Navon ──────────────────────────────────────────────────────────

function AboutSection() {
  const expertise = [
    'Bipolar Disorder & Depression',
    'Anxiety & Stress Management',
    'Substance Abuse & Recovery',
    'Grief & Bereavement',
    'Family & Couples Counseling',
    'Elder Care',
    'Children & Adolescents',
    'Comprehensive Assessments & Testing',
  ]

  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background tree decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-56 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="43" y="92" width="14" height="32" rx="5" fill="#6B4AA0" />
          <ellipse cx="50" cy="78" rx="36" ry="26" fill="#6B4AA0" />
          <ellipse cx="50" cy="56" rx="27" ry="22" fill="#6B4AA0" />
          <ellipse cx="50" cy="36" rx="19" ry="17" fill="#6B4AA0" />
          <ellipse cx="50" cy="20" rx="12" ry="12" fill="#6B4AA0" />
        </svg>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Visual */}
          <div className="flex flex-col items-center lg:items-start reveal-left">
            <div className="relative">
              {/* Dr. Navon photo */}
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary/10">
                <Image
                  src="/images/dr-ronit-navon.png"
                  alt="Dr. Ronit Navon, Practice Director"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                  priority
                />
              </div>
              {/* Credential badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-neutral-100">
                <p className="font-heading font-bold text-primary text-sm">PhD · LMHC · NCC</p>
                <p className="text-neutral-500 text-xs">Licensed in Florida</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <span className="badge bg-primary/10 text-primary mb-3">Meet the Director</span>
            <h2 id="about-heading" className="section-title mb-0">Dr. Ronit Navon</h2>
            <span className="accent-bar-left" />
            <p className="text-teal font-semibold mb-5">Practice Director &amp; Licensed Mental Health Counselor</p>

            <p className="text-neutral-600 leading-relaxed mb-5">
              Dr. Navon earned her PhD in Counseling from Barry University (2009) and her Master's in
              Community Mental Health from Rollins College (1998). A Licensed Mental Health Counselor
              (LMHC) and Qualified Supervisor for Florida, she founded EQ Counseling &amp; Testing in
              2012 with a mission to empower clients through a solution-focused approach.
            </p>

            {/* Philosophy callout */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 mb-6">
              <p className="text-neutral-700 italic leading-relaxed">
                "For any encountered obstacle, there is a solution and the solution comes from within
                the individual, to pursue their goals, dreams, and happiness."
              </p>
              <p className="text-primary text-sm font-semibold mt-2">— Dr. Ronit Navon</p>
            </div>

            {/* Expertise grid */}
            <h3 className="font-heading font-semibold text-neutral-700 mb-3 text-sm uppercase tracking-wide">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                  <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link href="/therapists" className="btn-secondary">
              Meet Our Full Team
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted Since 2012',
      description: 'Over a decade of providing high-quality mental health services to the greater Orlando community.',
    },
    {
      icon: Zap,
      title: 'Solution-Focused',
      description: 'Our evidence-based approach emphasizes your strengths and resources to build confidence and achieve your goals.',
    },
    {
      icon: Globe,
      title: 'Accessible Care',
      description: 'Multiple convenient office locations across Orange and Seminole counties, plus teletherapy options.',
    },
    {
      icon: Users,
      title: 'Diverse Expertise',
      description: 'A multidisciplinary team of licensed specialists serving children, teens, adults, couples, and families.',
    },
  ]

  return (
    <section className="section-padding bg-cta-gradient relative overflow-hidden" aria-labelledby="why-us-heading">
      {/* Peaceful family silhouette — right background */}
      <div className="absolute right-0 bottom-0 w-64 h-56 opacity-[0.07] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Adult 1 */}
          <circle cx="38" cy="24" r="13" fill="white" />
          <path d="M20 72 C20 50 56 50 56 72 L56 108 C56 113 20 113 20 108 Z" fill="white" />
          {/* Adult 2 */}
          <circle cx="82" cy="26" r="12" fill="white" />
          <path d="M65 72 C65 52 99 52 99 72 L99 108 C99 112 65 112 65 108 Z" fill="white" />
          {/* Child */}
          <circle cx="124" cy="40" r="10" fill="white" />
          <path d="M110 78 C110 60 138 60 138 78 L138 108 C138 111 110 111 110 108 Z" fill="white" />
          {/* Ground */}
          <line x1="12" y1="122" x2="148" y2="122" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="badge bg-white/20 text-purple-200 mb-3">Why Choose Us</span>
          <h2 id="why-us-heading" className="section-title text-white mb-0">
            The EQ Difference
          </h2>
          <span className="accent-bar-light" />
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            We combine clinical expertise with genuine compassion to help you navigate life's challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-purple-200 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Veterans ────────────────────────────────────────────────────────────────

function VeteransSection() {
  const areas = [
    { icon: Shield, label: 'Combat & Service-Related PTSD' },
    { icon: Heart, label: 'Military Sexual Trauma (MST)' },
    { icon: Users, label: 'Transition & Civilian Adjustment' },
    { icon: Brain, label: 'TBI-Related Assessments' },
    { icon: Zap, label: 'Depression & Anxiety' },
    { icon: Globe, label: 'Family & Relationship Support' },
  ]

  return (
    <section className="section-padding bg-white" aria-labelledby="veterans-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: content */}
          <div className="reveal-left">
            <span className="badge bg-primary/10 text-primary mb-3">
              <Medal size={13} />
              Serving Those Who Served
            </span>
            <h2 id="veterans-heading" className="section-title mb-0">
              Dedicated Care for<br />
              Veterans &amp; Active Military
            </h2>
            <span className="accent-bar-left" />
            <p className="text-neutral-600 leading-relaxed mb-6">
              Those who serve in uniform face challenges that require specialized understanding.
              Our clinicians are trained to work with veterans, active-duty service members, and
              their families — providing a confidential, non-judgmental space to heal and move forward.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-neutral-700">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 mb-7">
              <p className="text-neutral-700 text-sm leading-relaxed">
                We accept TriCare and work with VA Community Care referrals. Teletherapy available
                statewide so you can access care from home, on base, or on the road.
              </p>
            </div>

            <Link href="/contact" className="btn-secondary">
              Get Veteran-Focused Support
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Right: highlight cards */}
          <div className="reveal-right">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Safe & Confidential',
                  body: 'Everything discussed in session stays between you and your clinician. Your service record and security clearance are never at risk.',
                  color: 'border-primary/20 bg-primary/3',
                  icon: Shield,
                  iconColor: 'text-primary',
                  iconBg: 'bg-primary/10',
                },
                {
                  title: 'Trauma-Informed Approach',
                  body: 'We use evidence-based therapies — CPT, EMDR-informed, and Prolonged Exposure — tailored to the unique experiences of military service.',
                  color: 'border-secondary/20 bg-secondary/3',
                  icon: Heart,
                  iconColor: 'text-secondary',
                  iconBg: 'bg-secondary/10',
                },
                {
                  title: 'Teletherapy Statewide',
                  body: 'Can\'t make it in person? We offer secure video sessions throughout Florida — no commute, no waiting room, complete privacy.',
                  color: 'border-teal/20 bg-teal/3',
                  icon: Globe,
                  iconColor: 'text-teal',
                  iconBg: 'bg-teal/10',
                },
              ].map(({ title, body, color, icon: Icon, iconColor, iconBg }) => (
                <div key={title} className={`rounded-2xl border p-5 flex gap-4 items-start ${color}`}>
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-800 text-sm mb-1">{title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Locations ────────────────────────────────────────────────────────────────

function LocationsSection() {
  const locations = [
    {
      title: 'Greater Orlando',
      description: 'Nine offices across Downtown Orlando, Maitland, Winter Park, Windermere, Winter Garden, South Orlando/Millenia, Colonial Town Center, UCF/East Orlando, and University Blvd/Oviedo.',
      link: 'https://maps.google.com/?q=390+N+Orange+Ave+Suite+2300+Orlando+FL+32801',
    },
    {
      title: 'Lake Mary — Seminole County',
      description: '255 Primera Blvd, Suite 160, Lake Mary, FL 32746 — serving Lake Mary, Apopka, Sanford, Longwood, Casselberry, and Altamonte Springs.',
      link: 'https://maps.google.com/?q=255+Primera+Blvd+Suite+160+Lake+Mary+FL+32746',
    },
    {
      title: 'Teletherapy Statewide',
      description: 'Secure, HIPAA-compliant video sessions available to all Florida residents — from anywhere, any device.',
      link: '/contact',
    },
  ]

  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="locations-heading">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="badge bg-teal/10 text-teal mb-3">Locations</span>
          <h2 id="locations-heading" className="section-title mb-0">We're Here For You</h2>
          <span className="accent-bar" />
          <p className="section-subtitle max-w-xl mx-auto">
            Multiple convenient locations across Central Florida, plus teletherapy for added flexibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div key={loc.title} className="card p-8 text-center group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal/20 transition-colors">
                <MapPin className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-heading font-bold text-neutral-800 text-lg mb-3">{loc.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">{loc.description}</p>
              <a
                href={loc.link}
                target={loc.link.startsWith('http') ? '_blank' : undefined}
                rel={loc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-teal text-sm font-semibold hover:text-teal-dark transition-colors flex items-center justify-center gap-1 group-hover:gap-2"
              >
                Get Directions <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact Snippet ──────────────────────────────────────────────────────────

function ContactSnippet() {
  return (
    <section className="section-padding bg-white" aria-labelledby="contact-snippet-heading">
      <div className="container-custom">
        <div className="bg-hero-gradient rounded-3xl p-10 md:p-14 overflow-hidden relative">
          {/* Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10 text-center reveal">
            <h2 id="contact-snippet-heading" className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
              Taking the first step toward better mental health is the most important one.
              Reach out today — we're here to help.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/contact" className="btn-primary text-base">
                Schedule a Consultation
                <ChevronRight size={18} />
              </Link>
              <a href="tel:4074619721" className="btn-outline-white text-base">
                <Phone size={18} />
                407-461-9721
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-purple-200 text-sm">
              <a href="tel:4074619721" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                407-461-9721
              </a>
              <a href="mailto:ronit@eqcounselingtesting.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                ronit@eqcounselingtesting.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Orlando, FL Area
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Homepage Contact Form ────────────────────────────────────────────────────

function HomepageContactSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="homepage-contact-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left: Text */}
          <div className="reveal-left">
            <span className="badge bg-secondary/10 text-secondary mb-3">Reach Out Today</span>
            <h2 id="homepage-contact-heading" className="section-title mb-0">
              Let's Start a Conversation
            </h2>
            <span className="accent-bar-left" />
            <p className="text-neutral-600 leading-relaxed mb-6">
              Whether you have questions, want to understand our services better, or are ready to book
              your first session — we're here for you. There's no commitment required to reach out.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'Call or Text', value: '407-461-9721', href: 'tel:4074619721' },
                { icon: Mail, label: 'Email Us', value: 'ronit@eqcounselingtesting.com', href: 'mailto:ronit@eqcounselingtesting.com' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={href} href={href} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{label}</p>
                    <p className="text-neutral-800 font-semibold group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
              <p className="text-neutral-700 text-sm font-semibold mb-1">Practice Hours</p>
              <p className="text-neutral-500 text-sm">Mon–Fri: 9:00 AM – 7:00 PM</p>
              <p className="text-neutral-500 text-sm">Saturday: 9:00 AM – 4:00 PM</p>
              <p className="text-neutral-400 text-xs mt-2">Teletherapy available by arrangement.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card p-8 reveal-right">
            <h3 className="font-heading font-bold text-xl text-neutral-800 mb-1">Send a Message</h3>
            <p className="text-neutral-400 text-sm mb-6">We'll respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <VeteransSection />
      <HomepageContactSection />
      <LocationsSection />
      <ContactSnippet />
    </>
  )
}
