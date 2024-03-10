import { Link } from 'react-router-dom'

import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/home-header/home-header.module.scss'

export function HomeHeader() {
  return (
    <header className={`${styles.container} panel`} data-color="white">
      <div className={styles.header}>
        <div className={`${styles.box_title}`}>
          <h1 className={styles.title}>
            Transforme suas <br />
            ideias em sites <br /> incríveis!
          </h1>
          <Link to="/como-funciona">
            <button className={styles.btn}>
              <p className={styles.text_btn}>Como funciona?</p>
              <ICON.LuArrowUpRight className={styles.icon} />
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
    </header>
  )
}
