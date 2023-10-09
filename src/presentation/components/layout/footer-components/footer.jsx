import styles from 'presentation/components/layout/footer-components/footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.box_footer}>
        <div className={styles.box_information}>
          <div className={styles.box_logo}>
            <h5 className={styles.logo}>LOGO</h5>
          </div>
          <div className={styles.box_links}>
            <ul className={styles.list}>
              <li>Início</li>
              <li>Benefícios</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div className={styles.box_contact}>
          <div className={styles.box_email}>
            <h6 className={styles.title}>
              Vamos <br /> conversar
            </h6>
            <p className={styles.subtitle}>ai@gmaierere.com</p>
          </div>
          <div className={styles.social_media}>
            <p className={styles.text_follow}>SIGA-NOS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
