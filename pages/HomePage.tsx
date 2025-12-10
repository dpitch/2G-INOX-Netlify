import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBadges } from '../components/TrustBadges';
import { Services } from '../components/Services';
import { ForWho } from '../components/ForWho';
import { Process } from '../components/Process';
import { MetalHighlight } from '../components/MetalHighlight';
import { WhyUs } from '../components/WhyUs';
import { FAQ } from '../components/FAQ';
import { ServiceArea } from '../components/ServiceArea';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <ForWho />
      <Process />
      <MetalHighlight />
      <WhyUs />
      <FAQ />
      <ServiceArea />
    </>
  );
};
