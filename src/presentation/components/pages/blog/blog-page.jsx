import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { posts } from 'main/providers/data/blogPageData'
import { NavbarBlog } from 'presentation/components/pages/blog/components/navbar-blog'

import page from 'presentation/components/pages/blog/blog-page.module.scss'
import post from 'presentation/components/pages/blog/blog-page-post.module.scss'

// Função auxiliar para remover acentos de uma string
const removeAccents = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const themes = [...new Set(posts.map((post) => post.subtitle))]
  const [visiblePosts, setVisiblePosts] = useState(10) // Número inicial de posts visíveis

  const filteredPosts = posts.filter(
    (post) =>
      removeAccents(post.title).includes(removeAccents(searchQuery)) ||
      removeAccents(post.subtitle).includes(removeAccents(searchQuery))
  )

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10) // Carregar mais 10 posts
  }

  return (
    <section className={`${page.container} panel`} data-color="white">
      <NavbarBlog
        className={page.navbar_blog}
        themes={themes}
        onSearch={handleSearch}
      />
      <div className={`${page.results_container}`}>
        <h1 className={page.title}>
          {searchQuery ? 'Resultados' : 'Conheça nossos blogs'}
        </h1>
        {filteredPosts.length > 0 ? (
          <>
            <div className={page.posts_container}>
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <BlogPost
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  subtitle={post.subtitle}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
            {filteredPosts.length > visiblePosts && (
              <div className={page.loadMoreButton}>
                <button onClick={loadMorePosts}>Leia mais</button>
              </div>
            )}
          </>
        ) : (
          <p className={page.noResults}>
            Nenhum conteúdo relacionado encontrado. Procure outras palavras.
          </p>
        )}
      </div>
    </section>
  )
}

const BlogPost = ({ id, title, subtitle, date, image }) => {
  return (
    <div className={`${post.container} panel`} data-color="white">
      <Link to={`/blog/${id}`} className={post.article_container}>
        <div className={post.article}>
          <img
            loading="lazy"
            className={post.img}
            src={image}
            alt="Imagem do post"
          />
          <p className={post.subtitle}>{subtitle}</p>
          <h1 className={post.title}>
            <span className={post.span}>{title}</span>
          </h1>
          <p className={post.date}>{date}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogPage
