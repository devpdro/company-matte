import styles from 'presentation/components/pages/prices/prices.module.scss'

export function Prices() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <p className={styles.subtitle}>Preços dos serviços</p>
      <h1 className={styles.title}>Preços</h1>
      <div className={styles.plans_box}>
        <div className={styles.basic}>Box</div>
        <div className={styles.custom}>Box</div>
      </div>
    </section>
  )
}
