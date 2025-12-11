import { createContext, useContext } from 'react';
import siteContent from '../content/site-content.json';

// Types for site content
export interface SiteContent {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    subtitle: string;
    title: string;
  };
  whyUs: {
    subtitle: string;
    title: string;
    years: string;
  };
  faq: {
    subtitle: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  serviceArea: {
    title: string;
    description: string;
    ctaTitle: string;
    ctaButton: string;
    phone: string;
  };
}

// Context
const ContentContext = createContext<SiteContent>(siteContent as SiteContent);

// Hook to use content
export function useContent() {
  return useContext(ContentContext);
}

// Provider component
export function ContentProvider({ children }: { children: React.ReactNode }) {
  return (
    <ContentContext.Provider value={siteContent as SiteContent}>
      {children}
    </ContentContext.Provider>
  );
}
