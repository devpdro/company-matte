import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from 'presentation/pages/home';
import { Benefits } from 'presentation/pages/benefits';
import { Contact } from 'presentation/pages/contact';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
