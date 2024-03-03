import { useEffect } from 'react'

import { Footer } from 'presentation/components/common/footer'
import { Navbar } from 'presentation/components/common/navbar'
import { MainContact } from 'presentation/components/pages/contact/contact'

export function Contact() {
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
      <MainContact />
      <Footer />
    </main>
  )
}
