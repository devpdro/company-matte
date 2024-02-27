import { PricesBenefits } from './components/prices-benefits'
import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/prices/prices.module.scss'

export function Prices() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.texts_box_responsive}>
        <p className={styles.subtitle}>
          <hr className={styles.linha} />
          Orçamento
        </p>
        <h1 className={styles.title}>
          Contrate um site <br /> profissional
        </h1>
        <p className={styles.paragraph}>
          Em caso de dúvida entre em contato com nossa central de atendimento.
        </p>
        <button className={styles.btn}>
          <ICON.FaWhatsapp className={styles.icon} />
          <p className={styles.text_btn}>(19) 97163-6739</p>
        </button>
      </div>
      <div className={styles.plans_box}>
        <div className={styles.texts_box}>
          <p className={styles.subtitle}>
            <hr className={styles.linha} />
            Orçamento
          </p>
          <h1 className={styles.title}>
            Contrate um site <br /> profissional
          </h1>
          <p className={styles.paragraph}>
            Em caso de dúvida entre em contato com nossa central de atendimento.
          </p>
          <button className={styles.btn}>
            <ICON.FaWhatsapp className={styles.icon} />
            <p className={styles.text_btn}>(19) 97163-6739</p>
          </button>
        </div>
        <div className={styles.basic}>
          <div className={styles.icon_box}>
            <ICON.BiDesktop className={styles.icon_desktop} />
          </div>
          <h1 className={styles.title}>Site Sob Medida</h1>
          <PricesBenefits
            three="One page ou Multipage​"
            four="Google friendly"
            five="Formulários inteligentes"
            seven="Botões para gerar leads​"
          />
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
        <div className={styles.custom}>
          <div className={styles.icon_box}>
            <ICON.GoGraph className={styles.icon_desktop} />
          </div>
          <h1 className={styles.title}>Site Sob Medida</h1>
          <PricesBenefits
            three="Todos os tipos de sites"
            four="Otimização SEO para Google"
            five="Formulários inteligentes"
            seven="Hospedagem e suporte mensal"
          />
          <div className={styles.prices_box}>
            <div className={styles.total_box}>
              <span className={styles.value}>Sob Orçamento</span>
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
