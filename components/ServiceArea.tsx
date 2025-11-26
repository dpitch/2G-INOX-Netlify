import React from 'react';
import { CITIES } from '../constants';
import { MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ServiceArea: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className={`py-32 bg-brand-dark relative ${isVisible ? 'is-visible' : ''}`} ref={ref}>
       {/* Background Texture */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
       <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-8">Zone d'intervention</h2>
          <p className="text-brand-muted leading-relaxed">
            Basés dans le canton de Vaud, nous intervenons rapidement sur l'axe lémanique et le Nord vaudois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-32">
          {CITIES.map((city, index) => (
            <div 
              key={city.name} 
              className={`group flex items-center justify-center gap-3 px-8 py-8 bg-brand-surface/50 backdrop-blur-sm border border-white/5 hover:border-brand-accent/50 transition-all duration-700 ease-luxury hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <MapPin size={16} className="text-brand-muted group-hover:text-brand-accent transition-colors duration-300 group-hover:scale-110" />
              <span className="text-xs font-bold text-white tracking-[0.15em] uppercase group-hover:text-brand-accent transition-colors duration-300">{city.name}</span>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className={`relative rounded-sm overflow-hidden border border-white/10 bg-brand-surface/30 backdrop-blur-md transition-all duration-1500 ease-luxury delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src="/img/u9737486426_A_perfectly_repaired_metal_fence_looking_brand_ne_4417c9a0-8869-45ad-9d9a-7eb47342023d_1.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark"></div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px]"></div>
            
            <div className="relative p-10 md:p-16 lg:p-24 text-center">
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-10">Un projet ou une urgence ?</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <a 
                      href="#contact"
                      className="px-12 py-5 bg-white text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-light transition-transform duration-500 hover:-translate-y-1 min-w-[220px]"
                  >
                      Nous contacter
                  </a>
                  <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                  <div className="flex flex-col items-start">
                     <span className="text-brand-muted text-[10px] uppercase tracking-widest mb-1">Appel gratuit</span>
                     <a href="tel:0216474626" className="text-white font-medium hover:text-brand-accent transition-colors text-2xl">021 647 46 26</a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};