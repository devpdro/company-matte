import { Functionalities } from 'presentation/components/layout/main-components/functionalities-components/functionalities'
import { WebsiteFeatures } from 'presentation/components/layout/main-components/website-features-components/website-features'
import { Price } from 'presentation/components/layout/main-components/price-component/price'
import { BenefitsWebsite } from 'presentation/components/layout/main-components/benefits-components/benefits-website'
import { Faq } from 'presentation/components/layout/main-components/faq-components/faq'

export function Main() {
  return (
    <main>
     
     
      <BenefitsWebsite className="panel" data-color="white" />
      <Price className="panel" data-color="white" />
      <Faq />
    </main>
  )
}
