import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <NavBar />
      <main>
        <Hero />
        <ImpactStats />
        <Programs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
