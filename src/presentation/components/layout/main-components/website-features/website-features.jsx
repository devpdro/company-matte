import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/layout/main-components/website-features/website-features.module.scss'
export function WebsiteFeatures() {
  
  return (
    <section className={`${styles.container} `}>
      <div className={styles.box_container}>
        <div className={`${styles.box_title}`}>
          <p>Como funciona? </p>
        </div>
        <div className={styles.box_information}>
          <div className={styles.box_one}>
            <ICON.MdOutlineWidgets className={styles.icon} />
            <h6 className={styles.title}>Escolha o tipo de site</h6>
            <p className={styles.explication}>
              Site Homepage ou site Sob Medida? Qual site é o ideal para você e
              ou seu negócio?
            </p>
          </div>
          <div className={styles.box_two}>
            <ICON.MdOutlineWidgets className={styles.icon} />
            <h6 className={styles.title}>Escolha o tipo de site</h6>
            <p className={styles.explication}>
              Site Homepage ou site Sob Medida? Qual site é o ideal para você e
              ou seu negócio?
            </p>
          </div>
          <div className={styles.box_three}>
            <ICON.MdOutlineWidgets className={styles.icon} />
            <h6 className={styles.title}>Escolha o tipo de site</h6>
            <p className={styles.explication}>
              Site Homepage ou site Sob Medida? Qual site é o ideal para você e
              ou seu negócio?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
