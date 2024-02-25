import styles from 'presentation/components/pages/services/components/contents.module.scss'

export function Contents({ numbering, title }) {
  return (
    <section className={styles.container}>
      <div className={styles.numbering_box}>
        <h1 className={styles.number}>{numbering}</h1>
      </div>
      <div className={styles.texts_box}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  )
}
