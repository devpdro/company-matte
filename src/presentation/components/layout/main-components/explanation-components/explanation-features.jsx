import Notebook from 'presentation/assets/images/img/notebook.png'

import styles from 'presentation/components/layout/main-components/explanation-components//explanation-features.module.scss'
export function ExplanationFeatures() {
  return (
    <section id="beneficios" className={`${styles.container}`}>
      <div className={styles.box_title}>
        <div className={styles.box_text}>
          <h2 className={styles.title}>Vantagens</h2>
          <h3 className={styles.subtitle}>
            Como um site pode ajudar o seu negocio?
          </h3>
        </div>
        <h6 className={styles.lead}>Leia mais</h6>
      </div>
      <div className={styles.container_explanation}>
        <div className={styles.box_explanation}>
          <div className={styles.box_have_customers}>
            <img src={Notebook} alt="Notebook" />
            <p className={styles.subtitle}>SITE</p>
            <p className={styles.text}>
              <span>Destaque-se no seu mercado-alvo!</span> Ter um site é a
              pedra angular para alcançar essa conquista. É a ferramenta que
              diferencia você no mercado, destacando suas qualidades e serviços.
            </p>
          </div>
          <div className={styles.achieve_success}>
            <img src={Notebook} alt="Notebook" />
            <p className={styles.subtitle}>SITE</p>
            <p className={styles.text}>
              <span>Alcance o sucesso global!</span> Um site próprio assegura a
              visibilidade global da sua marca, colocando-a no mapa.
            </p>
          </div>
          <div className={styles.brand_visibility}>
            <img src={Notebook} alt="Notebook" />
            <p className={styles.subtitle}>SITE</p>
            <p className={styles.text}>
              <span>Maximize a visibilidade da sua marca!</span> Conquiste o
              publico online com um site poderoso. Mais visibilidade significa
              mais impacto. Vamos fazer sua marca brilhar!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
