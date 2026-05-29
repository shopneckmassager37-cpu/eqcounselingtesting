import Image from 'next/image'
import Link from 'next/link'
import {
  Brain, Heart, GraduationCap, Scale,
  Phone, Mail, MapPin, ChevronRight,
  Star, CheckCircle, Users, Award, CalendarDays,
  Shield, Zap, Globe,
} from 'lucide-react'

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient" aria-label="Welcome to EQ Counseling & Testing">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 animate-float" />
        <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-teal/10" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-white/10" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-white/10 animate-float" style={{ animationDelay: '3.5s' }} />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Main content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
              Professional Mental Health Services
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-white mb-5">
              Empowering<br />
              <span className="text-blue-300">Mental</span>{' '}
              <span className="text-teal-light">Wellness</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-7 max-w-lg">
              Compassionate, evidence-based counseling and psychological evaluations
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
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-sm">
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
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-sm shadow-2xl">
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
                    <p className="text-blue-200 text-sm">PhD, LMHC, NCC</p>
                    <p className="text-blue-300 text-xs">Practice Director</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed italic">
                  "For any encountered obstacle, there is a solution and the solution
                  comes from within the individual, to pursue their goals, dreams, and happiness."
                </p>
                <div className="mt-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />
                  ))}
                  <span className="text-blue-200 text-xs ml-1">Solution-Focused Approach</span>
                </div>
              </div>

              {/* Floating stat pills */}
              <div className="absolute -top-5 -right-6 bg-white rounded-2xl px-5 py-3 shadow-xl text-center">
                <p className="text-3xl font-extrabold text-primary font-heading leading-none">22+</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-medium">Years Experience</p>
              </div>
              <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-5 py-3 shadow-xl text-center">
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
    { icon: MapPin, value: '5+', label: 'Practice Locations' },
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
                  <Icon className="w-7 h-7 text-blue-200" />
                </div>
              </div>
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-none tracking-tight">{value}</p>
              <p className="text-blue-300 text-xs mt-2 font-semibold uppercase tracking-widest">{label}</p>
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
    title: 'Assessments & Testing',
    description:
      'Comprehensive psychological evaluations including Academic, Intelligence, Autism/Spectrum, Career, and Personality tests for juveniles and adults.',
    href: '/assessments',
    color: 'from-primary/10 to-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: Heart,
    title: 'Counseling',
    description:
      'Individual, couples, and family therapy for Depression, Anxiety, ADHD, PTSD, and more — serving adults, teens, and children in person or via teletherapy.',
    href: '/counseling',
    color: 'from-secondary/10 to-secondary/5',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    icon: GraduationCap,
    title: 'Supervision',
    description:
      'Clinical supervision for licensed mental health and marriage & family therapy graduates pursuing Florida licensure. Individual and group formats available.',
    href: '/supervision',
    color: 'from-teal/10 to-teal/5',
    iconColor: 'text-teal',
    iconBg: 'bg-teal/10',
  },
  {
    icon: Scale,
    title: 'Mediation',
    description:
      '"Divorce with less trauma" — EQ Divorce Mediation provides compassionate family mediation to resolve conflict and reach agreements with dignity.',
    href: '/mediation',
    color: 'from-accent/10 to-accent/5',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    'Psychological Evaluations',
  ]

  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="about-heading">
      <div className="container-custom">
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
    <section className="section-padding bg-cta-gradient" aria-labelledby="why-us-heading">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="badge bg-white/20 text-blue-200 mb-3">Why Choose Us</span>
          <h2 id="why-us-heading" className="section-title text-white mb-0">
            The EQ Difference
          </h2>
          <span className="accent-bar-light" />
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
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
              <p className="text-blue-200 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    text: 'Dr. Navon\'s solution-focused approach completely changed my perspective. I came in feeling overwhelmed and left with clear goals and the confidence to achieve them.',
    name: 'Client, Orlando FL',
    stars: 5,
  },
  {
    text: 'The psychological evaluation process was thorough, compassionate, and provided invaluable insights for my child\'s educational plan. Highly recommend!',
    name: 'Parent, Seminole County',
    stars: 5,
  },
  {
    text: 'The couples counseling sessions helped my spouse and me rebuild our communication. Our therapist was warm, non-judgmental, and incredibly skilled.',
    name: 'Couple, Orange County',
    stars: 5,
  },
]

function TestimonialsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="badge bg-secondary/10 text-secondary mb-3">Client Stories</span>
          <h2 id="testimonials-heading" className="section-title mb-0">
            What Our Clients Say
          </h2>
          <span className="accent-bar" />
          <p className="section-subtitle max-w-xl mx-auto">
            Real stories from the individuals and families we've had the privilege to support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-8 flex flex-col reveal relative overflow-hidden" style={{ transitionDelay: `${i * 120}ms` }}>
              {/* Top gradient strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal" />
              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              {/* Quote mark */}
              <span className="text-primary/20 font-heading text-7xl font-extrabold leading-none mb-1" aria-hidden="true">
                "
              </span>
              <p className="text-neutral-600 leading-relaxed flex-1 -mt-6">{t.text}</p>
              <div className="mt-6 pt-5 border-t border-neutral-100">
                <p className="font-semibold text-neutral-700 text-sm">{t.name}</p>
                <p className="text-neutral-400 text-xs mt-0.5">Verified Client</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-400 text-xs mt-8">
          * Testimonials are representative of client experiences. Individual results vary.
        </p>
      </div>
    </section>
  )
}

// ─── Locations ────────────────────────────────────────────────────────────────

function LocationsSection() {
  const locations = [
    {
      title: 'Downtown Orlando & Surrounds',
      description: 'Offices in Downtown Orlando, Windermere/Winter Garden, South Orlando/Millenia, and Colonial Town Center.',
      link: 'https://maps.google.com/?q=390+N+Orange+Ave+Suite+2300+Orlando+FL+32801',
    },
    {
      title: 'Lake Mary — Seminole County',
      description: '255 Primera Blvd, Suite 160, Lake Mary, FL 32746 — serving Seminole County and surrounding communities.',
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
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
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

            <div className="flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <TestimonialsSection />
      <LocationsSection />
      <ContactSnippet />
    </>
  )
}
