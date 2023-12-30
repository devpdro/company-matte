import { useEffect } from 'react'
import anime from 'animejs'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import styles from 'presentation/components/layout/header-components/header.module.scss'
import { ICON } from 'presentation/assets/icons/icon'

export function Header() {
  useEffect(() => {
    const animateTitle = () => {
      anime
        .timeline()
        .add({
          targets: '.animateSubtitle',
          opacity: [0, 1],
          translateY: [-80, 0],
          easing: 'easeOutExpo',
          duration: 2000
        })
        .add({
          targets: '.btn1',
          opacity: [0, 1],
          translateY: [-80, 0],
          easing: 'easeOutExpo',
          duration: 1500
        })
        .add({
          targets: '.btn2',
          opacity: [0, 1],
          translateY: [-80, 0],
          easing: 'easeOutExpo',
          duration: 1500
        })
    }

    animateTitle()
  }, [])

  return (
    <header
      id="inicio"
      className={`${styles.container} panel`}
      data-color="white"
    >
      <div className={styles.box_header}>
        <p className="animateSubtitle">
          Desenvolvimento personalizado de <br /> <span>aplicativos</span>{' '}
          digitais
        </p>
        <div className={styles.box_inputs}>
          <a
            className="btn1"
            href="https://api.whatsapp.com/send?phone=5519971636739"
            target="_blank"
            rel="noopener noreferrer"
          >
            <input
              className={styles.btn_whatsapp}
              type="submit"
              value="Whatsapp"
            />
          </a>
          <Link className="btn2" to="/contato">
            <input
              className={styles.btn_email}
              type="submit"
              value="Enviar e-mail"
            />
          </Link>
          <ScrollLink
            activeClass="active"
            to="como-funciona?"
            spy={true}
            smooth={true}
          >
            <div className={`${styles.box_icon} animateIcon`}>
              <p>
                Por <br/> aqui
              </p>
              <ICON.CgArrowLongDown className={`${styles.icon}`} />
            </div>
          </ScrollLink>
        </div>
      </div>
    </header>
  )
}
