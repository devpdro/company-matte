import styles from 'presentation/components/pages/company-culture/components/benefits.module.scss'

export function Benefits({ paragraph }) {
  return (
    <section className={styles.container}>
      <div className={styles.texts_box}>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </section>
  )
}
