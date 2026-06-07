// ─────────────────────────────────────────────────────────────────────────────
// 4P3X Verse™ Gateway — SSOT Config
// Powered by 4P3X Intelligent AI™  Created by Kyzel Kreates™
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: '4P3X Verse™ Gateway',
  headline: 'One intelligent entry point for five portfolio paths.',
  strapline: 'Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™',
  intro: 'Answer a few questions and the gateway routes investors, partners, employers, grant funders, clients, and technical reviewers to the strongest portfolio for their purpose.',
  shortPositioning: 'The 4P3X Verse™ is not a collection of random apps. It is a modular AI-assisted software ecosystem showing how one reusable architecture can become many different sector-ready products. Its combination of live demos, demo/live switching, AI guidance layers, PWA-first thinking, and portfolio-specific pathways makes it a highly distinctive system in the current software landscape.',
  fullPositioning: 'The 4P3X Verse™ is a distinctive modular AI-assisted product architecture designed to show how one reusable software foundation can evolve into many sector-ready products. Rather than presenting isolated app demos, it demonstrates a connected ecosystem of dashboards, PWAs, AI guidance layers, demo/live mode switching, backend-ready workflows, and controlled refactoring patterns. While modular software and AI-assisted development both exist, the 4P3X Verse™ combines them into a highly unusual portfolio system: one architecture, multiple live product directions, and a clear pathway from working demos to real deployable products.',
  landscapeLogo: '/logos/landscape-logo.png',
  boxLogo: '/logos/box-logo.png'
};

// ─── Five Portfolio Routes (SSOT) ────────────────────────────────────────────
export const PORTFOLIO_ROUTES = {
  investor: {
    id: 'investor',
    title: 'Investor Portfolio',
    shortTitle: 'Investor',
    audience: 'For investors, backers and people assessing commercial potential.',
    url: 'https://4p3xaiinvestorportfolio.vercel.app',
    badge: 'Commercial scale',
    description: 'This route focuses on the 4P3X Verse™ as a scalable modular AI-assisted product ecosystem, covering market potential, expansion roadmap, live demos, business direction and investment logic.',
    summary: 'Shows the 4P3X Verse™ as a modular AI-powered software ecosystem with commercial pathways, business plan, live product proof, scalable architecture, and honest investment framing.',
    bestFor: ['Investment review', 'commercial opportunity', 'ecosystem scale', 'business model', 'future productisation'],
    routeLogic: ['invest', 'commercial', 'business plan', 'market', 'scale', 'revenue', 'valuation', 'funding']
  },
  partner: {
    id: 'partner',
    title: 'Strategic Partner Portfolio',
    shortTitle: 'Partner',
    audience: 'For strategic partners, collaborators and people interested in long-term ecosystem growth.',
    url: 'https://4p3xpartnerportfolio.vercel.app',
    badge: 'Strategic collaboration',
    description: 'This route focuses on strategic collaboration, ecosystem growth, shared opportunity, product expansion and how the 4P3X Verse™ could develop with the right long-term partner.',
    summary: 'Frames the ecosystem as a partnership-ready product studio with pilots, co-development paths, shared opportunity, and clear ways to collaborate without forcing one narrow deal structure.',
    bestFor: ['Partnership conversations', 'pilot projects', 'co-development', 'sector collaboration', 'strategic support'],
    routeLogic: ['partner', 'collaborate', 'pilot', 'cofounder', 'co-develop', 'strategic', 'joint venture']
  },
  contract: {
    id: 'contract',
    title: 'Hire / Contract Portfolio',
    shortTitle: 'Contract / Hire',
    audience: 'For employers, clients and people assessing Ciaran\'s build capability, learning speed and practical delivery.',
    url: 'https://4p3xcontractportfolio.vercel.app',
    badge: 'Skills evidence',
    description: 'This route focuses on Ciaran\'s skills, learning speed, AI-assisted development process, live deployed products, build capability and practical value for employers, clients or contract opportunities.',
    summary: 'Shows Ciaran / Kyzel Kreates™ as a rapid AI-assisted builder with real deployed products, modular architecture skill, systems thinking, PWA delivery, and contract/employment value.',
    bestFor: ['Hiring decisions', 'contract work', 'portfolio proof', 'skills review', 'technical delivery evidence'],
    routeLogic: ['hire', 'contract', 'job', 'recruit', 'employ', 'skills', 'cv', 'freelance', 'developer']
  },
  grant: {
    id: 'grant',
    title: 'Grant / Public Benefit Portfolio',
    shortTitle: 'Grant',
    audience: 'For funders, public benefit reviewers, social impact programmes and grant-readiness audiences.',
    url: 'https://4p3x-grantportfolio.vercel.app',
    badge: 'Public benefit',
    description: 'This route focuses on public benefit, safety, accessibility, innovation, community value, grant suitability and how the 4P3X Verse™ can support socially useful software directions.',
    summary: 'Positions the work around safety, welfare, accessibility, training, compliance, community support, bridge-strike prevention themes, and public-benefit product pathways.',
    bestFor: ['Grant applications', 'public benefit review', 'safety/welfare impact', 'community use cases', 'funded pilots'],
    routeLogic: ['grant', 'public', 'community', 'charity', 'safety', 'welfare', 'funding', 'social impact', 'public benefit']
  },
  technical: {
    id: 'technical',
    title: 'Technical Architecture Portfolio',
    shortTitle: 'Technical',
    audience: 'For technical reviewers, developers, CTO-style readers and people assessing the architecture.',
    url: 'https://4p3xtechportfolio.vercel.app',
    badge: 'Architecture proof',
    description: 'This route focuses on the architecture, modular base system, AI agent layers, PWA structure, demo/live mode, backend readiness, refactoring logic and technical implementation.',
    summary: 'Explains the reusable base system, demo/live architecture, PWA-first structure, AI agents, SSOT principles, backend-ready pathways, safety boundaries, and modular refactor strategy.',
    bestFor: ['Architecture review', 'technical due diligence', 'backend planning', 'PWA logic', 'AI agent design'],
    routeLogic: ['technical', 'architecture', 'code', 'system', 'pwa', 'backend', 'supabase', 'api', 'ssot', 'engineer']
  }
};

// Convenience array
export const PORTFOLIOS = PORTFOLIO_ROUTES;

// ─── Pop-up Quiz Questions (new 3-question modal quiz) ────────────────────────
export const MODAL_QUIZ = [
  {
    id: 'q1',
    question: 'What best describes why you are here?',
    options: [
      { label: 'I want to understand the investment potential.', scores: { investor: 3 } },
      { label: 'I may want to partner or collaborate.', scores: { partner: 3 } },
      { label: 'I may want to hire or contract Ciaran / Kyzel Kreates™.', scores: { contract: 3 } },
      { label: 'I am interested in grants, public benefit, safety or social impact.', scores: { grant: 3 } },
      { label: 'I want to understand the technical architecture.', scores: { technical: 3 } }
    ]
  },
  {
    id: 'q2',
    question: 'What matters most to you?',
    options: [
      { label: 'Scalability, market size, product potential and future growth.', scores: { investor: 3 } },
      { label: 'Strategic alignment, shared opportunity and long-term collaboration.', scores: { partner: 3 } },
      { label: 'Skills, execution speed, build capability and practical delivery.', scores: { contract: 3 } },
      { label: 'Public value, safety, accessibility, innovation and funding suitability.', scores: { grant: 3 } },
      { label: 'Architecture, systems, code structure, AI agents and deployment readiness.', scores: { technical: 3 } }
    ]
  },
  {
    id: 'q3',
    question: 'What would you like to see first?',
    options: [
      { label: 'Business model, opportunity and future roadmap.', scores: { investor: 3 } },
      { label: 'Partnership direction and ecosystem potential.', scores: { partner: 3 } },
      { label: 'Proof of capability, live products and portfolio evidence.', scores: { contract: 3 } },
      { label: 'Grant-ready explanation, impact and use cases.', scores: { grant: 3 } },
      { label: 'Technical breakdown, system design and implementation logic.', scores: { technical: 3 } }
    ]
  }
];

// ─── Legacy inline quiz (preserved, used in existing quiz section) ─────────────
export const QUIZ = [
  {
    id: 'visitorType',
    question: 'What best describes why you are here?',
    options: [
      { label: 'I may invest or back the ecosystem', scores: { investor: 4 } },
      { label: 'I may partner, pilot, or collaborate', scores: { partner: 4 } },
      { label: 'I may hire or contract Ciaran / Kyzel Kreates™', scores: { contract: 4 } },
      { label: 'I am looking at public benefit or grant fit', scores: { grant: 4 } },
      { label: 'I want to inspect the architecture and technical quality', scores: { technical: 4 } }
    ]
  },
  {
    id: 'interest',
    question: 'What do you want to understand first?',
    options: [
      { label: 'Business model, scale, and opportunity', scores: { investor: 3, partner: 1 } },
      { label: 'How a partnership or pilot could work', scores: { partner: 3, investor: 1 } },
      { label: 'Skills, delivery speed, and working product proof', scores: { contract: 3, technical: 1 } },
      { label: 'Safety, social impact, accessibility, and fundability', scores: { grant: 3 } },
      { label: 'Code structure, PWA logic, data flow, and AI agents', scores: { technical: 3 } }
    ]
  },
  {
    id: 'technicalLevel',
    question: 'How technical do you want the first portfolio to be?',
    options: [
      { label: 'Not too technical — explain clearly', scores: { grant: 1, partner: 1, investor: 1 } },
      { label: 'Balanced — business plus proof', scores: { investor: 1, partner: 1, contract: 1 } },
      { label: 'Skills-focused — show what was built', scores: { contract: 2 } },
      { label: 'Deep technical — architecture first', scores: { technical: 3 } }
    ]
  },
  {
    id: 'desiredOutcome',
    question: 'What possible next step matters most?',
    options: [
      { label: 'Investment or commercial support', scores: { investor: 3 } },
      { label: 'Strategic partnership or pilot', scores: { partner: 3 } },
      { label: 'Job, freelance, or contract conversation', scores: { contract: 3 } },
      { label: 'Grant, public benefit, or funded social pilot', scores: { grant: 3 } },
      { label: 'Technical due diligence or build review', scores: { technical: 3 } }
    ]
  }
];

// ─── Expansion Timeline ───────────────────────────────────────────────────────
export const TIMELINE = [
  {
    version: 'V1.0',
    bases: '1 Base',
    label: 'Foundation',
    description: 'The original reusable modular architecture. One base system designed to become many sector-ready products through controlled refactoring, configurable data, AI guidance layers, and demo-to-live deployment pathways.',
    status: 'live'
  },
  {
    version: 'V2.0',
    bases: '5 Bases',
    label: 'Five Directions',
    description: 'Five focused portfolio directions: investor, partner, contract/hire, grant and technical. This stage proves that the same ecosystem can speak to different audiences without losing the core architecture.',
    status: 'live'
  },
  {
    version: 'V3.0',
    bases: '10 Bases',
    label: 'Sector Expansion',
    description: 'Ten modular product engines showing wider sector adaptability and faster idea-to-working-demo capability.',
    status: 'roadmap'
  },
  {
    version: 'V4.0',
    bases: '20 Bases',
    label: 'Ecosystem Scale',
    description: 'Twenty reusable software foundations demonstrating ecosystem-scale thinking across multiple sectors, workflows, dashboards, PWAs and user needs.',
    status: 'roadmap'
  },
  {
    version: 'V5.0',
    bases: '50 Bases',
    label: 'Future Library',
    description: 'A future-facing library of AI-assisted software foundations designed to support many industries, workflows, dashboards, reporting systems, PWA experiences and agent-guided tools.',
    status: 'roadmap'
  },
  {
    version: 'V6.0',
    bases: '100 Bases',
    label: 'Full Vision',
    description: 'The long-term 4P3X Verse™ vision: 100 reusable base architectures capable of becoming thousands of product variants through controlled refactoring, demo/live switching, AI guidance layers and backend-ready deployment pathways.',
    status: 'roadmap'
  }
];

// ─── Live Products (supporting evidence — not portfolio routes) ───────────────
export const LIVE_PRODUCTS = [
  ['Base core refactorable project', 'https://basev0.vercel.app/'],
  ['TherapyLink™', 'https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html'],
  ['AutoSkill OS™', 'https://autoskillos.vercel.app/ap3x/demo/index.html'],
  ['Big Vs Best Routes Fleet OS™', 'https://bigvsfleetos.vercel.app/'],
  ['ResponseLink OS™', 'https://responselinkosv1.vercel.app/'],
  ['Careerlink OS™', 'https://4p3xaiclos.vercel.app/'],
  ['Recharge Burnout Recovery', 'https://burnout-mh.vercel.app/ap3x/companion/index.html'],
  ['Four Paws Training and Enrichment Academy™', 'https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy'],
  ['Quantum Compliance OS™', 'https://4p3xaiqc.netlify.app/'],
  ['TrustShield OS™', 'https://4p3xaitsos.netlify.app/#/welcome']
];
