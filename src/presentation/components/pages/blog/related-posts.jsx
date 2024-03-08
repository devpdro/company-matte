import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'presentation/components/pages/blog/related-posts.module.scss'

const RelatedPosts = ({ posts, currentPostId }) => {
  // Função para selecionar aleatoriamente outros posts relacionados
  const getRelatedPosts = () => {
    const filteredPosts = posts.filter((post) => post.id !== currentPostId)
    const randomIndexes = getRandomIndexes(filteredPosts.length)
    return randomIndexes.map((index) => filteredPosts[index])
  }

  // Função para gerar números aleatórios exclusivos
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
      <h2 className={styles.title}>Posts Relacionados</h2>
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
            <p className={styles.data}>{relatedPost.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
