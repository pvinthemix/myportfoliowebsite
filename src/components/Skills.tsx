import React from 'react';

const skillCategories = [
  {
    name: 'AI & Automation',
    skills: [
      'GPT & Claude.ai Integration',
      'AI Prototyping',
      'Agents',
      'Predictive Analytics',
    ],
  },
  {
    name: 'Product Development',
    skills: [
      'SaaS Strategy',
      'Agile/Scrum',
      'Roadmap Planning',
      'Feature Prioritization',
    ],
  },
  {
    name: 'Technical Skills',
    skills: [
      'JavaScript/React',
      'API Development',
      'SQL & Analytics',
      'UI/UX Design',
    ],
  },
  {
    name: 'Domain Expertise',
    skills: [
      'SaaS Product Management',
      'B2B Software',
      'Workflow Automation',
      'Enterprise Solutions',
      'AI & Data-Driven Products',
      'Fintech & Investment Platforms',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Skills & Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`animate-on-scroll anim-scale delay-${index + 1} bg-white p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
