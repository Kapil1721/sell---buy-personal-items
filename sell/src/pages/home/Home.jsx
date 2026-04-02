import Banner from './sections/Banner'
import WhyNow from './sections/WhyNow'
import Services from './sections/Services'
import MembershipOpportunity from './sections/MembershipOpportunity'
import ExclusiveMemberBenefit from './sections/ExclusiveMemberBenefit'
import Newsletter from './sections/Newsletter'

// import { useWebSocket } from '../../hooks/Hooks'
// import { webSocketUrl } from '../../utils/constants'

function Home() {

  // const [notifications] = useWebSocket(webSocketUrl);

  // console.log(notifications);

  return (
    <>
      <Banner />
      <WhyNow />
      <Services />
      <MembershipOpportunity />
      <ExclusiveMemberBenefit />
      <Newsletter />
    </>
  )
}

export default Home