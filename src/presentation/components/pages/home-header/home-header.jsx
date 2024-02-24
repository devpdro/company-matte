import styles from 'presentation/components/pages/home-header/home-header.module.scss'

export function Header() {
  return (
    <header className={`${styles.container} panel`} data-color="white">
      <div className={styles.header}>
        <div className={`${styles.box_title}`}>
          <h1 className={styles.title}>
            Transforme ideias <br /> em sites incríveis!
          </h1>
          <button className={styles.btn}><p className={styles.text_btn}>Como funciona?</p></button>
        </div>
        <div className={`${styles.box_overlay}`}>
          <p className={styles.text_overlay}>
            Vamos trabalhar <br /> juntos <hr className={styles.linha} /> <br />
            <span>Fale Conosco</span>
          </p>
        </div>
      </div>
    </header>
  )
}
