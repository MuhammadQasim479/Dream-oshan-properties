import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { testimonials, testimonialsSection as ts } from '../../data/content'

/** Renders nothing until real testimonials are added in src/data/content.js */
export default function Testimonials() {
  const [i, setI] = useState(0)
  if (!testimonials.length) return null
  const t = testimonials[i]
  return (
    <section className="bg-sand py-24">
      <div className="container-x max-w-3xl text-center">
        <SectionHeading eyebrow={ts.eyebrow} title={ts.title} align="center" />
        <div className="mt-12 min-h-[200px]">
          <FaQuoteLeft className="mx-auto text-3xl text-gold/60" />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <p className="mt-6 font-display text-2xl leading-relaxed">{t.quote}</p>
              <p className="mt-6 font-semibold">{t.name}</p>
              <p className="text-sm text-gold-600">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, n) => (
            <button key={n} onClick={() => setI(n)} aria-label={`Testimonial ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? 'w-8 bg-gold' : 'w-2 bg-ink/20'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
