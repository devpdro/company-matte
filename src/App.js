import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from 'presentation/pages/home';
import { Contact } from 'presentation/pages/contact';

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Helmet>
                <meta name="description" content="A VRWEB oferece serviços de criação de sites profissionais e design responsivo. Impulsione sua presença online com nossas soluções de desenvolvimento web." />
                <meta name="keywords" content="criação de sites, web design" />
                <title>VRWEB | Criação e Desenvolvimento de Sites</title>
              </Helmet>
              <Home />
            </div>
          }
        />
        <Route
          path="/contato"
          element={
            <div>
              <Helmet>
                <title>Contato</title>
              </Helmet>
              <Contact />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
