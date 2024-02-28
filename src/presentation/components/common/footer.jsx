import styles from 'presentation/components/common/footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <div className={styles.logo}><h1>LOGO</h1></div>
          <div className={styles.nav}>
            <ul className={styles.list}>
              <li>Sobre</li>
              <li>Como funciona?</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright_box}>
          <div className={styles.copyright}>
            <p>© 2024 VRWEB. Todos os direitos reservados.</p>
          </div>
          <div className={styles.icons_box}>
            <ul className={styles.list_icons}>
              <li>a</li>
              <li>aa</li>
              <li>a</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
