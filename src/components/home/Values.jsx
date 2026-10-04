import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import icons from '../ui/icons'
import { home } from '../../data/content'

export default function Values() {
  const v = home.values
  return (
    <section className="bg-sand-200 py-24">
      <div className="container-x">
        <SectionHeading eyebrow={v.eyebrow} title={v.title} />
        <div className="mt-14 border-t border-ink/10">
          {v.items.map((item, i) => {
            const Icon = icons[item.icon] || icons.check
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b border-ink/10 py-9 sm:grid-cols-[140px_1fr_auto] sm:gap-8"
              >
                <span className="font-display text-4xl font-semibold text-gold transition group-hover:scale-110 sm:text-6xl">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 sm:text-[15px]">{item.text}</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-white">
                  <Icon size={18} />
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
