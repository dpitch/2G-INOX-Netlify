import { NavItem, ServiceItem, EngagementItem, City } from './types';
import { 
  Clock, 
  ShieldCheck, 
  Handshake, 
  KeyRound, 
  Hammer, 
  Mailbox 
} from 'lucide-react';

export const PHONE_NUMBER = "021 647 46 26";
export const EMAIL = "info@2g-inox.ch";

export const NAV_LINKS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },                      // Page dédiée
  { label: 'Projets', href: '#projets', isAnchor: true },        // Anchor sur la page d'accueil (pour l'instant)
  { label: 'À propos', href: '#about', isAnchor: true },         // Anchor sur la page d'accueil (pour l'instant)
  { label: 'Contact', href: '#contact', isAnchor: true },        // Anchor sur la page d'accueil (pour l'instant)
  // Quand tu voudras des pages dédiées, change simplement:
  // { label: 'Projets', href: '/projets' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Dépannage & Serrurerie",
    description: "Ouverture de portes, changement de cylindres et mise en sécurité après effraction. Intervention rapide.",
    href: "#services",
    icon: KeyRound
  },
  {
    title: "Construction Métallique",
    description: "Soudure, réparation de barrières, portails et structures sur mesure (Acier, Inox, Alu).",
    href: "#services",
    icon: Hammer
  },
  {
    title: "Fermetures & Entretien",
    description: "Installation de boîtes aux lettres, ferme-portes et maintenance d'immeubles.",
    href: "#services",
    icon: Mailbox
  }
];

export const ENGAGEMENTS: EngagementItem[] = [
  {
    title: "Réactivité",
    description: "Intervention dépannage sous 24h.",
    icon: Clock
  },
  {
    title: "Sécurité",
    description: "Matériaux certifiés normes européennes (EN).",
    icon: ShieldCheck
  },
  {
    title: "Service",
    description: "Devis clair et conseils personnalisés.",
    icon: Handshake
  }
];

export const CITIES: City[] = [
  { name: "Lausanne" },
  { name: "Nyon" },
  { name: "Montreux" },
  { name: "Yverdon-les-Bains" },
];