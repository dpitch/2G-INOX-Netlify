import React from 'react';
import { PageHero } from '../components/PageHero';
import { ServicesOverview } from '../components/ServicesOverview';
import { ServiceDetailCard } from '../components/ServiceDetailCard';
import { ServicesCTA } from '../components/ServicesCTA';
import { 
  KeyRound, 
  Hammer, 
  Lock, 
  Shield, 
  Mailbox, 
  Settings 
} from 'lucide-react';

// Services overview data for the grid
const SERVICES_OVERVIEW = [
  {
    icon: KeyRound,
    number: '01',
    title: 'Dépannage & Ouverture',
    shortDesc: 'Intervention rapide pour portes bloquées, clés perdues ou serrures défectueuses.',
    anchor: '#depannage',
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Construction métallique',
    shortDesc: 'Fabrication et réparation de structures métalliques sur mesure.',
    anchor: '#construction',
  },
  {
    icon: Lock,
    number: '03',
    title: 'Cylindres & Serrures',
    shortDesc: 'Remplacement et installation de cylindres sécurisés pour tous accès.',
    anchor: '#cylindres',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Renforcement sécurité',
    shortDesc: 'Solutions conformes aux normes européennes pour commerces et habitations.',
    anchor: '#securite',
  },
  {
    icon: Mailbox,
    number: '05',
    title: 'Boîtes aux lettres',
    shortDesc: 'Remplacement, réparation et gravure de plaquettes nominatives.',
    anchor: '#boites',
  },
  {
    icon: Settings,
    number: '06',
    title: 'Fermetures & Entretien',
    shortDesc: 'Installation et maintenance de ferme-portes et systèmes automatiques.',
    anchor: '#entretien',
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero 
        badge="Nos services"
        title="Serrurerie & Construction"
        titleAccent="métallique."
        subtitle="Solutions complètes pour professionnels et particuliers. Du dépannage d'urgence aux installations sur mesure dans tout le canton de Vaud."
      />

      {/* Services Overview Grid */}
      <ServicesOverview services={SERVICES_OVERVIEW} />

      {/* Service 1: Dépannage */}
      <section id="depannage">
        <ServiceDetailCard 
          number="01"
          icon={KeyRound}
          title="Dépannage & Ouverture de portes"
          description="Porte bloquée, clés perdues ou serrure défectueuse ? Nous intervenons rapidement pour vous dépanner et remettre votre porte en état de fonctionnement."
          features={[
            'Ouverture de portes suite à perte de clés ou blocage du mécanisme',
            'Dépannage de portes palières, portes d\'entrée et portes de cave',
            'Intervention sur portes d\'immeubles, magasins et bureaux',
            'Réparation après effraction, redressage et remise en état',
            'Découpage au chalumeau ou meulage si nécessaire',
          ]}
          highlight="Intervention sous 24 heures en cas d'urgence."
          ctaText="Appeler pour un dépannage"
          ctaHref="tel:0216474626"
          image="/img/u9737486426_shot_of_a_professional_locksmiths_gloved_hand_ins_0b6dbe64-76ae-4bfb-b174-0bc8a504dc80_0.png"
          imageAlt="Serrurier professionnel installant un cylindre"
        />
      </section>

      {/* Service 2: Construction métallique */}
      <section id="construction">
        <ServiceDetailCard 
          number="02"
          icon={Hammer}
          title="Construction métallique et soudure"
          description="Fabrication, réparation et installation de toutes structures métalliques. Nos soudeurs qualifiés interviennent sur acier, inox et aluminium pour des réalisations durables."
          features={[
            'Réparation de barrières métalliques, portails, clôtures et grilles',
            'Fabrication et pose de garde-corps et rampes sur mesure',
            'Réparation et installation de grilles caillebotis',
            'Soudure à l\'électrode sur acier, inox et aluminium',
            'Redressage de structures déformées',
            'Découpage au chalumeau et ajustement sur mesure',
          ]}
          ctaText="Demander un devis"
          ctaHref="#contact"
          reversed
          image="/img/u9737486426_A_newly_installed_modern_stainless_steel_gate_for_011a244d-8a71-4bc0-8f97-c3f6e44a8aaa_1.png"
          imageAlt="Portail en inox moderne installé"
        />
      </section>

      {/* Service 3: Cylindres */}
      <section id="cylindres">
        <ServiceDetailCard 
          number="03"
          icon={Lock}
          title="Changement et pose de cylindres"
          description="Remplacement et installation de cylindres sécurisés pour tous types de portes et accès. Solutions standards et haute sécurité adaptées à vos besoins."
          features={[
            'Cylindres pour boîtes aux lettres, portes palières et portes d\'entrée',
            'Cylindres pour portails, immeubles, magasins, caves et bureaux',
            'Pose de cylindres pompiers et cylindres haute sécurité',
            'Solutions anti-perçage et anti-crochetage',
            'Mises en passe pour centraliser les accès (immeubles, copropriétés)',
            'Remplacement express en cas de clé perdue',
          ]}
          highlight="Nous vous conseillons sur le niveau de sécurité adapté à vos besoins."
          ctaText="Demander un devis"
          ctaHref="#contact"
          image="/img/u9737486426_A_modern_clean_entrance_of_a_Swiss_apartment_buil_90162c95-28bb-4038-a92a-0fa16e233806_1.png"
          imageAlt="Entrée d'immeuble suisse moderne"
        />
      </section>

      {/* Service 4: Sécurité */}
      <section id="securite">
        <ServiceDetailCard 
          number="04"
          icon={Shield}
          title="Renforcement et sécurité"
          description="Renforcez la sécurité de vos accès avec des solutions conformes aux normes européennes. Protection adaptée pour commerces, immeubles et habitations."
          features={[
            'Pose de verrous 1 point et 3 points',
            'Installation de serrures anti-panique pour portes de secours (normes EN)',
            'Pose de protections anti-effraction supplémentaires',
            'Remplacement et fourniture de serrures multipoints',
            'Installation de poignées inox et protections de cylindres',
          ]}
          highlight="Toutes nos installations respectent les normes européennes en vigueur."
          ctaText="Demander un devis"
          ctaHref="#contact"
          reversed
          image="/img/u9737486426_A_perfectly_repaired_metal_fence_looking_brand_ne_4417c9a0-8869-45ad-9d9a-7eb47342023d_1.png"
          imageAlt="Clôture métallique réparée"
        />
      </section>

      {/* Service 5: Boîtes aux lettres */}
      <section id="boites">
        <ServiceDetailCard 
          number="05"
          icon={Mailbox}
          title="Boîtes aux lettres & gravures"
          description="Remplacement, réparation et personnalisation de boîtes aux lettres. Service complet incluant la gravure de plaquettes nominatives pour immeubles et particuliers."
          features={[
            'Remplacement complet de boîtes aux lettres individuelles ou collectives',
            'Réparation et changement de cylindre',
            'Remplacement de portillon de boîte aux lettres et boîte à lait',
            'Gravure personnalisée sur plaquettes nominatives',
            'Fabrication de plaquettes gravées sur mesure',
          ]}
          ctaText="Nous contacter"
          ctaHref="#contact"
        />
      </section>

      {/* Service 6: Entretien */}
      <section id="entretien">
        <ServiceDetailCard 
          number="06"
          icon={Settings}
          title="Fermetures et entretien"
          description="Installation, remplacement et entretien de systèmes de fermeture. Un entretien régulier garantit la longévité et le bon fonctionnement de vos installations."
          features={[
            'Ferme-portes : fourniture, remplacement et réglage de tous types',
            'Service annuel d\'entretien de portes d\'entrée',
            'Vérification, lubrification et réglages préventifs',
            'Réparation de fermetures automatiques et portes battantes',
          ]}
          highlight="Programmez un entretien annuel pour éviter les pannes et prolonger la durée de vie de vos équipements."
          ctaText="Planifier un entretien"
          ctaHref="#contact"
          reversed
          image="/img/u9737486426_A_welder_in_a_workshop_working_on_a_stainless_ste_8cb99dae-b3f9-40f1-88db-74c3384aa5ae_3.png"
          imageAlt="Soudeur en atelier"
        />
      </section>

      {/* Final CTA */}
      <ServicesCTA />
    </>
  );
};
