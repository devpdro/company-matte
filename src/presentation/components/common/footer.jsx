import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ICON } from 'presentation/assets/icons/icon'

import IMAGE from 'presentation/assets/logo/logo-black.png'
import styles from 'presentation/components/common/footer.module.scss'

export function Footer() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <footer className={styles.footer}>
      <h1 className={styles.logo_footer}>
        <img
          className={styles.img}
          src={IMAGE}
          alt="Logo da empresa"
          loading="lazy"
        />
      </h1>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <div className={styles.logo}>
            <Link to="/">
              <img
                className={styles.img}
                src={IMAGE}
                alt="Logo da empresa"
                loading="lazy"
              />
            </Link>
          </div>
          <div className={styles.nav}>
            <ul className={styles.list}>
              <Link to="/quem-somos" className={styles.link}>
                <li>Sobre</li>
              </Link>
              <Link to="/como-funciona" className={styles.link}>
                <li>Como funciona?</li>
              </Link>
              <Link to="/blog" className={styles.link}>
                <li>Blog</li>
              </Link>
              <Link to="/contato" className={styles.link}>
                <li>Contato</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.copyright_box}>
          <div className={styles.copyright}>
            <p>© 2024 Matte. Todos os direitos reservados.</p>
          </div>
          <div className={styles.icons_box}>
            <ul className={styles.list_icons}>
              <li>
                <ICON.FaWhatsapp className={styles.icon} />
              </li>
              <li>
                <ICON.FaInstagram className={styles.icon} />
              </li>
              <li>
                <ICON.FaLinkedin className={styles.icon} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
