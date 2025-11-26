import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay to ensure DOM is ready for initial animations
    const timer = setTimeout(() => setMounted(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={`relative h-screen flex items-center overflow-hidden ${mounted ? 'is-visible' : ''}`}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-brand-dark/20 z-10"></div>
        <div 
          className={`w-full h-full transition-opacity duration-[2000ms] ease-luxury ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dxpusjy6v&public_id=446891_Iron_Welder_Sparks_Cutting_By_Evgenii_Petrunin_Artlist_4K_chhckx&profile=cld-looping"
            className="w-full h-full object-cover pointer-events-none"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              aspectRatio: '16/9',
              filter: 'grayscale(100%)'
            }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Soudeur travaillant le métal"
          />
        </div>
      </div>

      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full border-x border-white/0 flex justify-between relative">
           {/* Left Border Draw */}
           <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 draw-line-y delay-500"></div>
           {/* Right Border Draw */}
           <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 draw-line-y delay-700"></div>
           
           <div className="h-full w-px bg-white/5 hidden md:block origin-top draw-line-y delay-300"></div>
           <div className="h-full w-px bg-white/5 hidden lg:block origin-top draw-line-y delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-20 pt-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className={`transition-all duration-1000 ease-luxury mb-8 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 pl-4 border-l border-brand-accent">
              <span className="text-[10px] font-bold text-brand-accent tracking-[0.25em] uppercase">Qualité Suisse Garantie</span>
            </div>
          </div>
          
          {/* Headline with Masked Reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium text-white leading-[0.9] tracking-tight mb-10">
            <span className="mask-text">
              <span className="mask-text-content delay-100">Construction</span>
            </span>
            <span className="mask-text">
              <span className="mask-text-content delay-300 text-brand-muted font-light">Métallique.</span>
            </span>
          </h1>
          
          {/* Description Fade */}
          <p className={`text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-light transition-all duration-1000 delay-500 ease-luxury ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Expertise technique et intervention rapide. 
            Nous façonnons le métal avec précision pour l'industrie et l'habitat en Suisse Romande.
          </p>
          
          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row items-start gap-6 transition-all duration-1000 delay-700 ease-luxury ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="group relative overflow-hidden bg-white text-brand-dark px-10 py-5 min-w-[220px] text-center transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury"></div>
              <span className="relative z-10 font-bold text-sm uppercase tracking-widest group-hover:text-brand-dark transition-colors">Urgence 24/7</span>
            </a>
            
            <a 
              href="#contact"
              className="group flex items-center gap-4 px-8 py-5 text-white transition-all duration-500 hover:text-brand-accent hover:pl-10"
            >
              <span className="text-sm font-medium uppercase tracking-widest">Demander un devis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-luxury" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-20 transition-all duration-1000 delay-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
           style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>
        <span className="text-[10px] uppercase tracking-widest text-white/30 rotate-90 origin-right translate-x-full">Scrollez</span>
        <div className="w-px h-24 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  );
};