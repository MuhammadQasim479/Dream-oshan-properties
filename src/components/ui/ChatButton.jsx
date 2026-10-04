import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'
import { company } from '../../data/content'

export default function ChatButton() {
  return (
    <motion.a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-gold"
    >
      <FiMessageCircle size={24} />
    </motion.a>
  )
}
