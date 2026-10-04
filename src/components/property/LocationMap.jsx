import SectionHeading from '../ui/SectionHeading'
import { propertyPage as pp } from '../../data/content'

export default function LocationMap({ query, name, eyebrow = pp.locationEyebrow, title = `${pp.locationPrefix} ${name}` }) {
  return (
    <section className="bg-sand py-24">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-12 overflow-hidden rounded-3xl border border-ink/10 shadow-soft">
          <iframe
            title={`${name} location`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
