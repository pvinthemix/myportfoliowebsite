import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll anim-blur">
          <p className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            I bring experience leading product strategy, AI-driven workflow
            automation, and SaaS innovation across private equity, venture
            capital, fintech, and enterprise software. If you're looking
            for a product leader who bridges technical depth with business
            impact, I'd love to chat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:paulvangelakos@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/paulvangelakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-gray-700 text-sm font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
