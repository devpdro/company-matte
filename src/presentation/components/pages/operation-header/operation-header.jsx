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
          <button className={styles.btn} type="submit">
            <p className={styles.text_btn}>Saiba mais</p>
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
    </section>
  )
}
