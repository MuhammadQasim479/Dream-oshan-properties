import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { faq } from '../../data/content'

export default function Faq({ bg = 'bg-sand-200' }) {
  const [open, setOpen] = useState(0)
  return (
    <section className={`${bg} py-24`}>
      <div className="container-x max-w-4xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mt-12 border-t border-ink/10">
          {faq.items.map(({ q, a }, i) => (
            <div key={q} className="border-b border-ink/10">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                <span className="font-display text-lg font-semibold sm:text-xl">{q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 text-gold"><FiPlus /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pr-12 text-[15px] leading-relaxed text-ink/65">
                    <span className="block pb-6">{a}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
