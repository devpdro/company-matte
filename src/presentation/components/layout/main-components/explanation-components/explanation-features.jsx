import { ICON } from 'presentation/assets/icons/icon'
import styles from 'presentation/components/layout/main-components/explanation-components//explanation-features.module.scss'
export function ExplanationFeatures() {
  return (
    <section style={{ marginTop: '10rem' }} className={styles.container}>
      <h1>Funcionalidades</h1>
      <div className={styles.box_explanation}>
        <div>
          <ICON.AiOutlineClose />
          <h2>Designer</h2>
          <p>Texto exsplicatiov</p>
        </div>
        <div>
          <h1>Olá</h1>
        </div>
        <div>
          <h1>Olá</h1>
        </div>
      </div>
    </section>
  )
}
