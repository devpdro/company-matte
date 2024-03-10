import { useEffect } from 'react'

import { Navbar } from 'presentation/components/common/navbar'
import { HomeHeader } from 'presentation/components/pages/home-header/home-header'
import { CompanyActivities } from 'presentation/components/pages/company-activities/company-activities'
import { ChooseBenefits } from 'presentation/components/pages/company-culture/culture'
import { WorkTogether } from 'presentation/components/common/work-together/work'
import { BlogHeader } from 'presentation/components/pages/blog-header/blog-header'
import { Prices } from 'presentation/components/pages/prices/prices'
import { Faq } from 'presentation/components/pages/faq/faq'
import { Footer } from 'presentation/components/common/footer'

import 'presentation/styles/global/changing-colors.scss'

export function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const $window = window
      const $body = document.body
      const $panel = document.querySelectorAll('.panel')

      const scroll = $window.pageYOffset + $window.innerHeight * 0.2

      $panel.forEach((panel) => {
        const $this = panel

        if (
          $this.offsetTop <= scroll &&
          $this.offsetTop + $this.offsetHeight > scroll
        ) {
          $body.className = $body.className
            .split(' ')
            .filter((className) => !className.startsWith('color-'))
            .join(' ')

          $body.classList.add('color-' + $this.getAttribute('data-color'))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main>
      <Navbar className="panel" data-color="white" />
      <HomeHeader className="panel" data-color="white" />
      <CompanyActivities className="panel" data-color="black" />
      <ChooseBenefits className="panel" data-color="white" />
      <WorkTogether/>
      <Prices className="panel" data-color="white" />
      <BlogHeader className="panel" data-color="white" />
      <Faq />
      <Footer />
    </main>
  )
}
