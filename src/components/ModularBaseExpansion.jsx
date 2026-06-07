import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { BASE_EXPANSION_MODEL, ASSEMBLY_FLOW, BASE_EXPANSION_PORTFOLIO_COPY } from '../data/baseExpansionModel';

// ─────────────────────────────────────────────────────────────────────────────
// ModularBaseExpansion — single reusable component
// Receives portfolioId ('investor'|'partner'|'contract'|'grant'|'technical')
// and renders the full Modular Base-System Expansion Model section with
// portfolio-specific copy.
// ─────────────────────────────────────────────────────────────────────────────

// Status badge
function StatusBadge({ status }) {
  return (
    <span className={`mbe-status ${status}`}>
      {status === 'live' ? '● Live' : '◎ Roadmap'}
    </span>
  );
}

// Single base version card
function BaseCard({ base }) {
  return (
    <div className={`mbe-base-card ${base.status}`}>
      <div className="mbe-base-top">
        <span className="mbe-version">{base.version}</span>
        <StatusBadge status={base.status} />
      </div>
      <p className="mbe-base-count">{base.count}</p>
      <p className="mbe-base-label">{base.label}</p>
      <p className="mbe-base-desc">{base.description}</p>
      <ul className="mbe-caps">
        {base.capabilities.map(c => (
          <li key={c}><CheckCircle2 size={13} />{c}</li>
        ))}
      </ul>
    </div>
  );
}

// Assembly flow step card
function FlowStep({ step, isLast }) {
  return (
    <div className="mbe-flow-step">
      <div className="mbe-flow-icon">{step.icon}</div>
      <div className="mbe-flow-body">
        <p className="mbe-flow-num">Step {step.step}</p>
        <h4 className="mbe-flow-title">{step.title}</h4>
        <p className="mbe-flow-desc">{step.description}</p>
      </div>
      {!isLast && <div className="mbe-flow-arrow"><ArrowRight size={16} /></div>}
    </div>
  );
}

// Main component
export default function ModularBaseExpansion({ portfolioId }) {
  const [showAllBases, setShowAllBases] = useState(false);
  const copy = BASE_EXPANSION_PORTFOLIO_COPY[portfolioId] || BASE_EXPANSION_PORTFOLIO_COPY.investor;
  const visibleBases = showAllBases ? BASE_EXPANSION_MODEL : BASE_EXPANSION_MODEL.slice(0, 4);

  return (
    <section className="section mbe-section" aria-labelledby={`mbe-title-${portfolioId}`}>
      <div className="orb mbe-orb-a" aria-hidden="true" />
      <div className="orb mbe-orb-b" aria-hidden="true" />

      {/* ── Section header ── */}
      <div className="sectionHead mbe-head">
        <p className="eyebrow">Modular Base-System Expansion Model</p>
        <h2 id={`mbe-title-${portfolioId}`}>{copy.headline}</h2>
        <p className="mbe-angle">{copy.angle}</p>
      </div>

      {/* ── Core statement banner ── */}
      <div className="mbe-banner">
        <p className="mbe-banner-text">
          "4P3X Verse™ is not just one app or a collection of demos. It is a{' '}
          <strong>Modular Product Assembly Ecosystem™</strong> — a growing library of reusable base systems
          that can be selected, combined and refactored to create tailored client platforms faster than starting from zero."
        </p>
        <div className="mbe-taglines">
          <span>Built once. Learned across many systems. Assembled for each client.</span>
          <span>One ecosystem. Many bases. Custom platforms built faster.</span>
        </div>
      </div>

      {/* ── Value statement + key points ── */}
      <div className="mbe-value-row">
        <div className="mbe-value-text">
          <p className="eyebrow">Why this matters</p>
          <p className="mbe-value-statement">{copy.valueStatement}</p>
          <ul className="mbe-keypoints">
            {copy.keyPoints.map(pt => (
              <li key={pt}><CheckCircle2 size={15} />{pt}</li>
            ))}
          </ul>
        </div>
        <div className="mbe-quote-card">
          <p className="mbe-big-quote">
            "4P3X Verse™ does not just build apps. It builds the foundations that apps can be assembled from."
          </p>
          <p className="mbe-quote-attr">— 4P3X Verse™ · Powered by 4P3X Intelligent AI™</p>
          <div className="mbe-claim-block">
            <p>4P3X Verse™ is not just a collection of apps. It is a modular AI-assisted software ecosystem built around reusable base systems. The roadmap moves from one core base to 5, 10, 20, 50 and eventually 100 separate base-system foundations. Each base can contain different dashboard logic, PWA structures, workflows, AI guidance patterns, data models and sector-ready layouts. The goal is to take the strongest parts from the right bases and assemble a tailored platform for each client instead of starting from zero every time.</p>
          </div>
        </div>
      </div>

      {/* ── Base version timeline cards ── */}
      <div className="mbe-bases-wrap">
        <div className="sectionHead" style={{ marginBottom: '20px' }}>
          <p className="eyebrow">Expansion stages</p>
          <h3 className="mbe-sub-heading">From 1 Core Base to 100 Modular Foundations</h3>
          <p className="mbe-sub-intro">
            Each stage below represents <strong>separate reusable base-system libraries</strong> — not one app getting bigger.
            Each base contains its own dashboard structures, workflows, PWA logic, AI guidance layers, data models and sector-use patterns.
          </p>
        </div>
        <div className="mbe-bases-grid">
          {visibleBases.map(base => <BaseCard key={base.version} base={base} />)}
        </div>
        {!showAllBases && (
          <button className="mbe-show-more" onClick={() => setShowAllBases(true)}>
            Show V5 &amp; V6 <ChevronDown size={16} />
          </button>
        )}
        {showAllBases && (
          <button className="mbe-show-more" onClick={() => setShowAllBases(false)}>
            Show less <ChevronUp size={16} />
          </button>
        )}
      </div>

      {/* ── Assembly flow ── */}
      <div className="mbe-flow-wrap">
        <div className="sectionHead" style={{ marginBottom: '20px' }}>
          <p className="eyebrow">Client platform assembly</p>
          <h3 className="mbe-sub-heading">How 4P3X Verse™ Builds a Client Platform</h3>
          <p className="mbe-sub-intro">
            A repeatable, AI-assisted process from client brief to deployed working product.
          </p>
        </div>
        <div className="mbe-flow-grid">
          {ASSEMBLY_FLOW.map((step, i) => (
            <FlowStep
              key={step.step}
              step={step}
              isLast={i === ASSEMBLY_FLOW.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Concept panel ── */}
      <div className="mbe-concept-panel">
        <div className="mbe-concept-col mbe-concept-left">
          <p className="eyebrow">Base Library → Client Platform</p>
          <h3 className="mbe-concept-title">Modular Product Assembly Engine™</h3>
          <p className="mbe-concept-desc">
            When a client needs a platform, 4P3X Verse™ does not start from a blank screen.
            It analyses the client's needs, selects the most relevant base systems from the library,
            takes the strongest parts from each one, and combines them into a tailored platform structure
            through controlled refactoring and AI-assisted assembly.
          </p>
          <div className="mbe-concept-flow">
            {['Base Library', 'AI Matching', 'Component Assembly', 'Sector Refactor', 'Client Platform'].map((label, i, arr) => (
              <React.Fragment key={label}>
                <span className="mbe-cf-pill">{label}</span>
                {i < arr.length - 1 && <span className="mbe-cf-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="mbe-potential-note">
            <p>
              A modular approach that has the potential to change how early-stage sector software is designed,
              prototyped, validated and expanded — and could reduce the time between idea, prototype,
              working demo, pilot and live product.
            </p>
          </div>
        </div>
        <div className="mbe-concept-col mbe-concept-right">
          <div className="mbe-visual-placeholder" aria-label="4P3X Modular Product Assembly Engine™ Visual">
            <p className="eyebrow">4P3X Modular Product Assembly Engine™</p>
            <div className="mbe-visual-grid">
              {BASE_EXPANSION_MODEL.map(base => (
                <div key={base.version} className={`mbe-vis-cell ${base.status}`}>
                  <span className="mbe-vis-ver">{base.version}</span>
                  <span className="mbe-vis-cnt">{base.count.split(' ')[0]}</span>
                  <span className="mbe-vis-lbl">{base.label}</span>
                </div>
              ))}
            </div>
            <p className="mbe-vis-caption">
              A new modular approach to AI-assisted software creation —
              a repeatable product assembly model growing from 1 to 100 reusable bases.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
