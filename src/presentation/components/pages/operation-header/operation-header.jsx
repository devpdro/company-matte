import { Link } from 'react-scroll'

import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/operation-header/operation-header.module.scss'

export function OperationHeader() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.header}>
        <div className={`${styles.box_title}`}>
          <h1 className={styles.title}>
            Como funciona <br /> esse processo?
          </h1>
          <Link to="como-funciona" smooth offset={-100}>
            <button className={styles.btn} type="submit">
              <p className={styles.text_btn}>Saiba mais</p>
              <ICON.IoIosArrowRoundDown className={styles.icon} />
            </button>
          </Link>
        </div>
        <div className={`${styles.box_overlay}`}>
          <p className={styles.text_overlay}>
            Vamos trabalhar <br /> juntos <hr className={styles.linha} /> <br />
            <a
              href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Fale Conosco</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
