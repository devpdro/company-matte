import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import Logo from 'presentation/assets/logo/logo.png'

import { useWindowSize } from 'presentation/hooks/navbar-window-size'

import styles from 'presentation/components/layout/header-components/navbar-components/navbar.module.scss'

export function Navbar() {
  const { width: screenWidth } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.header__content}>
        <div className={styles.box_logo}>
          <a href="#pesqueiro">
            <img className={styles.img_logo} src={Logo} alt="Logo" />
          </a>
        </div>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && screenWidth <= 3840 ? styles.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <a
                className={styles.link}
                href="#pesqueiro"
                onClick={menuToggleHandler}
              >
                Pesqueiro
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#sobre-nos"
                onClick={menuToggleHandler}
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#fotos"
                onClick={menuToggleHandler}
              >
                Fotos
              </a>
            </li>
            <li>
              <a
                className={`${styles.link}`}
                href="#preco"
                onClick={menuToggleHandler}
              >
                Preço
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#localizacao"
                onClick={menuToggleHandler}
              >
                Localização
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#rodape"
                onClick={menuToggleHandler}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <AiOutlineMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </nav>
  )
}
