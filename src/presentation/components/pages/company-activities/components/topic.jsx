import styles from 'presentation/components/pages/company-activities/components/topic.module.scss'

export function Topic({ numbering, title, paragraph}) {
  return (
    <section className={styles.container}>
      <div className={styles.numbering_box}>
        <h1 className={styles.number}>{numbering}</h1>
      </div>
      <div className={styles.texts_box}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </section>
  )
}
