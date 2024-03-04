import { Benefits } from 'presentation/components/pages/company-culture/components/benefits'

import IMAGE from 'presentation/assets/images/images'
import styles from 'presentation/components/pages/company-culture/culture.module.scss'

export function ChooseBenefits() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.image_box}>
        <img
          loading="lazy"
          className={styles.people_company}
          src={IMAGE.empresa}
          alt="Empresa"
        />
        <img
          loading="lazy"
          className={styles.company}
          src={IMAGE.pessoasEmpresa}
          alt="Empresa"
        />
      </div>
      <div className={styles.activities_box}>
        <div className={styles.texts}>
          <p className={styles.subtitle}>
            Nosso jeito
            <hr style={{ marginLeft: '0.5rem' }} className={styles.linha} />
          </p>
          <h1 className={styles.title}>
            Tudo o que você precisa em um só lugar
          </h1>
        </div>
        <div className={styles.topics_box}>
          <Benefits
            numbering="01"
            title="Melhor preço de mercado"
            paragraph="Na Matte, estamos empenhados em criar o seu site profissional, projetado não apenas para atender às necessidades atuais, mas também para preservar os recursos futuros. Oferecemos os melhores preços do mercado, além de um atendimento exclusivo, porque a realização dos seus objetivos é nossa prioridade máxima."
          />
          <button className={styles.btn}>
            <p className={styles.text_btn}>Como funciona?</p>
          </button>
        </div>
      </div>
    </section>
  )
}
