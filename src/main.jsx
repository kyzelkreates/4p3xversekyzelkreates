import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Building2, CheckCircle2, Compass, Cpu, ExternalLink, Handshake, Landmark, Menu, Rocket, Sparkles, X } from 'lucide-react';
import { BRAND, PORTFOLIOS, QUIZ, LIVE_PRODUCTS } from './config';
import './styles.css';

const portfolioList = Object.values(PORTFOLIOS);

function scoreAnswers(answers) {
  const scores = Object.fromEntries(portfolioList.map(p => [p.id, 0]));
  Object.values(answers).forEach(option => {
    Object.entries(option?.scores || {}).forEach(([id, value]) => {
      scores[id] = (scores[id] || 0) + value;
    });
  });
  const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'investor';
  return { scores, winner: PORTFOLIOS[winnerId] };
}

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

function LogoImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`logoFallback ${className || ''}`}>{fallback}</div>;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [aiInput, setAiInput] = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'ai', text: 'Welcome. I can route visitors to the right 4P3X Verse™ portfolio and explain the ecosystem in clear language.' }
  ]);
  const result = useMemo(() => scoreAnswers(answers), [answers]);
  const completed = Object.keys(answers).length === QUIZ.length;

  const askAI = () => {
    if (!aiInput.trim()) return;
    const question = aiInput.trim();
    setAiMessages(prev => [...prev, { role: 'user', text: question }, { role: 'ai', text: askLocalAI(question) }]);
    setAiInput('');
  };

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="4P3X Verse Gateway home">
          <LogoImage
            src={BRAND.boxLogo}
            alt="4P3X Verse box logo"
            className="navBoxLogo"
            fallback={<Sparkles size={22} />}
          />
          <div><strong>{BRAND.name}</strong><span>{BRAND.strapline}</span></div>
        </a>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#quiz" onClick={() => setMenuOpen(false)}>Quiz</a>
          <a href="#guide" onClick={() => setMenuOpen(false)}>AI Guide</a>
          <a href="#portfolios" onClick={() => setMenuOpen(false)}>5 Portfolios</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Live Products</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="orb orbA" /><div className="orb orbB" />
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Portfolio Gateway · 5-route AI guided router</p>
            <h1>Welcome to the 4P3X Verse™ Gateway</h1>
            <h2>{BRAND.headline}</h2>
            <p className="lead">{BRAND.intro}</p>
            <div className="ctaRow">
              <a className="primary" href="#quiz">Start visitor quiz <ArrowRight size={18}/></a>
              <a className="secondary" href="#portfolios">View all five portfolios</a>
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
                  <span>0{idx+1}</span>{p.title}<ExternalLink size={14}/>
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

      <section id="quiz" className="section quizSection">
        <div className="sectionHead"><p className="eyebrow">Onboarding quiz</p><h2>Route every visitor to the strongest portfolio for their purpose.</h2></div>
        <div className="quizGrid">
          <div className="questions">
            {QUIZ.map((q, index) => (
              <article className="questionCard" key={q.id}>
                <h3>{index + 1}. {q.question}</h3>
                <div className="options">
                  {q.options.map(option => (
                    <button key={option.label} className={answers[q.id]?.label === option.label ? 'selected' : ''} onClick={() => setAnswers({ ...answers, [q.id]: option })}>{option.label}</button>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <aside className="resultCard">
            <Compass size={34}/>
            <p className="eyebrow">Recommended route</p>
            <h3>{completed ? result.winner.title : 'Answer the quiz to generate a route'}</h3>
            <p>{completed ? result.winner.summary : 'The gateway scores each answer and points visitors to Investor, Partner, Contract/Hire, Grant, or Technical.'}</p>
            {completed && <a className="primary full" href={result.winner.url} target="_blank" rel="noreferrer">Open {result.winner.title} <ExternalLink size={16}/></a>}
            <button className="secondary full" onClick={() => setAnswers({})}>Reset quiz</button>
          </aside>
        </div>
      </section>

      <section id="guide" className="section aiSection">
        <div className="sectionHead">
          <p className="eyebrow">Embedded AI</p>
          <h2>4P3X Portfolio Guide™</h2>
          <p>Local-first scripted AI guide for routing, explanation, and portfolio Q&A. Base44 can connect this to a stronger knowledge-base AI later without changing the gateway structure.</p>
        </div>
        <div className="chatShell">
          <div className="messages">{aiMessages.map((m, i) => <div key={i} className={`message ${m.role}`}>{m.text}</div>)}</div>
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

      <section id="portfolios" className="section">
        <div className="sectionHead"><p className="eyebrow">Five live portfolio paths</p><h2>One gateway. Five audience-specific destinations.</h2></div>
        <div className="portfolioGrid">
          {portfolioList.map(p => <PortfolioCard key={p.id} portfolio={p}/>) }
        </div>
      </section>

      <section id="products" className="section products">
        <div className="sectionHead">
          <p className="eyebrow">Supporting evidence</p>
          <h2>Live deployed products that support the portfolio story.</h2>
          <p>These are evidence links, not extra portfolio routes.</p>
        </div>
        <div className="productGrid">
          {LIVE_PRODUCTS.map(([name, url]) => (
            <a key={url} href={url} target="_blank" rel="noreferrer">{name}<ExternalLink size={14}/></a>
          ))}
        </div>
      </section>
    </main>
  );
}

function PortfolioCard({ portfolio }) {
  const icons = { investor: Rocket, partner: Handshake, contract: BriefcaseBusiness, grant: Landmark, technical: Cpu };
  const Icon = icons[portfolio.id] || Building2;
  return (
    <article className="portfolioCard">
      <div className="cardIcon"><Icon /></div>
      <span className="badge">{portfolio.badge}</span>
      <h3>{portfolio.title}</h3>
      <p className="audience">{portfolio.audience}</p>
      <p>{portfolio.summary}</p>
      <ul>{portfolio.bestFor.map(item => <li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
      <a className="primary full" href={portfolio.url} target="_blank" rel="noreferrer">Open live portfolio <ExternalLink size={16}/></a>
    </article>
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}

createRoot(document.getElementById('root')).render(<App />);
