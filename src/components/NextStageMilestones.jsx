import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NEXT_STAGE_MILESTONES } from '../data/portfolioPitchData';

// ─── Next Stage Milestones ────────────────────────────────────────────────────
export default function NextStageMilestones({ onOpenQuiz, portfolioId }) {
  return (
    <section className="section nsm-section" id="next" aria-labelledby="nsm-title">
      <div className="sectionHead">
        <p className="eyebrow">What Happens Next</p>
        <h3 id="nsm-title" className="nsm-title">From Product Proof to Market Proof</h3>
        <p className="nsm-intro">
          The architecture is proven. The next stage is commercial validation, pilots, partners,
          customers, funding and scaling.
        </p>
      </div>

      <div className="nsm-grid">
        {NEXT_STAGE_MILESTONES.map(m => (
          <div key={m.n} className="nsm-item">
            <span className="nsm-num">{String(m.n).padStart(2, '0')}</span>
            <p className="nsm-label">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Audience-specific calls to action */}
      <div className="nsm-cta-row">
        {portfolioId === 'investor' && (
          <div className="nsm-cta-card">
            <p className="eyebrow">For Investors</p>
            <p>The investment case improves with each milestone completed. Pilots, letters of interest, paying customers and backend-connected flagship products are the next valuation unlocks.</p>
          </div>
        )}
        {portfolioId === 'partner' && (
          <div className="nsm-cta-card">
            <p className="eyebrow">For Partners</p>
            <p>Partners can help connect 4P3X Verse™ to the right sectors, clients and operational problems. Pilot opportunities are the clearest immediate pathway.</p>
          </div>
        )}
        {portfolioId === 'grant' && (
          <div className="nsm-cta-card">
            <p className="eyebrow">For Grant Funders</p>
            <p>Grant funding could accelerate public-benefit pilot creation, live-mode readiness, accessibility polish, and evidence-based product delivery.</p>
          </div>
        )}
        {portfolioId === 'contract' && (
          <div className="nsm-cta-card">
            <p className="eyebrow">For Employers & Clients</p>
            <p>The same execution approach behind 4P3X Verse™ is available for contract work, employment, and client-specific platform builds.</p>
          </div>
        )}
        {portfolioId === 'technical' && (
          <div className="nsm-cta-card">
            <p className="eyebrow">For Technical Reviewers</p>
            <p>The next technical milestones include backend-connected flagship products, security guardrails, API integration layers, and production-ready deployment pipelines.</p>
          </div>
        )}
        <button className="primary nsm-quiz-btn" onClick={onOpenQuiz}>
          Find the Right Portfolio <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
