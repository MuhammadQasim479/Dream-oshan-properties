import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { home } from '../../data/content'

const fmt = (n) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)

function Slider({ label, value, set, min, max, step, display }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="font-bold text-gold-600">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} className="mt-3 w-full accent-[#C9A24B]" />
    </div>
  )
}

export default function PaymentCalculator() {
  const c = home.calculator
  const [price, setPrice] = useState(c.defaults.price)
  const [down, setDown] = useState(c.defaults.down)
  const [years, setYears] = useState(c.defaults.years)
  const [rate, setRate] = useState(c.defaults.rate)

  const loan = price * (1 - down / 100)
  const r = rate / 100 / 12
  const n = years * 12
  const monthly = r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n))

  return (
    <section className="bg-sand-200 py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={c.eyebrow} title={c.title} />
          <p className="mt-6 max-w-md text-ink/65">{c.text}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="space-y-6 rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-soft"
        >
          <Slider label="Property price" value={price} set={setPrice} min={c.ranges.price[0]} max={c.ranges.price[1]} step={c.ranges.price[2]} display={`${c.currency} ${fmt(price)}`} />
          <Slider label="Down payment" value={down} set={setDown} min={c.ranges.down[0]} max={c.ranges.down[1]} step={c.ranges.down[2]} display={`${down}%`} />
          <Slider label="Loan term" value={years} set={setYears} min={c.ranges.years[0]} max={c.ranges.years[1]} step={c.ranges.years[2]} display={`${years} years`} />
          <Slider label="Interest rate" value={rate} set={setRate} min={c.ranges.rate[0]} max={c.ranges.rate[1]} step={c.ranges.rate[2]} display={`${rate.toFixed(1)}%`} />
          <div className="rounded-2xl bg-ink p-6 text-center text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-white/55">Estimated monthly payment</p>
            <p className="mt-2 font-display text-4xl font-semibold gold-text">{c.currency} {fmt(monthly)}</p>
            <p className="mt-2 text-xs text-white/45">{c.disclaimer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
