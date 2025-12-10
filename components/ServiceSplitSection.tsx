import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceSplitSectionProps {
  id: string;
  number: string;
  badge: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  highlight?: string;
  ctaText: string;
  ctaHref: string;
  stat?: {
    value: string;
    label: string;
  };
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
}

export const ServiceSplitSection: React.FC<ServiceSplitSectionProps> = ({
  id,
  number,
  badge,
  icon: Icon,
  title,
  description,
  features,
  highlight,
  ctaText,
  ctaHref,
  stat,
  image,
  imageAlt,
  reversed = false,
}) => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section 
      id={id}
      ref={ref}
      className={`py-0 bg-brand-dark border-b border-white/5 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${reversed ? '' : ''}`}>
        {/* Image Side with Curtain Reveal */}
        <div className={`relative min-h-[500px] lg:min-h-[700px] lg:h-auto overflow-hidden ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="absolute inset-0 bg-brand-dark z-0"></div>
          
          {image ? (
            <div className="absolute inset-0 w-full h-full curtain-reveal delay-200">
              <img 
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[3s] ease-luxury"
              />
              <div className="absolute inset-0 bg-brand-dark/20"></div>
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay"></div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-brand-dark"></div>
          )}
          
          {/* Stat Badge */}
          {stat && (
            <div className={`absolute bottom-0 ${reversed ? 'right-0' : 'left-0'} p-6 md:p-8 lg:p-10 bg-brand-dark/90 backdrop-blur-sm border-t ${reversed ? 'border-l' : 'border-r'} border-white/10 max-w-md z-30 transition-all duration-1000 delay-700 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${reversed ? 'translate-x-10' : '-translate-x-10'}`}`}>
              <p className="text-5xl md:text-6xl font-light text-white mb-2">
                {stat.value}<span className="text-brand-accent">+</span>
              </p>
              <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">{stat.label}</p>
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className={`py-16 md:py-24 flex flex-col justify-center ${reversed ? 'lg:order-1 lg:border-r' : 'lg:order-2 lg:border-l'} border-white/5`}>
          <div className="container mx-auto px-4 md:px-6 lg:max-w-none lg:mx-0 lg:px-12">
            {/* Badge & Number */}
            <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 delay-200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-brand-accent font-mono text-sm">{number}</span>
              <div className="w-8 h-px bg-brand-accent/50"></div>
              <span className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.2em]">{badge}</span>
            </div>

            {/* Icon & Title */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-14 h-14 rounded-sm border border-brand-accent/30 bg-brand-accent/10 flex items-center justify-center mb-6">
                <Icon size={28} strokeWidth={1.5} className="text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                {title}
              </h2>
            </div>
            
            {/* Description */}
            <p className={`text-brand-muted leading-relaxed text-base md:text-lg mb-10 lg:max-w-lg transition-all duration-1000 delay-400 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {description}
            </p>
            
            {/* Features List */}
            <div className="space-y-0 relative mb-10">
              <div className={`absolute left-0 top-0 bottom-0 w-px bg-white/5 origin-top transition-transform duration-1000 delay-500 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
              
              {features.map((feature, index) => {
                const delay = 500 + (index * 100);
                
                return (
                  <div 
                    key={index}
                    className={`group py-4 border-t border-white/5 flex items-center gap-4 transition-all duration-700 ease-luxury hover:bg-white/[0.02] pl-4 -ml-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0 text-[#47A52F] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">{feature}</span>
                  </div>
                );
              })}
              <div className={`w-full h-px bg-white/5 origin-left transition-transform duration-1000 delay-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>

            {/* Highlight */}
            {highlight && (
              <div className={`mb-10 p-4 bg-brand-surface/50 border-l-2 border-brand-accent rounded-r-sm transition-all duration-1000 delay-700 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <p className="text-sm text-white/90">{highlight}</p>
              </div>
            )}
            
            {/* CTA */}
            <div className={`transition-all duration-1000 delay-800 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href={ctaHref}
                className="group inline-flex items-center gap-4 text-white hover:text-brand-accent transition-colors duration-300"
              >
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  {ctaText}
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-500">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
