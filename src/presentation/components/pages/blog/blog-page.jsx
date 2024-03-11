import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { posts } from 'main/providers/data/blogPageData'
import { NavbarBlog } from 'presentation/components/pages/blog/components/navbar-blog'

import page from 'presentation/components/pages/blog/blog-page.module.scss'
import post from 'presentation/components/pages/blog/blog-page-post.module.scss'

const removeAccents = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const themes = [...new Set(posts.map((post) => post.subtitle))]
  const [visiblePosts, setVisiblePosts] = useState(7)
  const filteredPosts = posts.filter(
    (post) =>
      removeAccents(post.title).includes(removeAccents(searchQuery)) ||
      removeAccents(post.subtitle).includes(removeAccents(searchQuery))
  )

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6)
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
          {searchQuery ? 'Resultados' : 'Mais recentes'}
        </h1>
        {filteredPosts.length > 0 ? (
          <>
            <div className={page.posts_container}>
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <BlogPost
                  className={`panel`}
                  data-color="white"
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
                <button className={page.btn_load} onClick={loadMorePosts}>
                  <p className={page.text_btn}>Ler mais artigos</p>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={page.noResults_container}>
            <p className={page.noResults}>Tente usar outras palavras...</p>
          </div>
        )}
      </div>
    </section>
  )
}

const BlogPost = ({ title, subtitle, date, image }) => {
  return (
    <div className={`${post.container} panel`} data-color="white">
      <Link
        to={`/blog/${removeAccents(title)}`}
        className={post.article_container}
      >
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
          <p className={post.data}>{date}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogPage
