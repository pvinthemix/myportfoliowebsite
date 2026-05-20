import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface CaseStudyDetail {
  context: string;
  role: string[];
  agenticArchitecture?: string[];
  howBuilt?: string[];
  outcomes: string[];
  link: string;
  linkText: string;
}

interface CaseStudy {
  title: string;
  displayTitle?: string;
  company: string;
  description: string;
  impact: string;
  image: string;
  alt?: string;
  detail: CaseStudyDetail;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'ShelfTalk',
    displayTitle: 'ShelfTalk \u2014 AI Book-to-Podcast Platform',
    company: 'AI Product Development',
    description:
      'Book cover to podcast \u2014 built on the Gemini API with AI agents, Claude Code, and Codex. A PM who ships.',
    impact: 'Agentic AI pipeline from image to audio',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    detail: {
      context:
        'ShelfTalk turns a book cover photo into a full podcast episode with zero manual production. Built end-to-end to develop real fluency with the modern AI toolchain.',
      role: [
        'Multi-model pipeline on Google Cloud: Gemini API for vision, LLM generation, and TTS',
        'Podcast host engine with 5 AI personas, mood injection, and prompt engineering',
        'Monetization via Stripe with Vercel Feature Flags for device-based free tier tracking',
      ],
      agenticArchitecture: [
        'Source Agent \u2014 scores fetched content for relevance, depth, and copyright compliance',
        'Script Agent \u2014 generates and self-refines podcast scripts in an autonomous loop',
        'Audio Agent \u2014 measures duration, detects silent gaps, and corrects output quality',
      ],
      howBuilt: [
        'Built with Claude Code and OpenAI Codex as AI-assisted dev tools',
        'Google Books API and Open Library API for book resolution and source discovery',
        'Shipped on Next.js, Supabase, and Vercel',
      ],
      outcomes: [
        'Idea to deployed, monetization-ready product with autonomous quality control',
        'Hands-on fluency across Google Cloud AI, agentic workflows, and prompt engineering',
      ],
      link: 'https://shelftalk-nu.vercel.app/',
      linkText: 'ShelfTalk Live Product',
    },
  },
  {
    title: 'ShareSecure Replatform',
    displayTitle: 'ShareSecure — Platform Modernization',
    company: 'SaaS Fintech Platform',
    description:
      'Drove the full replatform of ShareSecure, replacing a slow, feature-blocked stack with a modern React frontend, new database, and AWS EventBridge event architecture.',
    impact: '15-second load times to milliseconds — unlocking Landing Pages and Workspaces, key drivers of retention and revenue',
    image: '/images/sharesecure-vdr.png',
    alt: 'ShareSecure VDR Portal Activity Feed',
    detail: {
      context:
        'ShareSecure was running on a legacy stack that had become a bottleneck: 15-second page load times, an unreliable CRM connection, and an architecture that made new feature development impractical. A full replatform was needed to restore product velocity and deliver the modern investor experience the market expected.',
      role: [
        'Defined the replatform scope and prioritization strategy alongside engineering leadership',
        'Partnered with engineering on the migration to a new database, AWS EventBridge event architecture, React frontend, and Material UI component library',
        'Translated architectural improvements into a product roadmap that capitalized on the new foundation immediately',
      ],
      howBuilt: [
        'React frontend with Material UI component library for a consistent, modern design system',
        'AWS EventBridge for event-driven integrations, replacing the brittle CRM connection with a reliable, decoupled event bus',
      ],
      outcomes: [
        'Page load times dropped from 15 seconds to milliseconds',
        'Landing Pages and Workspaces — both previously blocked by the old stack — shipped within weeks of the replatform completing',
        'Modernized platform directly led to signing the largest enterprise contract in company history',
      ],
      link: 'https://altvia.com/vdr-portal/',
      linkText: 'ShareSecure Platform',
    },
  },
  {
    title: 'Landing Pages',
    company: 'SaaS Fintech Platform',
    description:
      'Led development of customized investor portals, transforming fundraising and reporting workflows with enhanced engagement features.',
    impact: '25% increase in investor engagement',
    image: '/images/landingpage-ss.png',
    detail: {
      context:
        'Led research and market validation with Investor Relations & Fundraising teams to identify gaps in investor onboarding and engagement. Defined and delivered MVP for customized, branded investor portals with embedded fund materials, reporting dashboards, and targeted communications.',
      role: [
        'Led research and market validation with Investor Relations & Fundraising teams',
        'Defined MVP for customized, branded investor portals',
        'Spearheaded go-to-market strategy for rapid adoption',
        'Delivered ongoing enhancements based on customer analytics',
      ],
      outcomes: [
        '25% increase in investor engagement',
        'Reduced LP onboarding time from weeks to days',
        'Expanded market reach with tailored investor experiences',
      ],
      link: 'https://altvia.com/sharesecure-landing-pages-and-workspaces/',
      linkText: 'Landing Pages Blog Post',
    },
  },
  {
    title: 'Workspaces',
    company: 'SaaS Fintech Platform',
    description:
      'Recognized a market gap in private equity and venture capital for structured, secure collaboration spaces to replace fragmented document-sharing workflows.',
    impact: '30% increase in adoption',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    detail: {
      context:
        'Identified market need for structured, secure collaboration spaces to replace fragmented document-sharing workflows. Designed and implemented permission-controlled workspace environment with pre-configured templates for fundraising, due diligence, and portfolio monitoring.',
      role: [
        'Designed permission-controlled workspace environment',
        'Developed pre-configured workspace templates',
        'Aligned product with broader SaaS ecosystem',
        'Drove cross-sell of complementary investor management tools',
      ],
      outcomes: [
        '30% increase in adoption',
        'Improved customer retention through essential collaboration tools',
        'Higher revenue per customer through up-sell strategy',
      ],
      link: 'https://www.prweb.com/releases/altvia-elevates-investor-engagement-and-strengthens-digital-brand-with-innovative-sharesecure-features-landing-pages-and-workspaces-302243994.html',
      linkText: 'Workspaces Blog Post',
    },
  },
  {
    title: 'AI Powered Investor Relations Operations',
    company: 'SaaS Fintech Platform',
    description:
      'Led product development of AI driven workflows for investor relations operations with secure LP communications and document distribution.',
    impact:
      'Automated investor communications with secure, permission based document distribution',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    detail: {
      context:
        'Led product development of AI driven workflows for investor relations operations, enabling secure distribution of capital calls, K 1s, and investor reports. Focused on automating LP communications while improving permission control, engagement visibility, and operational efficiency across investor communications.',
      role: [
        'Defined the MVP for AI enabled investor communications and secure LP document distribution',
        'Partnered with engineering to implement LLM driven workflow automation using Claude, GPT, and LangChain',
        'Designed automated workflows for capital calls, investor reporting, and fund communications',
        'Developed engagement tracking to measure LP interaction with distributed materials',
      ],
      outcomes: [
        'Reduced manual investor communication and fundraising operations through automated workflows',
        'Enabled secure, permission based distribution of sensitive fund documents across LPs and funds',
        'Introduced engagement visibility into investor communications and document access',
        'Positioned AI driven investor relations operations as a differentiated capability within the platform',
      ],
      link: 'https://altvia.com/ir-operations/',
      linkText: 'IR Operations',
    },
  },
  {
    title: 'Online Courses',
    company: 'LMS platform',
    description:
      'Spearheaded the launch of Online Courses as a core feature, leveraging UX design and advanced frontend capabilities to enhance user engagement and drive client acquisition.',
    impact: 'Client acquisition of 2 major enterprise clients',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    detail: {
      context:
        'Spearheaded the development and launch of a comprehensive online learning platform, focusing on user experience and engagement metrics.',
      role: [
        'Led product strategy and roadmap development',
        'Implemented analytics-driven feature prioritization',
        'Coordinated cross-functional team collaboration',
        'Managed enterprise client relationships',
      ],
      outcomes: [
        'Successful acquisition of 2 major enterprise clients: Department of Defense, FEMA',
      ],
      link: 'https://deployedmedicine.com/',
      linkText: 'Online Courses Platform Case Study',
    },
  },
  {
    title: 'B2C to B2B Pivot & 3PL Solution',
    company: 'Series B Startup',
    description:
      'Partnered with the founder to pivot from B2C to B2B, leading cross-functional collaboration with product and engineering to launch a 3PL/Inventory Management solution integrated with Shopify.',
    impact: 'Successful market transition and increased B2B adoption',
    image:
      'https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=800&q=80',
    detail: {
      context:
        'Successfully led the strategic pivot from B2C to B2B model, developing and launching an integrated 3PL solution.',
      role: [
        'Developed integrated 3PL solution architecture',
        'Led cross-functional team collaboration',
        'Implemented Shopify integration strategy',
      ],
      outcomes: [
        'Successful market transition to B2B',
        'Expanded market reach by 30%',
      ],
      link: 'https://sg.finance.yahoo.com/news/shyp-seamless-outsourced-fulfillment-shopify-130000140.html',
      linkText: 'B2B Pivot Success Story',
    },
  },
  {
    title: 'Mobile Age Verification Compliance',
    company: 'Mobile Platform Compliance',
    description:
      'Led cross platform age verification workflows across iOS and Android to enforce app store regulatory requirements with minimal user disruption.',
    impact: 'Enabled compliant mobile age gating with low-friction user experience',
    image:
      'https://images.unsplash.com/vector-1761385079498-69fa4adce7dc?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Smartphone fingerprint security image',
    detail: {
      context:
        'Led product development for mobile age verification across iOS and Android to meet new app store regulatory requirements. Designed a cross platform compliance framework using Apple and Google age signal APIs to enforce regulatory rules while minimizing disruption to existing users.',
      role: [
        'Defined product requirements and business rules for age verification workflows across iOS and Android',
        'Partnered with engineering to integrate Apple Declared Age Range APIs and Google Age Signals',
        'Designed approval, rejection, and parental consent flows based on regulatory requirements',
        'Structured a scalable framework to support jurisdiction specific compliance rules in the future',
      ],
      outcomes: [
        'Enabled platform compliance with emerging mobile age verification requirements',
        'Reduced legal and platform risk through automated regulatory gating in the mobile apps',
        'Established a reusable compliance framework for future regional regulations',
      ],
      link: '',
      linkText: '',
    },
  },
  {
    title: 'RE2000 Hardware Platform Launch',
    company: 'Biometric Workforce Platform',
    description:
      'Led product development for the RE2000 biometric time clock across hardware, firmware, and SaaS integrations to modernize workforce clock in workflows.',
    impact:
      'Delivered next-generation biometric hardware integrated with the uAttend platform',
    image:
      'https://images.unsplash.com/vector-1761645174671-7f6468282430?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern access control hardware terminal',
    detail: {
      context:
        'Led product development for the RE2000 biometric workforce time clock, a next generation hardware device designed to improve reliability, authentication accuracy, and workforce clock in workflows. The initiative required coordination across hardware manufacturing, firmware, and SaaS platform integrations.',
      role: [
        'Defined product requirements and feature scope for the RE2000 hardware release',
        'Partnered with offshore manufacturing and engineering teams on device capabilities, firmware requirements, and platform compatibility',
        'Coordinated cross functional delivery across hardware vendors, firmware teams, and the cloud platform',
      ],
      outcomes: [
        'Delivered a workforce time clock integrated with the uAttend platform',
        'Expanded the product platform with a modern hardware offering',
      ],
      link: '',
      linkText: '',
    },
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-600 flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseStudySection({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const isEven = index % 2 === 0;
  const d = study.detail;

  return (
    <div className={`animate-on-scroll delay-${(index % 3) + 1}`}>
      {/* Main row: image + summary */}
      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-6 lg:gap-10 items-center`}
      >
        {/* Image */}
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={study.image}
              alt={study.alt ?? study.title}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Summary content */}
        <div className="w-full lg:w-3/5">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2">
            {study.company}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {study.displayTitle ?? study.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm mb-3">
            {study.description}
          </p>
          <p className="text-sm font-semibold text-gray-900 mb-4">
            {study.impact}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {d.link && (
              <a
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors"
              >
                {d.linkText}
                <ArrowUpRight size={14} />
              </a>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              {expanded ? 'Show less' : 'See full breakdown'}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable detail panel */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                Context & Challenge
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {d.context}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                Product Leadership & Strategy
              </h4>
              <BulletList items={d.role} />
            </div>
            {d.agenticArchitecture && (
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                  Agentic Architecture
                </h4>
                <BulletList items={d.agenticArchitecture} />
              </div>
            )}
            {d.howBuilt && (
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                  How It Was Built
                </h4>
                <BulletList items={d.howBuilt} />
              </div>
            )}
            <div className={d.agenticArchitecture ? 'md:col-span-2' : ''}>
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                Impact & Results
              </h4>
              <BulletList items={d.outcomes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-medium tracking-widest text-blue-600 uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Product Case Studies
          </h2>
        </div>
        <div className="space-y-14">
          {caseStudies.map((study, index) => (
            <CaseStudySection key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
