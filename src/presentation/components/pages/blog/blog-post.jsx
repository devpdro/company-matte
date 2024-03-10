import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { posts } from 'main/providers/data/blogPostData'

import { Navbar } from 'presentation/components/common/navbar'
import { NewsLetter } from '../newsletter/newsletter'
import RelatedPosts from './related-posts'
import { Footer } from 'presentation/components/common/footer'

import styles from 'presentation/components/pages/blog/blog-post.module.scss'

const removeAccents = (str) => {
  if (typeof str !== 'string' || str === '') {
    return ''
  }

  return str
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

const BlogPost = () => {
  const { routes } = useParams()

  const post = posts.find(
    (post) => removeAccents(post.routes) === removeAccents(routes)
  )

  if (!post) {
    return <div>Post não encontrado.</div>
  }

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },
    { title: post.title, url: `/blog/${routes}` }
  ]

  const generatePath = () => {
    return (
      <div className={`panel`} data-color="white">
        {sections.map((section, index) => (
          <span key={index}>
            {index > 0 && ' > '}
            <Link className={styles.link} to={section.url}>
              {section.title}
            </Link>
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      style={{ backgroundColor: '#F9F7F1', color: '#1c1c1c' }}
      className={`panel`}
      data-color="white"
    >
      <Navbar className={`panel`} data-color="white" />
      <div className={styles.routes}>{generatePath()}</div>
      <div className={styles.content_container}>
        <div className={styles.texts_box}>
          <p className={styles.subtitle}>{post.subtitle}</p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>{post.date}</p>
        </div>
        <div className={styles.img_box}>
          <img className={styles.img} src={post.image} alt="Imagem do artigo" />
        </div>
      </div>
      <div className={styles.texts_container}>
        <p className={styles.paragraph_post}>{post.paragraphOne}</p>
        <h1 className={styles.title_post}>{post.titleContentOne}</h1>
        <p className={styles.paragraph_post}>{post.paragraphTwo}</p>
        <h1 className={styles.title_post}>{post.titleContentTwo}</h1>
        <ol className={styles.list_box}>
          {post.titleListOne && (
            <li>
              <span>{post.titleListOne}</span>
              {post.listOne}
            </li>
          )}
          {post.titleListTwo && (
            <li>
              <span>{post.titleListTwo}</span>
              {post.listTwo}
            </li>
          )}
          {post.titleListThree && (
            <li>
              <span>{post.titleListThree}</span>
              {post.listThree}
            </li>
          )}
          {post.titleListFour && (
            <li>
              <span>{post.titleListFour}</span>
              {post.listFour}
            </li>
          )}
          {post.titleListFive && (
            <li>
              <span>{post.titleListFive}</span>
              {post.listFive}
            </li>
          )}
        </ol>
        {post.titleListSix && (
          <h1 className={styles.title_post}>{post.titleSecond}</h1>
        )}
        <ol className={styles.list_box}>
          {post.titleListSeven && (
            <li>
              <span>{post.titleListSix}</span>
              {post.listSix}
            </li>
          )}
          {post.titleListSeven && (
            <li>
              <span>{post.titleListSeven}</span>
              {post.listSeven}
            </li>
          )}
          {post.titleListSeven && (
            <li>
              <span>{post.titleListEight}</span>
              {post.listEight}
            </li>
          )}
        </ol>
        <h1 className={styles.title_post}>{post.titleConclusion}</h1>
        <p className={styles.paragraph_post}>{post.paragraphThree}</p>
        <p className={styles.paragraph_post}>{post.paragraphFour}</p>
      </div>
      <RelatedPosts
        className="panel"
        data-color="white"
        posts={posts}
        currentPostId={routes}
      />
      <NewsLetter className="panel" data-color="white" />
      <Footer />
    </div>
  )
}

export default BlogPost
