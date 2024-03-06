import React from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      <h2>Posts Relacionados</h2>
      <ul>
        {relatedPosts.map((relatedPost) => (
          <li key={relatedPost.id}>
            <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedPosts
