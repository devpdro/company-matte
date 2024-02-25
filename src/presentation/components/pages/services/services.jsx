import { Contents } from './components/contents'

import styles from 'presentation/components/pages/services/services.module.scss'

export function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <div className={styles.texts_box}>
          <div className={styles.texts}>
            <p className={styles.subtitle}>
              Construímos juntos
              <hr style={{ marginLeft: '0.5rem' }} className={styles.linha} />
            </p>
            <h1 className={styles.title}>
              Pronto para <br /> trabalhar juntos?
            </h1>
            <button className={styles.btn} type="submit">
              Construa um projeto conosco
            </button>
          </div>
        </div>
        <div className={styles.contents}>
          <Contents numbering="01" title="Representação Visual" />
          <Contents numbering="02" title="Segurança" />
          <Contents numbering="03" title="Tecnlogia de Ponta" />
          <Contents numbering="04" title="Custo x Benefício" />
        </div>
      </div>
    </section>
  )
}
