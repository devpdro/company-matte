import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import images from 'presentation/assets/images/images'
import styles from 'presentation/components/layout/main-components/explanation-components/explanation-features.module.scss'

export function ExplanationFeatures() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section id="second-section" className={`${styles.container}`}>
      <div className={styles.box_title}>
        <div className={`${styles.box_text}`}>
          <p data-aos="fade-up" className={`${styles.title}`}>
            Trabalho <span>selecionado</span>
          </p>
          <h3 data-aos="fade-up" className={`${styles.subtitle}`}>
            Como um site pode impulsionar o seu negócio?
          </h3>
        </div>
      </div>
      <div className={styles.container_explanation}>
        <div className={styles.box_explanation}>
          <div className={styles.box_have_customers}>
            <div className={styles.box_img}>
              <img data-aos="fade-up" src={images.notebook} alt="Notebook" />
              <div data-aos="fade-up" className={styles.box_text}>
                <p className={styles.title}>Destaque-se no seu mercado-alvo!</p>
                <p className={styles.text}>
                  Ter um site é a pedra angular para alcançar essa
                  <span> conquista</span>.
                </p>
              </div>
            </div>
            <p data-aos="fade-up" className={styles.subtitle}>Ver mais benefícios</p>
            <p data-aos="fade-up" className={styles.text_information}>
              É a ferramenta que diferencia você no mercado, destacando suas
              qualidades e serviços.
            </p>
          </div>
          <div className={styles.brand_visibility}>
            <div className={styles.box_img}>
              <img data-aos="fade-up" src={images.frutas} alt="Frutas" />
              <div data-aos="fade-up" className={styles.box_text}>
                <p className={styles.title}>
                  Maximize a visibilidade da sua marca!
                </p>
                <p className={styles.text}>
                  Conquiste o público online com um site <span>poderoso</span>.
                </p>
              </div>
            </div>
            <p data-aos="fade-up" className={styles.subtitle}>Ver mais benefícios</p>
            <p data-aos="fade-up" className={styles.text_information}>
              Mais visibilidade significa mais impacto. Vamos fazer sua marca
              brilhar!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
