import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useCountUp from '../../hooks/useCountUp'
import { home } from '../../data/content'

function Stat({ value, suffix, label, go }) {
  const n = useCountUp(value, go)
  return (
    <div className="text-center">
      <div className="font-display text-6xl font-semibold gold-text">{n}{suffix}</div>
      <p className="mt-3 text-sm tracking-wide text-white/60">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-20">
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:24px_24px]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
        className="container-x relative grid gap-12 sm:grid-cols-3"
      >
        {home.stats.map((s) => <Stat key={s.label} {...s} go={inView} />)}
      </motion.div>
    </section>
  )
}
