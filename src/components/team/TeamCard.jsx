import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import SmartImage from '../ui/SmartImage'
import { initials, teamPage as tp } from '../../data/content'

export default function TeamCard({ member }) {
  const { name, title, image, slug, experience } = member
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/team/${slug}`} className="group block overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-soft transition-colors hover:border-gold/60">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <SmartImage src={image} alt={name} fallbackText={initials(name)} className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
          <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition group-hover:bg-gold group-hover:text-ink">
            <FiArrowUpRight />
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold">{name}</h3>
          <p className="mt-1 text-sm font-medium text-gold-600">{title}</p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/45">{experience} {tp.experienceSuffix}</p>
        </div>
      </Link>
    </motion.div>
  )
}
