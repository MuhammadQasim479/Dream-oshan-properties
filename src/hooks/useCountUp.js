import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

export default function useCountUp(target, start, duration = 1.8) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    const c = animate(0, target, { duration, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [start, target, duration])
  return n
}
