import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import images from 'presentation/assets/images/images'
import styles from 'presentation/components/layout/main-components/benefits-components/benefits-website.module.scss'
export function BenefitsWebsite() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      id="beneficios"
      className={`${styles.container} panel`}
      data-color="white"
    >
      <div className={styles.box_benefits}>
        <div
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration="950"
          className={styles.box_title}
        >
          <h1 className={styles.title}>Benefícios</h1>
        </div>
        <div className={styles.line_one_box}>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_one}
          >
            <img src={images.publicoAlvo} alt="Ilustração publico alvo" />
            <h6>Destaque-se no seu mercado-alvo!</h6>
            <p>
              Ter um site é fundamental para{' '}
              <span>alcançar essa conquista</span>. É a ferramenta que destaca
              suas qualidades e serviços.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_two}
          >
            <img
              src={images.visibilidadeWeb}
              alt="Ilustração visibilidade web"
            />
            <h6>Maximize a visibilidade da sua marca!</h6>
            <p>
              Conquiste o público online com um site atraente e intuitivo.{' '}
              <span>Mais visibilidade e maior impacto</span>. Vamos destacar a
              sua marca!
            </p>
          </div>
        </div>
        <div className={styles.line_two_box}>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_one}
          >
            <img src={images.hours} alt="Ilustração 24horas" />
            <h6>Presença global 24/7</h6>
            <p>
              Um site próprio assegura a <span>visibilidade da sua marca</span>.
              Esse é o caminho certo para garantir que sua marca seja
              reconhecida.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_two}
          >
            <img
              src={images.analiseDeMercado}
              alt="Ilustração analise de mercado"
            />
            <h6>Aumente suas vendas!</h6>
            <p>
              Um site é uma ferramenta indispensável para expandir seus negócios
              e <span>aumentar suas vendas de forma significativa</span>.
            </p>
          </div>
        </div>
        <div className={styles.line_three_box}></div>
      </div>
    </section>
  )
}
