import Hero from '../components/home/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Stats from '../components/home/Stats'
import About from '../components/home/About'
import WhyInvest from '../components/home/WhyInvest'
import Values from '../components/home/Values'
import Locations from '../components/home/Locations'
import Process from '../components/home/Process'
import PaymentCalculator from '../components/home/PaymentCalculator'
import Testimonials from '../components/home/Testimonials'
import Faq from '../components/contact/Faq'
import CTA from '../components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      {/* <Stats /> */}
      <About />
      <WhyInvest />
      <Values />
      <Locations />
      <Process />
      {/* <PaymentCalculator /> */}
      <Testimonials />
      <Faq bg="bg-sand" />
      <CTA />
    </>
  )
}
