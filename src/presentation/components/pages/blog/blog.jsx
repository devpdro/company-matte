import styles from 'presentation/components/pages/blog/blog.module.scss'
import Image from 'presentation/assets/images/img/grupo-de-pessoas-escritorio.jpg'

export function Blog() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.texts}>
        <p className={styles.subtitle}>
          News <hr className={styles.linha} />
        </p>
        <h1 className={styles.title}>Matérias</h1>
        <p className={styles.paragraph}>
          Nosso pessoal se dedica a encontrar soluções para cada desafio. Esse
          espírito rende ótimas histórias.
        </p>
      </div>
      <div
        className={styles.news}
        style={{ padding: '0rem 0rem', margin: '0 3rem 0rem 2rem' }}
      >
        <img src={Image} alt="" />
      </div>
      <div
        className={styles.news}
        style={{ padding: '0rem 0rem', margin: '0 1.5rem 0rem 3rem' }}
      >
        <img src={Image} alt="" />
      </div>
    </section>
  )
}
