import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building, User, CheckCircle2 } from 'lucide-react';

const SEGMENTS = [
  {
    icon: Building,
    title: 'Gérances & Entreprises',
    description: 'Nous comprenons les exigences de la gestion immobilière. Réactivité pour les locataires, rapports d\'intervention précis, et respect des normes de sécurité pour les lieux publics et bureaux.',
    features: [
      'Maintenance préventive',
      'Gestion de clés (passes)',
      'Réparations rapides',
    ],
    image: '/img/u9737486426_A_modern_clean_entrance_of_a_Swiss_apartment_buil_90162c95-28bb-4038-a92a-0fa16e233806_1.png',
    imageAlt: 'Boîtes aux lettres d\'immeuble suisse moderne',
    accent: 'brand-accent',
  },
  {
    icon: User,
    title: 'Propriétaires & Locataires',
    description: 'Que ce soit pour sécuriser votre domicile après une perte de clé ou pour embellir votre extérieur avec une barrière en inox, nous vous accompagnons avec des conseils personnalisés.',
    features: [
      'Sécurisation porte d\'entrée',
      'Réparation portail',
      'Devis clair sans surprise',
    ],
    image: '/img/u9737486426_shot_of_a_professional_locksmiths_gloved_hand_ins_0b6dbe64-76ae-4bfb-b174-0bc8a504dc80_0.png',
    imageAlt: 'Installation d\'un cylindre de sécurité',
    accent: 'white',
  },
];

export const ForWho: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 lg:py-32 bg-brand-dark relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">Pour qui ?</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Des solutions adaptées <br className="hidden sm:block" />
            <span className="text-brand-muted">à vos besoins</span>
          </h3>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-0">
          {SEGMENTS.map((segment, index) => {
            const Icon = segment.icon;
            const isFirst = index === 0;
            
            return (
              <div
                key={segment.title}
                className={`group relative rounded-sm lg:rounded-none transition-all duration-1000 ease-luxury bg-brand-surface/30 lg:bg-transparent overflow-hidden ${
                  isFirst ? 'lg:border-r border-white/5' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={segment.image} 
                    alt={segment.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-luxury"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isFirst ? 'from-brand-dark via-brand-dark/60' : 'from-brand-dark via-brand-dark/60'} to-transparent`}></div>
                  {isFirst && <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>}
                  {!isFirst && <div className="absolute inset-0 bg-[#47A52F]/10 mix-blend-overlay"></div>}
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${isFirst ? 'from-brand-accent/5' : 'from-[#47A52F]/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm lg:rounded-none pointer-events-none`}></div>
                
                <div className="relative z-10 p-6 md:p-10 lg:p-12">
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-sm border ${isFirst ? 'border-brand-accent/30 bg-brand-accent/10' : 'border-[#47A52F]/30 bg-[#47A52F]/10'} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500 ease-luxury -mt-12 md:-mt-14 relative`}>
                    <Icon size={20} className="md:hidden" strokeWidth={1.5} color={isFirst ? '#ff8c00' : '#47A52F'} />
                    <Icon size={24} className="hidden md:block" strokeWidth={1.5} color={isFirst ? '#ff8c00' : '#47A52F'} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl md:text-2xl font-medium text-white mb-4 md:mb-5 group-hover:translate-x-2 transition-transform duration-500 ease-luxury">
                    {segment.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-brand-muted leading-relaxed mb-5 md:mb-6 text-sm max-w-md">
                    {segment.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2.5 md:space-y-3">
                    {segment.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex}
                        className={`flex items-center gap-3 transition-all duration-500 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                        style={{ transitionDelay: `${index * 200 + fIndex * 100 + 400}ms` }}
                      >
                        <CheckCircle2 size={14} className="md:hidden flex-shrink-0" color={isFirst ? '#ff8c00' : '#47A52F'} />
                        <CheckCircle2 size={16} className="hidden md:block flex-shrink-0" color={isFirst ? '#ff8c00' : '#47A52F'} />
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
