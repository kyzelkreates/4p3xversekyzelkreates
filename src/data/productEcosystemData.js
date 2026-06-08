// ─────────────────────────────────────────────────────────────────────────────
// 4P3X Verse™ — Product Ecosystem SSOT Data
// Powered by 4P3X Intelligent AI™  ·  Created by Kyzel Kreates™
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: 'base-core',
    name: '4P3X Intelligent AI™ Base Core',
    sector: 'Platform Architecture',
    problem: 'Creates a reusable modular foundation that can be refactored into many sector-ready products.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'Installable', 'Backend-Ready', 'AI-Guided'],
    url: 'https://basev0.vercel.app/',
    installable: true,
    audiences: ['investor', 'technical', 'partner'],
    commercialPathway: 'Licensable architecture foundation for sector-specific platform builds.'
  },
  {
    id: 'therapylink',
    name: 'TherapyLink™',
    sector: 'Mental Health / Care',
    problem: 'Supports structured therapeutic workflow management and care coordination.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html',
    installable: true,
    audiences: ['grant', 'partner', 'investor'],
    commercialPathway: 'NHS, private therapy, social care, wellbeing platform pilots.'
  },
  {
    id: 'autoskill',
    name: 'AutoSkill OS™',
    sector: 'Training & Skills Development',
    problem: 'Delivers structured skills training workflows with AI-guided progression and tracking.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://autoskillos.vercel.app/ap3x/demo/index.html',
    installable: true,
    audiences: ['grant', 'contract', 'partner'],
    commercialPathway: 'Training providers, HR platforms, workforce development programmes.'
  },
  {
    id: 'fleet-os',
    name: "Big V's Best Routes Fleet OS™",
    sector: 'Logistics & Fleet Management',
    problem: 'Provides structured fleet routing, driver management, and operational oversight.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'Backend-Ready', 'Sector-Adaptable'],
    url: 'https://bigvsfleetos.vercel.app/',
    installable: true,
    audiences: ['investor', 'partner', 'contract'],
    commercialPathway: 'Fleet operators, logistics companies, transport safety programmes.'
  },
  {
    id: 'responselink',
    name: 'ResponseLink OS™',
    sector: 'Emergency Response / Safety',
    problem: 'Coordinates structured emergency response workflows and operational safety protocols.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://responselinkosv1.vercel.app/',
    installable: true,
    audiences: ['grant', 'investor', 'partner'],
    commercialPathway: 'Emergency services, public safety bodies, community response programmes.'
  },
  {
    id: 'careerlink',
    name: 'Careerlink OS™',
    sector: 'Career Development / Employment',
    problem: 'Guides users through structured career planning, skills mapping, and employment pathways.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://4p3xaiclos.vercel.app/',
    installable: true,
    audiences: ['grant', 'partner', 'contract'],
    commercialPathway: 'Employment services, educational institutions, training providers.'
  },
  {
    id: 'recharge',
    name: 'Recharge Burnout Recovery',
    sector: 'Mental Health / Wellbeing',
    problem: 'Supports structured burnout recovery and mental wellbeing guidance.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://burnout-mh.vercel.app/ap3x/companion/index.html',
    installable: true,
    audiences: ['grant', 'partner'],
    commercialPathway: 'Wellbeing providers, HR platforms, NHS/private mental health services.'
  },
  {
    id: 'fourpaws',
    name: 'Four Paws Training and Enrichment Academy™',
    sector: 'Animal Training / Education',
    problem: 'Delivers structured animal training programmes with progress tracking and guidance.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy',
    installable: true,
    audiences: ['contract', 'partner'],
    commercialPathway: 'Pet training businesses, enrichment platforms, veterinary education.'
  },
  {
    id: 'quantum-compliance',
    name: 'Quantum Compliance OS™',
    sector: 'Compliance & Risk Management',
    problem: 'Provides structured compliance workflow management with evidence tracking and reporting.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'Backend-Ready', 'AI-Guided'],
    url: 'https://4p3xaiqc.netlify.app/',
    installable: true,
    audiences: ['investor', 'partner', 'technical'],
    commercialPathway: 'Regulated industries, SMEs, public sector compliance, legal/HR.'
  },
  {
    id: 'trustshield',
    name: 'TrustShield OS™',
    sector: 'Trust & Safety / Verification',
    problem: 'Manages structured trust, identity and safety verification workflows.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'PWA-Ready', 'Backend-Ready', 'AI-Guided'],
    url: 'https://4p3xaitsos.netlify.app/#/welcome',
    installable: true,
    audiences: ['investor', 'partner', 'technical'],
    commercialPathway: 'Platforms needing trust/safety layers, verification services, safeguarding.'
  },
  {
    id: 'kyzel-clarity',
    name: 'Kyzel Clarity AI',
    sector: 'AI Clarity / Decision Support',
    problem: 'Provides structured AI-assisted clarity and decision-support guidance.',
    status: 'Live Demo',
    readiness: ['Working Demo', 'AI-Guided', 'Sector-Adaptable'],
    url: 'https://kyzelclarityai.vercel.app/',
    installable: true,
    audiences: ['contract', 'technical', 'investor'],
    commercialPathway: 'AI-assisted decision platforms, advisory tools, clarity-focused applications.'
  }
];

// Total product count — always derived, never hardcoded separately
export const TOTAL_PRODUCTS = PRODUCTS.length; // 11
