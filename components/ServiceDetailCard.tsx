import React from 'react';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServiceDetailCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  highlight?: string;
  ctaText: string;
  ctaHref: string;
  reversed?: boolean;
  image?: string;
  imageAlt?: string;
}

export const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({
  number,
  icon: Icon,
  title,
  description,
  features,
  highlight,
  ctaText,
  ctaHref,
  reversed = false,
  image,
  imageAlt,
}) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div 
      ref={ref}
      className={`relative border-b border-white/5 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Side */}
        {image && (
          <div className={`relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="absolute inset-0 bg-brand-dark z-0"></div>
            <div className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-luxury ${isVisible ? 'scale-100' : 'scale-110'}`}>
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent ${reversed ? 'lg:from-transparent lg:via-brand-dark/30 lg:to-brand-dark' : 'lg:from-brand-dark lg:via-brand-dark/30 lg:to-transparent'}`}></div>
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
            </div>
            
            {/* Number Badge */}
            <div className={`absolute top-6 ${reversed ? 'right-6' : 'left-6'} md:top-8 ${reversed ? 'md:right-8' : 'md:left-8'} bg-brand-dark/90 backdrop-blur-sm border border-white/10 px-4 py-2 z-20`}>
              <span className="text-brand-accent font-mono text-lg md:text-xl">{number}</span>
            </div>
          </div>
        )}

        {/* Content Side */}
        <div className={`relative py-12 md:py-16 lg:py-20 flex flex-col justify-center ${reversed ? 'lg:order-1 lg:border-r' : 'lg:order-2 lg:border-l'} border-white/5 ${!image ? 'lg:col-span-2' : ''}`}>
          <div className="container mx-auto px-4 md:px-6 lg:max-w-none lg:mx-0 lg:px-12">
            {/* Icon & Title */}
            <div className={`flex items-start gap-6 mb-8 transition-all duration-1000 delay-200 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-sm border border-brand-accent/30 bg-brand-accent/10 flex items-center justify-center">
                <Icon size={28} strokeWidth={1.5} className="text-brand-accent" />
              </div>
              <div>
                {!image && <span className="text-brand-accent font-mono text-sm mb-2 block">{number}</span>}
                <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                  {title}
                </h3>
              </div>
            </div>
            
            {/* Description */}
            <p className={`text-brand-muted leading-relaxed text-base md:text-lg mb-8 lg:max-w-lg transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {description}
            </p>
            
            {/* Features List */}
            <ul className={`space-y-3 mb-8 transition-all duration-1000 delay-400 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 size={18} className="flex-shrink-0 text-brand-accent mt-0.5" />
                  <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* Highlight */}
            {highlight && (
              <div className={`mb-8 pl-4 border-l-2 border-brand-accent/50 transition-all duration-1000 delay-500 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <p className="text-sm text-brand-accent/90 italic">{highlight}</p>
              </div>
            )}
            
            {/* CTA */}
            <div className={`transition-all duration-1000 delay-600 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
    </div>
  );
};
