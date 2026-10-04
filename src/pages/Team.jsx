import TeamHeader from '../components/team/TeamHeader'
import LeaderSection from '../components/team/LeaderSection'
import TeamGrid from '../components/team/TeamGrid'
import { leaders } from '../data/content'

export default function Team() {
  return (
    <>
      <TeamHeader />
      <section className="bg-sand py-20">
        <div className="container-x space-y-10">
          {leaders.map((l, i) => <LeaderSection key={l.slug} leader={l} index={i} />)}
        </div>
      </section>
      <TeamGrid />
    </>
  )
}
