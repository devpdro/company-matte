import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/operation-header/components/business-sizes.module.scss'

export function BusinessSizes() {
  return (
    <header className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_container}>
        <div className={styles.title_box}>
          <h1 className={styles.title}>
            Para todos <br /> os tamanhos de negócios.
          </h1>
        </div>
        <div className={styles.business_box}>
          <ICON.HiOutlineRocketLaunch className={styles.icon} />
          <h1 className={styles.title}>Para Startups</h1>
          <p className={styles.paragraph}>
            Nossas soluções ágeis e eficazes podem <br />
            ajudá-lo a transformar transformam sua visão <br />
            presença digital.
          </p>
        </div>
        <div className={styles.business_box}>
          <ICON.BsPeople className={styles.icon} />
          <h1 className={styles.title}>Para Pessoas</h1>
          <p className={styles.paragraph}>
            Nossa experiência e adaptabilidade <br />
            garantem que suas necessidades tecnológicas <br /> sejam atendidas.
          </p>
        </div>
      </div>
    </header>
  )
}
