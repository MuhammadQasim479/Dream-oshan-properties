import ContactHeader from '../components/contact/ContactHeader'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import Faq from '../components/contact/Faq'
import LocationMap from '../components/property/LocationMap'
import { contactPage } from '../data/content'

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <section className="bg-sand py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <LocationMap query={contactPage.mapQuery} name={contactPage.mapTitle} eyebrow={contactPage.eyebrow} title={contactPage.mapTitle} />
      <Faq />
    </>
  )
}
