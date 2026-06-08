import React from 'react';
import { ArrowRight, ExternalLink, Zap } from 'lucide-react';
import { PORTFOLIO_PITCH_ANGLES } from '../data/portfolioPitchData';

// ─── Polished Pitch Hero — per-portfolio headline + CTAs ─────────────────────
export default function PolishedPitchHero({ portfolioId, onOpenQuiz, onOpenAI, onScrollTo }) {
  const copy = PORTFOLIO_PITCH_ANGLES[portfolioId] || PORTFOLIO_PITCH_ANGLES.investor;

  return (
    <section className="section pph-section" aria-labelledby={`pph-title-${portfolioId}`}>
      <div className="orb pph-orb-a" aria-hidden="true" />
      <div className="orb pph-orb-b" aria-hidden="true" />

      <div className="pph-inner">
        <div className="pph-text">
          <p className="eyebrow pph-eyebrow">
            <Zap size={13} /> 4P3X Verse™ · Polished Pitch · Powered by 4P3X Intelligent AI™
          </p>
          <h2 id={`pph-title-${portfolioId}`} className="pph-headline">
            4P3X Verse™ — One Modular Architecture. Many AI-Powered Products.
          </h2>
          <p className="pph-sub">Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™</p>
          <p className="pph-body">
            4P3X Verse™ is a modular AI-assisted software ecosystem built around reusable base-system
            architecture. The first core base has already produced <strong>11 working product versions</strong> across
            multiple sectors. The next stage is to scale the model through 5, 10, 20, 50 and future 100-base
            libraries, creating <strong>hundreds of possible product pathways</strong> that can be assembled and
            refactored for clients, pilots, partners and live product deployment.
          </p>
          <p className="pph-angle">{copy.pitch}</p>

          <div className="pph-tags">
            {copy.emphasis.map(e => (
              <span key={e} className="pph-tag">{e}</span>
            ))}
          </div>

          <div className="pph-ctas">
            <button className="primary pph-cta" onClick={() => onScrollTo?.('products')}>
              Explore Products <ArrowRight size={16} />
            </button>
            {portfolioId === 'investor' && (
              <button className="secondary pph-cta" onClick={() => onScrollTo?.('valuation')}>
                View Investment Case
              </button>
            )}
            <button className="secondary pph-cta" onClick={onOpenAI}>
              Open AI Explainer
            </button>
            <button className="secondary pph-cta" onClick={() => onScrollTo?.('demolive')}>
              View Demo/Live Readiness
            </button>
            {(portfolioId === 'partner' || portfolioId === 'investor') && (
              <button className="secondary pph-cta" onClick={() => onScrollTo?.('next')}>
                Partner / Pilot With 4P3X
              </button>
            )}
            <button className="secondary pph-cta" onClick={() => onScrollTo?.('crowdfunding')}>
              Support the Next Stage
            </button>
          </div>
        </div>

        <div className="pph-panel">
          <div className="pph-stat-grid">
            <div className="pph-stat"><span className="pph-stat-num">1</span><span className="pph-stat-label">Core Base Proven</span></div>
            <div className="pph-stat"><span className="pph-stat-num">11</span><span className="pph-stat-label">Product Versions</span></div>
            <div className="pph-stat"><span className="pph-stat-num">5</span><span className="pph-stat-label">Portfolio Routes</span></div>
            <div className="pph-stat"><span className="pph-stat-num">1,100</span><span className="pph-stat-label">Possible Pathways (V6)</span></div>
          </div>
          <div className="pph-formula">
            <p className="pph-formula-label">Product Multiplication Formula</p>
            <p className="pph-formula-text">Bases × 11 versions = Possible Product Pathways</p>
            <p className="pph-formula-note">Pathway estimates — not guaranteed completed products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
