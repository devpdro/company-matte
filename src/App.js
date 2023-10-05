import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from 'presentation/pages/home';
import { Loading } from 'utils/loading/loading';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule um atraso para a demonstração (você pode substituir isso com seu código de carregamento real)
    setTimeout(() => {
      setLoading(false); // Quando o carregamento estiver concluído, defina o estado para false
    }, 2000); // Simulando um carregamento de 2 segundos
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Home />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </Router>
  );
}
