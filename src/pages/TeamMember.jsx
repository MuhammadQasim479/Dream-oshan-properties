import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import MemberProfile from '../components/team/MemberProfile'
import TeamCard from '../components/team/TeamCard'
import { motion } from 'framer-motion'
import { getMember, team, teamPage as tp } from '../data/content'
import SectionHeading from '../components/ui/SectionHeading'

export default function TeamMember() {
  const { slug } = useParams()
  const member = getMember(slug)

  if (!member) {
    return (
      <section className="grid min-h-[70vh] place-items-center bg-ink px-6 pt-32 text-center text-white">
        <div>
          <h1 className="font-display text-4xl">{tp.notFound}</h1>
          <Link to="/team" className="mt-6 inline-block text-gold-300 underline">Back to Our Team</Link>
        </div>
      </section>
    )
  }

  const others = team.filter((m) => m.slug !== slug && !m.leadership).slice(0, 4)

  return (
    <>
      <section className="bg-ink pb-16 pt-32">
        <div className="container-x">
          <Link to="/team" className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
            <FiArrowLeft className="transition group-hover:-translate-x-1" /> {tp.back}
          </Link>
          <MemberProfile member={member} />
        </div>
      </section>
      <section className="bg-sand py-24">
        <div className="container-x">
          <SectionHeading eyebrow={tp.moreEyebrow} title={tp.moreTitle} />
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {others.map((m) => <TeamCard key={m.slug} member={m} />)}
          </motion.div>
        </div>
      </section>
    </>
  )
}
