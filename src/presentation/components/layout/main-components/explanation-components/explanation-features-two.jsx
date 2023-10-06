import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Mundi from 'presentation/assets/images/img/mundi.jpg'
import Pessoa from 'presentation/assets/images/img/pessoa.jpg'

import styles from 'presentation/components/layout/main-components/explanation-components/explanation-features-two.module.scss'
export function ExplanationFeaturesTwo() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className={`${styles.container}`}>
      <div className={styles.container_explanation}>
        <div className={styles.box_explanation}>
          <div className={styles.box_have_customers}>
            <div className={styles.box_img}>
              <img data-aos="fade-up" src={Mundi} alt="Globo" />
              <div data-aos="fade-up" className={styles.box_text}>
                <p className={styles.title}>Alcance o sucesso global!</p>
                <p className={styles.text}>
                  Um site próprio assegura a visibilidade global da sua <span>marca</span>.
                </p>
              </div>
            </div>
            <p data-aos="fade-up" className={styles.subtitle}>Ver mais benefícios</p>
            <p data-aos="fade-up" className={styles.text_information}>
              Ter um website exclusivo é o caminho certo para garantir que sua
              marca seja reconhecida em todo o mundo, destacando-a no cenário
              global.
            </p>
          </div>
          <div className={styles.brand_visibility}>
            <div className={styles.box_img}>
              <img data-aos="fade-up" src={Pessoa} alt="Pessoa" />
              <div data-aos="fade-up" className={styles.box_text}>
                <p className={styles.title}>Aumente suas vendas!</p>
                <p className={styles.text}>
                  Um site é a peça-chave para alcançar esse <span>objetivo</span>.
                </p>
              </div>
            </div>
            <p data-aos="fade-up" className={styles.subtitle}>Ver mais benefícios</p>
            <p data-aos="fade-up" className={styles.text_information}>
              Um site é uma ferramenta indispensável para expandir seus negócios e aumentar suas vendas de forma significativa. Descubra como ter um site pode impulsionar seus lucros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
