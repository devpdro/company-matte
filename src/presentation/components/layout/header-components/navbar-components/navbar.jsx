import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from 'presentation/assets/logo/VR_LOGO-removebg-preview.png'
import { ICON } from 'presentation/assets/icons/icon'
import { useWindowSize } from 'presentation/hooks/navbar/navbar-window-size'

import styles from 'presentation/components/layout/header-components/navbar-components/navbar.module.scss'

export function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { width: screenWidth } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerHeight = 550

  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (prevScrollPos > currentScrollPos || currentScrollPos < headerHeight) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-100px'
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
          <Link to="/">
            <img className={styles.img_logo} src={Logo} alt="" />
          </Link>
        </div>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth <= 3840 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <Link to="/" className={styles.link} onClick={menuToggleHandler}>
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/beneficios"
                className={styles.link}
                onClick={menuToggleHandler}
              >
                Benefícios
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={styles.link}
                href="#fotos"
                onClick={menuToggleHandler}
              >
                Contato
              </Link>
            </li>
          </ul>
          <div className={styles.box_information}>
            <div className={styles.box_time}>
              <div className={styles.box_icon}>
                <ICON.BiTime className={styles.icon} />
              </div>
              <div className={styles.box_text}>
                <p>
                  {currentTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}{' '}
                  / Brazil
                </p>
              </div>
            </div>
            <div className={styles.box_contact}>
              <a
                href="https://api.whatsapp.com/send?phone=5519996776847"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.box_icon}>
                  <ICON.AiOutlineWhatsApp className={styles.icon} />
                </div>
                <div className={styles.box_text}>
                  <p>+55 (19) 99677-6847</p>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <ICON.RxHamburgerMenu onClick={menuToggleHandler} />
          ) : (
            <ICON.AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </nav>
  )
}
