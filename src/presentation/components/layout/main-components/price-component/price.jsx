import { ICON } from 'presentation/assets/icons/icon'
import styles from 'presentation/components/layout/main-components/price-component/price.module.scss'

export function Price() {
  return (
    <section
      id="inicie-agora"
      className={`${styles.container} panel`}
      data-color="white"
    >
      <div className={styles.box_price}>
        <div className={styles.box_text}>
          <p className={styles.title}>Interessado em nosso trabalho?</p>
          <p className={styles.subtitle}>
            Descubra agora o preço ideal para criar o seu site e inicie sua
            jornada online de sucesso!
          </p>
          <div className={styles.box_icons}>
            <p className={styles.tile}>Encontre nós em</p>
            <a
              href="https://api.whatsapp.com/send?phone=5519996776847"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <ICON.IoLogoWhatsapp className={styles.icon} />
              </div>
            </a>
            <a
              href="mailto:vrw.developers@gmail.com?subject=Sobre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <ICON.MdEmail className={styles.icon} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
