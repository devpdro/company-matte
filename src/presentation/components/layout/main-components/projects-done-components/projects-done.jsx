import { FaExternalLinkAlt } from 'react-icons/fa'

import imageProject1 from 'presentation/assets/images/img/project1.png'
import imageProject2 from 'presentation/assets/images/img/project2.png'
import imageProject3 from 'presentation/assets/images/img/project3.png'
import imageProject4 from 'presentation/assets/images/img/project4.png'

import styles from 'presentation/components/layout/main-components/projects-done-components/projects-done.module.scss'
export function ProjectsDone() {
  return (
    <section className={styles.container}>
      <p>
        Projetos <span>Destaques</span>
      </p>
      <div className={styles.box_images_one}>
        <div className={styles.box_one}>
          <img src={imageProject1} alt="" />
          <button className={styles.visit_button}>
            <a
              href="https://tecmasters.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.box_icon}>
                <FaExternalLinkAlt className={styles.icon} />
                Visite o site
              </div>
            </a>
          </button>
        </div>
        <div className={styles.box_two}>
          <img src={imageProject2} alt="" />
          <button className={styles.visit_button}>
            <a href="https://evowatt.com.br/" target="_blank" rel="noreferrer">
              <div className={styles.box_icon}>
                <FaExternalLinkAlt className={styles.icon} />
                Visite o site
              </div>
            </a>
          </button>
        </div>
      </div>
      <div className={styles.box_images_two}>
        <div className={styles.box_one}>
          <img src={imageProject3} alt="" />
          <button className={styles.visit_button}>
            <a href="https://asksuite.com/br/" target="_blank" rel="noreferrer">
              <div className={styles.box_icon}>
                <FaExternalLinkAlt className={styles.icon} />
                Visite o site
              </div>
            </a>
          </button>
        </div>
        <div className={styles.box_two}>
          <img src={imageProject4} alt="" />
          <button className={styles.visit_button}>
            <a href="https://agapro.com.br/" target="_blank" rel="noreferrer">
              <div className={styles.box_icon}>
                <FaExternalLinkAlt className={styles.icon} />
                Visite o site
              </div>
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}
