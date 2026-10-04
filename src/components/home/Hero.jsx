// import { motion, useScroll, useTransform } from 'framer-motion'
// import { FiArrowRight, FiPhone } from 'react-icons/fi'
// import Button from '../ui/Button'
// import SmartImage from '../ui/SmartImage'
// import { images, home } from '../../data/content'

// const fade = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } })

// export default function Hero() {
//   const h = home.hero
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 600], [0, 120])
//   return (
//     <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
//       <motion.div style={{ y }} className="absolute inset-0 scale-110">
//         <SmartImage src={images.hero} alt="" className="h-full w-full object-cover" />
//       </motion.div>
//       <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/90" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,18,32,.65)_100%)]" />

//       <div className="container-x relative z-10 pt-28 text-center text-white">
//         <motion.p {...fade(0.2)} className="eyebrow !text-gold-300">{h.eyebrow}</motion.p>
//         <motion.h1 {...fade(0.35)} className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-8xl">
//           {h.titleBefore} <span className="gold-text">{h.titleHighlight}</span> {h.titleAfter}
//         </motion.h1>
//         <motion.p {...fade(0.55)} className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{h.text}</motion.p>
//         <motion.div {...fade(0.75)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
//           <Button to={h.primaryCta.to} icon={<FiArrowRight />}>{h.primaryCta.label}</Button>
//           <Button to={h.secondaryCta.to} variant="outline" icon={<FiPhone />}>{h.secondaryCta.label}</Button>
//         </motion.div>
//       </div>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
//         <motion.span animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="block h-12 w-px origin-top bg-gold" />
//       </motion.div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone, FiStar, FiAward } from 'react-icons/fi'
import Button from '../ui/Button'
import { home } from '../../data/content'

const fade = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: 'easeOut' },
})

// Apni real values yahan daal dein
const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Done' },
  { value: '98%', label: 'Happy Clients' },
]

const gridBg = {
  backgroundImage:
    'linear-gradient(rgba(201,162,75,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,.08) 1px, transparent 1px)',
  backgroundSize: '56px 56px',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
}

export default function Hero() {
  const h = home.hero

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink/90 text-white">
      {/* Background: grid + glowing orbs */}
      <div className="absolute inset-0" style={gridBg} />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        className="absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-terracotta/20 blur-[130px]"
      />

      <div className="container-x relative z-10 grid items-center gap-16 pb-10 pt-32 lg:grid-cols-12">
        {/* LEFT: content */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <motion.div {...fade(0.1)} className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="h-px w-12 bg-gold" />
            <p className="eyebrow !text-gold-300">{h.eyebrow}</p>
          </motion.div>

          <motion.h1
            {...fade(0.25)}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl xl:text-7xl"
          >
            {h.titleBefore} <span className="gold-text italic">{h.titleHighlight}</span> {h.titleAfter}
          </motion.h1>

          <motion.p
            {...fade(0.45)}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0"
          >
            {h.text}
          </motion.p>

          <motion.div
            {...fade(0.65)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button className='' to={h.primaryCta.to} icon={<FiArrowRight />}>{h.primaryCta.label}</Button>
            <Button to={h.secondaryCta.to} variant="outline" icon={<FiPhone />}>{h.secondaryCta.label}</Button>
          </motion.div>
        </div>

        {/* RIGHT: ring composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:col-span-5 lg:block"
        >
          {/* outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-gold/30"
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-gold" />
          </motion.div>
          {/* middle ring (dashed, reverse) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="absolute inset-[12%] rounded-full border border-dashed border-gold/40"
          >
            <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-terracotta" />
          </motion.div>
          {/* core */}
          <div className="absolute inset-[26%] rounded-full bg-gradient-to-br from-gold-300 via-gold to-gold-700 shadow-gold" />
          <div className="absolute inset-[26%] flex items-center justify-center rounded-full">
            {/* <span className="font-display text-6xl font-bold text-ink">
              {h.titleHighlight?.charAt(0) ?? 'A'}
            </span> */}
            <img src="/logo-hero.png" alt="Logo" className="h-24 w-24 sm:h-40 sm:w-40 object-contain" />
          </div>

          {/* floating glass cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute -left-4 top-[18%] flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
          >
            <FiStar className="text-gold-300" />
            <div className="text-left">
              <p className="text-sm font-semibold">5.0 Rating</p>
              <p className="text-xs text-white/60">Trusted by clients</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-[16%] flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
          >
            <FiAward className="text-gold-300" />
            <div className="text-left">
              <p className="text-sm font-semibold">Award Winning</p>
              <p className="text-xs text-white/60">Premium quality</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div {...fade(0.9)} className="container-x relative z-10 pb-10">
        <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-5 text-center sm:py-6">
              <p className="font-display text-2xl font-bold text-gold-300 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-white/60 sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}