import { ICON } from 'presentation/assets/icons/icon'
import { Form } from 'presentation/components/layout/main-components/forms-components/form'
import styles from 'presentation/components/layout/main-components/main-contact.module.scss'
export function MainContact() {
  return (
    <main className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.box_text}>
          <p className={styles.subtitle}>CONTATE-NOS</p>
          <h6 className={styles.title}>Vamos conversar</h6>
          <p className={styles.information}>
            Diga-nos quem você é e como podemos ajudar.
          </p>

          <p className={styles.text_email}>
            Você também pode nos escrever um email:
          </p>
          <a
            href="mailto:vrw.developers@gmail.com?subject=Sobre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.email}>
              vrw.developers@gmail.com{' '}
              <ICON.LuArrowUpRight className={styles.icon} />
            </p>
          </a>
        </div>
        <div className={styles.box_form}>
          <Form />
        </div>
      </div>
    </main>
  )
}
