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
import './styles.css';

const portfolioList = Object.values(PORTFOLIO_ROUTES);

// ─── Local AI guide (diagram + modular base expansion aware) ─────────────────
function askLocalAI(input) {
  const text = input.toLowerCase();

  // Modular base system questions
  if (text.includes('modular base') || text.includes('base system') || text.includes('base library') || text.includes('100 base') || text.includes('50 base') || text.includes('20 base') || text.includes('10 base') || text.includes('5 base')) {
    return `The 4P3X Verse™ has a growing library of separate reusable base-system foundations — not one app getting bigger. Each base is a distinct reusable foundation with its own dashboard structures, workflows, PWA logic, AI guidance layers, and data models. The roadmap grows from 1 core base (V1, live now) to 5 (V2), 10 (V3), 20 (V4), 50 (V5), and 100 (V6) separate base-system libraries. Scroll down the portfolios section to see the full Modular Base-System Expansion Model.`;
  }
  if (text.includes('modular product assembly') || text.includes('assembly engine') || text.includes('client platform') || text.includes('how does 4p3x build') || text.includes('how it builds')) {
    return `4P3X Verse™ is a Modular Product Assembly Ecosystem™. When a client needs a platform, it does not start from a blank screen. Instead: (1) Map the client's needs, (2) AI identifies the most relevant base systems, (3) Select the best-fit bases from the library, (4) Assemble the strongest components, (5) Refactor for the client's sector, (6) Deliver an installable demo, (7) Move to live with a real backend. Each portfolio section shows a full "How It Works" flow.`;
  }
  if (text.includes('one app') || text.includes('separate') || text.includes('different bases') || text.includes('are they one')) {
    return `The base versions are separate reusable system libraries — not one single app getting bigger. Each base can contain different dashboard logic, workflows, PWA structures, AI guidance patterns, data models and sector-ready layouts. The platform selects, combines and refactors the strongest parts from the right bases to create a tailored client platform.`;
  }
  if (text.includes('what is 4p3x') || text.includes('what is the 4p3x') || text.includes('explain 4p3x')) {
    return `4P3X Verse™ is a Modular Product Assembly Ecosystem™ — a growing library of reusable base systems that can be selected, combined and refactored to create tailored client platforms faster than starting from zero. It is not just a collection of apps. It is the system that apps are assembled from. Built once. Learned across many systems. Assembled for each client.`;
  }
  if (text.includes('investor') && (text.includes('why') || text.includes('value') || text.includes('case'))) {
    return `The investment case is not based on one product. It is based on a reusable modular architecture that can generate many sector-ready products from a controlled base-system library. As the library grows from 1 to 100 bases, each new base increases the speed and quality of every future client platform build — without proportional increases in cost or time. See the Investor section below for the full model.`;
  }
  if (text.includes('partner') && (text.includes('why') || text.includes('value') || text.includes('how'))) {
    return `Partners can work with 4P3X Verse™ to shape sector-specific platforms from an existing base-system library instead of funding a complete build from zero. Strategic collaboration, pilots, white-label potential, and joint base development are all viable. See the Partner section for the full model.`;
  }
  if (text.includes('grant') && (text.includes('why') || text.includes('how') || text.includes('benefit'))) {
    return `Grant funding could turn the modular base-system model into public-benefit pilots across community support, care, training, recovery, compliance and safer operational workflows. The architecture already exists — funding accelerates its application to specific social needs. Demo mode lets stakeholders review working products before any live commitment.`;
  }
  if (text.includes('technical') && (text.includes('why') || text.includes('impressive') || text.includes('architecture'))) {
    return `The technical value is the repeatable architecture: SSOT config, reusable base systems, clean demo/live mode separation, component assembly, installable PWA logic, AI agent boundaries, and controlled refactoring chains. Each new base improves on the last without accumulating technical debt. See the Technical Architecture section below.`;
  }
  if (text.includes('hire') || text.includes('contract') || text.includes('employ') || text.includes('ciaran')) {
    return `Ciaran / Kyzel Kreates™ demonstrates practical execution ability: architecture thinking, prompt engineering, UI/UX structure, PWA planning, state logic, demo/live separation, and product assembly. This is not just one product — it is a systematic, repeatable approach to building them. See the Contract/Hire section for the full build capability evidence.`;
  }
  if (text.includes('different') || text.includes('unique') || text.includes('unusual') || text.includes('distinctive')) {
    return `While many portfolios show individual projects, the 4P3X Verse™ presents a connected product architecture: deployed demos, future variants, AI-assisted workflows, and modular base systems shown as one organised engineering ecosystem. The combination of reusable bases, AI-assisted assembly, demo/live switching, and portfolio-specific routing is a distinctive approach to early-stage software development.`;
  }
  // Diagram-aware responses
  if (text.includes('diagram') || text.includes('how does it work') || text.includes('how it works')) {
    return `The 4P3X Verse™ has 12 architecture diagrams covering the ecosystem structure, modular base system, demo/live mode, portfolio audience routes, AI orchestration, product refactoring, and expansion roadmap. Use the "Architecture Diagrams" nav link above to view all 12.`;
  }
  if (text.includes('demo mode') || text.includes('live mode')) {
    return `Demo Mode shows the full product UI and workflow immediately. Live Mode connects a real backend (Supabase, Firebase, REST API) to make it operational. This means clients can review a working product demo before any live infrastructure commitment. The "Demo Mode → Live Mode Architecture" diagram explains this visually.`;
  }
  if (text.includes('scale') || text.includes('roadmap') || text.includes('expansion')) {
    return `The 4P3X Verse™ scales from 1 reusable base (V1, live) to 5 (V2), 10 (V3), 20 (V4), 50 (V5), and 100 modular base-system libraries (V6). Each stage adds separate reusable foundations — not one app getting bigger. See the Expansion Roadmap section and the Timeline section on this page.`;
  }
  // Portfolio routing
  const portfolioList = Object.values(PORTFOLIO_ROUTES);
  const direct = portfolioList.find(p => p.routeLogic.some(term => text.includes(term)));
  if (direct) {
    return `Best route: ${direct.title}. ${direct.summary} Open it here: ${direct.url}`;
  }
  if (text.includes('all') || text.includes('five') || text.includes('portfolios')) {
    return `This gateway has exactly five portfolio paths: Investor, Strategic Partner, Hire / Contract, Grant / Public Benefit, and Technical Architecture. Each is explained by the Value & Audience Map diagram and the Modular Base-System Expansion section below.`;
  }
  return `I am the 4P3X Portfolio Guide™. I can explain the Modular Base-System Expansion Model, the client platform assembly process, the 5-to-100 base roadmap, the demo/live architecture, or route you to the right portfolio. Try asking "what is the modular base system?" or "how does 4P3X build a client platform?"`;
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
    { role: 'ai', text: 'Welcome. I can route visitors to the right 4P3X Verse™ portfolio, explain the architecture diagrams, and answer questions about the ecosystem. Try asking "how does the architecture work?" or "which portfolio should I view?"' }
  ]);

  const openQuiz  = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);
  const openDiagrams = () => { setPage('diagrams'); window.scrollTo(0,0); };
  const closeDiagrams = () => { setPage('home'); window.scrollTo(0,0); };

  const openLightbox = (diagram) => setLightbox(diagram);
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
