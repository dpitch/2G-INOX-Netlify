import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, FileText, Wrench, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: Phone,
    number: '01',
    title: 'Contact & Diagnostic',
    description: 'Appel ou email. Pour les urgences, nous évaluons la situation immédiatement par téléphone.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Devis & Transparence',
    description: 'Un prix annoncé avant travaux ou un devis gratuit pour les projets de construction.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Intervention Technique',
    description: 'Nos techniciens qualifiés interviennent avec un équipement professionnel et des pièces certifiées.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Finitions & Propreté',
    description: 'Nous laissons le chantier propre et assurons le suivi post-intervention.',
  },
];

export const Process: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 lg:py-32 bg-brand-surface/30 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">Comment ça marche ?</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Votre intervention <br className="hidden sm:block" />
            <span className="text-brand-muted">en 4 étapes</span>
          </h3>
        </div>

        {/* Steps - Mobile: Vertical timeline, Tablet: 2x2 grid, Desktop: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0 relative">
          {/* Connecting Line (Desktop only) - centered with circles (padding 40px + half circle 60px = 100px) */}
          <div className={`hidden lg:block absolute top-[100px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-accent/50 via-white/20 to-brand-accent/50 transition-all duration-1500 ease-luxury origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
          
          {/* Mobile Timeline Line */}
          <div className={`md:hidden absolute left-[29px] top-[60px] bottom-[60px] w-px bg-gradient-to-b from-brand-accent/50 via-white/10 to-brand-accent/50 transition-all duration-1500 ease-luxury origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
          
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={step.number}
                className={`group relative transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4 items-start pl-2">
                  {/* Circle with icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-brand-dark group-hover:border-brand-accent/50 transition-all duration-500">
                      <Icon size={24} strokeWidth={1} className="text-white/40 group-hover:text-brand-accent transition-colors duration-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h4 className="text-base font-medium text-white mb-2 group-hover:text-brand-accent transition-colors duration-500">
                      {step.title}
                    </h4>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Tablet/Desktop Layout */}
                <div className="hidden md:block relative p-6 lg:p-10 text-center lg:border-r border-white/5 last:border-r-0 h-full">
                  {/* Number Badge */}
                  <div className="relative mx-auto mb-6 lg:mb-8">
                    <div className="w-20 h-20 lg:w-[120px] lg:h-[120px] rounded-full border border-white/10 flex items-center justify-center mx-auto group-hover:border-brand-accent/50 transition-all duration-500 ease-luxury group-hover:scale-105 bg-brand-dark">
                      <Icon size={32} className="lg:hidden text-white/40 group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1} />
                      <Icon size={40} className="hidden lg:block text-white/40 group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1} />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-dark text-[10px] lg:text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-base lg:text-lg font-medium text-white mb-3 lg:mb-4 group-hover:text-brand-accent transition-colors duration-500">
                    {step.title}
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
