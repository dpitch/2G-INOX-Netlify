import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className={`py-32 bg-brand-dark relative overflow-hidden ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative">
        {/* Header Section */}
        <div className={`flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 border-b border-white/5 pb-8 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-6">Nos prestations</h2>
            <h3 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Solutions techniques pour <br />
              <span className="text-brand-muted">chaque défi architectural.</span>
            </h3>
          </div>
          <a href="#contact" className="hidden lg:flex items-center gap-2 text-white/70 hover:text-brand-accent transition-colors text-xs font-bold tracking-widest uppercase group">
            Voir tous les services
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-luxury" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {/* Horizontal Line Top */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/10 draw-line-x delay-200"></div>
          {/* Horizontal Line Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 draw-line-x delay-500"></div>

          {SERVICES.map((service, index) => {
            const Icon = service.icon!;
            // Calculate staggers
            const delay = index * 150; 
            
            return (
              <div 
                key={index} 
                className={`group relative p-10 lg:p-14 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${delay + 300}ms` }}
              >
                {/* Vertical Dividers (Pseudo-like) */}
                <div className={`absolute left-0 top-0 h-full w-px bg-white/10 origin-top transition-transform duration-1000 ease-luxury delay-[${delay}ms] ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
                {index === SERVICES.length - 1 && (
                   <div className={`absolute right-0 top-0 h-full w-px bg-white/10 origin-top transition-transform duration-1000 ease-luxury delay-[${delay + 100}ms] ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
                )}

                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                        <div className="w-12 h-12 flex items-center justify-center text-white/80 group-hover:text-brand-accent transition-colors duration-500">
                            <Icon size={32} strokeWidth={1} />
                        </div>
                        <span className="text-xs font-mono text-white/20 group-hover:text-brand-accent transition-colors duration-500">0{index + 1}</span>
                    </div>
                    
                    <h4 className="text-2xl font-medium text-white mb-6 group-hover:translate-x-2 transition-transform duration-500 ease-luxury">{service.title}</h4>
                    <p className="text-brand-muted mb-10 leading-relaxed text-sm group-hover:text-white/70 transition-colors duration-500">
                    {service.description}
                    </p>
                    
                    <a 
                    href={service.href} 
                    className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-accent transition-colors"
                    >
                    Découvrir
                    <div className="w-0 group-hover:w-8 transition-all duration-500 ease-luxury h-px bg-brand-accent"></div>
                    </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};