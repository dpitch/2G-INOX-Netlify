import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Services } from './components/Services';
import { ForWho } from './components/ForWho';
import { Process } from './components/Process';
import { MetalHighlight } from './components/MetalHighlight';
import { WhyUs } from './components/WhyUs';
import { FAQ } from './components/FAQ';
import { ServiceArea } from './components/ServiceArea';
import { Footer } from './components/Footer';
import { useLenis } from './hooks/useLenis';

function App() {
  // Smooth scroll with Lenis
  useLenis();

  return (
    <div className="bg-brand-dark min-h-screen flex flex-col text-white font-sans selection:bg-brand-accent selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        <Services />
        <ForWho />
        <Process />
        <MetalHighlight />
        <WhyUs />
        <FAQ />
        <ServiceArea />
      </main>
      <Footer />
    </div>
  );
}

export default App;