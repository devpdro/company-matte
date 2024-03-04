import IMAGE from 'presentation/assets/images/images'
import styles from 'presentation/components/pages/blog/blog.module.scss'

export function Blog() {
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
            src={IMAGE.razoes}
            alt="Software personalizado"
          />
          <p className={styles.subtitle}>Negócios</p>
          <h1 className={styles.title}>
            <span className={styles.span}>
              5 razões para investir em um software personalizado para a sua
              empresa
            </span>
          </h1>
          <p className={styles.data}>12 de janeiro de 2024</p>
        </div>
        <div className={styles.article}>
          <img
            className={styles.img2}
            loading="lazy"
            src={IMAGE.sistema}
            alt="Sistema"
          />
          <p className={styles.subtitle}>Negócios</p>
          <h1 className={styles.title}>Como funciona um sistema web?</h1>
          <p className={styles.data}>9 de fevereiro de 2024</p>
        </div>
        <div className={styles.article}>
          <img
            className={styles.img3}
            loading="lazy"
            src={IMAGE.webDesign}
            alt="Web Design"
          />
          <p className={styles.subtitle}>Tecnologia</p>
          <h1 className={styles.title}>
            Como Criar um Site para Minha Empresa: O Guia Completo
          </h1>
          <p className={styles.data}>23 de fevereiro de 2024</p>
        </div>
      </div>
    </section>
  )
}
