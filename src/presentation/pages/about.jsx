import { Navbar } from 'presentation/components/common/navbar'
import { AboutHeader } from 'presentation/components/pages/about-header/about-header'
import { AboutUs } from 'presentation/components/pages/about/abou-us'
import { OurMission } from 'presentation/components/pages/our-mission/our-mission'
import { Footer } from 'presentation/components/common/footer'

export function About() {
  
  return (
    <main>
      <Navbar />
      <AboutHeader />
      <AboutUs />
      <OurMission />
      <Footer />
    </main>
  )
}
