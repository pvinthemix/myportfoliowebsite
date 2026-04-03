import React from 'react';

const metrics = [
  {
    value: '200%+',
    label: 'ARR Growth',
    description:
      'Helped drive over 200% ARR growth by leading product initiatives that expanded platform capabilities, improved investor-facing workflows, and increased commercial impact.',
  },
  {
    value: 'AI',
    label: 'AI Product Development',
    description:
      'Fluent in modern AI technologies including LLMs, agent-based workflows, and prompt-driven systems \u2014 applying Claude, GPT, and LangChain to automate investor research, prospecting, and outreach.',
  },
  {
    value: 'Platform',
    label: 'Platform Innovation',
    description:
      'Led development of new platform capabilities including customizable landing pages and investor engagement tools that improved usability and increased product value.',
  },
];

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-2">
            Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Impact & Achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`animate-on-scroll anim-scale delay-${index + 1} group relative bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
            >
              <div className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                {metric.value}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {metric.label}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
