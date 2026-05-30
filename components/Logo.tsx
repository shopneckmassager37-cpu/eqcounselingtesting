import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 54 : 44
  const titleSize = size === 'sm' ? 'text-[15px]' : size === 'lg' ? 'text-[21px]' : 'text-[17px]'
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]'

  const isDark = variant === 'dark'

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="EQ Counseling & Testing — Home">
      {/* Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {isDark ? (
          <>
            {/* Dark variant: white card with blue border */}
            <rect x="1.5" y="1.5" width="49" height="49" rx="10" fill="white" />
            <rect x="1.5" y="1.5" width="49" height="49" rx="10" stroke="#2B5FA5" strokeWidth="1.5" />

            {/* Top accent strip */}
            <rect x="1.5" y="1.5" width="49" height="6" rx="10" fill="#2B5FA5" />
            <rect x="1.5" y="5" width="49" height="2.5" fill="#2B5FA5" />

            {/* EQ monogram */}
            <text
              x="26"
              y="31"
              textAnchor="middle"
              fill="#2B5FA5"
              fontSize="19"
              fontWeight="800"
              fontFamily="Montserrat, sans-serif"
              letterSpacing="2"
            >
              EQ
            </text>

            {/* Thin teal underline accent */}
            <rect x="15" y="36.5" width="22" height="1.5" rx="1" fill="#3D8B9E" fillOpacity="0.6" />
          </>
        ) : (
          <>
            {/* Light variant: filled primary blue card */}
            <rect x="1.5" y="1.5" width="49" height="49" rx="10" fill="#2B5FA5" />

            {/* Subtle top gloss */}
            <rect x="1.5" y="1.5" width="49" height="22" rx="10" fill="white" fillOpacity="0.06" />
            <rect x="1.5" y="10" width="49" height="13.5" fill="white" fillOpacity="0.06" />

            {/* Subtle inner border */}
            <rect x="1.5" y="1.5" width="49" height="49" rx="10" stroke="white" strokeWidth="1" strokeOpacity="0.18" />

            {/* EQ monogram */}
            <text
              x="26"
              y="31"
              textAnchor="middle"
              fill="white"
              fontSize="19"
              fontWeight="800"
              fontFamily="Montserrat, sans-serif"
              letterSpacing="2"
            >
              EQ
            </text>

            {/* Thin white underline accent */}
            <rect x="15" y="36.5" width="22" height="1.5" rx="1" fill="white" fillOpacity="0.5" />
          </>
        )}
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold ${titleSize} tracking-tight ${
            isDark ? 'text-neutral-800' : 'text-white'
          } group-hover:opacity-90 transition-opacity`}
        >
          EQ Counseling
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span
            className={`block h-px w-4 rounded ${isDark ? 'bg-teal/50' : 'bg-white/30'}`}
          />
          <span
            className={`font-sans font-medium ${subtitleSize} tracking-[0.18em] uppercase ${
              isDark ? 'text-teal' : 'text-blue-200'
            } group-hover:opacity-90 transition-opacity`}
          >
            &amp; Testing
          </span>
        </div>
      </div>
    </Link>
  )
}
