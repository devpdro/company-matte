import { PricesBenefits } from './components/prices-benefits'
import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/prices/prices.module.scss'

export function Prices() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.plans_box}>
        <div className={styles.basic}>
          <div className={styles.icon_box}>
            <ICON.BiDesktop className={styles.icon_desktop} />
          </div>
          <h1 className={styles.title}>Site Sob Medida</h1>
          <PricesBenefits />
          <div className={styles.prices_box}>
            <p className={styles.discount}>De R$ 789,90</p>
            <div className={styles.total_box}>
              <span className={styles.coin}>R$</span>
              <span className={styles.value}>51,90</span>
              <span className={styles.month}>/mês</span>
            </div>
          </div>
          <p className={styles.payment}>Pagamento em até 12x sem juros</p>
          <div className={styles.choose_box}>
            <button className={styles.choose_btn} type="submit">
              Escolher
            </button>
          </div>
        </div>
        <div className={styles.texts_box}>
          <p className={styles.subtitle}>Orçamento para criação de site</p>
          <h1 className={styles.title}>
            Contrate um site <br /> profissional
          </h1>
        </div>
        <div className={styles.custom}>
          <div className={styles.icon_box}>
            <ICON.BiDesktop className={styles.icon_desktop} />
          </div>
          <h1 className={styles.title}>Site Sob Medida</h1>
          <PricesBenefits />
          <div className={styles.prices_box}>
            <p className={styles.discount}>De R$ 789,90</p>
            <div className={styles.total_box}>
              <span className={styles.coin}>R$</span>
              <span className={styles.value}>51,90</span>
              <span className={styles.month}>/mês</span>
            </div>
          </div>
          <p className={styles.payment}>Pagamento em até 12x sem juros</p>
          <div className={styles.choose_box}>
            <button className={styles.choose_btn} type="submit">
              Escolher
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
