import styles from 'presentation/components/pages/about-header/about-header.module.scss'

export function AboutHeader() {
  return (
    <header className={`${styles.container} panel`} data-color="white">
      <div className={styles.header}>
        <div className={`${styles.box_title}`}>
          <h1 className={styles.title}>
            Desenvolvemos <span>soluções digitais</span> sob medida para o seu negócio.
          </h1>
          <p className={styles.paragraph}>
            Somos especialistas em engenharia de software e design, capacitados
            para atender às suas necessidades exclusivas, seja você uma grande
            corporação, uma startup ou um profissional.
          </p>
        </div>
      </div>
    </header>
  )
}
