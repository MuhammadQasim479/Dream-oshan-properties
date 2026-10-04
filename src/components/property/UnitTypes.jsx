import { motion } from 'framer-motion'
import { FiHome } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { propertyPage as pp } from '../../data/content'

export default function UnitTypes({ units, available }) {
  return (
    <section className="bg-sand-200 py-24">
      <div className="container-x">
        <SectionHeading eyebrow={pp.availabilityEyebrow} title={pp.availabilityTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {units.map((u, i) => (
            <motion.div
              key={u.type}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-ink/10 bg-white/70 p-8 transition-colors hover:border-gold/60"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold"><FiHome /></span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{u.type}</h3>
              <p className="mt-2 text-sm text-ink/60">Size range</p>
              <p className="font-semibold text-gold-600">{u.size}</p>
            </motion.div>
          ))}
        </div>
        {available ? (
          <p className="mt-8 text-sm text-ink/60"><span className="font-display text-2xl font-semibold text-gold">{available}</span> {available === 1 ? 'unit' : 'units'} {pp.availabilityNote}</p>
        ) : null}
      </div>
    </section>
  )
}
