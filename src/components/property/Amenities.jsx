import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { propertyPage as pp } from '../../data/content'

export default function Amenities({ items }) {
  return (
    <section className="bg-sand-200 py-24">
      <div className="container-x">
        <SectionHeading eyebrow={pp.amenitiesEyebrow} title={pp.amenitiesTitle} />
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((a) => (
            <motion.div
              key={a}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5 transition-colors hover:border-gold/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold"><FiCheckCircle size={18} /></span>
              <span className="font-semibold">{a}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
