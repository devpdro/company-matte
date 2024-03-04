import { ICON } from 'presentation/assets/icons/icon'

import IMAGE from 'presentation/assets/logo/logo-black.png'

import styles from 'presentation/components/common/footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.logo_footer}>
        <img
          className={styles.img}
          src={IMAGE}
          alt="Logo da empresa"
          loading="lazy"
        />
      </h1>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <div className={styles.logo}>
            <img
              className={styles.img}
              src={IMAGE}
              alt="Logo da empresa"
              loading="lazy"
            />
          </div>
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
            <p>© 2024 Matte. Todos os direitos reservados.</p>
          </div>
          <div className={styles.icons_box}>
            <ul className={styles.list_icons}>
              <li>
                <ICON.FaWhatsapp className={styles.icon} />
              </li>
              <li>
                <ICON.FaInstagram className={styles.icon} />
              </li>
              <li>
                <ICON.FaLinkedin className={styles.icon} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
