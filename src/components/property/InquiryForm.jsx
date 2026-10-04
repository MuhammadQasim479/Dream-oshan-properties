import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck } from 'react-icons/fi'
import { propertyPage } from '../../data/content'

const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold'

export default function InquiryForm({ name }) {
  const q = propertyPage.inquiry
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) } // TODO: connect to your backend / email service
  return (
    <section id="inquire" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow !text-gold-300">{q.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{q.titleBefore} <span className="gold-text">{name}</span> {q.titleAfter}</h2>
          <p className="mt-5 max-w-md text-white/65">{q.text}</p>
        </div>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="space-y-4 rounded-3xl border border-gold/30 bg-ink-800 p-7 sm:p-9"
        >
          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-ink"><FiCheck size={26} /></span>
              <p className="mt-5 font-display text-2xl">{q.successTitle}</p>
              <p className="mt-2 text-sm text-white/65">{q.successText}</p>
            </div>
          ) : (
            <>
              <input required placeholder="Full name" className={field} />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Email" className={field} />
                <input required type="tel" placeholder="Phone" className={field} />
              </div>
              <textarea rows="3" placeholder="Message (optional)" className={field} />
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-ink shadow-gold transition hover:bg-gold-400">
                {q.button} <FiSend />
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
