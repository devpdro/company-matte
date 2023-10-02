import { Navbar } from 'presentation/components/layout/header-components/navbar-components/navbar';

import styles from 'presentation/components/layout/header-components/header.module.scss'

export function Header () {
    return (
      <main className={styles.container}>
        <div>
          <Navbar />
        </div>
        <div className={styles.box_header}>
          <h1>Precisa de um site Webflow de próximo nível?</h1>
        </div>
      </main>
    )
}