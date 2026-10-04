import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import TeamCard from './TeamCard'
import { members, teamPage as tp } from '../../data/content'

export default function TeamGrid() {
  return (
    <section className="bg-sand-200 py-24">
      <div className="container-x">
        <SectionHeading eyebrow={tp.gridEyebrow} title={tp.gridTitle} />
        {/* 1 column on small screens, 2 on tablets, 4 on large */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {members.map((m) => <TeamCard key={m.slug} member={m} />)}
        </motion.div>
      </div>
    </section>
  )
}
