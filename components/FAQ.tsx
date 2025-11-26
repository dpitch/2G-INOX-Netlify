import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQS = [
  {
    question: 'Quel est le délai d\'intervention pour une urgence ?',
    answer: 'Nous intervenons généralement sous 24h, et plus rapidement selon la localité pour les cas critiques (portes bloquées).',
  },
  {
    question: 'Travaillez-vous avec les assurances ?',
    answer: 'Oui, nos factures et interventions suite à effraction sont reconnues par la plupart des assurances ménage suisses.',
  },
  {
    question: 'Faites-vous des devis pour des petites réparations ?',
    answer: 'Absolument. Aucune intervention n\'est trop petite. Contactez-nous pour une estimation.',
  },
];

export const FAQ: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 lg:py-32 bg-brand-dark relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[100px] md:blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <div className={`lg:sticky lg:top-32 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
                <MessageCircleQuestion size={16} className="md:hidden text-brand-accent" />
                <MessageCircleQuestion size={20} className="hidden md:block text-brand-accent" />
              </div>
              <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.15em] md:tracking-[0.2em]">FAQ</h2>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight mb-4 md:mb-6">
              Questions <br className="hidden sm:block" />
              <span className="text-brand-muted">fréquentes</span>
            </h3>
            
            <p className="text-brand-muted leading-relaxed max-w-md text-sm md:text-base">
              Retrouvez les réponses aux questions les plus courantes. Pour toute autre demande, n'hésitez pas à nous contacter directement.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3 md:space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={`border border-white/10 bg-brand-surface/30 backdrop-blur-sm transition-all duration-700 ease-luxury hover:border-white/20 rounded-sm ${isOpen ? 'border-brand-accent/30 bg-brand-accent/5' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left gap-4"
                  >
                    <span className={`font-medium text-sm md:text-base transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full border ${isOpen ? 'border-brand-accent bg-brand-accent/10' : 'border-white/20'} flex items-center justify-center transition-all duration-300`}>
                      <ChevronDown 
                        size={14}
                        className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : 'text-white/60'}`}
                      />
                      <ChevronDown 
                        size={16}
                        className={`hidden md:block transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : 'text-white/60'}`}
                      />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-luxury ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                      <div className="w-10 md:w-12 h-px bg-brand-accent/30 mb-3 md:mb-4"></div>
                      <p className="text-brand-muted leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
