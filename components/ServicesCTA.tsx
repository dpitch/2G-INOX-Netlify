import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, Clock, MapPin } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const ServicesCTA: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section 
      ref={ref}
      className={`py-24 md:py-32 bg-brand-dark relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
        backgroundSize: '60px 60px' 
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 blur-[150px]"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* CTA Box */}
        <div className={`relative rounded-sm overflow-hidden border border-white/10 bg-brand-surface/30 backdrop-blur-md transition-all duration-1500 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/img/u9737486426_A_professional_metalworker_in_safety_gear_refinin_f683c52e-5228-491a-b4f2-633cc66bf167_0.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark"></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] animate-pulse-slow"></div>
          
          <div className="relative p-8 md:p-12 lg:p-20">
            {/* Header */}
            <div className={`text-center mb-12 transition-all duration-1000 delay-200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">
                Besoin d'une intervention ?
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                Contactez-nous dès maintenant
              </h3>
              <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
                Nos équipes sont disponibles du lundi au vendredi de 7h à 18h. 
                Intervention rapide pour vos urgences.
              </p>
            </div>

            {/* Info Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 transition-all duration-1000 delay-400 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-4 p-4 md:p-6 bg-brand-dark/50 border border-white/5 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-white font-medium">Horaires</p>
                  <p className="text-brand-muted text-sm">Lun-Ven, 7h-18h</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 md:p-6 bg-brand-dark/50 border border-white/5 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-white font-medium">Dépannage</p>
                  <p className="text-brand-muted text-sm">Intervention rapide</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 md:p-6 bg-brand-dark/50 border border-white/5 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-white font-medium">Canton de Vaud</p>
                  <p className="text-brand-muted text-sm">Lausanne & environs</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 transition-all duration-1000 delay-600 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="group relative overflow-hidden bg-white text-brand-dark px-10 py-5 min-w-[220px] text-center transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury"></div>
                <span className="relative z-10 font-bold text-sm uppercase tracking-widest group-hover:text-brand-dark transition-colors">
                  {PHONE_NUMBER}
                </span>
              </a>
              
              <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
              
              <a 
                href="#contact"
                className="group flex items-center gap-4 px-6 py-5 text-white transition-all duration-500 hover:text-brand-accent"
              >
                <span className="text-sm font-medium uppercase tracking-widest">Demander un devis</span>
                <div className="w-0 group-hover:w-8 transition-all duration-500 ease-luxury h-px bg-brand-accent"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
