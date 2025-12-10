import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceStepsSectionProps {
  id: string;
  number: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  steps: ServiceStep[];
  ctaText: string;
  ctaHref: string;
  image?: string;
  imageAlt?: string;
}

export const ServiceStepsSection: React.FC<ServiceStepsSectionProps> = ({
  id,
  number,
  badge,
  title,
  titleAccent,
  description,
  steps,
  ctaText,
  ctaHref,
  image,
  imageAlt,
}) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 lg:py-32 bg-brand-surface/30 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
          {/* Text Side */}
          <div className={`transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-accent font-mono text-sm">{number}</span>
              <div className="w-12 h-px bg-brand-accent/50"></div>
              <span className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.2em]">{badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              {title} <br className="hidden sm:block" />
              <span className="text-brand-muted">{titleAccent}</span>
            </h2>
            <p className="text-brand-muted leading-relaxed text-base md:text-lg max-w-xl">
              {description}
            </p>
          </div>

          {/* Image Side */}
          {image && (
            <div className={`relative h-64 lg:h-auto min-h-[300px] rounded-sm overflow-hidden transition-all duration-1500 ease-luxury delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
            </div>
          )}
        </div>

        {/* Steps - Timeline style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0 relative mb-16">
          {/* Connecting Line (Desktop only) */}
          <div className={`hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-accent/50 via-white/20 to-brand-accent/50 transition-all duration-1500 ease-luxury origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
          
          {/* Mobile Timeline Line */}
          <div className={`md:hidden absolute left-[29px] top-[60px] bottom-[60px] w-px bg-gradient-to-b from-brand-accent/50 via-white/10 to-brand-accent/50 transition-all duration-1500 ease-luxury origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4 items-start pl-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-brand-dark group-hover:border-brand-accent/50 transition-all duration-500">
                      <Icon size={24} strokeWidth={1} className="text-white/40 group-hover:text-brand-accent transition-colors duration-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-sm">
                      {stepNumber}
                    </div>
                  </div>
                  
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
                <div className="hidden md:block relative p-6 lg:p-8 text-center lg:border-r border-white/5 last:border-r-0 h-full">
                  <div className="relative mx-auto mb-6 lg:mb-8">
                    <div className="w-20 h-20 lg:w-[100px] lg:h-[100px] rounded-full border border-white/10 flex items-center justify-center mx-auto group-hover:border-brand-accent/50 transition-all duration-500 ease-luxury group-hover:scale-105 bg-brand-dark">
                      <Icon size={32} className="text-white/40 group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1} />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-dark text-[10px] lg:text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-sm">
                      {stepNumber}
                    </div>
                  </div>
                  
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

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href={ctaHref}
            className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-brand-dark hover:bg-brand-accent transition-colors duration-500"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              {ctaText}
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
