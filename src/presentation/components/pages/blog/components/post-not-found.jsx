import { Link } from 'react-router-dom'

import styles from 'presentation/components/pages/blog/components/post-not-found.module.scss'

export function PostNotFound() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <h1 className={styles.title}>Ops! Página não encontrada.</h1>
      <p className={styles.paragraph}>
        Se não sabe para onde ir, qualquer caminho serve!
      </p>
      <p className={styles.paragraph}>
        - Gato Cheshire, Alice no País das Maravilhas.
      </p>
      <Link to="/blog">
        <button className={styles.btn} type="submit">
          <p className={styles.text_btn}>Voltar para o blog</p>
        </button>
      </Link>
    </section>
  )
}
