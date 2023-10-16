import { useEffect } from 'react'
import anime from 'animejs'
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
          duration: 2500
        })
        .add(
          {
            targets: '.animateTitle',
            opacity: [0, 1],
            translateY: [-40, 0],
            easing: 'easeOutExpo',
            duration: 2500
          },
          '-=2000'
        )
        .add(
          {
            targets: '.animateInformation',
            opacity: [0, 1],
            translateX: [80, 0],
            easing: 'easeOutExpo',
            duration: 2500
          },
          '-=2000'
        )
        .add(
          {
            targets: '.animateButton',
            opacity: [0, 1],
            translateY: [-45, 0],
            easing: 'easeOutExpo',
            duration: 1500
          },
          '-=2000'
        )
        .add(
          {
            targets: '.animateIcon',
            opacity: [0, 1],
            translateY: [-45, 0],
            easing: 'easeOutExpo',
            duration: 1500
          },
          '-=2000'
        )
    }

    animateTitle()
  }, [])

  return (
    <header id='inicio' className={`${styles.container} panel`} data-color="black">
      <div className={styles.box_header}>
        <div className={styles.box_background}></div>
        <div className={styles.box_img}>
          <ScrollLink
            activeClass="active"
            to="como-funciona?"
            spy={true}
            smooth={true}
          >
            <div className={`${styles.box_icon} animateIcon`}>
              <p>
                Por <br /> aqui
              </p>
              <ICON.CgArrowLongDown className={`${styles.icon}`} />
            </div>
          </ScrollLink>
          <div className={`${styles.box_text}`}>
            <p className={`${styles.subtitle} animateSubtitle`}>Carreira</p>
            <h6 className={`${styles.title} animateTitle`}>
              Destaque a sua <br /> presença online com a <br /> criação de um
              site profissional
            </h6>
        <p className={`${styles.information} animateInformation`}>
              Não perca mais tempo com sites ultrapassados, entre em contato
              hoje mesmo e leve a sua presença online para o próximo nível!
            </p>
            <div className={styles.btn_container}>
              <ScrollLink activeClass="active" to="beneficios" spy={true} smooth={true}>
                <button className={` ${styles.btn} animateButton`} type="submit">
                  Benefícios de um site{' '}
                  <ICON.FiArrowDown className={styles.icon} />
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
