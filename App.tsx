
import React, { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { AliveBackground } from './components/ui/AliveBackground';

// Lazy load components below the fold
const Authority = lazy(() => import('./components/Authority').then(m => ({ default: m.Authority })));
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const PainPoints = lazy(() => import('./components/PainPoints').then(m => ({ default: m.PainPoints })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-cyan selection:text-brand-black overflow-x-hidden relative">
      <AliveBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Authority />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PainPoints />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
