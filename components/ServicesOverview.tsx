import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LucideIcon } from 'lucide-react';

interface ServiceOverviewItem {
  icon: LucideIcon;
  number: string;
  title: string;
  shortDesc: string;
  anchor: string;
}

interface ServicesOverviewProps {
  services: ServiceOverviewItem[];
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 bg-brand-surface/30 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
            Nos expertises
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium text-white leading-tight">
            6 domaines d'intervention <br className="hidden sm:block" />
            <span className="text-brand-muted">pour tous vos besoins</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 100 + 200;

            return (
              <a
                key={service.number}
                href={service.anchor}
                className={`group relative p-6 md:p-8 bg-brand-dark/50 border border-white/5 hover:border-brand-accent/30 rounded-sm transition-all duration-700 ease-luxury hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
                
                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center text-white/60 group-hover:text-brand-accent transition-colors duration-500">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-white/20 group-hover:text-brand-accent/60 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg md:text-xl font-medium text-white mb-3 group-hover:translate-x-1 transition-transform duration-500 ease-luxury">
                    {service.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-brand-muted text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {service.shortDesc}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-brand-accent transition-colors">
                    <span>En savoir plus</span>
                    <div className="w-0 group-hover:w-6 transition-all duration-500 ease-luxury h-px bg-brand-accent"></div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
