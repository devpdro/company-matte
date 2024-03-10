import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/operation/how-works.module.scss'

export function HowWorks() {
  return (
    <section
      id="como-funciona"
      className={`${styles.container} panel`}
      data-color="white"
    >
      <div className={styles.box_container}>
        <div className={`${styles.box_title}`}>
          <p className={styles.subtitle}>
            Como fazemos <hr className={styles.linha} />
          </p>
          <h1 className={styles.title}>Como funciona?</h1>
        </div>
        <div className={styles.box_information}>
          <div className={styles.box_one}>
            <ICON.BsCardList className={styles.icon} />
            <h2 className={styles.title}>Escolha o tipo de site</h2>
            <p className={styles.explication}>
              Imagine um site que se adapta perfeitamente às suas necessidades e
              ao seu negócio. Nós ajudamos a escolher a melhor opção para você!
            </p>
          </div>
          <div className={styles.box_two}>
            <ICON.BsBrush className={styles.icon} />
            <h6 className={styles.title}>Personalize seu site</h6>
            <span className={styles.explication}>
              Adicione recursos incríveis ao seu site - um blog dinâmico,
              depoimentos cativantes, uma área restrita exclusiva e muito mais!
              Faça seu site ser verdadeiramente único.
            </span>
          </div>
          <div className={styles.box_three}>
            <ICON.BsEye className={styles.icon} />
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
