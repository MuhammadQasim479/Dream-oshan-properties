import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-gold" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className={`font-display text-4xl font-semibold leading-tight sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
    </motion.div>
  )
}
