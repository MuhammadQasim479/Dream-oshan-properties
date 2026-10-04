import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '../components/properties/PageHeader'
import FilterBar from '../components/properties/FilterBar'
import ProjectRow from '../components/properties/ProjectRow'
import { projects, propertiesPage as pg } from '../data/content'

export default function Properties() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const list = useMemo(
    () => projects.filter((p) =>
      (filter === 'All' || p.category === filter) &&
      `${p.name} ${p.location} ${p.tagline}`.toLowerCase().includes(query.toLowerCase())),
    [query, filter]
  )

  return (
    <>
      <PageHeader />
      <FilterBar {...{ query, setQuery, filter, setFilter }} />
      <section className="bg-sand py-20">
        <div className="container-x space-y-28">
          <AnimatePresence mode="popLayout">
            {list.length ? (
              list.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)
            ) : (
              <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center text-ink/60">
                {pg.empty}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
