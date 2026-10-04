import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SmartImage from '../ui/SmartImage'
import { initials, teamPage as tp } from '../../data/content'

export default function LeaderSection({ leader, index }) {
  const { name, title, intro, bio, image, slug } = leader
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}
      className="grid items-stretch gap-8 overflow-hidden rounded-[2rem] border border-ink/10 bg-white/60 p-5 shadow-soft md:grid-cols-[30%_1fr] md:gap-12 md:p-8"
    >
      <Link to={`/team/${slug}`} className="group relative block overflow-hidden rounded-3xl bg-ink">
        <SmartImage src={image} alt={name} fallbackText={initials(name)} className="aspect-[4/4] h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105 md:aspect-auto" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </Link>

      <div className="flex flex-col justify-center py-2 md:pr-6">
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-semibold text-gold">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        <p className="eyebrow mt-5">{title}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">{name}</h2>
        <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-ink/80">{intro}</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/65">{bio[0]}</p>
        <Link to={`/team/${slug}`} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
          {tp.viewProfile} <FiArrowRight className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  )
}
