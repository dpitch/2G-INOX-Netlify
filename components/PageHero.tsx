import React, { useEffect, useState } from 'react';

interface PageHeroProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ badge, title, titleAccent, subtitle }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden ${mounted ? 'is-visible' : ''}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex justify-between relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 draw-line-y delay-500"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 draw-line-y delay-700"></div>
          <div className="h-full w-px bg-white/5 hidden md:block origin-top draw-line-y delay-300"></div>
          <div className="h-full w-px bg-white/5 hidden lg:block origin-top draw-line-y delay-500"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-accent/5 blur-[150px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-accent/3 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`transition-all duration-1000 ease-luxury mb-8 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 pl-4 border-l border-brand-accent">
              <span className="text-[10px] font-bold text-brand-accent tracking-[0.25em] uppercase">{badge}</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-8 transition-all duration-1000 delay-200 ease-luxury ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-brand-muted font-light">{titleAccent}</span>
              </>
            )}
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl font-light transition-all duration-1000 delay-400 ease-luxury ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Border with Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 draw-line-x delay-800"></div>
    </section>
  );
};
