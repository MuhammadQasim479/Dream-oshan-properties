import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { propertyPage as pp, company } from '../../data/content'

export default function Overview({ project, detail }) {
  const facts = [
    ['Location', project.location ? `${project.location}, ${company.city}` : company.city],
    ['Property Type', detail.type],
    ['Status', project.status],
    ['Completion', detail.completion],
    ['Available Units', project.units ? `${project.units} ${project.units === 1 ? 'unit' : 'units'}` : 'See project site'],
  ]
  return (
    <section className="bg-sand py-24">
      <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading eyebrow={pp.overviewEyebrow} title={`${pp.aboutPrefix} ${project.name}`} />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/70">
            {detail.description.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </div>
        <motion.aside
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative h-fit overflow-hidden rounded-3xl border border-gold/40 bg-ink-800 p-8 text-white shadow-soft"
        >
          <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-300 via-gold to-gold-700" />
          <p className="eyebrow !text-gold-300">{pp.factsTitle}</p>
          <dl className="mt-5 divide-y divide-white/10">
            {facts.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                <dt className="text-white/55">{k}</dt>
                <dd className="text-right font-semibold text-gold-300">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  )
}
