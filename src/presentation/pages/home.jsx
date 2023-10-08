import { useEffect, useState } from 'react'
import { Header } from 'presentation/components/layout/header-components/header'
import { Main } from 'presentation/components/layout/main-components/main'
import { Footer } from 'presentation/components/layout/footer-components/footer'
import 'presentation/styles/global.scss'

const SCROLL_THRESHOLD = 350
export function Home() {
  const [backgroundClass, setBackgroundClass] = useState('dark_bg_start')
  const [textClass, setTextClass] = useState('light_text_start')
  const [borderClass, setBorderClass] = useState('light_border_start')

  useEffect(() => {
    function handleScroll() {
      const scroll = window.pageYOffset

      if (scroll > SCROLL_THRESHOLD) {
        setBackgroundClass('light_bg')
        setTextClass('dark_text')
        setBorderClass('dark_border')
      } else {
        setBackgroundClass('dark_bg_start')
        setTextClass('light_text_start')
        setBorderClass('light_border_start')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className={`${backgroundClass} ${textClass} ${borderClass}`}>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
