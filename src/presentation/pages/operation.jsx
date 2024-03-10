import { useEffect } from 'react'

import { Navbar } from 'presentation/components/common/navbar'
import { OperationHeader } from 'presentation/components/pages/operation-header/operation-header'
import { HowWorks } from 'presentation/components/pages/operation/how-works'
import { Functionalities } from 'presentation/components/pages/functionalities-website/functionalities'
import { Technologies } from 'presentation/components/pages/technologies-used/technologies'
import { Footer } from 'presentation/components/common/footer'

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
      <Navbar className="panel" data-color="white" />
      <OperationHeader className="panel" data-color="white" />
      <HowWorks className="panel" data-color="white" />
      <Functionalities className="panel" data-color="white" />
      <Technologies className="panel" data-color="white" />
      <Footer />
    </main>
  )
}
