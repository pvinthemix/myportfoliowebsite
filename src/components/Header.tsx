import React from 'react';
import { Mail, Linkedin, ArrowDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden bg-[#0a0a1a]">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 z-0">
        <div className="mesh-gradient" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,26,0.4)_100%)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3 animate-fade-in-down bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            Product Manager & Software Engineer
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1] animate-blur-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Paul Vangelakos
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Building scalable SaaS products at the intersection of AI, workflow
            automation, and fintech. Turning complex problems into elegant,
            user-centric solutions.
          </p>
          <div
            className="flex flex-wrap items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
          >
            <a
              href="mailto:paulvangelakos@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/paulvangelakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-200"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown size={20} />
      </a>
    </header>
  );
}
