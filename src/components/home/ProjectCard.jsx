import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import SmartImage from '../ui/SmartImage'
import StatusBadge from '../ui/StatusBadge'

export default function ProjectCard({ project }) {
  const { name, location, status, units, image, external } = project
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/properties/${project.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-ink shadow-soft">
        <SmartImage src={image} alt={name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2"><StatusBadge>{status}</StatusBadge></div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
          <div>
            {location && !external && <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">{location}</p>}
            <h3 className="mt-1 font-display text-2xl font-semibold">{name}</h3>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {external ? 'Visit Project Site' : <><span className="text-gold-300">{units}</span> Available</>}
            </p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur transition group-hover:bg-gold group-hover:text-ink">
            <FiArrowUpRight />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
