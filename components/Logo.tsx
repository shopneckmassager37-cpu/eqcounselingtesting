import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 34 : size === 'lg' ? 52 : 42
  const titleSize = size === 'sm' ? 'text-[15px]' : size === 'lg' ? 'text-[21px]' : 'text-[17px]'
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]'

  const isDark = variant === 'dark'

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="EQ Counseling & Testing — Home">
      <Image
        src="/images/logo.png"
        alt="EQ Counseling & Testing logo"
        width={iconSize}
        height={iconSize}
        className="object-contain rounded-full bg-white/90 p-1 shadow-sm flex-shrink-0 group-hover:opacity-90 transition-opacity"
        priority
      />

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
