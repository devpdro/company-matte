import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RelatedPosts from './related-posts'

const BlogPost = () => {
  const { id } = useParams()
  const postId = parseInt(id)

  // Conteúdo dos posts do blog
  const posts = [
    {
      id: 0,
      title: 'Título do Primeiro Post',
      content: 'Conteúdo do Primeiro Post...'
    },
    {
      id: 1,
      title: 'Título do Segundo Post',
      content: 'Conteúdo do Segundo Post...'
    },
    {
      id: 2,
      title: 'Título do terceiro Post',
      content: 'Conteúdo do terceiro Post...'
    }
    // Adicione mais posts conforme necessário
  ]

  // Busque o post com o ID fornecido
  const post = posts.find((post) => post.id === postId)

  // Verifique se o post foi encontrado
  if (!post) {
    return <div>Post não encontrado.</div>
  }

  // Lista de seções do caminho
  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },
    { title: post.title, url: `/blog/${postId}` }
  ]

  // Função para gerar o caminho dinâmico
  const generatePath = () => {
    return sections.map((section, index) => (
      <span key={index}>
        {index > 0 && ' > '}
        <Link to={section.url}>{section.title}</Link>
      </span>
    ))
  }

  return (
    <div>
      <div style={{ marginTop: '10rem' }}>{generatePath()}</div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <RelatedPosts posts={posts} currentPostId={postId} />
      </div>
    </div>
  )
}

export default BlogPost
