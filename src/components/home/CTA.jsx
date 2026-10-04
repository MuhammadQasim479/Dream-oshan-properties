import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../ui/Button'
import { home } from '../../data/content'

export default function CTA() {
  const c = home.cta
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-center text-white">
      <img
        src="/ctaimg.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray/30 to-gold/50" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-x relative"
      >
        <h2 className="font-display text-4xl font-semibold text-white sm:text-6xl">
          {c.titleLine1} <span className="block text-gold">{c.titleLine2}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md font-medium text-white">
          {c.text}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to={c.primaryCta.to} icon={<FiArrowRight />}>{c.primaryCta.label}</Button>
          <Button to={c.secondaryCta.to} variant="outline">{c.secondaryCta.label}</Button>
        </div>
      </motion.div>
    </section>
  )
}