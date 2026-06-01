import Link from 'next/link'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 34 : size === 'lg' ? 52 : 42
  const titleSize = size === 'sm' ? 'text-[15px]' : size === 'lg' ? 'text-[21px]' : 'text-[17px]'
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]'

  const isDark = variant === 'dark'
  const strokeColor = isDark ? '#2B5FA5' : '#ffffff'
  const cogColor = isDark ? '#3D8B9E' : 'rgba(255,255,255,0.85)'

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="EQ Counseling & Testing — Home">
      {/* Brain-Cog icon — exact Lucide BrainCog paths, 24×24 viewBox */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="group-hover:opacity-90 transition-opacity flex-shrink-0"
      >
        {/* Brain outline */}
        <path
          stroke={strokeColor}
          strokeWidth="1.6"
          d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
        />
        <path stroke={strokeColor} strokeWidth="1.4" d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path stroke={strokeColor} strokeWidth="1.4" d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path stroke={strokeColor} strokeWidth="1.4" d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path stroke={strokeColor} strokeWidth="1.4" d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path stroke={strokeColor} strokeWidth="1.4" d="M6 18a4 4 0 0 1-1.967-.516" />
        <path stroke={strokeColor} strokeWidth="1.4" d="M19.967 17.484A4 4 0 0 1 18 18" />

        {/* Gear / cog in the center — in teal accent */}
        <circle cx="12" cy="12" r="3" stroke={cogColor} strokeWidth="1.5" />
        <path stroke={cogColor} strokeWidth="1.5" d="m15.7 10.4-.9.4" />
        <path stroke={cogColor} strokeWidth="1.5" d="m9.2 13.2-.9.4" />
        <path stroke={cogColor} strokeWidth="1.5" d="m13.6 15.7-.4-.9" />
        <path stroke={cogColor} strokeWidth="1.5" d="m10.8 9.2-.4-.9" />
        <path stroke={cogColor} strokeWidth="1.5" d="m15.7 13.5-.9-.4" />
        <path stroke={cogColor} strokeWidth="1.5" d="m9.2 10.9-.9-.4" />
        <path stroke={cogColor} strokeWidth="1.5" d="m10.5 15.7.4-.9" />
        <path stroke={cogColor} strokeWidth="1.5" d="m13.1 9.2.4-.9" />
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
          <span className={`block h-px w-4 rounded ${isDark ? 'bg-teal/50' : 'bg-white/30'}`} />
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
