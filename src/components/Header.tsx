import React from 'react';
import { Mail, Linkedin, ArrowDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 z-0" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100/30 rounded-full blur-3xl z-0 animate-float" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-gray-100/50 rounded-full blur-3xl z-0 animate-float-slow" />
      <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-indigo-100/20 rounded-full blur-3xl z-0 animate-float-slow" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-3 animate-fade-in-down" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Product Manager & Software Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.1] animate-blur-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Paul Vangelakos
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            Building scalable SaaS products at the intersection of AI, workflow automation, and fintech. Turning complex problems into elegant, user-centric solutions.
          </p>
          <div className="flex flex-wrap items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
            <a
              href="mailto:paulvangelakos@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/paulvangelakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-gray-700 text-sm font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#impact"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown size={20} />
      </a>
    </header>
  );
}
