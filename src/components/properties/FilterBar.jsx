import { FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'

import { propertiesPage as pg } from '../../data/content'

export default function FilterBar({ query, setQuery, filter, setFilter }) {
  return (
    <div className="sticky top-0 z-30 border-b border-ink/5 bg-sand/90 backdrop-blur-lg">
      <div className="container-x flex flex-col items-stretch gap-4 py-4 md:flex-row md:items-center md:justify-between">
 

<div className="w-full md:w-80">
  <label
    htmlFor="project-search"
    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60"
  >
    Search
  </label>

  <div className="group relative">
    <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-ink/40 transition-colors group-focus-within:text-gold-600" />

    <input
      id="project-search"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={pg.searchPlaceholder}
      autoComplete="off"
      className="h-12 w-full rounded-xl border border-ink/15 bg-white pl-12 pr-11 text-sm font-medium text-ink shadow-sm outline-none transition placeholder:font-normal placeholder:text-ink/40 hover:border-ink/30 focus:border-gold focus:ring-4 focus:ring-gold/15"
    />

    {query && (
      <button
        type="button"
        onClick={() => setQuery('')}
        aria-label="Clear search"
        className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-ink/10 text-ink/60 transition hover:bg-ink hover:text-white"
      >
        <FiX className="text-sm" />
      </button>
    )}
  </div>
</div>
        <div className="flex flex-wrap gap-1">
          {pg.filters.map((t) => (
            <button key={t} onClick={() => setFilter(t)} className="relative rounded-full px-4 py-2 text-xs font-semibold text-ink/65 transition hover:text-ink">
              {filter === t && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full border border-gold bg-gold/15" />}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
