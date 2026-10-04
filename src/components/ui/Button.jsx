import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const styles = {
  primary: 'bg-gold text-ink hover:bg-gold-400 shadow-gold',
  outline: 'border border-white/30 text-white hover:bg-white/10 backdrop-blur',
  dark: 'bg-ink text-white hover:bg-ink-700',
}

export default function Button({ to, href, variant = 'primary', icon, children, className = '', ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`
  const inner = (<>{children}{icon}</>)
  const wrap = { whileHover: { y: -2 }, whileTap: { scale: 0.97 }, className: 'inline-block' }
  if (to) return <motion.span {...wrap}><Link to={to} className={cls} {...rest}>{inner}</Link></motion.span>
  if (href) return <motion.span {...wrap}><a href={href} className={cls} {...rest}>{inner}</a></motion.span>
  return <motion.button {...wrap} className={cls} {...rest}>{inner}</motion.button>
}
