import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BriefcaseBusiness, Building2, CheckCircle2,
  Cpu, ExternalLink, Handshake, Landmark,
  Menu, Rocket, Sparkles, X, LayoutGrid, Image as ImageIcon
} from 'lucide-react';
import { BRAND, PORTFOLIO_ROUTES, LIVE_PRODUCTS } from './config';
import { DIAGRAMS, getDiagramsByAudience, getHomeDiagrams } from './data/diagramRegistry';
import PortfolioQuizModal from './components/PortfolioQuizModal';
import TimelineSection from './components/TimelineSection';
import DiagramFeatureSection from './components/DiagramFeatureSection';
import DiagramLightbox from './components/DiagramLightbox';
import ArchitectureDiagrams from './components/ArchitectureDiagrams';
import ModularBaseExpansion from './components/ModularBaseExpansion';
import PolishedPitchHero from './components/PolishedPitchHero';
import ProofStack from './components/ProofStack';
import DemoLiveReadiness from './components/DemoLiveReadiness';
import ProductMultiplicationModel from './components/ProductMultiplicationModel';
import ProductEcosystemShowcase from './components/ProductEcosystemShowcase';
import StartupValueCase from './components/StartupValueCase';
import ClientAssemblyFlow from './components/ClientAssemblyFlow';
import FounderExecutionMindset from './components/FounderExecutionMindset';
import NextStageMilestones from './components/NextStageMilestones';
import CrowdfundingSupportCase from './components/CrowdfundingSupportCase';
import './styles.css';

const portfolioList = Object.values(PORTFOLIO_ROUTES);

// ─── Local AI guide — full pitch + multiplication + valuation aware ────────────
function askLocalAI(input) {
  const text = input.toLowerCase();

  // ── What is 4P3X Verse™ ──
  if (text.includes('what is 4p3x') || text.includes('what is the 4p3x') || text.includes('explain 4p3x') || text.includes('tell me about 4p3x')) {
    return `4P3X Verse™ is a Modular Product Assembly Ecosystem™ — not just one app or a collection of demos. It is a growing library of reusable base systems that can be selected, combined and refactored to create tailored client platforms faster than starting from zero. 1 reusable base has already produced 11 working product versions. The roadmap scales to 5, 10, 20, 50 and 100 base libraries, supporting up to 1,100 possible product pathways.`;
  }

  // ── Multiplication model ──
  if (text.includes('11 product') || text.includes('11 version') || text.includes('how did') && text.includes('11')) {
    return `The 1 reusable core base produced 11 different working product versions by applying the same architecture to different sectors: TherapyLink™, AutoSkill OS™, Fleet OS, ResponseLink OS™, Careerlink OS™, Recharge Burnout Recovery, Four Paws Academy™, Quantum Compliance OS™, TrustShield OS™, Kyzel Clarity AI, and the Base Core itself. Each was built using the same modular foundation — proving the multiplication model works.`;
  }
  if (text.includes('5 base') || text.includes('55 pathway') || text.includes('55 product')) {
    return `5 bases × 11 product versions per base = 55 possible product pathways. These are pathway estimates based on the proven model — not guaranteed completed products. Each base is a separate reusable foundation with its own dashboards, workflows, PWA logic, and AI guidance.`;
  }
  if (text.includes('10 base') || text.includes('110 pathway') || text.includes('110 product')) {
    return `10 bases × 11 versions = 110 possible product pathways. This is the V3 roadmap stage, expanding the library into more sectors and client-specific directions. Pathway estimates only — not claims that 110 products are already built.`;
  }
  if (text.includes('20 base') || text.includes('220 pathway')) {
    return `20 bases × 11 versions = 220 possible product pathways (V4 roadmap). At this scale, different bases can be combined for more advanced cross-sector platform assembly.`;
  }
  if (text.includes('50 base') || text.includes('550 pathway')) {
    return `50 bases × 11 versions = 550 possible product pathways (V5 roadmap). A high-scale library for AI-assisted matching of client needs to the strongest available components and workflows.`;
  }
  if (text.includes('100 base') || text.includes('1100') || text.includes('1,100')) {
    return `100 bases × 11 versions = up to 1,100 possible product pathways (V6 long-term vision). This is a roadmap estimate — not a claim that 1,100 products are already built or commercially validated.`;
  }
  if (text.includes('all 1100') || text.includes('already built') || text.includes('are they built')) {
    return `No — the 1,100 figure represents possible future product pathways based on the proven 1-base-to-11-version model. They are roadmap estimates, not finished or commercially validated products. The current proven state is: 1 base, 11 working product versions, all in Demo Mode with Live Mode pathways.`;
  }

  // ── Multiplication model general ──
  if (text.includes('multiplication') || text.includes('product pathway') || text.includes('how many product')) {
    return `The 4P3X Verse™ product multiplication model is: Number of Bases × 11 versions per base = Possible Product Pathways. Currently: 1 base = 11 pathways (proven). Roadmap: 5 bases = 55, 10 = 110, 20 = 220, 50 = 550, 100 = up to 1,100. These are pathway estimates, not guaranteed completed products.`;
  }

  // ── Demo/live mode ──
  if (text.includes('demo mode') || text.includes('live mode') || text.includes('demo/live') || text.includes('demo and live')) {
    return `Demo Mode shows the product — full UI, workflows, dashboards and AI guidance with labelled demonstration data. No backend required. Live Mode runs the product — connects to a real backend (Supabase, Firebase, custom API) enabling real users, live data, authentication and persistence. Some products require security review, legal/compliance review and real-world testing before live operational use.`;
  }

  // ── Modular base system ──
  if (text.includes('modular base') || text.includes('base system') || text.includes('base library') || text.includes('modular product assembly')) {
    return `4P3X Verse™ is a Modular Product Assembly Ecosystem™. The base versions are separate reusable system libraries — not one single app getting bigger. Each base can contain different dashboard logic, workflows, PWA structures, AI guidance patterns, data models and sector-ready layouts. The platform selects, combines and refactors the strongest parts to create a tailored client platform.`;
  }

  // ── Valuation ──
  if (text.includes('valuation') || text.includes('worth') || text.includes('value') && (text.includes('£') || text.includes('million') || text.includes('invest'))) {
    return `The 4P3X Verse™ valuation is based on internal asset proof and common pre-revenue startup valuation logic. Internally: 1 reusable base, 11 working product versions, live demos, GitHub installability, demo/live readiness, AI guidance strategy, and the product multiplication roadmap. Indicative fair pre-revenue positioning: £2m–£3.5m. Polished pitch positioning: £3.5m–£6m subject to commercial validation. This is NOT a guaranteed valuation, investment offer, or promise of returns. The next unlock: pilots, letters of interest, paying customers, crowdfunding traction, backend-connected live systems.`;
  }
  if (text.includes('guaranteed') || text.includes('promise') || text.includes('certain return') || text.includes('will make money')) {
    return `4P3X Verse™ does not make any guaranteed investment claims, guaranteed valuations, or promises of returns. The valuation figures are indicative pre-revenue positioning estimates based on product proof and startup valuation frameworks. Actual value depends on commercial traction, legal structure, investor appetite, due diligence and negotiation.`;
  }
  if (text.includes('berkus') || text.includes('scorecard') || text.includes('valuation method') || text.includes('where did valuation come from')) {
    return `The valuation range draws on: (1) Internal 4P3X Verse™ asset audit — 11 product versions, live demos, architecture proof. (2) Berkus-style logic — concept, prototype proof, team/founder capability, strategic relationships, rollout progress. (3) Scorecard-style logic — team, product, market, traction, competition, risk. (4) Risk-factor logic — adjusting for execution, funding, market, technology and sales risk. All are publicly available pre-revenue startup valuation frameworks.`;
  }
  if (text.includes('next unlock') || text.includes('next milestone') || text.includes('what needs to happen') || text.includes('increase valuation')) {
    return `The next valuation unlocks for 4P3X Verse™ are: pilots and letters of interest, paying customers, crowdfunding traction, backend-connected flagship products, strategic partnerships, and moving from product proof to market proof. Each milestone completed strengthens the commercial positioning and closes the gap between pitch valuation and market validation.`;
  }

  // ── Investor angle ──
  if (text.includes('investor') || text.includes('invest')) {
    return `The investment case is not based on one product. It is based on a reusable modular architecture that has already produced 11 working versions and can scale toward up to 1,100 possible product pathways across a growing base library. Indicative valuation: £2m–£3.5m fair pre-revenue, £3.5m–£6m polished pitch positioning. Not guaranteed. Scroll to the Investor section for the full valuation evidence table.`;
  }

  // ── Partner angle ──
  if (text.includes('partner') && (text.includes('why') || text.includes('value') || text.includes('how') || text.includes('help'))) {
    return `Partners can help take 4P3X Verse™ from product proof to market proof by connecting the right sectors, pilots, customers and operational problems to the base-system assembly model. Strategic collaboration, pilots, white-label potential, licensing and joint base development are all viable partnership directions.`;
  }

  // ── Grant angle ──
  if (text.includes('grant') || text.includes('public benefit') || text.includes('social impact') || text.includes('community')) {
    return `Grant funding could help turn the modular base-system model into public-benefit pilots across community support, care, recovery, training, compliance, safer operations and accessible digital services. The architecture already exists — funding accelerates its application to specific social needs.`;
  }

  // ── Contract/hire angle ──
  if (text.includes('hire') || text.includes('contract') || text.includes('employ') || text.includes('ciaran') || text.includes('kyzel')) {
    return `Ciaran / Kyzel Kreates™ demonstrates practical execution ability: architecture thinking, AI-assisted development, UI/UX structure, PWA planning, state logic, demo/live separation, product refactoring and client-specific platform assembly. 11 working product versions from 1 base is execution proof — not a pitch concept.`;
  }

  // ── Technical angle ──
  if (text.includes('technical') && (text.includes('why') || text.includes('impressive') || text.includes('architecture') || text.includes('how is it built'))) {
    return `The technical value is the repeatable architecture: SSOT config, reusable base systems, clean demo/live mode separation, component assembly, installable PWA logic, AI agent boundaries, and controlled refactoring chains. Each new base improves on the last without accumulating technical debt. GitHub-installable, Vercel/Netlify-ready on every base.`;
  }

  // ── Products ──
  if (text.includes('product') || text.includes('demo') || text.includes('what has been built')) {
    return `11 working product versions have been built from 1 reusable base: 4P3X Base Core, TherapyLink™, AutoSkill OS™, Big V\'s Best Routes Fleet OS™, ResponseLink OS™, Careerlink OS™, Recharge Burnout Recovery, Four Paws Training and Enrichment Academy™, Quantum Compliance OS™, TrustShield OS™, and Kyzel Clarity AI. All are in Demo Mode with Live Mode pathways. Scroll to the Products section to view each one.`;
  }

  // ── Crowdfunding ──
  if (text.includes('crowdfund') || text.includes('support') || text.includes('back') || text.includes('fund')) {
    return `The 4P3X Verse™ crowdfunding/support campaign would fund: professional pitch material, demo videos, backend planning, live-mode readiness, AI agent upgrades, mobile/PWA polish, security guardrails, legal/business setup, customer pilot preparation and public launch material. Support tiers are examples only — they do not represent equity, shares, or investment rights.`;
  }

  // ── Diagrams ──
  if (text.includes('diagram') || text.includes('architecture diagram')) {
    return `The 4P3X Verse™ has 12 architecture diagrams covering the ecosystem structure, modular base system, demo/live mode, portfolio audience routes, AI orchestration, product refactoring, and expansion roadmap. Use the "Architecture Diagrams" nav link to view all 12.`;
  }

  // ── Routing ──
  const pList = Object.values(PORTFOLIO_ROUTES);
  const direct = pList.find(p => p.routeLogic.some(term => text.includes(term)));
  if (direct) {
    return `Best portfolio route: ${direct.title}. ${direct.summary} Open it here: ${direct.url}`;
  }

  return `I am the 4P3X Portfolio Guide™, powered by 4P3X Intelligent AI™. I can explain the product multiplication model (1 base → 11 versions → up to 1,100 possible pathways), the valuation case, demo/live readiness, the modular base-system architecture, and route you to the right portfolio. Try asking "what is the multiplication model?" or "what is the valuation based on?"`;
}

// ─── Logo with fallback ────────────────────────────────────────────────────────
function LogoImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`logoFallback ${className || ''}`}>{fallback}</div>;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

// ─── Portfolio card ────────────────────────────────────────────────────────────
function PortfolioCard({ portfolio }) {
  const icons = { investor: Rocket, partner: Handshake, contract: BriefcaseBusiness, grant: Landmark, technical: Cpu };
  const Icon = icons[portfolio.id] || Building2;
  return (
    <article className="portfolioCard">
      <div className="cardIcon"><Icon /></div>
      <span className="badge">{portfolio.badge}</span>
      <p className="pc-live-label"><CheckCircle2 size={13}/> Live deployed portfolio</p>
      <h3>{portfolio.title}</h3>
      <p className="audience">{portfolio.audience}</p>
      <p>{portfolio.summary}</p>
      <ul>{portfolio.bestFor.map(item => <li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
      <a className="primary full" href={portfolio.url} target="_blank" rel="noreferrer">
        Open live portfolio <ExternalLink size={16}/>
      </a>
    </article>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [quizOpen, setQuizOpen]   = useState(false);
  const [page, setPage]           = useState('home'); // 'home' | 'diagrams'
  const [lightbox, setLightbox]   = useState(null);
  const [aiInput, setAiInput]     = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'ai', text: '4P3X Portfolio Guide™ — powered by 4P3X Intelligent AI™. I can explain the product multiplication model (1 base → 11 versions → up to 1,100 possible pathways), the valuation case, demo/live readiness, and route you to the right portfolio. Try asking "what is the multiplication model?", "what is the valuation based on?", or "show me the products".' }
  ]);

  const openQuiz  = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);
  const openDiagrams = () => { setPage('diagrams'); window.scrollTo(0,0); };
  const closeDiagrams = () => { setPage('home'); window.scrollTo(0,0); };

  const openLightbox = (diagram) => setLightbox(diagram);
  const scrollToSection = (id) => {
    setPage('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };
  const focusAI = () => {
    setPage('home');
    setTimeout(() => {
      const el = document.querySelector('.chatInput input');
      if (el) { el.focus(); el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }, 50);
  };
  const closeLightbox = () => setLightbox(null);

  const askAI = () => {
    if (!aiInput.trim()) return;
    const question = aiInput.trim();
    setAiMessages(prev => [...prev,
      { role: 'user', text: question },
      { role: 'ai',   text: askLocalAI(question) }
    ]);
    setAiInput('');
  };

  // Diagram sets for inline sections
  const homeDiagrams     = getHomeDiagrams().slice(0, 3);
  const investorDiagrams = getDiagramsByAudience('investor').slice(0, 3);
  const partnerDiagrams  = getDiagramsByAudience('partner').slice(0, 2);
  const contractDiagrams = getDiagramsByAudience('contract').slice(0, 2);
  const grantDiagrams    = getDiagramsByAudience('grant').slice(0, 2);
  const technicalDiagrams= getDiagramsByAudience('technical').slice(0, 3);

  // Global lightbox over diagram page too
  const lbList = lightbox
    ? DIAGRAMS.filter(d => d.audiences.includes(lightbox.audiences[0]))
    : [];
  const lbIdx = lightbox ? lbList.findIndex(d => d.id === lightbox.id) : -1;

  return (
    <>
      {/* ── Global modals ── */}
      <PortfolioQuizModal isOpen={quizOpen} onClose={closeQuiz} onViewDiagrams={openDiagrams} />
      {lightbox && (
        <DiagramLightbox
          diagram={lightbox}
          onClose={closeLightbox}
          onPrev={() => lbIdx > 0 && setLightbox(lbList[lbIdx - 1])}
          onNext={() => lbIdx < lbList.length - 1 && setLightbox(lbList[lbIdx + 1])}
          hasPrev={lbIdx > 0}
          hasNext={lbIdx < lbList.length - 1}
        />
      )}

      <main>
        {/* ── Navigation ── */}
        <header className="nav">
          <a className="brand" href="#top" aria-label="4P3X Verse Gateway home" onClick={() => setPage('home')}>
            <LogoImage
              src={BRAND.boxLogo}
              alt="4P3X Verse box logo"
              className="navBoxLogo"
              fallback={<Sparkles size={22} />}
            />
            <div>
              <strong>{BRAND.name}</strong>
              <span>{BRAND.strapline}</span>
            </div>
          </a>
          <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'open' : ''}>
            <a href="#guide"      onClick={() => { setMenuOpen(false); setPage('home'); }}>AI Guide</a>
            <a href="#timeline"   onClick={() => { setMenuOpen(false); setPage('home'); }}>Timeline</a>
            <a href="#portfolios" onClick={() => { setMenuOpen(false); setPage('home'); }}>5 Portfolios</a>
            <a href="#products"   onClick={() => { setMenuOpen(false); setPage('home'); }}>Live Products</a>
            <button
              className="nav-link-btn"
              onClick={() => { setMenuOpen(false); openDiagrams(); }}
            >
              <ImageIcon size={14}/> Architecture Diagrams
            </button>
            <button className="nav-quiz-btn" onClick={() => { setMenuOpen(false); openQuiz(); }}>
              Find the Right Portfolio
            </button>
          </nav>
        </header>

        {/* ══════════════════════ DIAGRAMS PAGE ══════════════════════ */}
        {page === 'diagrams' && (
          <ArchitectureDiagrams onBack={closeDiagrams} />
        )}

        {/* ══════════════════════ HOME PAGE ══════════════════════════ */}
        {page === 'home' && (
          <>
            {/* ── Hero ── */}
            <section id="top" className="hero section">
              <div className="orb orbA" /><div className="orb orbB" />
              <div className="heroGrid">
                <div>
                  <p className="eyebrow">Portfolio Gateway · 5-route AI guided router</p>
                  <h1>Welcome to the 4P3X Verse™ Gateway</h1>
                  <h2>{BRAND.headline}</h2>
                  <p className="positioning-short">{BRAND.shortPositioning}</p>
                  <p className="quiz-nudge">Not sure where to start? Use the pop-up portfolio guide and it will route you to the right version.</p>
                  <div className="ctaRow">
                    <button className="primary" onClick={openQuiz}>
                      Find the Right Portfolio <ArrowRight size={18}/>
                    </button>
                    <a className="secondary" href="#portfolios">
                      <LayoutGrid size={16}/> View All Portfolio Routes
                    </a>
                  </div>
                  <div className="proofStrip">
                    <span><CheckCircle2/> Exactly 5 portfolio routes</span>
                    <span><CheckCircle2/> Embedded local AI guide</span>
                    <span><CheckCircle2/> Vite + PWA ready</span>
                  </div>
                </div>
                <div className="heroPanel">
                  <div className="logoSlot wide landscapeLogoWrap">
                    <LogoImage
                      src={BRAND.landscapeLogo}
                      alt="4P3X Verse landscape logo"
                      className="landscapeLogoImg"
                      fallback={<>4P3X Verse™ Gateway<br/><small>Powered by 4P3X Intelligent AI™</small></>}
                    />
                  </div>
                  <div className="routeStack">
                    {portfolioList.map((p, idx) => (
                      <a key={p.id} href={p.url} target="_blank" rel="noreferrer">
                        <span>0{idx + 1}</span>{p.title}<ExternalLink size={14}/>
                      </a>
                    ))}
                  </div>
                  <div className="logoSlot box boxLogoWrap">
                    <LogoImage
                      src={BRAND.boxLogo}
                      alt="4P3X Verse box logo"
                      className="boxLogoImg"
                      fallback="4P3X"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ── Full Positioning Statement ── */}
            <section className="section positioningSection">
              <div className="positioning-card">
                <p className="eyebrow">What is the 4P3X Verse™?</p>
                <p className="positioning-full">{BRAND.fullPositioning}</p>
              </div>
            </section>

            {/* ── Understanding the 4P3X Verse™ — Diagram Feature ── */}
            <section id="understanding" className="section diagramSection">
              <DiagramFeatureSection
                eyebrow="Architecture overview"
                title="Understanding the 4P3X Verse™"
                intro="The 4P3X Verse™ is a modular AI-assisted product ecosystem built from reusable base architecture, controlled refactoring, demo/live switching, PWA-ready structures, and sector-specific product variants. Each portfolio route explains the same ecosystem from a different audience perspective."
                diagrams={homeDiagrams}
                onOpen={openLightbox}
                onViewAll={openDiagrams}
                layout="featured"
                maxCards={3}
              />
            </section>

            {/* ── AI Guide ── */}
            <section id="guide" className="section aiSection">
              <div className="sectionHead">
                <p className="eyebrow">Embedded AI</p>
                <h2>4P3X Portfolio Guide™</h2>
                <p>Local-first AI guide for routing, architecture explanation, and portfolio Q&A. Ask about the diagrams, the demo/live architecture, the AI agent network, or which portfolio to view first.</p>
              </div>
              <div className="chatShell">
                <div className="messages">
                  {aiMessages.map((m, i) => <div key={i} className={`message ${m.role}`}>{m.text}</div>)}
                </div>
                <div className="chatInput">
                  <input
                    value={aiInput}
                    onChange={e => setAiInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && askAI()}
                    placeholder="Ask: how does the modular architecture work?"
                  />
                  <button onClick={askAI}>Ask AI</button>
                </div>
              </div>
              <div className="ai-diag-cta">
                <button className="secondary" onClick={openDiagrams}>
                  <ImageIcon size={15}/> View architecture diagrams
                </button>
              </div>
            </section>

            {/* ── Timeline Section ── */}
            <TimelineSection onOpenQuiz={openQuiz} />

            {/* ── Five Portfolio Cards + per-audience diagrams ── */}
            <section id="portfolios" className="section">
              <div className="sectionHead">
                <p className="eyebrow">Five live portfolio paths</p>
                <h2>One gateway. Five audience-specific destinations.</h2>
              </div>

              {/* Investor diagrams */}
              <div className="audience-diag-block">
                <DiagramFeatureSection
                  eyebrow="Investor view"
                  title="Scalable Product Architecture"
                  intro="These diagrams show how the 4P3X Verse™ can scale from one reusable modular base into multiple sector-ready products, then into a wider infrastructure layer capable of supporting many future product variants."
                  diagrams={investorDiagrams}
                  onOpen={openLightbox}
                  layout="grid"
                  maxCards={3}
                />
              </div>
              <ModularBaseExpansion portfolioId="investor" />
              <PolishedPitchHero portfolioId="investor" onOpenAI={focusAI} onScrollTo={scrollToSection} onOpenQuiz={openQuiz} />
              <ProofStack />
              <DemoLiveReadiness />
              <ProductMultiplicationModel />
              <ProductEcosystemShowcase portfolioId="investor" />
              <StartupValueCase />
              <ClientAssemblyFlow />
              <FounderExecutionMindset />
              <NextStageMilestones portfolioId="investor" onOpenQuiz={openQuiz} />
              <CrowdfundingSupportCase />

              {/* Partner diagrams */}
              <div className="audience-diag-block">
                <DiagramFeatureSection
                  eyebrow="Partner view"
                  title="Built for Strategic Expansion"
                  intro="The 4P3X Verse™ is designed so the same core architecture can support new sectors, new product directions, and new commercial partnerships without starting from zero every time."
                  diagrams={partnerDiagrams}
                  onOpen={openLightbox}
                  layout="grid"
                  maxCards={2}
                />
              </div>
              <ModularBaseExpansion portfolioId="partner" />
              <PolishedPitchHero portfolioId="partner" onOpenAI={focusAI} onScrollTo={scrollToSection} onOpenQuiz={openQuiz} />
              <DemoLiveReadiness />
              <ProductMultiplicationModel />
              <ProductEcosystemShowcase portfolioId="partner" />
              <ClientAssemblyFlow />
              <FounderExecutionMindset />
              <NextStageMilestones portfolioId="partner" onOpenQuiz={openQuiz} />
              <CrowdfundingSupportCase />

              {/* Contract diagrams */}
              <div className="audience-diag-block">
                <DiagramFeatureSection
                  eyebrow="Contract / Hire view"
                  title="How I Think and Build"
                  intro="These diagrams explain the systems-thinking approach behind the work: breaking complex ideas into reusable structures, controlled build runs, AI-assisted workflows, validation layers, and deployable product outcomes."
                  diagrams={contractDiagrams}
                  onOpen={openLightbox}
                  layout="grid"
                  maxCards={2}
                />
              </div>
              <ModularBaseExpansion portfolioId="contract" />
              <PolishedPitchHero portfolioId="contract" onOpenAI={focusAI} onScrollTo={scrollToSection} onOpenQuiz={openQuiz} />
              <DemoLiveReadiness />
              <ProductMultiplicationModel />
              <ProductEcosystemShowcase portfolioId="contract" />
              <ClientAssemblyFlow />
              <FounderExecutionMindset />
              <NextStageMilestones portfolioId="contract" onOpenQuiz={openQuiz} />
              <CrowdfundingSupportCase />

              {/* Grant diagrams */}
              <div className="audience-diag-block">
                <DiagramFeatureSection
                  eyebrow="Grant view"
                  title="Public-Benefit Technology Pathways"
                  intro="The same modular architecture can be adapted into grant-relevant systems for community support, welfare coordination, safer transport, recovery tools, education, compliance, and evidence-based service delivery."
                  diagrams={grantDiagrams}
                  onOpen={openLightbox}
                  layout="grid"
                  maxCards={2}
                />
              </div>
              <ModularBaseExpansion portfolioId="grant" />
              <PolishedPitchHero portfolioId="grant" onOpenAI={focusAI} onScrollTo={scrollToSection} onOpenQuiz={openQuiz} />
              <DemoLiveReadiness />
              <ProductMultiplicationModel />
              <ProductEcosystemShowcase portfolioId="grant" />
              <ClientAssemblyFlow />
              <FounderExecutionMindset />
              <NextStageMilestones portfolioId="grant" onOpenQuiz={openQuiz} />
              <CrowdfundingSupportCase />

              {/* Technical diagrams */}
              <div className="audience-diag-block">
                <DiagramFeatureSection
                  eyebrow="Technical view"
                  title="Technical Architecture Diagrams"
                  intro="These diagrams show the technical structure behind the 4P3X Verse™: modular frontend architecture, configurable data, demo/live separation, PWA-ready product shells, AI guidance layers, and controlled refactoring pathways."
                  diagrams={technicalDiagrams}
                  onOpen={openLightbox}
                  layout="grid"
                  maxCards={3}
                />
              </div>
              <ModularBaseExpansion portfolioId="technical" />
              <PolishedPitchHero portfolioId="technical" onOpenAI={focusAI} onScrollTo={scrollToSection} onOpenQuiz={openQuiz} />
              <DemoLiveReadiness />
              <ProductMultiplicationModel />
              <ProductEcosystemShowcase portfolioId="technical" />
              <ClientAssemblyFlow />
              <FounderExecutionMindset />
              <NextStageMilestones portfolioId="technical" onOpenQuiz={openQuiz} />
              <CrowdfundingSupportCase />

              {/* Portfolio cards */}
              <div className="portfolioGrid">
                {portfolioList.map(p => <PortfolioCard key={p.id} portfolio={p}/>)}
              </div>

              <div className="portfolios-quiz-cta">
                <p>Not sure which portfolio to view first?</p>
                <div className="ctaRow" style={{justifyContent:'center'}}>
                  <button className="primary" onClick={openQuiz}>
                    Find the Right Portfolio <ArrowRight size={16}/>
                  </button>
                  <button className="secondary" onClick={openDiagrams}>
                    <ImageIcon size={15}/> View Architecture Diagrams
                  </button>
                </div>
              </div>
            </section>

            {/* ── Live Products ── */}
            <section id="products" className="section products">
              <div className="sectionHead">
                <p className="eyebrow">Supporting evidence</p>
                <h2>Live deployed products that support the portfolio story.</h2>
                <p>These are evidence links, not extra portfolio routes.</p>
              </div>
              <div className="productGrid">
                {LIVE_PRODUCTS.map(([name, url]) => (
                  <a key={url} href={url} target="_blank" rel="noreferrer">
                    {name}<ExternalLink size={14}/>
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}

// ─── PWA service worker ───────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}

createRoot(document.getElementById('root')).render(<App />);
