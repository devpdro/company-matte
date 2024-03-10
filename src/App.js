import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Home } from 'presentation/pages/home'
import { About } from 'presentation/pages/about'
import { Operation } from 'presentation/pages/operation'
import { Blog } from 'presentation/pages/blog'
import BlogPost from 'presentation/components/pages/blog/blog-post'
import { Contact } from 'presentation/pages/contact'


export function App() {
  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.setAttribute('loading', 'lazy');
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Helmet>
                <meta name="facebook-domain-verification" content="7y4vnrbfajjqs0c26hfez4fanjikm3" />
                <meta name="robots" content="index, follow"/>
                <meta
                  name="description"
                  content="Transforme sua visão em realidade com a Matte. Somos uma empresa especializada em desenvolvimento de sites, pronta para tornar suas ideias em projetos funcionais e atrativos."
                />
                <meta name="keywords" content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, Matte, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Projeto web." />
                <title>Desenvolvimento de Site Personalizado | Matte - Transforme sua ideia em realidade</title>
              </Helmet>
              <Home />
            </div>
          }
        />
         <Route
          path="/quem-somos"
          element={
            <div>
              <Helmet>
                <meta name="facebook-domain-verification" content="7y4vnrbfajjqs0c26hfez4fanjikm3" />
                <meta name="robots" content="index, follow"/>
                <meta
                  name="description"
                  content="Uma empresa de desenvolvimento web é especializada em projetar, planejar e implementar soluções digitais para empresas de diversos setores. Nosso objetivo é fornecer sites de alta qualidade que sejam visualmente atraentes e funcionais."
                />
                <meta name="keywords" content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, Matte, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Projeto web." />
                <title>Quem somos | Matte - Especialistas em desenvolvimento web</title>
              </Helmet>
              <About />
            </div>
          }
        />
         <Route
          path="/como-funciona"
          element={
            <div>
              <Helmet>
                <meta name="facebook-domain-verification" content="7y4vnrbfajjqs0c26hfez4fanjikm3" />
                <meta name="robots" content="index, follow"/>
                <meta
                  name="description"
                  content="Desenvolvemos sites do zero! Conheça nossos serviços de Desenvolvimento Web."
                  />
                <meta
                  name="keywords"
                 content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, Matte, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Projeto web."
                  />
                  <title>Como funciona? | Matte - Entenda o processo conosco</title>
              </Helmet>
              <Operation />
            </div>
          }
        />
         <Route
          path="/blog"
          element={
            <div>
              <Helmet>
                <meta name="facebook-domain-verification" content="7y4vnrbfajjqs0c26hfez4fanjikm3" />
                <meta name="robots" content="index, follow"/>
                <meta
                  name="description"
                  content="Transforme sua visão em realidade com a Matte. Somos uma empresa especializada em desenvolvimento de sites, pronta para tornar suas ideias em projetos funcionais e atrativos."
                  />
                <meta
                  name="keywords"
                content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, Matte, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Projeto web."
                  />
                  <title>Entre em contato | Matte - Transforme sua ideia em realidade</title>
              </Helmet>
              <Blog />
            </div>
          }
        />
        <Route path="/blog/:routes" element={<BlogPost />} />
         <Route
          path="/contato"
          element={
            <div>
              <Helmet>
                <meta name="facebook-domain-verification" content="7y4vnrbfajjqs0c26hfez4fanjikm3" />
                <meta name="robots" content="index, follow"/>
                <meta
                  name="description"
                  content="Transforme sua visão em realidade com a Matte. Somos uma empresa especializada em desenvolvimento de sites, pronta para tornar suas ideias em projetos funcionais e atrativos."
                  />
                <meta
                  name="keywords"
                content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, Matte, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Projeto web."
                  />
                  <title>Entre em contato | Matte - Transforme sua ideia em realidade</title>
              </Helmet>
              <Contact />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </Router>
  )
}
