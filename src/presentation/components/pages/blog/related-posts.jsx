import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'presentation/components/pages/blog/related-posts.module.scss'

const RelatedPosts = ({ posts, currentPostId }) => {
  const getRelatedPosts = () => {
    const filteredPosts = posts.filter((post) => post.id !== currentPostId)
    const randomIndexes = getRandomIndexes(filteredPosts.length)
    return randomIndexes.map((index) => filteredPosts[index])
  }

  const getRandomIndexes = (length) => {
    const indexes = []
    while (indexes.length < 3 && indexes.length < length) {
      const randomIndex = Math.floor(Math.random() * length)
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex)
      }
    }
    return indexes
  }
  const relatedPosts = getRelatedPosts()

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Postagens recomendadas:</h2>
      <div className={styles.content}>
        {relatedPosts.map((relatedPost) => (
          <Link
            to={`/blog/${relatedPost.id}`}
            className={styles.article_box}
            key={relatedPost.id}
          >
            <img
              className={styles.img}
              src={relatedPost.image}
              alt={relatedPost.title}
            />
            <p className={styles.subtitle}>{relatedPost.subtitle}</p>
            <h1 className={styles.title}>{relatedPost.title}</h1>
            <p className={styles.date_paragraph}>{relatedPost.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
