interface TherapistAvatarProps {
  name: string
  colorFrom: string
  colorTo: string
  size?: 'sm' | 'md' | 'lg'
}

export default function TherapistAvatar({ name, colorFrom, colorTo, size = 'md' }: TherapistAvatarProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join('')

  const sizeClasses = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-28 h-28 text-3xl',
    lg: 'w-36 h-36 text-4xl',
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-heading font-bold text-white shadow-lg flex-shrink-0`}
      style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}
      aria-label={`Photo placeholder for ${name}`}
    >
      {initials}
    </div>
  )
}
