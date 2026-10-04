export default function StatusBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-lg">
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      {children}
    </span>
  )
}
