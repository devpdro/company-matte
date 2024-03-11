import { IconWithTitle } from 'presentation/components/pages/technologies-used/components/icon'

import styles from 'presentation/components/pages/technologies-used/technologies.module.scss'

export function Technologies() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_container}>
        <div className={styles.texts_box}>
          <p className={styles.subtitle}>
            Tecnologias
            <hr className={styles.linha} />
          </p>
          <h1 className={styles.title}>
            Principais tecnologias utilizadas no setor.
          </h1>
        </div>
        <div className={styles.technologies_box}>
          <IconWithTitle
            tooltip="Criação e compartilhamento de protótipos de sites."
            title="Figma"
            iconName="FaFigma"
          />
          <IconWithTitle
            tooltip="Desenvolvimento de interfaces dinâmicas e responsivas."
            title="React"
            iconName="FaReact"
          />
          <IconWithTitle
            tooltip="Desenvolvimento de aplicativos móveis com React."
            title="React Native"
            iconName="FaReact"
          />
          <IconWithTitle
            tooltip="Criação de servidores web escaláveis."
            title="Next.js"
            iconName="TbBrandNextjs"
          />
          <IconWithTitle
            tooltip="Plataforma para desenvolvimento de servidores web escaláveis."
            title="Node.js"
            iconName="FaNodeJs"
          />
          <IconWithTitle
            title="HTML5 e CSS3"
            iconName="AiOutlineHtml5"
            tooltip="Tecnologias essenciais para a construção web."
          />
          <IconWithTitle
            title="PostgreSQL"
            iconName="SiPostgresql"
            tooltip="Banco de dados poderoso e versátil."
          />
          <IconWithTitle
            title="WordPress"
            iconName="FaWordpressSimple"
            tooltip="Plataforma popular para criar sites e blogs."
          />
          <IconWithTitle
            title="Google Cloud"
            iconName="SiGooglecloud"
            tooltip="Infraestrutura escalável para serviços web."
          />
          <IconWithTitle
            title="Amazon AWS"
            iconName="FaAws"
            tooltip="Plataforma robusta para hospedagem e computação em nuvem."
          />
        </div>
      </div>
    </section>
  )
}
