import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'presentation/components/pages/blog/related-posts.module.scss'

const RelatedPosts = ({ posts, currentPostRoute }) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const getRelatedPosts = () => {
    const filteredPosts = posts.filter(
      (post) => post.routes !== currentPostRoute
    )
    const shuffledPosts = shuffleArray(filteredPosts)
    return shuffledPosts.slice(0, 3)
  }

  const relatedPosts = getRelatedPosts()

  return (
    <div className={`${styles.container} panel`} data-color="white">
      <h2 className={styles.title}>Postagens recomendadas:</h2>
      <div className={styles.content}>
        {relatedPosts.map((currentPostRoute) => (
          <Link
            to={`/blog/${currentPostRoute.routes}`}
            className={styles.article_box}
            key={currentPostRoute.id}
          >
            <img
              className={styles.img}
              src={currentPostRoute.image}
              alt={currentPostRoute.title}
            />
            <p className={styles.subtitle}>{currentPostRoute.subtitle}</p>
            <h1 className={styles.title}>{currentPostRoute.title}</h1>
            <p className={styles.date_paragraph}>{currentPostRoute.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
