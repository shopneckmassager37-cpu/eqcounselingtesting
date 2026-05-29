import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 38 : size === 'lg' ? 58 : 46
  const titleSize = size === 'sm' ? 'text-[15px]' : size === 'lg' ? 'text-[22px]' : 'text-[18px]'
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]'

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

        {/* Rounded square background */}
        <rect x="1" y="1" width="50" height="50" rx="14" fill="url(#logoGrad)" />

        {/* Subtle top glare */}
        <rect x="1" y="1" width="50" height="26" rx="14" fill="white" fillOpacity="0.08" />

        {/* Inner border */}
        <rect x="1" y="1" width="50" height="50" rx="14" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.22" />

        {/* EQ lettering */}
        <text
          x="26"
          y="27"
          textAnchor="middle"
          fill="white"
          fontSize="17"
          fontWeight="800"
          fontFamily="Montserrat, sans-serif"
          letterSpacing="-0.5"
        >
          EQ
        </text>

        {/* EKG / heartbeat pulse line */}
        <path
          d="M8 37 L14 37 L17.5 30.5 L21.5 43 L25.5 33 L29.5 43 L33.5 30.5 L37 37 L44 37"
          stroke="white"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.65"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold ${titleSize} tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-primary-dark'
          } group-hover:opacity-90 transition-opacity`}
        >
          EQ Counseling
        </span>
        <span
          className={`font-heading font-semibold ${subtitleSize} tracking-[0.15em] uppercase mt-0.5 ${
            variant === 'light' ? 'text-blue-200' : 'text-teal'
          } group-hover:opacity-90 transition-opacity`}
        >
          &amp; Testing LLC
        </span>
      </div>
    </Link>
  )
}
