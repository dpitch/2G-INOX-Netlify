import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Page d'accueil */}
          <Route index element={<HomePage />} />
          
          {/* Futures pages - décommenter quand prêtes */}
          {/* <Route path="services" element={<ServicesPage />} /> */}
          {/* <Route path="projets" element={<ProjectsPage />} /> */}
          {/* <Route path="a-propos" element={<AboutPage />} /> */}
          {/* <Route path="contact" element={<ContactPage />} /> */}
          
          {/* Page 404 - fallback vers accueil pour l'instant */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
