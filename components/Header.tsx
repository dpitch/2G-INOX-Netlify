import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, PHONE_NUMBER } from '../constants';
import { Logo } from './Logo';
import { NavLink } from './NavLink';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-luxury ${
        isScrolled 
          ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black/50' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className={`transition-all duration-1000 ease-luxury ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link to="/" onClick={closeMobileMenu}>
            <Logo size="md" className="relative z-50" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link, index) => (
            <div 
              key={link.label}
              className={`transition-all duration-1000 ease-luxury delay-[${index * 100}ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              <NavLink 
                item={link}
                className="relative text-sm font-medium text-brand-muted hover:text-white transition-colors tracking-wide group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-brand-accent transition-all duration-500 ease-luxury group-hover:w-full group-hover:left-0"></span>
              </NavLink>
            </div>
          ))}
        </nav>

        {/* CTA / Actions */}
        <div className={`hidden lg:flex items-center gap-8 transition-all duration-1000 ease-luxury delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex flex-col items-end group cursor-pointer">
            <div className="flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-0.5">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></span>
              Intervention 24h
            </div>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-base font-bold text-white group-hover:text-brand-accent transition-colors tracking-wider">
              {PHONE_NUMBER}
            </a>
          </div>
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="relative overflow-hidden bg-white/5 hover:bg-brand-accent text-white px-6 py-3 border border-white/10 hover:border-brand-accent transition-all duration-500 ease-luxury text-xs font-bold tracking-widest uppercase group"
          >
            <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-500">Urgence</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 relative z-50 hover:text-brand-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark z-40 flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 to-brand-dark opacity-100"></div>
          <nav className="flex flex-col gap-8 text-center relative z-10">
            {NAV_LINKS.map((link, index) => (
              <NavLink 
                key={link.label} 
                item={link}
                onClick={closeMobileMenu}
                className="text-4xl font-light text-white hover:text-brand-accent transition-colors opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              />
            ))}
          </nav>
          <div className="w-12 h-px bg-brand-border my-12 relative z-10 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}></div>
          <div className="flex flex-col gap-6 items-center relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 text-xl font-medium text-white"
            >
              <Phone size={20} className="text-brand-accent" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
