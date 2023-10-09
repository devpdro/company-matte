import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Loading } from 'utils/loading/loading';
import { Home } from 'presentation/pages/home';
import { Benefits } from 'presentation/pages/benefits';
import { Contact } from 'presentation/pages/contact';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Home />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </Router>
  );
}
