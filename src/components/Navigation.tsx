import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Impact', href: '#impact' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className={`text-lg font-semibold tracking-tight transition-colors hover:text-blue-400 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            PV
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isActive
                      ? 'text-blue-500'
                      : scrolled
                      ? 'text-gray-500'
                      : 'text-white/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="mailto:paulvangelakos@gmail.com"
              className={`text-sm font-medium px-4 py-2 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 ${
                scrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled
                ? 'text-gray-600 hover:text-gray-900'
                : 'text-white/70 hover:text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`pb-4 border-t ${scrolled ? 'border-gray-100' : 'border-white/10'}`}>
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-blue-500 bg-blue-500/10'
                        : scrolled
                        ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="mailto:paulvangelakos@gmail.com"
                className={`text-sm font-medium text-center mt-2 px-4 py-2 rounded-full transition-colors ${
                  scrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
