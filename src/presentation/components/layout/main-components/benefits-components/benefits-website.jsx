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
            <span>
              Ter um site é fundamental para{' '}
              <strong>alcançar essa conquista</strong>. É a ferramenta que destaca
              suas qualidades e serviços.
            </span>
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
            <span>
              Conquiste o público online com um site atraente e intuitivo.{' '}
              <strong>Mais visibilidade e maior impacto</strong>. Vamos destacar a
              sua marca!
            </span>
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
            <span>
              Um site próprio assegura a <strong>visibilidade da sua marca</strong>.
              Esse é o caminho certo para garantir que sua marca seja
              reconhecida.
            </span>
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
            <span>
              Um site é uma ferramenta indispensável para expandir seus negócios
              e <strong>aumentar suas vendas de forma significativa</strong>.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
