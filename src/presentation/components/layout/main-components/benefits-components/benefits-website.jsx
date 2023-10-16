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
          data-aos-duration="850"
          className={styles.box_title}
        >
          <h1 className={styles.title}>Benefícios</h1>
        </div>
        <div className={styles.line_one_box}>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="850"
            className={styles.box_one}
          >
            <img src={images.publicoAlvo} alt="Ilustração publico alvo" />
            <h6>Destaque-se no seu mercado-alvo!</h6>
            <p>
              Ter um site é fundamental para{' '}
              <span>alcançar essa conquista</span>. É a ferramenta que
              diferencia você no mercado, destacando suas qualidades e serviços.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="1700"
            className={styles.box_two}
          >
            <img
              src={images.visibilidadeWeb}
              alt="Ilustração visibilidade web"
            />
            <h6>Maximize a visibilidade da sua marca!</h6>
            <p>
              Conquiste o público online com um site atraente e intuitivo.{' '}
              <span>Mais visibilidade se traduz em maior impacto</span>. Vamos
              destacar a sua marca e fazê-la brilhar!
            </p>
          </div>
        </div>
        <div className={styles.line_two_box}>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="850"
            className={styles.box_one}
          >
            <img src={images.hours} alt="Ilustração 24horas" />
            <h6>Presença global 24/7</h6>
            <p>
              Um site próprio assegura a <span>visibilidade da sua marca</span>.
              Esse é o caminho certo para garantir que sua marca seja
              reconhecida em todo o mundo.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="1700"
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
        <div className={styles.line_three_box}>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="850"
            className={styles.box_one}
          >
            <img src={images.pesquisa} alt="Ilustração de pesquisa" />
            <h6>Apareça no google</h6>
            <p>
              Otimize sua presença online e{' '}
              <span>seja encontrado facilmente</span> nos mecanismos de busca,
              como o Google.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="1700"
            className={styles.box_two}
          >
            <img src={images.aumentar} alt="Ilustração analiseMercado" />
            <h6>Amplificação do mercado</h6>
            <p>
              Aumente o alcance do seu negócio e{' '}
              <span>expanda sua presença no mercado</span> com uma estratégia
              online eficaz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
