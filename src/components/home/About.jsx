import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../ui/SmartImage'
import { images, home } from '../../data/content'

export default function About() {
  const a = home.about
  return (
    <section id="about" className="bg-sand py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={a.eyebrow} title={a.title} />
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/70"
          >
            {a.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
            <Link to="/#about" className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-gold-600">
              {a.linkLabel} <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <SmartImage src={images.about} alt="" className="aspect-[4/4.7] w-full object-cover" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-display text-4xl font-semibold text-gold-300">{a.badgeValue}</p>
            <p className="text-sm text-white/80">{a.badgeLabel}</p>
          </div>
          <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[2rem] border border-gold/40" />
        </motion.div>
      </div>
    </section>
  )
}
