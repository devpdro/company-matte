import { useEffect, useState } from 'react'

import { Header } from 'presentation/components/layout/header-components/header'
import { Main } from 'presentation/components/layout/main-components/main'

import 'presentation/styles/global.scss'

export function Home() {
  const [backgroundClass, setBackgroundClass] = useState('dark_bg_start')
  const [textClass, setTextClass] = useState('light_text_start')
  const [borderClass, setborderClass] = useState('light_border_start')

  useEffect(() => {
    function handleScroll() {
      const scroll = window.pageYOffset

      if (scroll > 350) {
        setBackgroundClass('light_bg')
        setTextClass('dark_text')
        setborderClass('dark_border')
      } else {
        setBackgroundClass('dark_bg_start')
        setTextClass('light_text_start')
   
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
    </main>
  )
}
