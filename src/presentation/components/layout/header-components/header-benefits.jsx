import { Navbar } from 'presentation/components/layout/header-components/navbar-components/navbar'

import styles from 'presentation/components/layout/header-components/header-benefits.module.scss'

export function HeaderBenefits() {
  return (
    <header className={styles.container}>
      <div>
        <Navbar />
      </div>
      <div className={styles.box_header}>
        <p className={styles.subtitle}>Béneficios</p>
        <p className={`${styles.title}`}>
          Destaque sua Presença Online com um Website 
        </p>
        <p className={`${styles.information} `}>
         We’re looking to bring on talent that’s ready to challenge the industry, and reach new heights.
        </p>
        <input className={styles.btn} type="button" value="Our current openings" />
      </div>
    </header>
  )
}
