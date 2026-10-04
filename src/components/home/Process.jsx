import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import icons from '../ui/icons'
import { home } from '../../data/content'

export default function Process() {
  const p = home.process
  return (
    <section className="bg-ink py-24 text-white">
      <div className="container-x">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} light />
        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />
          {p.steps.map(({ icon, title, text }, i) => {
            const Icon = icons[icon] || icons.check
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative text-center"
              >
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold bg-ink-800 text-gold"><Icon size={22} /></span>
                <p className="mt-5 font-display text-sm text-gold/80">Step {String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{title}</h3>
                <p className="mx-auto mt-3 max-w-[240px] text-sm leading-relaxed text-white/60">{text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
