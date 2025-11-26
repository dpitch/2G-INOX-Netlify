import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export const MetalHighlight: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate progress: 0 when section enters viewport, 1 when it leaves
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    
    // Start tracking when section is in viewport
    const startPoint = windowHeight;
    const endPoint = -sectionHeight;
    const totalDistance = startPoint - endPoint;
    const currentPosition = startPoint - sectionTop;
    
    const progress = Math.min(Math.max(currentPosition / totalDistance, 0), 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Combine refs
  const combinedRef = useCallback((node: HTMLElement | null) => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    }
  }, [ref]);

  // Calculate light position based on scroll - faster movement with 1.5x multiplier
  const lightPosition = Math.min(scrollProgress * 150, 100);

  return (
    <section
      ref={combinedRef}
      className={`py-0 bg-brand-dark ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Image Side */}
        <div className="relative overflow-hidden order-2 lg:order-1 min-h-[300px] md:min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0 bg-brand-dark z-0"></div>
          <div className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-luxury ${isVisible ? 'scale-100' : 'scale-110'}`}>
            <img
              src="/img/u9737486426_A_newly_installed_modern_stainless_steel_gate_for_011a244d-8a71-4bc0-8f97-c3f6e44a8aaa_1.png"
              alt="Portail en inox moderne"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay - adjusted for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent lg:from-transparent lg:via-brand-dark/30 lg:to-brand-dark"></div>
            <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
          </div>
          
          {/* Floating Badge */}
          <div className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 bg-brand-dark/90 backdrop-blur-sm border border-white/10 p-4 md:p-6 max-w-[220px] md:max-w-[280px] transition-all duration-1000 delay-500 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-baseline gap-2 mb-1 md:mb-2">
              <span className="text-2xl md:text-4xl font-light text-white">100%</span>
              <span className="text-brand-accent font-bold text-xs md:text-sm">Sur mesure</span>
            </div>
            <p className="text-[9px] md:text-[11px] text-brand-muted uppercase tracking-wider leading-relaxed">
              Chaque projet est unique, chaque structure est façonnée selon vos besoins
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative p-6 md:p-10 lg:p-20 xl:p-28 flex flex-col justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5">
          {/* Decorative Line with Scroll-based Light Animation */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-0 bg-gradient-to-b from-transparent via-white/10 to-transparent transition-all duration-1000 ease-luxury hidden lg:block ${isVisible ? 'h-[300px]' : 'h-0'}`}>
            {/* Moving Light Orb */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[60px] transition-none"
              style={{ 
                top: `${lightPosition}%`,
                transform: `translateX(-50%) translateY(-50%)`,
                background: `linear-gradient(to bottom, transparent, #ff8c00, #ffb347, #ff8c00, transparent)`,
                boxShadow: `
                  0 0 10px 2px rgba(255, 140, 0, 0.6),
                  0 0 20px 4px rgba(255, 140, 0, 0.4),
                  0 0 40px 8px rgba(255, 140, 0, 0.2)
                `,
                borderRadius: '100px',
                opacity: isVisible ? 1 : 0,
              }}
            />
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
              L'art du métal
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight mb-6 md:mb-8">
              L'art de la <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-300">construction métallique</span>
            </h3>
          </div>
          
          <div className={`space-y-4 md:space-y-6 mb-8 md:mb-10 transition-all duration-1000 delay-400 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-brand-muted leading-relaxed text-base md:text-lg">
              Le métal est notre métier. Au-delà du dépannage, <strong className="text-white">2G Inox</strong> conçoit et répare des structures durables.
            </p>
            <p className="text-brand-muted leading-relaxed text-sm md:text-base">
              Nous travaillons l'acier, l'aluminium et l'inox pour créer des éléments qui résistent au temps et aux intempéries. Besoin d'une barrière sur mesure, d'une grille de sécurité ou de redresser une structure accidentée ?
            </p>
            <p className="text-white/80 leading-relaxed font-medium text-sm md:text-base">
              Notre atelier est équipé pour répondre aux demandes les plus spécifiques.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-600 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#projets"
              className="group inline-flex items-center gap-3 md:gap-4 text-white hover:text-brand-accent transition-colors duration-300"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                Découvrir nos projets
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-500">
                <ArrowRight size={16} className="md:hidden group-hover:translate-x-1 transition-transform duration-300" />
                <ArrowRight size={20} className="hidden md:block group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
