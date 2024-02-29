import { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import { ICON } from 'presentation/assets/icons/icon'
import { useWindowSize } from 'presentation/hooks/navbar-size'

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
    <nav className={styles.navbar} id="navbar">
      <div className={styles.header__content}>
        <div className={styles.box_logo}></div>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth <= 3840 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <LinkRouter to="/quem-somos" className={styles.link}>Sobre</LinkRouter>
            </li>
            <li>
              <LinkRouter to="/como-funciona" className={styles.link}>
                Como funciona?
              </LinkRouter>
            </li>
            <li>
              <LinkRouter className={styles.link}>Blog</LinkRouter>
            </li>
            <li>
              <LinkRouter to="/contato" className={styles.link}>
                Contato
              </LinkRouter>
            </li>
            <a
              href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1,%20gostaria%20de%20fazer%20meu%20site."
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
