import { ICON } from 'presentation/assets/icons/icon'
import styles from 'presentation/components/layout/main-components/explanation-components//explanation-features.module.scss'
export function ExplanationFeatures() {
  return (
    <section id="beneficios" className={`${styles.container}`}>
      <div className={styles.box_title}>
        <h1 className={styles.title}>
          Um site é a chave para impulsionar o seu negócio
        </h1>
      </div>
      <div className={styles.container_explanation}>
        <div className={styles.box_explanation}>
          <div className={styles.box_icon}>
            <ICON.FaUserPlus className={styles.icon} />
            <h2>Tenha mais clientes</h2>
          </div>
          <div className={styles.box_text}>
            <h6 className={styles.title}>
              Um site desempenha um papel fundamental no impulsionamento do seu
              negócio. Iremos ajudá-lo a conquistar clientes de forma eficaz
            </h6>
            <p className={styles.description}>
              Faremos um processo de descoberta que visa compreender as
              necessidades do seu negócio e do seu público-alvo. Isso inclui uma
              pesquisa de mercado abrangente, análise dos concorrentes e a
              consolidação de dados valiosos.
            </p>
            <div className={styles.box_tags}>
              <span>Site profissional e atrativo para o seu negócio</span>

              <span>Suporte técnico e manutenção constante</span>
              <span>
                Garantia da melhor a visibilidade nos motores de busca
              </span>
              <span>Criação de conteúdo relevante e envolvente</span>
              <span>Design e desenvolvimento de sites responsivos e atrativos.</span>
              <span>Suporte técnico contínuo e atualizações de site</span>
              <span>
                Otimização do seu site para melhorar a visibilidade nos motores
                de busca
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
