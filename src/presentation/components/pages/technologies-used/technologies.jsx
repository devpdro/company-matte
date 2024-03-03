import { IconWithTitle } from 'presentation/components/pages/technologies-used/components/icon'

import styles from 'presentation/components/pages/technologies-used/technologies.module.scss'

export function Technologies() {
  return (
    <section className={`${styles.container}`}>
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
          <IconWithTitle title="Figma" iconName="FaFigma" />
          <IconWithTitle title="React" iconName="FaReact" />
          <IconWithTitle title="React Native" iconName="FaReact" />
          <IconWithTitle title="Nextjs" iconName="TbBrandNextjs" />
          <IconWithTitle title="Nodejs" iconName="FaNodeJs" />
          <IconWithTitle title="MySQL" iconName="GrMysql" />
          <IconWithTitle title="HTML5 e CSS3" iconName="AiOutlineHtml5" />
          <IconWithTitle title="PostgreSQL" iconName="SiPostgresql" />
          <IconWithTitle title="WordPress" iconName="FaWordpressSimple" />
          <IconWithTitle title="Google Cloud" iconName="SiGooglecloud" />
          <IconWithTitle title="Amazon AWS" iconName="FaAws" />
        </div>
      </div>
    </section>
  )
}
