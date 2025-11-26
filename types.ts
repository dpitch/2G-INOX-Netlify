import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon; // Using Lucide as a proxy for the requested style
}

export interface EngagementItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface City {
  name: string;
}