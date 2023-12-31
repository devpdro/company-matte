import { Functionalities } from 'presentation/components/layout/main-components/functionalities-components/functionalities'
import { WebsiteFeatures } from 'presentation/components/layout/main-components/website-features-components/website-features'
import { BenefitsWebsite } from 'presentation/components/layout/main-components/benefits-components/benefits-website'
import { Faq } from 'presentation/components/layout/main-components/faq-components/faq'
import { ProjectsDone } from 'presentation/components/layout/main-components/projects-done-components/projects-done'

export function Main() {
  return (
    <main>
      <WebsiteFeatures className="panel" data-color="black" />
      <Functionalities className="panel" data-color="white" />
   
      <BenefitsWebsite className="panel" data-color="white" />
      <Faq />
    </main>
  )
}
