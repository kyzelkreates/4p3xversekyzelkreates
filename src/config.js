export const BRAND = {
  name: '4P3X Verse™ Gateway',
  headline: 'One intelligent entry point for five portfolio paths.',
  strapline: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
  intro: 'Answer a few questions and the gateway routes investors, partners, employers, grant funders, clients, and technical reviewers to the strongest portfolio for their purpose.',
  landscapeLogo: '/logos/landscape-logo.png',
  boxLogo: '/logos/box-logo.png'
};

export const PORTFOLIOS = {
  investor: {
    id: 'investor',
    title: 'Investor Portfolio',
    audience: 'Investors, commercial backers, and people assessing scale potential',
    url: 'https://4p3xaiinvestorportfolio.vercel.app',
    badge: 'Commercial scale',
    summary: 'Shows the 4P3X Verse™ as a modular AI-powered software ecosystem with commercial pathways, business plan, live product proof, scalable architecture, and honest investment framing.',
    routeLogic: ['invest', 'commercial', 'business plan', 'market', 'scale', 'revenue', 'valuation', 'funding'],
    bestFor: ['Investment review', 'commercial opportunity', 'ecosystem scale', 'business model', 'future productisation']
  },
  partner: {
    id: 'partner',
    title: 'Strategic Partner Portfolio',
    audience: 'Potential business partners, collaborators, product partners, and pilot organisations',
    url: 'https://4p3xpartnerportfolio.vercel.app',
    badge: 'Strategic collaboration',
    summary: 'Frames the ecosystem as a partnership-ready product studio with pilots, co-development paths, shared opportunity, and clear ways to collaborate without forcing one narrow deal structure.',
    routeLogic: ['partner', 'collaborate', 'pilot', 'cofounder', 'co-develop', 'strategic', 'joint venture'],
    bestFor: ['Partnership conversations', 'pilot projects', 'co-development', 'sector collaboration', 'strategic support']
  },
  contract: {
    id: 'contract',
    title: 'Hire / Contract Portfolio',
    audience: 'Employers, recruiters, clients, agencies, and anyone assessing build capability',
    url: 'https://4p3xcontractportfolio.vercel.app',
    badge: 'Skills evidence',
    summary: 'Shows Ciaran / Kyzel Kreates™ as a rapid AI-assisted builder with real deployed products, modular architecture skill, systems thinking, PWA delivery, and contract/employment value.',
    routeLogic: ['hire', 'contract', 'job', 'recruit', 'employ', 'skills', 'cv', 'freelance', 'developer'],
    bestFor: ['Hiring decisions', 'contract work', 'portfolio proof', 'skills review', 'technical delivery evidence']
  },
  grant: {
    id: 'grant',
    title: 'Grant / Public Benefit Portfolio',
    audience: 'Grant funders, public-sector reviewers, charity/community partners, and social-impact organisations',
    url: 'https://4p3x-grantportfolio.vercel.app',
    badge: 'Public benefit',
    summary: 'Positions the work around safety, welfare, accessibility, training, compliance, community support, bridge-strike prevention themes, and public-benefit product pathways.',
    routeLogic: ['grant', 'public', 'community', 'charity', 'safety', 'welfare', 'funding', 'social impact', 'public benefit'],
    bestFor: ['Grant applications', 'public benefit review', 'safety/welfare impact', 'community use cases', 'funded pilots']
  },
  technical: {
    id: 'technical',
    title: 'Technical Architecture Portfolio',
    audience: 'Technical reviewers, CTOs, developers, solution architects, and serious product evaluators',
    url: 'https://4p3xtechportfolio.vercel.app',
    badge: 'Architecture proof',
    summary: 'Explains the reusable base system, demo/live architecture, PWA-first structure, AI agents, SSOT principles, backend-ready pathways, safety boundaries, and modular refactor strategy.',
    routeLogic: ['technical', 'architecture', 'code', 'system', 'pwa', 'backend', 'supabase', 'api', 'ssot', 'engineer'],
    bestFor: ['Architecture review', 'technical due diligence', 'backend planning', 'PWA logic', 'AI agent design']
  }
};

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
  ['TrustSheild OS™', 'https://4p3xaitsos.netlify.app/#/welcome']
];
