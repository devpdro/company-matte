import { useEffect } from 'react'

import { Navbar } from 'presentation/components/common/navbar'
import { AboutHeader } from 'presentation/components/pages/about-header/about-header'
import { AboutUs } from 'presentation/components/pages/about/about-us'
import { OurMission } from 'presentation/components/pages/our-mission/our-mission'
import { Technologies } from 'presentation/components/pages/technologies-used/technologies'
import { BlogHeader } from 'presentation/components/pages/blog-header/blog-header'
import { Footer } from 'presentation/components/common/footer'

export function About() {
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
      <AboutHeader className="panel" data-color="white" />
      <AboutUs className="panel" data-color="white" />
      <OurMission className="panel" data-color="white" />
      <Technologies className="panel" data-color="white" />
      <BlogHeader className="panel" data-color="white" />
      <Footer />
    </main>
  )
}
