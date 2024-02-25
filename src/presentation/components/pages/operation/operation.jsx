import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import images from 'presentation/assets/images/images'
import styles from 'presentation/components/layout/main-components/website-features-components/website-features.module.scss'

export function WebsiteFeatures() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      id="como-funciona?"
      className={`${styles.container} panel`}
      data-color="black"
    >
      <div className={styles.box_container}>
        <div
          data-aos="fade-left"
          data-aos-easing="ease"
          data-aos-duration="950"
          className={`${styles.box_title}`}
        >
          <p>
            Como <span>funciona?</span>{' '}
          </p>
        </div>
        <div className={styles.box_information}>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_one}
          >
            <img src={images.tipoSite} alt="Escolhendo seu tipo de site" />
            <h6 className={styles.title}>Escolha o tipo de site</h6>
            <span className={styles.explication}>
              Imagine um site que se adapta perfeitamente às suas necessidades e
              ao seu negócio. Nós ajudamos a escolher a melhor opção para você!
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_two}
          >
            <img src={images.computadorPortatil} alt="Computador portatil" />
            <h6 className={styles.title}>Personalize seu site</h6>
            <span className={styles.explication}>
              Adicione recursos incríveis ao seu site - um blog dinâmico,
              depoimentos cativantes, uma área restrita exclusiva e muito mais!
              Faça seu site ser verdadeiramente único.
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration="950"
            className={styles.box_three}
          >
            <img src={images.realidadeAumentada} alt="Realidade aumentada" />
            <h6 className={styles.title}>Transforme sua visão em realidade</h6>
            <span className={styles.explication}>
              Com a nossa ajuda e suas ideias em mãos, nossa equipe trabalhará
              para transformar sua visão em um site espetacular em questão de
              dias! Seu novo site está a caminho.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
