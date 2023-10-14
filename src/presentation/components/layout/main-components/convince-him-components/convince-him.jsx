import { ICON } from 'presentation/assets/icons/icon'
import styles from 'presentation/components/layout/main-components/convince-him-components/convince-him.module.scss'

export function ConvinceHim() {
  return (
    <section className={`${styles.container} panel`} data-color="purple">
      <div className={styles.box_convince}>
        <h5 className={styles.title}>
          <ICON.PiStarFourDuotone className={styles.icon} /> Aumente o faturamento do seu negócio{' '}
          <ICON.PiStarFourDuotone className={styles.icon} /> Aumente o faturamento do seu negócio{' '}
          <ICON.PiStarFourDuotone className={styles.icon} /> Aumente o faturamento do seu negócio
          <ICON.PiStarFourDuotone className={styles.icon} />
        </h5>
      </div>
    </section>
  )
}
