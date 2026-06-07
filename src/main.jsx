import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BriefcaseBusiness, Building2, CheckCircle2,
  Cpu, ExternalLink, Handshake, Landmark,
  Menu, Rocket, Sparkles, X, LayoutGrid
} from 'lucide-react';
import { BRAND, PORTFOLIO_ROUTES, LIVE_PRODUCTS } from './config';
import PortfolioQuizModal from './components/PortfolioQuizModal';
import TimelineSection from './components/TimelineSection';
import './styles.css';

const portfolioList = Object.values(PORTFOLIO_ROUTES);

// ─── Local AI guide ────────────────────────────────────────────────────────────
function askLocalAI(input) {
  const text = input.toLowerCase();
  const direct = portfolioList.find(p => p.routeLogic.some(term => text.includes(term)));
  if (direct) {
    return `Best route: ${direct.title}. ${direct.summary} Open it here: ${direct.url}`;
  }
  if (text.includes('all') || text.includes('five') || text.includes('portfolios')) {
    return `This gateway contains exactly five portfolio paths: Investor, Strategic Partner, Hire / Contract, Grant / Public Benefit, and Technical Architecture. The quiz routes people automatically, but every path is also available manually in the directory.`;
  }
  if (text.includes('demo') || text.includes('live') || text.includes('backend')) {
    return `The core message is: Demo Mode shows the product. Live Mode runs the product. The deployed products demonstrate the interface and workflow now, then become operational systems by connecting backend services such as Supabase, Firebase, REST, or a custom API where appropriate.`;
  }
  if (text.includes('ciaran') || text.includes('kyzel')) {
    return `Ciaran / Kyzel Kreates™ is positioned as a rapid AI-assisted systems builder creating the 4P3X Verse™: one modular architecture that can become many sector-ready products through controlled refactoring, PWA design, AI guidance layers, and demo-to-live pathways.`;
  }
  return `I am the 4P3X Portfolio Guide™. Ask me about investors, partners, hiring, grants, technical architecture, live products, demo/live mode, PWA structure, AI agents, or which portfolio someone should view first.`;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'ai', text: 'Welcome. I can route visitors to the right 4P3X Verse™ portfolio and explain the ecosystem in clear language.' }
  ]);

  const askAI = () => {
    if (!aiInput.trim()) return;
    const question = aiInput.trim();
    setAiMessages(prev => [...prev, { role: 'user', text: question }, { role: 'ai', text: askLocalAI(question) }]);
    setAiInput('');
  };

  const openQuiz  = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);

  return (
    <>
      {/* ── Pop-up Quiz Modal ── */}
      <PortfolioQuizModal isOpen={quizOpen} onClose={closeQuiz} />

      <main>
        {/* ── Navigation ── */}
        <header className="nav">
          <a className="brand" href="#top" aria-label="4P3X Verse Gateway home">
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
            <a href="#guide"      onClick={() => setMenuOpen(false)}>AI Guide</a>
            <a href="#timeline"   onClick={() => setMenuOpen(false)}>Timeline</a>
            <a href="#portfolios" onClick={() => setMenuOpen(false)}>5 Portfolios</a>
            <a href="#products"   onClick={() => setMenuOpen(false)}>Live Products</a>
            <button className="nav-quiz-btn" onClick={() => { setMenuOpen(false); openQuiz(); }}>
              Find the Right Portfolio
            </button>
          </nav>
        </header>

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

        {/* ── AI Guide ── */}
        <section id="guide" className="section aiSection">
          <div className="sectionHead">
            <p className="eyebrow">Embedded AI</p>
            <h2>4P3X Portfolio Guide™</h2>
            <p>Local-first scripted AI guide for routing, explanation, and portfolio Q&A. Base44 can connect this to a stronger knowledge-base AI later without changing the gateway structure.</p>
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
                placeholder="Ask: which portfolio is best for a grant funder?"
              />
              <button onClick={askAI}>Ask AI</button>
            </div>
          </div>
        </section>

        {/* ── Timeline Section ── */}
        <TimelineSection onOpenQuiz={openQuiz} />

        {/* ── Five Portfolio Cards ── */}
        <section id="portfolios" className="section">
          <div className="sectionHead">
            <p className="eyebrow">Five live portfolio paths</p>
            <h2>One gateway. Five audience-specific destinations.</h2>
          </div>
          <div className="portfolioGrid">
            {portfolioList.map(p => <PortfolioCard key={p.id} portfolio={p}/>)}
          </div>
          <div className="portfolios-quiz-cta">
            <p>Not sure which portfolio to view first?</p>
            <button className="primary" onClick={openQuiz}>
              Find the Right Portfolio <ArrowRight size={16}/>
            </button>
          </div>
        </section>

        {/* ── Live Products (supporting evidence) ── */}
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
      </main>
    </>
  );
}

// ─── PWA service worker registration ─────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}

createRoot(document.getElementById('root')).render(<App />);
