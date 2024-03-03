import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/about-header/about-header.module.scss'

export function AboutHeader() {
  return (
    <header className={`${styles.container} panel`} data-color="white">
      <div className={styles.header}>
        <div className={`${styles.box_title}`}>
          <h1 className={styles.title}>
            Desenvolvemos <br />
            sites sob medida <br />  para seu negócio.
          </h1>
          <button className={styles.btn} type="submit">
            <p className={styles.text_btn}>Quem somos</p>
            <ICON.IoIosArrowRoundDown className={styles.icon} />
          </button>
        </div>
        <div className={`${styles.box_overlay}`}>
          <p className={styles.text_overlay}>
            Vamos trabalhar <br /> juntos <hr className={styles.linha} /> <br />
            <span>Fale Conosco</span>
          </p>
        </div>
      </div>
    </header>
  )
}
