import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 40 : size === 'lg' ? 60 : 48
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-xs' : 'text-[9px]'

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="EQ Counseling & Testing — Home">
      {/* SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2B5FA5" />
            <stop offset="100%" stopColor="#3D8B9E" />
          </linearGradient>
        </defs>
        {/* Main circle */}
        <circle cx="26" cy="26" r="25" fill="url(#logoGrad)" />
        {/* Inner ring accent */}
        <circle cx="26" cy="26" r="25" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />
        {/* EQ text */}
        <text
          x="26"
          y="33"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="800"
          fontFamily="Montserrat, sans-serif"
          letterSpacing="-1"
        >
          EQ
        </text>
        {/* Wave decoration below EQ */}
        <path
          d="M15 40 Q19.5 37 24 40 Q28.5 43 33 40 Q36 38.5 37.5 40"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        {/* Small dot accent */}
        <circle cx="26" cy="14" r="2.5" fill="white" fillOpacity="0.5" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold ${titleSize} tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-primary-dark'
          } group-hover:opacity-90 transition-opacity`}
        >
          EQ
        </span>
        <span
          className={`font-heading font-semibold ${subtitleSize} tracking-[0.18em] uppercase mt-0.5 ${
            variant === 'light' ? 'text-blue-200' : 'text-teal'
          } group-hover:opacity-90 transition-opacity`}
        >
          Counseling & Testing
        </span>
      </div>
    </Link>
  )
}
