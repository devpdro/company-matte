import tipo_site from 'presentation/assets/images/img/tipo-site.png'
import computador_portatil from 'presentation/assets/images/img/computador-portatil.png'
import realidade_aumentada from 'presentation/assets/images/img/realidade-aumentada.png'

import styles from 'presentation/components/layout/main-components/website-features-components/website-features.module.scss'

export function WebsiteFeatures() {
  return (
    <section className={`${styles.container} `}>
      <div className={styles.box_container}>
        <div className={`${styles.box_title}`}>
          <p>Como <span>funciona?</span> </p>
        </div>
        <div className={styles.box_information}>
          <div className={styles.box_one}>
            <img src={tipo_site} alt="Escolhendo seu tipo de site" />
            <h6 className={styles.title}>Escolha o tipo de site</h6>
            <p className={styles.explication}>
              Imagine um site que se adapta perfeitamente às suas necessidades e ao seu negócio. Nós ajudamos a escolher a melhor opção para você!
            </p>
          </div>
          <div className={styles.box_two}>
            <img src={computador_portatil} alt="Computador portatil" />
            <h6 className={styles.title}>Personalize seu site</h6>
            <p className={styles.explication}>
              Adicione recursos incríveis ao seu site - um blog dinâmico, depoimentos cativantes, uma área restrita exclusiva e muito mais! Faça seu site ser verdadeiramente único.
            </p>
          </div>
          <div className={styles.box_three}>
             <img src={realidade_aumentada} alt="Realidade aumentada" />
            <h6 className={styles.title}>Transforme sua visão em realidade</h6>
            <p className={styles.explication}>
              Com o contrato firmado e suas ideias em mãos, nossa equipe trabalhará incansavelmente para transformar sua visão em um site espetacular em questão de dias! Seu novo site está a caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
