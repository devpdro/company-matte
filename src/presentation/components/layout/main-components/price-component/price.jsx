import images from 'presentation/assets/images/images'
import styles from 'presentation/components/layout/main-components/price-component/price.module.scss'

export function Price() {
  return (
    <section id='inicie-agora' className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_price}>
        <div className={styles.box_text}>
          <p>
            Descubra agora o preço ideal para criar o seu site e{' '}
            <span>inicie sua jornada online de sucesso!</span>
          </p>
        </div>
        <div className={styles.box_information}>
          <div className={styles.box_whats}>
            <div className={styles.box_icon}>
              <img src={images.whatsApp} alt="Icone gmail" />
            </div>
            <div className={styles.box_text}>
              <p>+55 (19) 99677-6747</p>
              <h6>
                Inicie uma <br /> conversa
              </h6>
            </div>
          </div>
          <div className={styles.box_email}>
            <div className={styles.box_icon}>
              <img src={images.email} alt="Icone whatsApp" />
            </div>
            <div className={styles.box_text}>
              <p>+55 (19) 99677-6747</p>
              <h6>
                Envie uma <br /> mensagem
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
