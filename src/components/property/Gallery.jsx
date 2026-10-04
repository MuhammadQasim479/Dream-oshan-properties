import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../ui/SmartImage'
import { propertyPage as pp } from '../../data/content'

export default function Gallery({ images, name }) {
  const [open, setOpen] = useState(null)
  const step = (d) => setOpen((o) => (o + d + images.length) % images.length)
  return (
    <section className="bg-sand py-24">
      <div className="container-x">
        <SectionHeading eyebrow={pp.galleryEyebrow} title={pp.galleryTitle} />
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {images.map((src, i) => (
            <motion.button
              key={i} onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group overflow-hidden rounded-3xl bg-ink ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <SmartImage src={src} alt={`${name} ${i + 1}`} className="h-full min-h-[240px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4"
            onClick={() => setOpen(null)}
          >
            <button className="absolute right-5 top-5 text-white" aria-label="Close"><FiX size={28} /></button>
            <button onClick={(e) => { e.stopPropagation(); step(-1) }} className="absolute left-4 text-white" aria-label="Previous"><FiChevronLeft size={36} /></button>
            <button onClick={(e) => { e.stopPropagation(); step(1) }} className="absolute right-4 text-white" aria-label="Next"><FiChevronRight size={36} /></button>
            <SmartImage src={images[open]} alt={name} className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
