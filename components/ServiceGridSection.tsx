import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LucideIcon, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceGridSectionProps {
  id: string;
  number: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  items: ServiceGridItem[];
  highlight?: string;
  ctaText: string;
  ctaHref: string;
}

export const ServiceGridSection: React.FC<ServiceGridSectionProps> = ({
  id,
  number,
  badge,
  title,
  titleAccent,
  description,
  items,
  highlight,
  ctaText,
  ctaHref,
}) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section 
      id={id}
      ref={ref}
      className={`py-24 md:py-32 bg-brand-dark relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }}></div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 blur-[150px]"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-20 border-b border-white/5 pb-8 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl">
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
          
          {highlight && (
            <div className={`lg:max-w-xs p-6 bg-brand-surface/50 border border-white/5 rounded-sm transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <CheckCircle2 size={20} className="text-[#47A52F] mb-3" />
              <p className="text-sm text-white/80 leading-relaxed">{highlight}</p>
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 relative mb-16">
          {/* Horizontal lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/10 draw-line-x delay-200"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 draw-line-x delay-500"></div>

          {items.map((item, index) => {
            const Icon = item.icon;
            const delay = index * 150 + 300;

            return (
              <div
                key={index}
                className={`group relative p-8 lg:p-10 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Vertical Dividers */}
                <div className={`absolute left-0 top-0 h-full w-px bg-white/10 origin-top transition-transform duration-1000 ease-luxury ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ transitionDelay: `${delay}ms` }}></div>
                {index === items.length - 1 && (
                  <div className={`absolute right-0 top-0 h-full w-px bg-white/10 origin-top transition-transform duration-1000 ease-luxury ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ transitionDelay: `${delay + 100}ms` }}></div>
                )}

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-luxury"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center text-white/60 group-hover:text-brand-accent transition-colors duration-500 mb-6">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-lg font-medium text-white mb-4 group-hover:translate-x-1 transition-transform duration-500 ease-luxury">
                    {item.title}
                  </h4>
                  
                  <p className="text-brand-muted text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
    </section>
  );
};
