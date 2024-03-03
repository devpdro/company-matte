import { Form } from 'presentation/components/pages/contact/components/form'
import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/contact/contact.module.scss'

export function MainContact() {
  return (
    <main className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_container}>
        <div className={styles.box_text}>
          <p className={`${styles.subtitle} `}>
            Contate-nos <hr className={styles.linha} />
          </p>
          <h1 className={`${styles.title} `}>Como podemos ajudar?</h1>
          <p className={`${styles.information} `}>
            Vamos encontrar a melhor solução para o seu projeto?
          </p>

          <p className={`${styles.text_email} `}>
            Você também pode nos escrever um email:
          </p>

          <div className={styles.box_email}>
            <p className={`${styles.email} `}>vrw.developers@gmail.com</p>
            <ICON.LuArrowUpRight className={styles.icon} />
          </div>
        </div>
        <div className={styles.box_form}>
          <Form />
        </div>
      </div>
    </main>
  )
}
