import { useState } from 'react'

/** Image with graceful fallback if the remote URL fails. */
export default function SmartImage({ src, alt = '', className = '', fallbackText }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        className={`${className} grid place-items-center bg-gradient-to-br from-ink-700 via-ink-600 to-gold-700`}
        role="img"
        aria-label={alt}
      >
        {fallbackText && <span className="font-display text-5xl font-semibold text-gold-300/80">{fallbackText}</span>}
      </div>
    )
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />
}
