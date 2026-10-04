import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import SmartImage from '../ui/SmartImage'
import StatusBadge from '../ui/StatusBadge'
import { propertyPage as pp } from '../../data/content'

export default function ProjectRow({ project, index }) {
  const { name, location, tagline, units, image, status, external, kicker } = project
  const reverse = index % 2 === 1
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="group relative aspect-[5/4] overflow-hidden rounded-3xl bg-ink shadow-soft">
          <SmartImage src={image} alt={name} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <div className="absolute left-5 top-5"><StatusBadge>{status}</StatusBadge></div>
          {external && (
            <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              <FiArrowUpRight /> External Site
            </span>
          )}
        </div>
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-semibold text-gold">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        {location && !external && <p className="eyebrow mt-4">{location}</p>}
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{name}</h2>
        {external && <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/50">{kicker}</p>}
        <p className={`${external ? 'mt-1 font-medium text-ink' : 'mt-4 text-ink/65'} max-w-md leading-relaxed`}>{tagline}</p>
        {!external && (
          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/50">Available</p>
            <p className="mt-1"><span className="font-display text-3xl font-semibold text-gold">{units}</span> <span className="text-sm text-ink/60">{units === 1 ? 'unit' : 'units'}</span></p>
          </div>
        )}
        <Link to={`/properties/${project.slug}`} className="group mt-8 inline-flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold transition group-hover:bg-gold group-hover:text-ink"><FiArrowUpRight /></span>
          <span className="text-xs font-bold uppercase tracking-[0.25em]">{external ? pp.visitSite : 'Explore Project'}</span>
        </Link>
      </div>
    </motion.article>
  )
}
