import styles from 'presentation/components/pages/about/about-us.module.scss'

export function AboutUs() {
  return (
    <section id='quem-somos' className={`${styles.container} panel`} data-color="white">
      <div className={styles.about_box}>
        <p className={styles.subtitle}>
          Quem Somos <hr className={styles.linha} />
        </p>
        <h1 className={styles.title}>
          Somos especialistas em resolver problemas. Integrantes de equipe com
          um único objetivo: entregar seu projeto dentro do prazo, do orçamento
          e conforme sua visão.
        </h1>
      </div>
      <div className={styles.explication}>
        <p className={styles.paragraph}>
          Uma empresa de desenvolvimento web é especializada em projetar,
          planejar e implementar soluções digitais para empresas de diversos
          setores. Nosso objetivo é fornecer sites de alta qualidade que sejam
          visualmente atraentes e funcionais.
        </p>
        <p className={styles.paragraph}>
          Com mais de 2 anos de experiência na área, nossa empresa tem se
          destacado pela excelência na entrega de projetos e pela habilidade de
          compreender as necessidades específicas de cada cliente. Durante esse
          tempo, desenvolvemos um profundo conhecimento em diversas tecnologias
          e metodologias de desenvolvimento web, permitindo-nos oferecer
          soluções personalizadas e eficazes para nossos clientes.
        </p>
      </div>
    </section>
  )
}
