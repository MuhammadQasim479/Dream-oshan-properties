import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiInstagram } from 'react-icons/fi'
import Logo from './Logo'
import { company, nav, footer } from '../../data/content'

export default function Footer() {
  const [mode, setMode] = useState('email')
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)
  const nl = footer.newsletter

  const submit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setDone(true)
    setValue('')
    setTimeout(() => setDone(false), 3500)
  }

  return (
    <footer className="bg-ink text-white border-t border-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-[220px] text-sm leading-relaxed text-white/60">{footer.blurb}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{footer.quickLinksTitle}</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {nav.links.map((l) => (
              <li key={l.label}><Link to={l.to} className="transition hover:text-gold-300">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{footer.contactTitle}</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-3"><FiMapPin className="mt-0.5 shrink-0 text-gold" />{company.address}</li>
            <li className="flex items-start gap-3">
              <FiPhone className="mt-0.5 shrink-0 text-gold" />
              <span>{company.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-gold-300">{p}</a>)}</span>
            </li>
            <li className="flex items-center gap-3"><FiInstagram className="shrink-0 text-gold" />{company.instagram}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{nl.title}</h4>
          <p className="mt-5 text-sm text-white/65">{nl.text}</p>
          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs">
            {['email', 'phone'].map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`rounded-full px-3 py-1 font-semibold capitalize transition ${mode === m ? 'bg-gold text-ink' : 'text-white/60'}`}>
                {m}
              </button>
            ))}
          </div>
          <form onSubmit={submit} className="mt-3 flex gap-2">
            <input
              type={mode === 'email' ? 'email' : 'tel'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={mode === 'email' ? 'Your email' : 'Your phone'}
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold"
            />
            <button className="rounded-full bg-gold px-5 text-sm font-bold text-ink transition hover:bg-gold-400">{nl.button}</button>
          </form>
          {done && <p className="mt-2 text-xs text-gold-300">{nl.success}</p>}
        </div>
      </div>
      <div className="container-x border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {footer.copyright}
      </div>
    </footer>
  )
}
