import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import SmartImage from '../ui/SmartImage'
import StatusBadge from '../ui/StatusBadge'
import { propertyPage as pp, company } from '../../data/content'

export default function PropertyHero({ project }) {
  const { name, location, status, image, tagline, external, externalUrl } = project
  const fade = (d) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } })
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-ink">
      <SmartImage src={image} alt={name} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/60" />
      <div className="container-x relative pb-16 pt-40 text-white">
        <motion.div {...fade(0.05)}>
          <Link to="/properties" className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
            <FiArrowLeft className="transition group-hover:-translate-x-1" /> {pp.back}
          </Link>
        </motion.div>
        <motion.div {...fade(0.15)} className="flex flex-wrap items-center gap-4">
          <StatusBadge>{status}</StatusBadge>
          {location && <span className="inline-flex items-center gap-1.5 text-sm text-white/75"><FiMapPin className="text-gold" />{location}, {company.city}</span>}
        </motion.div>
        <motion.h1 {...fade(0.25)} className="mt-5 font-display text-5xl font-bold sm:text-7xl">{name}</motion.h1>
        <motion.p {...fade(0.35)} className="mt-5 max-w-xl text-lg text-white/75">{tagline}</motion.p>
        <motion.div {...fade(0.45)} className="mt-9 flex flex-wrap gap-4">
          <a href="#inquire" className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink shadow-gold transition hover:bg-gold-400">{pp.registerCta}</a>
          {external && (
            <a href={externalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10">
              {pp.visitSite} <FiArrowUpRight />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
