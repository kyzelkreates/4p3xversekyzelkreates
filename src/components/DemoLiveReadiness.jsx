import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { READINESS_BADGES } from '../data/portfolioPitchData';

// ─── Demo / Live Readiness Section ───────────────────────────────────────────
export default function DemoLiveReadiness() {
  return (
    <section className="section dlr-section" id="demolive" aria-labelledby="dlr-title">
      <div className="sectionHead">
        <p className="eyebrow">Demo / Live Architecture</p>
        <h3 id="dlr-title" className="dlr-title">Demo Mode shows the product. Live Mode runs the product.</h3>
      </div>

      <div className="dlr-grid">
        {/* Demo mode card */}
        <div className="dlr-card dlr-demo">
          <div className="dlr-card-header">
            <span className="dlr-mode-badge demo">Demo Mode</span>
          </div>
          <h4>Shows the Product</h4>
          <p>
            Demo Mode runs the full product UI, workflows, dashboards and AI guidance with clearly labelled
            demonstration data. Stakeholders can review a working product experience without any backend
            commitment, data risk, or infrastructure setup.
          </p>
          <ul className="dlr-points">
            <li><CheckCircle2 size={14} /> Full UI and workflow visible</li>
            <li><CheckCircle2 size={14} /> Labelled demonstration data</li>
            <li><CheckCircle2 size={14} /> AI guidance layers active</li>
            <li><CheckCircle2 size={14} /> Installable and shareable</li>
            <li><CheckCircle2 size={14} /> No backend required</li>
          </ul>
        </div>

        {/* Live mode card */}
        <div className="dlr-card dlr-live">
          <div className="dlr-card-header">
            <span className="dlr-mode-badge live">Live Mode</span>
          </div>
          <h4>Runs the Product</h4>
          <p>
            Live Mode connects the product to a real backend — Supabase, Firebase, or a custom API — enabling
            real users, live data, authentication, persistence, dashboards synced to real records, and
            organisation-specific configuration.
          </p>
          <ul className="dlr-points">
            <li><CheckCircle2 size={14} /> Real user authentication</li>
            <li><CheckCircle2 size={14} /> Live database persistence</li>
            <li><CheckCircle2 size={14} /> Organisation-specific configuration</li>
            <li><CheckCircle2 size={14} /> Real workflow records</li>
            <li><CheckCircle2 size={14} /> Backend-ready pathway clear</li>
          </ul>
        </div>
      </div>

      {/* Caution note */}
      <div className="dlr-caution">
        <AlertCircle size={16} aria-hidden="true" />
        <p>
          Some products require backend connection, security review, legal/compliance review and real-world
          testing before live operational use. No product should be used for live medical, legal, safeguarding
          or compliance decisions without appropriate professional review.
        </p>
      </div>

      {/* Readiness badges */}
      <div className="dlr-badges-wrap">
        <p className="eyebrow">Current product readiness indicators</p>
        <div className="dlr-badges">
          {READINESS_BADGES.map(b => (
            <span key={b.id} className={`dlr-badge color-${b.color}`}>{b.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
