import React from 'react';
import { MULTIPLICATION_MODEL } from '../data/portfolioPitchData';

// ─── Product Multiplication Model ────────────────────────────────────────────
export default function ProductMultiplicationModel() {
  const { expansionRoadmap, versionsPerBase, safeDisclaimer } = MULTIPLICATION_MODEL;

  return (
    <section className="section pmm-section" aria-labelledby="pmm-title">
      <div className="sectionHead">
        <p className="eyebrow">Modular Product Multiplication Model</p>
        <h3 id="pmm-title" className="pmm-title">
          Number of Bases × {versionsPerBase} Product Versions = Possible Product Pathways
        </h3>
        <p className="pmm-intro">
          The first base proved the model by producing <strong>{versionsPerBase} different working product versions</strong>.
          As the base library grows, the number of possible product pathways multiplies. This does not mean
          building random apps — it means building a controlled architecture library where reusable base
          systems, workflows, dashboards, PWAs, AI guidance layers and data patterns can be selected and
          refactored into tailored platforms.
        </p>
      </div>

      {/* Multiplication cards */}
      <div className="pmm-grid">
        {expansionRoadmap.map(row => (
          <div key={row.version} className={`pmm-card ${row.status}`}>
            <div className="pmm-card-top">
              <span className="pmm-ver">{row.version}</span>
              <span className={`pmm-status-badge ${row.status}`}>
                {row.status === 'live' ? '● Live' : '◎ Roadmap'}
              </span>
            </div>
            <div className="pmm-formula-row">
              <span className="pmm-bases">{row.bases}</span>
              <span className="pmm-times">×{versionsPerBase}</span>
              <span className="pmm-equals">=</span>
              <span className="pmm-pathways">{row.pathways.toLocaleString()}</span>
            </div>
            <p className="pmm-bases-label">{row.bases === 1 ? 'base' : 'bases'}</p>
            <p className="pmm-pathways-label">possible pathways</p>
            <p className="pmm-proof">{row.proof}</p>
          </div>
        ))}
      </div>

      {/* Required wording */}
      <div className="pmm-statement-row">
        <div className="pmm-statement-card">
          <p className="pmm-big-line">
            1 reusable base has already produced <strong>11 working product versions</strong>.
            The future roadmap scales this model into 5, 10, 20, 50 and 100 base libraries,
            supporting 55, 110, 220, 550 and up to <strong>1,100 possible product pathways</strong>.
          </p>
        </div>
        <div className="pmm-disclaimer-card">
          <p className="pmm-disclaimer">{safeDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
