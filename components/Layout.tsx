import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLenis } from '../hooks/useLenis';
import { useEffect } from 'react';

export const Layout: React.FC = () => {
  const location = useLocation();
  
  // Smooth scroll with Lenis
  useLenis();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-brand-dark min-h-screen flex flex-col text-white font-sans selection:bg-brand-accent selection:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
