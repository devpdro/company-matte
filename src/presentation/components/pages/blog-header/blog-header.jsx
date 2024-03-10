import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import IMAGE from 'presentation/assets/images/images'
import styles from 'presentation/components/pages/blog-header/blog-header.module.scss'

export function BlogHeader() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
          <Link className={styles.link} to="/blog">
            <p className={styles.read_more}>Leia mais</p>
          </Link>
        </div>
      </div>
      <div className={styles.news}>
        <Link
          className={styles.link}
          to="/blog/o-papel-fundamental-de-um-arquiteto-de-software-em-seu-projeto-de-desenvolvimento"
        >
          <div className={styles.article}>
            <img
              loading="lazy"
              className={styles.img1}
              src={IMAGE.arquiteto}
              alt="Software personalizado"
            />
            <p className={styles.subtitle}>Tecnologia</p>
            <h1 className={styles.title}>
              <span className={styles.span}>
                O papel fundamental de um Arquiteto de Software em seu projeto
                de desenvolvimento
              </span>
            </h1>
            <p className={styles.data}>11 de março de 2024</p>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/blog/guia-de-marketing-digital-para-restaurantes"
        >
          <div className={styles.article}>
            <img
              className={styles.img2}
              loading="lazy"
              src={IMAGE.marketing}
              alt="Sistema"
            />
            <p className={styles.subtitle}>Marketing</p>
            <h1 className={styles.title}>
              Como fazer seu site engajar os leads?
            </h1>
            <p className={styles.data}>21 de julho de 2023</p>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/blog/site-institucional-o-que-e-e-qual-a-importancia"
        >
          <div className={styles.article}>
            <img
              className={styles.img3}
              loading="lazy"
              src={IMAGE.siteInstitucional}
              alt="Web Design"
            />
            <p className={styles.subtitle}>Negócios</p>
            <h1 className={styles.title}>
              Site Institucional: O Que é e Qual a Importância?
            </h1>
            <p className={styles.data}>21 de janeiro de 2024</p>
          </div>
        </Link>
      </div>
    </section>
  )
}
