import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { PHONE_NUMBER, EMAIL, NAV_LINKS } from '../constants';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand - 4 cols */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/">
              <Logo size="lg" />
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Construction Métallique & Serrurerie.<br/>
              Excellence technique suisse pour tous vos projets.
            </p>
          </div>

          {/* Navigation - 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Menu</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <NavLink 
                    item={link} 
                    className="text-brand-muted hover:text-white transition-colors text-sm"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="block text-white hover:text-brand-accent transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="block hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wide">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                   Urgence 24/7
                </div>
              </li>
            </ul>
          </div>

          {/* Social - 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Suivez-nous</h4>
            <div className="flex gap-6">
              <a href="#" className="text-brand-muted hover:text-white transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-brand-muted hover:text-white transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-brand-muted hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-muted">
          <p>&copy; {new Date().getFullYear()} 2G-INOX. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};