import { useEffect } from 'react'

import { Navbar } from 'presentation/components/common/navbar'
import { ChooseBenefits } from 'presentation/components/pages/company-culture/culture'
import { WorkTogether } from 'presentation/components/common/work-together/services'

export function Operation() {
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
      <Navbar />
      <ChooseBenefits className="panel" data-color="white" />
      <WorkTogether />
    </main>
  )
}
