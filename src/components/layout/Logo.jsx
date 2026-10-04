import { Link } from 'react-router-dom'
import { company } from '../../data/content'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label={company.fullName}>
      <img
        src="/logo-hero.png"
        alt={company.fullName}
        className="h-9 w-auto object-contain"
      />
      <span className="leading-none">
        <span className="block font-display text-base font-bold tracking-wide text-white">{company.name}</span>
        <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.32em] text-gold-300">{company.logoSub}</span>
      </span>
    </Link>
  )
}