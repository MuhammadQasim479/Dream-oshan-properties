import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { company, contactPage as c } from '../../data/content'

const cards = [
  { icon: FiMapPin, title: c.cards.visit, lines: [company.address] },
  { icon: FiPhone, title: c.cards.call, lines: company.phones, hrefs: company.phones.map((p) => `tel:${p.replace(/\s/g, '')}`) },
  { icon: FiMail, title: c.cards.email, lines: [company.email], hrefs: [`mailto:${company.email}`] },
  { icon: FiClock, title: c.cards.hours, lines: company.hours },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-4"
    >
      {cards.map(({ icon: Icon, title, lines, hrefs }) => (
        <motion.div
          key={title}
          variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
          className="flex items-start gap-5 rounded-2xl border border-ink/10 bg-white/70 p-6 transition-colors hover:border-gold/60"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 text-gold"><Icon size={18} /></span>
          <div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <div className="mt-1 text-sm text-ink/65">
              {lines.map((l, i) => hrefs ? <a key={l} href={hrefs[i]} className="block hover:text-gold-600">{l}</a> : <p key={l}>{l}</p>)}
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }} className="flex flex-wrap gap-3 pt-2">
        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-gold transition hover:bg-gold-400">
          <FaWhatsapp /> {c.whatsappLabel}
        </a>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-600">
          <FiInstagram /> {company.instagram}
        </span>
      </motion.div>
    </motion.div>
  )
}
