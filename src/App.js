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
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
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
