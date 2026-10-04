import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { projects, home } from '../../data/content'

export default function Locations() {
  const l = home.locations
  const areas = l.areas.map((name) => ({ name, projects: projects.filter((p) => p.location === name) }))
  return (
    <section className="bg-sand py-24">
      <div className="container-x">
        <SectionHeading eyebrow={l.eyebrow} title={l.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {areas.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-ink/10 bg-white/70 p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold-600"><FiMapPin size={20} /></span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{a.name}</h3>
              <p className="mt-1 text-sm text-ink/55">{a.projects.length} {a.projects.length === 1 ? 'project' : 'projects'}</p>
              <ul className="mt-5 space-y-2">
                {a.projects.map((p) => (
                  <li key={p.id}>
                    <Link to={`/properties/${p.slug}`} className="group inline-flex items-center gap-2 text-sm font-semibold hover:text-gold-600">
                      {p.name} <FiArrowRight className="transition group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
