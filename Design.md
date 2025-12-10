# 2G-INOX Design System & Architecture Guide

> **Source de Vérité** pour tout agent créant des pages sur le site 2G-INOX.  
> Esthétique : "Swiss Architectural Dark Mode" — Précision, lignes fines, noirs profonds, animations sophistiquées.

---

## 1. Philosophie Visuelle

### L'Esprit
- **Blueprint technique** + **montre de luxe** = "Industrial Precision"
- Chaque élément doit sembler posé sur une grille invisible
- Le vide (negative space) est aussi important que le contenu

### Anti-Patterns (INTERDIT)
| ❌ Ne pas faire | ✅ Faire à la place |
|-----------------|---------------------|
| Gradients violets/bleus | Utiliser l'accent orange ou des overlays subtils |
| Drop shadows lourdes | Utiliser des borders `border-white/5` ou `border-white/10` |
| Animations "bounce" | Utiliser `ease-luxury` (voir section animations) |
| Coins arrondis > `rounded-sm` | Garder les formes sharp/rigid |
| Texte blanc pur sur tout | Hiérarchiser avec `text-white`, `text-brand-muted`, `text-white/70` |

---

## 2. Structure du Projet

```
/
├── components/          # Tous les composants React
│   ├── Header.tsx       # Navigation fixe
│   ├── Hero.tsx         # Section héro (100vh)
│   ├── Footer.tsx       # Pied de page
│   └── [Section].tsx    # Chaque section = 1 composant
├── hooks/
│   ├── useScrollReveal.ts   # Animation au scroll (OBLIGATOIRE)
│   └── useLenis.ts          # Smooth scroll
├── constants.ts         # Données (NAV_LINKS, SERVICES, etc.)
├── types.ts             # Types TypeScript
├── App.tsx              # Assemblage des sections
└── index.html           # Config Tailwind + styles globaux
```

---

## 3. Configuration Tailwind (Référence)

### Couleurs de la marque
```javascript
colors: {
  brand: {
    dark: '#050505',      // Background principal (le plus profond)
    gray: '#0A0A0A',      // Variation légère
    surface: '#0F0F0F',   // Cartes, surfaces élevées
    accent: '#ff8c00',    // Orange (CTA, highlights)
    light: '#F5F5F5',     // Texte clair
    muted: '#737373',     // Texte secondaire
    border: '#262626'     // Bordures visibles
  }
}
// Couleur secondaire contextuelle : #47A52F (vert) pour certains états hover
```

### Courbes d'animation (CRUCIALES)
```javascript
transitionTimingFunction: {
  'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',  // Animation principale
  'sharp': 'cubic-bezier(0.85, 0, 0.15, 1)',  // Entrées/sorties rapides
}
```

### Durées standards
| Usage | Classe | Valeur |
|-------|--------|--------|
| Transitions rapides | `duration-500` | 500ms |
| Transitions standard | `duration-700` | 700ms |
| Animations de reveal | `duration-1000` | 1000ms |
| Animations lentes | `duration-1500` | 1500ms |
| Très lent (images) | `duration-[2000ms]` | 2000ms |

---

## 4. Typographie

### Police
- **Famille** : `'Manrope', sans-serif`
- **Import** : Google Fonts (déjà dans `index.html`)

### Hiérarchie
| Type | Classes |
|------|---------|
| **H1 (Hero)** | `text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.9] tracking-tight` |
| **H2 (Section)** | `text-4xl md:text-5xl font-medium leading-tight` |
| **H3 (Sous-titre)** | `text-2xl md:text-3xl font-medium` |
| **H4 (Card)** | `text-xl md:text-2xl font-medium` |
| **Body** | `text-sm md:text-base text-brand-muted leading-relaxed` |
| **Label/Badge** | `text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]` |

### Pattern de titre de section (OBLIGATOIRE)
```tsx
<h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 md:mb-6">
  Label de section
</h2>
<h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
  Titre principal <br className="hidden sm:block" />
  <span className="text-brand-muted">partie atténuée</span>
</h3>
```

---

## 5. Layout & Container

> ⚠️ **SECTION CRITIQUE** — Le non-respect de ces règles cause des problèmes de padding et de largeur sur tablette/mobile.

### 🔴 RÈGLE N°1 : Il existe DEUX types de sections

#### TYPE A : Sections avec Container (la majorité)
**Exemples** : Services, Process, ForWho, FAQ, Header content

```tsx
<section className="py-16 md:py-24 lg:py-32 bg-brand-dark">
  <div className="container mx-auto px-4 md:px-6 lg:px-12">
    {/* Tout le contenu ici */}
  </div>
</section>
```

#### TYPE B : Sections avec Image Full-Width + Texte (split layout)
**Exemples** : MetalHighlight, WhyUs

⚠️ **ATTENTION** : Ces sections n'ont PAS de container au niveau section, mais le côté contenu DOIT avoir un container interne pour mobile/tablette !

```tsx
<section className="bg-brand-dark border-b border-white/5">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Côté Image - prend toute la largeur */}
    <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
      <img src="..." className="w-full h-full object-cover" />
    </div>

    {/* Côté Contenu - DOIT avoir un container interne */}
    <div className="py-16 md:py-24 flex flex-col justify-center lg:border-l border-white/5">
      {/* ⚠️ CE WRAPPER EST OBLIGATOIRE */}
      <div className="container mx-auto px-4 md:px-6 lg:max-w-none lg:mx-0 lg:px-12">
        {/* Contenu ici */}
      </div>
    </div>
  </div>
</section>
```

### 🔴 RÈGLE N°2 : Pourquoi ce wrapper interne ?

| Breakpoint | Comportement |
|------------|--------------|
| Mobile/Tablette | `container mx-auto` → Le contenu a la même largeur max que les autres sections |
| Desktop (lg+) | `lg:max-w-none lg:mx-0` → Le container est désactivé, le contenu remplit la cellule du grid |

**Sans ce wrapper** : Sur tablette, le texte s'étale sur toute la largeur de l'écran alors que les autres sections sont centrées avec une largeur max. Cela crée une incohérence visuelle flagrante.

### Container principal (pour sections TYPE A)
```tsx
<div className="container mx-auto px-4 md:px-6 lg:px-12">
  {/* Contenu */}
</div>
```

### Padding de section
```tsx
// Standard (TYPE A avec container)
className="py-16 md:py-24 lg:py-32"

// Pour les grids split (TYPE B) - le padding est sur le côté contenu, pas la section
// Section : pas de py-*
// Côté contenu : className="py-16 md:py-24"

// Hero (pleine hauteur)
className="h-screen" ou className="min-h-screen"
```

### Bordures entre sections
```tsx
// Standard
className="border-b border-white/5"

// Pour le côté contenu des grids split (visible seulement en desktop)
className="lg:border-l border-white/5"
```

### Grille standard (12 colonnes)
```tsx
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
  <div className="md:col-span-4">...</div>
  <div className="md:col-span-8">...</div>
</div>
```

---

## 6. Animations & Interactions

### A. Hook useScrollReveal (OBLIGATOIRE pour chaque section)

```tsx
import { useScrollReveal } from '../hooks/useScrollReveal';

export const MaSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1); // threshold 10%

  return (
    <section 
      ref={ref} 
      className={`py-32 bg-brand-dark ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Contenu avec animations basées sur isVisible */}
    </section>
  );
};
```

### B. Pattern de Fade-in standard
```tsx
<div className={`
  transition-all duration-1000 ease-luxury 
  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
`}>
  Contenu
</div>
```

### C. Masked Text Reveal (Titres importants)
```tsx
<h1 className="text-5xl font-medium">
  <span className="mask-text">
    <span className="mask-text-content delay-100">Première ligne</span>
  </span>
  <span className="mask-text">
    <span className="mask-text-content delay-300 text-brand-muted">Deuxième ligne.</span>
  </span>
</h1>
```

### D. Draw Lines (Lignes architecturales)
```tsx
{/* Ligne verticale qui se dessine de haut en bas */}
<div className={`
  absolute left-0 top-0 h-full w-px bg-white/10 
  origin-top transition-transform duration-1000 ease-luxury
  ${isVisible ? 'scale-y-100' : 'scale-y-0'}
`}></div>

{/* Ligne horizontale qui se dessine de gauche à droite */}
<div className={`
  h-px w-full bg-white/10 
  origin-left transition-transform duration-1000 ease-luxury
  ${isVisible ? 'scale-x-100' : 'scale-x-0'}
`}></div>
```

### E. Curtain Reveal (Images)
```tsx
<div className="curtain-reveal delay-200">
  <img src="..." className="w-full h-full object-cover" />
</div>
// CSS dans index.html :
// .curtain-reveal { clip-path: inset(0 100% 0 0); }
// .is-visible .curtain-reveal { clip-path: inset(0 0 0 0); }
```

### F. Staggering (Listes/Grilles)
```tsx
{items.map((item, index) => (
  <div
    key={index}
    className={`transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {item}
  </div>
))}
```

### G. Pattern "mounted" (Animations initiales - Hero/Header)
```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 100);
  return () => clearTimeout(timer);
}, []);

return (
  <section className={mounted ? 'is-visible' : ''}>
    <div className={`transition-all duration-1000 ease-luxury ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      ...
    </div>
  </section>
);
```

---

## 7. Composants UI Récurrents

### A. Badge/Label de section
```tsx
<div className="inline-flex items-center gap-3 pl-4 border-l border-brand-accent">
  <span className="text-[10px] font-bold text-brand-accent tracking-[0.25em] uppercase">
    Label
  </span>
</div>
```

### B. Indicateur "Live" (Urgence 24/7)
```tsx
<div className="flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></span>
  Intervention 24h
</div>
```

### C. Bouton Primaire (CTA urgent)
```tsx
<a className="group relative overflow-hidden bg-white text-brand-dark px-10 py-5 min-w-[220px] text-center transition-transform duration-500 hover:-translate-y-1">
  {/* Background qui slide au hover */}
  <div className="absolute inset-0 w-full h-full bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury"></div>
  <span className="relative z-10 font-bold text-sm uppercase tracking-widest group-hover:text-brand-dark transition-colors">
    Urgence 24/7
  </span>
</a>
```

### D. Bouton Secondaire (Lien avec flèche)
```tsx
import { ArrowRight } from 'lucide-react';

<a className="group flex items-center gap-4 text-white hover:text-brand-accent transition-all duration-500 hover:pl-2">
  <span className="text-sm font-medium uppercase tracking-widest">Découvrir</span>
  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-luxury" />
</a>
```

### E. Bouton Tertiaire (Lien qui s'étend)
```tsx
<a className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-accent transition-colors">
  Découvrir
  <div className="w-0 group-hover:w-8 transition-all duration-500 ease-luxury h-px bg-brand-accent"></div>
</a>
```

### F. Card avec hover gradient
```tsx
<div className="group relative p-10 border border-white/5">
  {/* Hover gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  
  <div className="relative z-10">
    {/* Contenu */}
  </div>
</div>
```

### G. Numéro de step/index
```tsx
<span className="text-xs font-mono text-white/20 group-hover:text-brand-accent transition-colors">
  0{index + 1}
</span>
// ou avec badge
<div className="bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-sm">
  01
</div>
```

### H. Accordéon (FAQ)
```tsx
const [openIndex, setOpenIndex] = useState<number | null>(0);

<div className={`border border-white/10 bg-brand-surface/30 backdrop-blur-sm rounded-sm 
  ${isOpen ? 'border-brand-accent/30 bg-brand-accent/5' : ''}`}>
  <button
    onClick={() => setOpenIndex(isOpen ? null : index)}
    className="w-full flex items-center justify-between p-6 text-left"
  >
    <span className={`font-medium ${isOpen ? 'text-brand-accent' : 'text-white'}`}>
      Question
    </span>
    <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
  </button>
  <div className={`overflow-hidden transition-all duration-500 ease-luxury ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
    <div className="px-6 pb-6">
      <div className="w-12 h-px bg-brand-accent/30 mb-4"></div>
      <p className="text-brand-muted">Réponse</p>
    </div>
  </div>
</div>
```

---

## 8. Images & Médias

### Traitement standard
```tsx
<img 
  src="/img/..." 
  alt="Description accessible"
  className="w-full h-full object-cover"
/>
```

### Avec effet hover (zoom subtil)
```tsx
<div className="overflow-hidden">
  <img 
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s] ease-luxury"
  />
</div>
```

### Avec overlay gradient
```tsx
<div className="relative">
  <img className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
</div>
```

### Avec teinte colorée (overlay)
```tsx
<div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
// ou vert
<div className="absolute inset-0 bg-[#47A52F]/10 mix-blend-overlay"></div>
```

---

## 9. Icônes (Lucide React)

### Import
```tsx
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
```

### Tailles standards
| Context | Size | strokeWidth |
|---------|------|-------------|
| Dans du texte | 16-20 | 1.5 (défaut) |
| Dans une card | 24-32 | 1 |
| Grande icône | 40+ | 1 |

### Pattern responsive
```tsx
<Icon size={20} className="md:hidden" />
<Icon size={24} className="hidden md:block lg:hidden" strokeWidth={1} />
<Icon size={32} className="hidden lg:block" strokeWidth={1} />
```

---

## 10. Backgrounds & Effets

### Background dot pattern
```tsx
<div 
  className="absolute inset-0 opacity-[0.02]" 
  style={{ 
    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
    backgroundSize: '32px 32px'
  }}
></div>
```

### Blur gradient (accent glow)
```tsx
<div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
```

### Ligne de séparation centrale (layout split)
```tsx
<div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
```

---

## 11. Responsive Design

### Breakpoints Tailwind
| Prefix | Min-width | Usage typique |
|--------|-----------|---------------|
| (défaut) | 0px | Mobile portrait |
| `sm:` | 640px | Mobile paysage |
| `md:` | 768px | **⚠️ Tablette - TESTER ABSOLUMENT** |
| `lg:` | 1024px | Desktop (grids passent en 2 colonnes) |
| `xl:` | 1280px | Grand écran |

### 🔴 Test obligatoire à 768px (tablette)

> **C'est le breakpoint où les problèmes de layout sont les plus visibles.**

À 768px, vérifier :
- [ ] Les sections TYPE B (split image+texte) ont le même alignement que les sections TYPE A
- [ ] Le texte ne s'étale pas sur toute la largeur
- [ ] Les paddings latéraux sont cohérents entre toutes les sections

### Pattern de visibilité
```tsx
// Cacher sur mobile
className="hidden md:block"

// Afficher uniquement sur mobile
className="md:hidden"

// Line break conditionnel
<br className="hidden sm:block" />

// Bordure visible seulement en desktop (pour les grids split)
className="lg:border-l border-white/5"
```

### Grilles responsives typiques
```tsx
// Services (1 → 3 colonnes)
className="grid grid-cols-1 md:grid-cols-3"

// Deux colonnes pour split layout (1 → 2)
// ⚠️ Utiliser lg: pas md: pour que le stack se fasse plus tard
className="grid grid-cols-1 lg:grid-cols-2"

// Steps (1 → 2 → 4)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

### Pattern pour désactiver un style en desktop
```tsx
// Container actif en mobile/tablette, désactivé en desktop
className="container mx-auto lg:max-w-none lg:mx-0"

// Max-width en mobile/tablette, pas en desktop
className="lg:max-w-lg"  // max-width seulement en desktop
className="max-w-lg lg:max-w-none"  // max-width seulement en mobile/tablette
```

---

## 12. Données & Constants

### Fichier constants.ts
Toutes les données réutilisables doivent être dans `constants.ts` :

```tsx
// constants.ts
export const PHONE_NUMBER = "021 647 46 26";
export const EMAIL = "info@2g-inox.ch";

export const NAV_LINKS: NavItem[] = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  // ...
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Titre",
    description: "Description",
    href: "#",
    icon: KeyRound // Icône Lucide
  },
  // ...
];
```

### Types dans types.ts
```tsx
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}
```

---

## 13. Checklist Nouvelle Page

> ⚠️ **VÉRIFIER ABSOLUMENT** ces points avant de livrer. Les erreurs de layout sont les plus fréquentes.

### 🔴 CRITIQUE - Layout (vérifier EN PREMIER)

- [ ] **Identifier le type de section** : TYPE A (avec container) ou TYPE B (image full-width + texte)
- [ ] **TYPE A** : La section a `container mx-auto px-4 md:px-6 lg:px-12` qui wrap tout le contenu
- [ ] **TYPE B** : Le côté contenu a le wrapper `container mx-auto px-4 md:px-6 lg:max-w-none lg:mx-0 lg:px-12`
- [ ] **Tester en mode tablette** (~768px) : Le contenu texte doit avoir la MÊME largeur que les autres sections
- [ ] Section padding correct : `py-16 md:py-24 lg:py-32` (TYPE A) ou `py-16 md:py-24` sur le côté contenu (TYPE B)

### Standard

- [ ] Utilise `useScrollReveal` sur chaque section
- [ ] Titres avec pattern Label accent + H3 avec span muted
- [ ] Toutes les animations utilisent `ease-luxury`
- [ ] Staggering sur les listes (delay incrémental)
- [ ] Images avec overlay gradient
- [ ] Bordures fines `border-white/5` ou `border-white/10`
- [ ] Pas de coins arrondis > `rounded-sm`
- [ ] Responsive testé (mobile, md:768px, lg:1024px)
- [ ] Données dans `constants.ts` si réutilisables
- [ ] Icônes avec strokeWidth={1} pour les grandes tailles

---

## 14. Exemples de Structure de Section

### 14.1 TYPE A : Section Standard (avec container)

```tsx
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export const ExampleSectionTypeA: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 lg:py-32 bg-brand-dark relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Optional: Background effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
      
      {/* ✅ Container qui wrap tout */}
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className={`max-w-3xl mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 md:mb-6">
            Label de section
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Titre principal <br className="hidden sm:block" />
            <span className="text-brand-muted">avec partie atténuée</span>
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className={`group p-8 border border-white/5 transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <h4 className="text-xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-luxury">
                Titre {item}
              </h4>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Description du contenu.
              </p>
              <a className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-accent transition-colors">
                En savoir plus
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 14.2 TYPE B : Section Image Full-Width + Texte (split layout)

> ⚠️ **TRÈS IMPORTANT** : Respecter exactement cette structure pour éviter les problèmes de largeur en tablette.

```tsx
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export const ExampleSectionTypeB: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className={`bg-brand-dark border-b border-white/5 ${isVisible ? 'is-visible' : ''}`}
    >
      {/* ❌ PAS de container ici - le grid prend toute la largeur */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Côté Image - Full width */}
        <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] lg:h-auto overflow-hidden">
          <img
            src="/img/example.png"
            alt="Description"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent lg:from-transparent lg:via-brand-dark/30 lg:to-brand-dark"></div>
        </div>

        {/* Côté Contenu */}
        <div className="py-16 md:py-24 flex flex-col justify-center lg:border-l border-white/5">
          
          {/* ✅ WRAPPER OBLIGATOIRE - Container pour mobile/tablette, désactivé en desktop */}
          <div className="container mx-auto px-4 md:px-6 lg:max-w-none lg:mx-0 lg:px-12">
            
            {/* Titre */}
            <div className={`mb-8 md:mb-10 transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 md:mb-6">
                Label
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
                Titre de la section
              </h3>
            </div>
            
            {/* Contenu */}
            <div className={`space-y-4 md:space-y-6 mb-8 md:mb-10 lg:max-w-lg transition-all duration-1000 delay-500 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-brand-muted leading-relaxed text-base md:text-lg">
                Texte principal.
              </p>
              <p className="text-brand-muted leading-relaxed text-sm md:text-base">
                Texte secondaire.
              </p>
            </div>
            
            {/* CTA */}
            <div className={`transition-all duration-1000 delay-700 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#" className="group inline-flex items-center gap-4 text-white hover:text-brand-accent transition-colors">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                  Call to action
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent transition-all">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Différences clés entre TYPE A et TYPE B

| Aspect | TYPE A (Standard) | TYPE B (Split Image) |
|--------|-------------------|----------------------|
| Container | Au niveau section | Dans le côté contenu uniquement |
| Padding section | `py-16 md:py-24 lg:py-32` sur la section | `py-16 md:py-24` sur le côté contenu |
| Image | Dans le container | Full-width, hors container |
| Tablette | Tout centré automatiquement | ⚠️ Nécessite wrapper spécial |

---

## 15. Notes Finales

### Performance
- Les images doivent être optimisées (WebP si possible)
- Utiliser `loading="lazy"` sur les images below the fold
- Éviter trop de blurs superposés (gourmand en GPU)

### Accessibilité
- Toujours mettre un `alt` descriptif sur les images
- Les liens doivent avoir un texte explicite
- Contraste suffisant (le muted sur dark est limite, utiliser pour texte secondaire uniquement)

### Smooth Scroll
Le site utilise **Lenis** pour le smooth scroll. Le hook `useLenis` est appelé une seule fois dans `App.tsx`. Ne pas le rappeler dans les sous-composants.
