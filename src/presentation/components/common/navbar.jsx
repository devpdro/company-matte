import { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import { ICON } from 'presentation/assets/icons/icon'
import { useWindowSize } from 'presentation/hooks/navbar-size'

import IMAGE from 'presentation/assets/logo/logo.webp'

import styles from 'presentation/components/common/navbar.module.scss'

export function Navbar() {
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

  return (
    <nav className={`${styles.navbar} panel`} data-color="white" id="navbar">
      <div className={styles.header__content}>
        <div className={styles.box_logo}>
          <LinkRouter to="/">
            <img
              loading="lazy"
              className={styles.img}
              src={IMAGE}
              alt="Logo da empresa"
            />
          </LinkRouter>
        </div>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth <= 3840 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <LinkRouter to="/quem-somos" className={styles.link}>
                Sobre
              </LinkRouter>
            </li>
            <li>
              <LinkRouter to="/como-funciona" className={styles.link}>
                Como funciona?
              </LinkRouter>
            </li>
            <li>
              <LinkRouter to="/blog" className={styles.link}>
                Blog
              </LinkRouter>
            </li>
            <li>
              <LinkRouter to="/contato" className={styles.link}>
                Contato
              </LinkRouter>
            </li>
            <a
              href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <li>
                <button className={styles.btn_chat}>
                  <ICON.HiOutlineChatBubbleBottomCenterText
                    className={styles.icon}
                  />
                  <p className={styles.chat}>Fale com a gente</p>
                </button>
              </li>
            </a>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <ICON.RxTextAlignRight onClick={menuToggleHandler} />
          ) : (
            <ICON.AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </nav>
  )
}
