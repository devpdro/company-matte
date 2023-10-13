import { Functionalities } from 'presentation/components/layout/main-components/functionalities-components/functionalities'
import { WebsiteFeatures } from 'presentation/components/layout/main-components/website-features-components/website-features'
import { Price } from 'presentation/components/layout/main-components/price-component/price'
import { ConvinceHim } from 'presentation/components/layout/main-components/convince-him-components/convince-him'
import { BenefitsWebsite } from './benefits-components/benefits-website'
import { Faq } from './faq-components/faq'

export function Main() {
  return (
    <main>
      <WebsiteFeatures className="panel" data-color="white" />
      <Functionalities className="panel" data-color="black" />
      <ConvinceHim className="panel" data-color="purple" />
      <BenefitsWebsite className="panel" data-color="white" />
      <Price className="panel" data-color="white" />
      <Faq />
    </main>
  )
}
