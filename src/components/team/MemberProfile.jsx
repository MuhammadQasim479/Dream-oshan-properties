import { motion } from 'framer-motion'
import { FiBriefcase, FiGlobe, FiUser, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SmartImage from '../ui/SmartImage'
import { initials, company, teamPage as tp } from '../../data/content'

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-gradient-to-br from-ink-700 to-ink text-gold"><Icon size={18} /></span>
      <div>
        <p className="text-xs text-white/55">{label}</p>
        <p className="text-sm font-bold text-gold-300">{value}</p>
      </div>
    </div>
  )
}

export default function MemberProfile({ member }) {
  const { name, title, experience, languages, bio, image, phone, email } = member
  const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } })
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-ink-800 shadow-soft">
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-300 via-gold to-gold-700" />
      <div className="grid gap-10 p-6 pl-8 sm:p-10 sm:pl-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <motion.h1 {...fade(0.1)} className="font-display text-5xl font-bold leading-tight gold-text sm:text-6xl">{name}</motion.h1>
          <motion.p {...fade(0.2)} className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-white">{title}</motion.p>
          <span className="mt-5 block h-0.5 w-24 bg-gold" />

          <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap gap-3">
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-gold transition hover:bg-gold-400">
              <FaWhatsapp size={16} /> {tp.labels.whatsapp}
            </a>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-lg border border-gold/60 px-5 py-2.5 text-sm font-bold text-gold-300 transition hover:bg-gold/10">
              <FiMail size={16} /> {tp.labels.email}
            </a>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-8 grid gap-5 border-b border-white/10 pb-8 sm:grid-cols-3">
            <Fact icon={FiBriefcase} label={tp.labels.experience} value={experience} />
            <Fact icon={FiGlobe} label={tp.labels.speaks} value={languages.join(', ')} />
            <Fact icon={FiUser} label={tp.labels.role} value={title} />
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/80">
            {bio.map((para, i) => <p key={i}>{para}</p>)}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="overflow-hidden rounded-[1.5rem] rounded-tr-[6rem] border border-gold/50 bg-gradient-to-br from-gold-300 via-gold to-gold-600">
            <SmartImage src={image} alt={name} fallbackText={initials(name)} className="aspect-[4/5] w-full object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
