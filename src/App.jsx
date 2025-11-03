import React from 'react';
import HeaderCTA from './components/HeaderCTA';
import HeroSection from './components/HeroSection';
import OfferBenefitProof from './components/OfferBenefitProof';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <HeaderCTA />
      <HeroSection />
      <OfferBenefitProof />
      <FinalCTA />
    </div>
  );
}

export default App;
