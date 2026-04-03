import React from 'react';
import { ArrowUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import ImpactMetrics from './components/ImpactMetrics';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Header />
      <main>
        <ImpactMetrics />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-white border-t border-gray-100 py-6 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Paul Vangelakos
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-600 transition-colors group"
            aria-label="Back to top"
          >
            Top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
