import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building2, ShieldCheck, Key, Award, Home } from 'lucide-react';

const PARTNERS = [
  { name: 'Régies', icon: Building2 },
  { name: 'Architectes', icon: Home },
  { name: 'Assurances', icon: ShieldCheck },
  { name: 'Sécurité Kaba', icon: Key },
  { name: 'Certification', icon: Award },
];

export const TrustBadges: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-20 bg-brand-dark border-y border-white/5 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <p className={`text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-muted mb-8 md:mb-12 transition-all duration-700 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Ils nous font confiance pour l'entretien et la sécurité
        </p>
        
        {/* Mobile: 3 columns grid, Tablet/Desktop: flex row */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:flex lg:flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={partner.name}
                className={`group flex flex-col items-center gap-3 md:gap-4 opacity-70 hover:opacity-100 transition-all duration-500 ease-luxury ${isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border border-white/15 flex items-center justify-center group-hover:border-brand-accent/50 group-hover:bg-brand-accent/5 transition-all duration-500">
                  <Icon size={24} className="md:hidden text-white/70 group-hover:text-brand-accent transition-colors duration-500" />
                  <Icon size={28} className="hidden md:block lg:hidden text-white/70 group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1} />
                  <Icon size={32} className="hidden lg:block text-white/70 group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1} />
                </div>
                <span className="text-[9px] md:text-[11px] lg:text-xs font-bold uppercase tracking-wider md:tracking-widest text-white/70 group-hover:text-white transition-colors duration-500 text-center">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
