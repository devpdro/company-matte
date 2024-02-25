import Image from 'presentation/assets/images/img/grupo-de-pessoas-escritorio.jpg'
import styles from 'presentation/components/pages/blog/blog.module.scss'

export function Blog() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.texts}>
        <p className={styles.subtitle}>
          Blog <hr className={styles.linha} />
        </p>
        <h1 className={styles.title}>Matérias</h1>
        <p className={styles.paragraph}>
          Nosso pessoal se dedica a encontrar soluções para cada desafio. Esse
          espírito rende ótimas histórias.
        </p>
        <button className={styles.btn} type="submit">
          Leia Mais
        </button>
      </div>
      <div className={styles.news_box}>
        <div
          className={styles.news}
          style={{ padding: '0rem 0rem', margin: '0 3rem 0rem 2rem' }}
        >
          <img src={Image} alt="" />
          <p className={styles.subtitle}>Blog, Engenharia, Tecnologia</p>
          <h1 className={styles.title}>
            Automatize o banco de dados global do Amazon Aurora usando o
            CloudFormation
          </h1>
        </div>
        <div
          className={styles.news}
          style={{ padding: '0rem 0rem', margin: '0 1.5rem 0rem 3rem' }}
        >
          <img src={Image} alt="" />
          <p className={styles.subtitle}>Blog, Engenharia, Tecnologia</p>
          <h1 className={styles.title}>
            Automatize o banco de dados global do Amazon Aurora usando o
            CloudFormation
          </h1>
        </div>
      </div>
    </section>
  )
}
