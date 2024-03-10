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
        <a
          href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Estou%20com%20algumas%20d%C3%BAvidas%20sobre%20o%20servi%C3%A7o%20de%20sites%20que%20voc%C3%AAs%20oferecem.%20Voc%C3%AAs%20podem%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.btn}>
            <ICON.HiOutlineChatBubbleBottomCenterText className={styles.icon} />
            <p className={styles.text_btn}>Fale com a gente</p>
          </button>
        </a>
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
          <a
            href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Estou%20com%20algumas%20d%C3%BAvidas%20sobre%20o%20servi%C3%A7o%20de%20sites%20que%20voc%C3%AAs%20oferecem.%20Voc%C3%AAs%20podem%20me%20ajudar?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>
              <ICON.HiOutlineChatBubbleBottomCenterText
                className={styles.icon}
              />
              <p className={styles.text_btn}>Fale com a gente</p>
            </button>
          </a>
        </div>
        <div className={styles.basic}>
          <div className={styles.icon_box}>
            <ICON.BiDesktop className={styles.icon_desktop} />
          </div>
          <h1 className={styles.title}>Site Expresso</h1>
          <PricesBenefits
            three="One page ou Multipage​"
            four="Google friendly"
            seven="Formulários simples"
          />
          <li className={styles.list_text}>
            <ICON.AiOutlineClose className={styles.icon} />
            Hospedagem e domínio incluso
          </li>
          <li className={styles.list_text}>
            <ICON.AiOutlineClose className={styles.icon} />
            Suporte mensal incluído
          </li>
          <div className={styles.prices_box}>
            <p className={styles.discount}>De R$ 583,50</p>
            <div className={styles.total_box}>
              <span className={styles.coin}>R$</span>
              <span className={styles.value}>38,90</span>
              <span className={styles.month}>/12x</span>
            </div>
          </div>
          <p className={styles.payment}>Pagamento em até 12x sem juros</p>
          <div className={styles.choose_box}>
            <a
              href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Estou%20animado%20para%20saber%20mais%20sobre%20o%20Site%20Expresso.%20Podemos%20conversar%20sobre%20como%20ele%20pode%20transformar%20meu%20projeto%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.choose_btn} type="submit">
                Escolher
              </button>
            </a>
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
            seven="Formulários inteligentes"
          />
          <li className={styles.list_text}>
            <ICON.FaCheck className={styles.icon} />
            Hospedagem e domínio incluso
          </li>
          <li className={styles.list_text}>
            <ICON.FaCheck className={styles.icon} />
            Suporte mensal incluído
          </li>
          <div className={styles.prices_box}>
            <div className={styles.total_box}>
              <span className={styles.value}>Sob Orçamento</span>
            </div>
          </div>
          <p className={styles.payment}>Pagamento em até 12x sem juros</p>
          <div className={styles.choose_box}>
            <a
              href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Estou%20animado%20para%20saber%20mais%20sobre%20o%20Site%20Sob%20Medida.%20Podemos%20conversar%20sobre%20como%20ele%20pode%20transformar%20meu%20projeto%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.choose_btn} type="submit">
                Escolher
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
