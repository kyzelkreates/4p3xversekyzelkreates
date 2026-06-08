import React from 'react';
import { AlertCircle } from 'lucide-react';
import { SUPPORT_TIERS, SUPPORT_DISCLAIMER } from '../data/portfolioPitchData';

// ─── Crowdfunding / Support Case ──────────────────────────────────────────────
export default function CrowdfundingSupportCase() {
  return (
    <section className="section csc-section" id="crowdfunding" aria-labelledby="csc-title">
      <div className="sectionHead">
        <p className="eyebrow">Crowdfunding / Support Case</p>
        <h3 id="csc-title" className="csc-title">Support the Next Stage of 4P3X Verse™</h3>
        <p className="csc-intro">
          This campaign would support the next stage of 4P3X Verse™: professional pitch material,
          demo videos, backend planning, live-mode readiness, AI agent upgrades, mobile/PWA polish,
          security guardrails, legal/business setup, customer pilot preparation and public launch material.
        </p>
      </div>

      <div className="csc-tiers">
        {SUPPORT_TIERS.map(tier => (
          <div key={tier.amount} className="csc-tier">
            <span className="csc-amount">{tier.amount}</span>
            <span className="csc-tier-label">{tier.label}</span>
            <p className="csc-tier-desc">{tier.description}</p>
          </div>
        ))}
      </div>

      <div className="csc-disclaimer">
        <AlertCircle size={15} aria-hidden="true" />
        <p>{SUPPORT_DISCLAIMER}</p>
      </div>
    </section>
  );
}
