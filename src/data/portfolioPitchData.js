// ─────────────────────────────────────────────────────────────────────────────
// 4P3X Verse™ — Portfolio Pitch SSOT Data
// Powered by 4P3X Intelligent AI™  ·  Created by Kyzel Kreates™
//
// IMPORTANT: All values here are SSOT — import from this file, never hardcode.
// ─────────────────────────────────────────────────────────────────────────────

// ── Core multiplication model ─────────────────────────────────────────────────
export const MULTIPLICATION_MODEL = {
  versionsPerBase: 11,
  currentBaseCount: 1,
  currentProductVersions: 11,
  expansionRoadmap: [
    { version: 'V1', bases: 1,   pathways: 11,   label: 'Single Core Base',    status: 'live',    proof: 'Proven — 11 working product versions already built from 1 base.' },
    { version: 'V2', bases: 5,   pathways: 55,   label: '5 Base Systems',      status: 'live',    proof: '5 portfolio directions already live, proving multi-audience architecture.' },
    { version: 'V3', bases: 10,  pathways: 110,  label: '10 Base Systems',     status: 'roadmap', proof: 'Roadmap — could support 110 possible product pathways.' },
    { version: 'V4', bases: 20,  pathways: 220,  label: '20 Base Systems',     status: 'roadmap', proof: 'Roadmap — could support 220 possible product pathways.' },
    { version: 'V5', bases: 50,  pathways: 550,  label: '50 Base Systems',     status: 'roadmap', proof: 'Roadmap — could support 550 possible product pathways.' },
    { version: 'V6', bases: 100, pathways: 1100, label: '100 Base Systems',    status: 'roadmap', proof: 'Long-term vision — up to 1,100 possible product pathways.' }
  ],
  safeDisclaimer: 'These are roadmap pathway estimates based on the proven 1-base-to-11-version model. They are not claims that every future pathway is already built or commercially validated.'
};

// ── Proof stack items ─────────────────────────────────────────────────────────
export const PROOF_STACK = [
  { id: 'base',        label: '1 core reusable base proven',                         status: 'live' },
  { id: 'versions',    label: '11 working product versions',                          status: 'live' },
  { id: 'demolive',    label: 'Demo/live-ready product thinking',                     status: 'live' },
  { id: 'github',      label: 'GitHub-installable project structure',                 status: 'live' },
  { id: 'hosted',      label: 'Live hosted demos',                                    status: 'live' },
  { id: 'pwa',         label: 'PWA-ready approach',                                   status: 'live' },
  { id: 'ai',          label: 'Embedded AI guidance strategy',                        status: 'live' },
  { id: 'portfolio5',  label: '5-portfolio presentation system',                      status: 'live' },
  { id: 'roadmap',     label: '5/10/20/50/100 base expansion roadmap',               status: 'roadmap' },
  { id: 'pathways',    label: 'Up to 1,100 possible future product pathways',         status: 'roadmap' },
  { id: 'founder',     label: 'Founder execution proof',                              status: 'live' }
];

export const PROOF_STACK_STATEMENT = 'The strongest proof is not only that product demos exist. The strongest proof is that one reusable base architecture has already produced 11 working product versions. That proves the 4P3X Verse™ model can be repeated, expanded and adapted.';

// ── Demo / Live readiness badges ──────────────────────────────────────────────
export const READINESS_BADGES = [
  { id: 'demo',        label: 'Working Demo',       color: 'green'  },
  { id: 'live',        label: 'Live-Ready Pathway', color: 'gold'   },
  { id: 'install',     label: 'Installable',        color: 'silver' },
  { id: 'pwa',         label: 'PWA-Ready',          color: 'purple' },
  { id: 'backend',     label: 'Backend-Ready',      color: 'green'  },
  { id: 'ai',          label: 'AI-Guided',          color: 'gold'   },
  { id: 'sector',      label: 'Sector-Adaptable',   color: 'silver' }
];

// ── Client assembly flow (9 steps) ────────────────────────────────────────────
export const CLIENT_ASSEMBLY_FLOW = [
  {
    step: 1, icon: '🎯',
    title: 'Client Need',
    description: "The client's sector, users, risks, workflows, data needs and goals are mapped first."
  },
  {
    step: 2, icon: '🤖',
    title: 'AI-Assisted Requirement Mapping',
    description: '4P3X Intelligent AI™ identifies which systems, dashboards, PWAs, workflows and AI guidance layers are most relevant.'
  },
  {
    step: 3, icon: '📚',
    title: 'Best-Fit Base Selection',
    description: 'The platform does not start from zero. The most suitable base systems are selected from the 4P3X Verse™ library.'
  },
  {
    step: 4, icon: '⚙️',
    title: 'Component & Workflow Assembly',
    description: 'The strongest parts from selected bases are combined into the client\'s platform structure.'
  },
  {
    step: 5, icon: '🔧',
    title: 'Sector-Specific Refactor',
    description: "Terminology, branding, dashboards, reports, data models, user flows and AI guidance are adapted to the client's sector."
  },
  {
    step: 6, icon: '📲',
    title: 'Installable Demo',
    description: 'The client reviews a working installable product demo instead of only reading a proposal.'
  },
  {
    step: 7, icon: '🚀',
    title: 'Backend-Ready Live Platform',
    description: 'The product moves toward live mode with Supabase, Firebase, custom backend, or another suitable infrastructure.'
  }
];

// ── Next stage milestones ─────────────────────────────────────────────────────
export const NEXT_STAGE_MILESTONES = [
  { n: 1,  label: 'Polish all 5 portfolio experiences' },
  { n: 2,  label: 'Add video demos and screenshots' },
  { n: 3,  label: 'Publish GitHub install guides' },
  { n: 4,  label: 'Launch crowdfunding / support campaign' },
  { n: 5,  label: 'Approach pilot partners' },
  { n: 6,  label: 'Collect letters of interest' },
  { n: 7,  label: 'Build one backend-connected flagship product' },
  { n: 8,  label: 'Convert strongest demos into live customer-ready products' },
  { n: 9,  label: 'Develop strategic partnerships' },
  { n: 10, label: 'Move from product proof to market proof' }
];

// ── Crowdfunding support tiers ─────────────────────────────────────────────────
export const SUPPORT_TIERS = [
  { amount: '£5',    label: 'Early Supporter',          description: 'Show support for the 4P3X Verse™ journey.' },
  { amount: '£15',   label: 'Digital Supporter',        description: 'Help fund portfolio polish and demo videos.' },
  { amount: '£50',   label: 'Founder Supporter',        description: 'Support backend planning and live-mode readiness.' },
  { amount: '£100',  label: 'Demo Feedback Circle',     description: 'Access to demo feedback sessions.' },
  { amount: '£250',  label: 'Product Vision Supporter', description: 'Support AI agent upgrades and mobile polish.' },
  { amount: '£500',  label: 'Strategic Supporter',      description: 'Contribute to security guardrails and legal setup.' },
  { amount: '£1,000+', label: 'Ecosystem Backer',       description: 'Support the full public launch preparation.' }
];

export const SUPPORT_DISCLAIMER = 'Support tiers are examples and do not represent equity, shares, financial returns or investment rights.';

// ── Portfolio-specific pitch angles ───────────────────────────────────────────
export const PORTFOLIO_PITCH_ANGLES = {
  investor: {
    headline: 'The Investment Case is the Architecture',
    pitch: 'The investment case is not based on one product. It is based on a reusable modular architecture that has already produced 11 working versions and can scale into a base-system library capable of many possible product pathways.',
    emphasis: ['Platform value', 'Product multiplication model', 'Scalable architecture', 'Demo/live-ready assets', 'Valuation positioning', 'Pilot/customer pathway']
  },
  partner: {
    headline: 'Built for Strategic Expansion',
    pitch: 'Partners can help take 4P3X Verse™ from product proof to market proof by connecting the right sectors, pilots, customers and operational problems to the base-system assembly model.',
    emphasis: ['Strategic partnerships', 'Sector access', 'Pilots', 'Licensing', 'White-label pathways', 'Joint product creation']
  },
  contract: {
    headline: 'Practical Execution Proof',
    pitch: 'This is practical execution proof: architecture thinking, AI-assisted development, UI/UX structure, PWA planning, state logic, demo/live separation, product refactoring and client-specific platform assembly.',
    emphasis: ['Execution speed', 'Systems thinking', 'AI-assisted development', 'Refactoring ability', 'Deployable prototypes', 'Prompt engineering']
  },
  grant: {
    headline: 'Public-Benefit Technology Pathways',
    pitch: 'Grant funding could help turn the modular base-system model into public-benefit pilots across community support, care, recovery, training, compliance, safer operations and accessible digital services.',
    emphasis: ['Public-benefit pilots', 'Community support', 'Care/welfare', 'Training', 'Safer workflows', 'Accessibility']
  },
  technical: {
    headline: 'Repeatable Architecture by Design',
    pitch: 'The technical value is in the repeatable architecture: reusable bases, controlled refactoring, component assembly, state separation, installable PWA logic, AI guidance boundaries and backend-ready integration pathways.',
    emphasis: ['SSOT discipline', 'PWA readiness', 'AI agent boundaries', 'Demo/live separation', 'GitHub installability', 'Backend-ready pathway']
  }
};
