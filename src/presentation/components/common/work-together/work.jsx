import { Contents } from './components/contents'

import styles from 'presentation/components/common/work-together/work.module.scss'

export function WorkTogether() {
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
            <a
              href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btn} type="submit">
                <p className={styles.text_btn}>Construa um projeto conosco</p>
              </button>
            </a>
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
