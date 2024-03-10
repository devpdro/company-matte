import IMAGE from 'presentation/assets/images/images'
import styles from 'presentation/components/pages/blog-header/blog-header.module.scss'

export function BlogHeader() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.texts_container}>
        <div className={styles.texts_box}>
          <p className={styles.subtitle}>
            Blog <hr className={styles.linha} />
          </p>
          <h1 className={styles.title}>Matérias</h1>
        </div>
        <div className={styles.read_box}>
          <p className={styles.read_more}>Leia mais</p>
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.article}>
          <img
            loading="lazy"
            className={styles.img1}
            src={IMAGE.arquiteto}
            alt="Software personalizado"
          />
          <p className={styles.subtitle}>Tecnologia</p>
          <h1 className={styles.title}>
            <span className={styles.span}>
              O papel fundamental de um Arquiteto de Software em seu projeto de
              desenvolvimento
            </span>
          </h1>
          <p className={styles.data}>11 de março de 2024</p>
        </div>
        <div className={styles.article}>
          <img
            className={styles.img2}
            loading="lazy"
            src={IMAGE.marketing}
            alt="Sistema"
          />
          <p className={styles.subtitle}>Marketing</p>
          <h1 className={styles.title}>
            Como fazer seu site engajar os leads?
          </h1>
          <p className={styles.data}>21 de julho de 2023</p>
        </div>
        <div className={styles.article}>
          <img
            className={styles.img3}
            loading="lazy"
            src={IMAGE.siteInstitucional}
            alt="Web Design"
          />
          <p className={styles.subtitle}>Negócios</p>
          <h1 className={styles.title}>
            Site Institucional: O Que é e Qual a Importância?
          </h1>
          <p className={styles.data}>21 de janeiro de 2024</p>
        </div>
      </div>
    </section>
  )
}
