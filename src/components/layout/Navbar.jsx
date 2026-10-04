import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'
import { nav } from '../../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname === to || (to !== '/' && !to.includes('#') && pathname.startsWith(to + '/')))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled ? 'border-white/10 bg-ink/90 shadow-soft backdrop-blur-xl' : 'border-white/10 bg-ink/40 backdrop-blur-md'
        }`}
      >
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(l.to) ? 'bg-white/10 text-gold-300' : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link to={nav.cta.to} className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition hover:bg-gold-400">
            {nav.cta.label}
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-ink/95 p-5 backdrop-blur-xl md:hidden"
          >
            {nav.links.map((l) => (
              <Link key={l.label} to={l.to} className="block rounded-xl px-3 py-3 text-white/90 hover:bg-white/5">
                {l.label}
              </Link>
            ))}
            <Link to={nav.cta.to} className="mt-3 block rounded-full bg-gold py-3 text-center font-semibold text-white">
              {nav.cta.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
