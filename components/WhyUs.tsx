import React from 'react';
import { ENGAGEMENTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const WhyUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className={`py-0 bg-brand-dark border-b border-white/5 ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Side with Curtain Reveal */}
        <div className="relative min-h-[600px] lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark z-0"></div>
          {/* The image container */}
          <div className="absolute inset-0 w-full h-full curtain-reveal delay-200">
             <img 
                src="/img/u9737486426_A_welder_in_a_workshop_working_on_a_stainless_ste_8cb99dae-b3f9-40f1-88db-74c3384aa5ae_3.png" 
                alt="Soudeur en atelier travaillant avec précision" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[3s] ease-luxury"
            />
            <div className="absolute inset-0 bg-brand-dark/20"></div>
          </div>
          
          <div className={`absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 bg-brand-dark/90 backdrop-blur-sm border-t border-r border-white/10 max-w-md z-30 transition-all duration-1000 delay-700 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-6xl font-light text-white mb-2">15<span className="text-brand-accent">+</span></p>
            <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Années d'expérience cumulée <br/>Métallurgie de précision</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="py-16 md:py-24 flex flex-col justify-center lg:border-l border-white/5">
          {/* Inner container - matches other sections on mobile/tablet */}
          <div className="container mx-auto px-4 md:px-6 lg:max-w-none lg:mx-0 lg:px-12">
            <div className={`mb-20 transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-6">L'engagement 2G Inox</h2>
              <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                Précision, sécurité et <br /> transparence.
              </h3>
            </div>
            
            <div className="space-y-0 relative">
               <div className={`absolute left-0 top-0 bottom-0 w-px bg-white/5 origin-top transition-transform duration-1000 delay-500 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
              
              {ENGAGEMENTS.map((item, index) => {
                const Icon = item.icon;
                const delay = 500 + (index * 150);
                
                return (
                  <div 
                    key={index} 
                    className={`group py-10 border-t border-white/5 flex items-start gap-8 transition-all duration-1000 ease-luxury hover:bg-white/[0.02] pl-4 -ml-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <div className="flex-shrink-0 pt-1 text-brand-muted group-hover:text-[#47A52F] transition-colors duration-500 transform group-hover:scale-110">
                      <Icon size={24} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3 group-hover:translate-x-2 transition-transform duration-500 ease-luxury">{item.title}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed lg:max-w-sm group-hover:text-white/60 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className={`w-full h-px bg-white/5 origin-left transition-transform duration-1000 delay-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};