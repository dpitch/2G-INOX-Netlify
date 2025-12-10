import React from 'react';
import { PageHero } from '../components/PageHero';
import { ServicesOverview } from '../components/ServicesOverview';
import { ServiceDetailCard } from '../components/ServiceDetailCard';
import { ServiceGridSection } from '../components/ServiceGridSection';
import { ServiceStepsSection } from '../components/ServiceStepsSection';
import { ServiceSplitSection } from '../components/ServiceSplitSection';
import { ServicesCTA } from '../components/ServicesCTA';
import { 
  KeyRound, 
  Hammer, 
  Lock, 
  Shield, 
  Mailbox, 
  Settings,
  ShieldCheck,
  DoorOpen,
  Key,
  Scan,
  Package,
  PenTool,
  Wrench,
  Calendar,
  CheckCircle,
  RotateCw
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

      {/* Service 4: Sécurité - Style Grid avec icônes */}
      <ServiceGridSection 
        id="securite"
        number="04"
        badge="Protection"
        title="Renforcement"
        titleAccent="et sécurité."
        description="Renforcez la sécurité de vos accès avec des solutions conformes aux normes européennes. Protection adaptée pour commerces, immeubles et habitations."
        items={[
          {
            icon: ShieldCheck,
            title: 'Verrous multipoints',
            description: 'Pose de verrous 1 point et 3 points pour une sécurité renforcée de vos accès.',
          },
          {
            icon: DoorOpen,
            title: 'Serrures anti-panique',
            description: 'Installation conforme aux normes EN pour portes de secours et issues de secours.',
          },
          {
            icon: Shield,
            title: 'Anti-effraction',
            description: 'Pose de protections supplémentaires et serrures multipoints haute sécurité.',
          },
          {
            icon: Key,
            title: 'Protections cylindres',
            description: 'Installation de rosaces blindées et protections anti-arrachement.',
          },
          {
            icon: Lock,
            title: 'Poignées sécurisées',
            description: 'Fourniture et pose de poignées inox et équipements anti-crochetage.',
          },
          {
            icon: Scan,
            title: 'Audit sécurité',
            description: 'Analyse de vos points d\'accès et recommandations personnalisées.',
          },
        ]}
        highlight="Toutes nos installations respectent les normes européennes en vigueur (EN 179, EN 1125)."
        ctaText="Demander un audit gratuit"
        ctaHref="#contact"
      />

      {/* Service 5: Boîtes aux lettres - Style Split avec stat */}
      <ServiceSplitSection 
        id="boites"
        number="05"
        badge="Courrier & Signalétique"
        icon={Mailbox}
        title="Boîtes aux lettres & gravures"
        description="Remplacement, réparation et personnalisation de boîtes aux lettres. Service complet incluant la gravure de plaquettes nominatives pour immeubles et particuliers."
        features={[
          'Remplacement complet de boîtes aux lettres individuelles ou collectives',
          'Réparation et changement de cylindre de boîte aux lettres',
          'Remplacement de portillon et boîte à lait',
          'Gravure personnalisée sur plaquettes nominatives',
          'Fabrication de plaquettes gravées sur mesure',
        ]}
        stat={{
          value: '500',
          label: 'Boîtes aux lettres\ninstallées ou réparées',
        }}
        ctaText="Nous contacter"
        ctaHref="#contact"
        image="/img/u9737486426_A_modern_clean_entrance_of_a_Swiss_apartment_buil_90162c95-28bb-4038-a92a-0fa16e233806_1.png"
        imageAlt="Entrée d'immeuble avec boîtes aux lettres"
      />

      {/* Service 6: Entretien - Style Steps/Timeline */}
      <ServiceStepsSection 
        id="entretien"
        number="06"
        badge="Maintenance"
        title="Fermetures"
        titleAccent="et entretien."
        description="Installation, remplacement et entretien de systèmes de fermeture. Un entretien régulier garantit la longévité et le bon fonctionnement de vos équipements."
        steps={[
          {
            icon: Calendar,
            title: 'Prise de rendez-vous',
            description: 'Planifiez votre visite d\'entretien annuelle selon vos disponibilités.',
          },
          {
            icon: Wrench,
            title: 'Diagnostic complet',
            description: 'Inspection de tous les mécanismes : ferme-portes, charnières, serrures.',
          },
          {
            icon: RotateCw,
            title: 'Maintenance préventive',
            description: 'Lubrification, réglages et remplacement des pièces d\'usure.',
          },
          {
            icon: CheckCircle,
            title: 'Rapport & suivi',
            description: 'Compte-rendu détaillé et recommandations pour les années à venir.',
          },
        ]}
        ctaText="Planifier un entretien"
        ctaHref="#contact"
        image="/img/u9737486426_A_welder_in_a_workshop_working_on_a_stainless_ste_8cb99dae-b3f9-40f1-88db-74c3384aa5ae_3.png"
        imageAlt="Technicien en atelier"
      />

      {/* Final CTA */}
      <ServicesCTA />
    </>
  );
};
