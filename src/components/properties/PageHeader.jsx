import { motion } from 'framer-motion'
import { propertiesPage as pg } from '../../data/content'

export default function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-center">
      <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:24px_24px]" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="container-x relative">
        <p className="eyebrow !text-gold">{pg.eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">{pg.title}</h1>
      </motion.div>
    </section>
  )
}
