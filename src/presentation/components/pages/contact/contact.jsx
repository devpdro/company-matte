import { useEffect } from 'react'

import anime from 'animejs';

import { Form } from 'presentation/components/pages/contact/components/form'
import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/layout/main-components/main-contact.module.scss'

export function MainContact() {
   useEffect(() => {
    const animateBoxForm = () => {
      anime.timeline().add({
        targets: '.animateSubtitle',
        opacity: [0, 1],
        translateY: [-80, 0],
        easing: 'easeOutExpo',
        duration: 2500,
      }).add(
        {
          targets: '.animateTitle',
          opacity: [0, 1],
          translateY: [-40, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        },
        '-=2000'
      ).add(
        {
          targets: '.animateInformation',
          opacity: [0, 1],
          translateY: [-40, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        },
        '-=2000'
      ).add(
        {
          targets: '.animateTextEmail',
          opacity: [0, 1],
          translateX: [-80, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        },
        '-=2000'
      ).add(
        {
          targets: '.animateEmail',
          opacity: [0, 1],
          translateX: [-80, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        },
        '-=2000'
      );
    };

    animateBoxForm();
  }, []);
  return (
    <main className={`${styles.container} panel`} data-color="black">
      <div className={styles.box_container}>
        <div className={styles.box_text}>
          <span className={`${styles.subtitle} animateSubtitle`}>CONTATE-NOS</span>
          <h6 className={`${styles.title} animateTitle`}>Vamos conversar</h6>
          <span className={`${styles.information} animateInformation`}>
            Diga-nos quem você é e como podemos ajudar.
          </span>

          <span className={`${styles.text_email} animateTextEmail`}>
            Você também pode nos escrever um email:
          </span>
          <a
            href="mailto:vrw.developers@gmail.com?subject=Sobre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`${styles.email} animateEmail`}>
              vrw.developers@gmail.com{' '}
              <ICON.LuArrowUpRight className={styles.icon} />
            </span>
          </a>
        </div>
        <div className={styles.box_form}>
          <Form />
        </div>
      </div>
    </main>
  )
}
