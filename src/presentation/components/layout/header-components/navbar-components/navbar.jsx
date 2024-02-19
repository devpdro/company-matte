import { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import { ICON } from 'presentation/assets/icons/icon'
import { useWindowSize } from 'presentation/hooks/navbar/navbar-window-size'

import styles from 'presentation/components/layout/header-components/navbar-components/navbar.module.scss'

export function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { width: screenWidth } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerHeight = 250

  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (prevScrollPos > currentScrollPos || currentScrollPos < headerHeight) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-115px'
      }
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerHeight])

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
    if (!menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.header__content}>
        <div className={styles.box_logo}>
        </div>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth <= 3840 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <LinkRouter
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Início
              </LinkRouter>
            </li>
            <li>
              <LinkRouter
                to="/sobre"
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Sobre
              </LinkRouter>
            </li>
            <li>
              <LinkRouter
                to="/servicos"
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Serviços
              </LinkRouter>
            </li>
            <li>
              <LinkRouter
                to="/contato"
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Contato
              </LinkRouter>
            </li>
            <li>
              <button className={styles.btn_hire}>
                Análise gratuita
              </button>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <ICON.AiOutlineMenu onClick={menuToggleHandler} />
          ) : (
            <ICON.AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </nav>
  )
}
