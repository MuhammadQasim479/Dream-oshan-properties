import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from './ProjectCard'
import { projects, home } from '../../data/content'

export default function FeaturedProjects() {
  const f = home.featured
  return (
    <section className="bg-sand py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={f.eyebrow} title={<>{f.title[0]}<br />{f.title[1]}</>} />
          <Link to="/properties" className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
            {f.linkLabel} <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, f.count).map((p) => <ProjectCard key={p.id} project={p} />)}
        </motion.div>
      </div>
    </section>
  )
}
