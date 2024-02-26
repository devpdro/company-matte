import React from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Home } from 'presentation/pages/home'
import { Operation } from 'presentation/pages/operation'

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Helmet>
                <meta
                  name="description"
                  content="A VRWEB oferece serviços de criação de sites profissionais e design responsivo. Impulsione sua presença online com nossas soluções de desenvolvimento web."
                />
                <meta name="keywords" content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, VRWEB, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Agência digital, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Estratégias de marketing online, Gestão de conteúdo, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Consultoria web, Projeto web, Desenvolvimento de aplicativos web, Soluções de comércio eletrônico, Suporte técnico." />
                <title>VRWEB - Criação e Desenvolvimento de Sites</title>
              </Helmet>
              <Home />
            </div>
          }
        />
         <Route
          path="/como-funciona"
          element={
            <div>
              <Helmet>
                <meta
                  name="description"
                  content="Descubra como a VRWEB transforma suas ideias em realidade. Oferecemos serviços personalizados de criação de sites profissionais e design responsivo. Desde a concepção até a entrega final, nossa equipe trabalha em estreita colaboração com você para garantir que sua visão seja realizada."
                  />
                <meta
                  name="keywords"
                  content="Criação de sites, Desenvolvimento de sites, Web design, Empresa de sites, Web development, VRWEB, Criação de websites profissionais, Marketing digital, SEO, E-commerce, Landing pages, Responsivo, Agência digital, Soluções web, Site personalizado, Design responsivo, Otimização de sites, Serviços web, Estratégias de marketing online, Gestão de conteúdo, Experiência do usuário, Tecnologia web, Design intuitivo, Performance do site, Integração de mídia social, Consultoria web, Projeto web, Desenvolvimento de aplicativos web, Soluções de comércio eletrônico, Suporte técnico.
"
                  />
                  <title>Como funciona? - VRWEB | Criação e Desenvolvimento de Sites</title>
              </Helmet>
              <Operation />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
