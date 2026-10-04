import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import icons from '../ui/icons'
import { home } from '../../data/content'

export default function WhyInvest() {
  const w = home.whyInvest
  return (
    <section className="relative overflow-hidden bg-ink-800 py-24 text-white">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="container-x relative">
        <SectionHeading eyebrow={w.eyebrow} title={w.title} light />
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {w.points.map(({ icon, title, text }) => {
            const Icon = icons[icon] || icons.check
            return (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold"><Icon size={20} /></span>
                <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
