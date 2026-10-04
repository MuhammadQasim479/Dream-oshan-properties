import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropertyHero from '../components/property/PropertyHero'
import Overview from '../components/property/Overview'
import Amenities from '../components/property/Amenities'
import Gallery from '../components/property/Gallery'
import UnitTypes from '../components/property/UnitTypes'
import LocationMap from '../components/property/LocationMap'
import InquiryForm from '../components/property/InquiryForm'
import ProjectCard from '../components/home/ProjectCard'
import SectionHeading from '../components/ui/SectionHeading'
import { projects, propertyPage as pp } from '../data/content'

export default function PropertyDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="grid min-h-[70vh] place-items-center bg-ink px-6 pt-32 text-center text-white">
        <div>
          <h1 className="font-display text-4xl">Project not found</h1>
          <Link to="/properties" className="mt-6 inline-block text-gold-300 underline">Back to Properties</Link>
        </div>
      </section>
    )
  }

  const detail = project
  const others = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <>
      <PropertyHero project={project} />
      <Overview project={project} detail={detail} />
      <Amenities items={detail.amenities} />
      <Gallery images={detail.gallery} name={project.name} />
      <UnitTypes units={detail.unitTypes} available={project.units} />
      <LocationMap query={detail.mapQuery} name={project.name} />
      <InquiryForm name={project.name} />
      <section className="bg-sand py-24">
        <div className="container-x">
          <SectionHeading eyebrow={pp.othersEyebrow} title={pp.othersTitle} />
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {others.map((p) => <ProjectCard key={p.id} project={p} />)}
          </motion.div>
        </div>
      </section>
    </>
  )
}
