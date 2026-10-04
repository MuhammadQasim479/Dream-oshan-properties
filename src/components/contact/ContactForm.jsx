import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck } from 'react-icons/fi'
import { projects, contactPage } from '../../data/content'

const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold'

export default function ContactForm() {
  const f = contactPage.form
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) } // TODO: connect to your backend / email service

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-gold/40 bg-ink-800 p-7 text-white shadow-soft sm:p-10"
    >
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-300 via-gold to-gold-700" />
      {sent ? (
        <div className="py-16 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-ink"><FiCheck size={26} /></span>
          <p className="mt-5 font-display text-3xl">{f.successTitle}</p>
          <p className="mt-2 text-sm text-white/65">{f.successText}</p>
          <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-gold-300 underline">{f.again}</button>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold">{f.title} <span className="gold-text">{f.titleHighlight}</span></h2>
          <p className="pb-2 text-sm text-white/60">{f.text}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className={field} />
            <input required type="tel" placeholder="Phone" className={field} />
          </div>
          <input required type="email" placeholder="Email" className={field} />
          <select defaultValue="" className={`${field} appearance-none`}>
            <option value="" className="text-ink">{f.projectPlaceholder}</option>
            {projects.map((p) => <option key={p.id} value={p.name} className="text-ink">{p.name}</option>)}
            <option value="General" className="text-ink">{f.generalOption}</option>
          </select>
          <textarea required rows="5" placeholder="Your message" className={field} />
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-ink shadow-gold transition hover:bg-gold-400">
            {f.button} <FiSend />
          </button>
        </div>
      )}
    </motion.form>
  )
}
