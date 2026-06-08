import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import {
  VALUATION_POSITIONING,
  VALUATION_EVIDENCE,
  VALUATION_RATIONALE,
  VALUATION_SOURCES,
  SUMMARY_STATEMENT
} from '../data/valuationData';

// ─── Valuation Rationale subsection ──────────────────────────────────────────
function ValuationRationale() {
  const [sourcesOpen, setSourcesOpen] = useState(false);

  return (
    <div className="svc-rationale">
      <p className="eyebrow">Why This Valuation Range Is Being Used</p>
      <p className="svc-rationale-body">{VALUATION_RATIONALE.methodology}</p>

      <div className="svc-rat-ranges">
        <div className="svc-rat-range">
          <span className="svc-rat-range-label">Why {VALUATION_POSITIONING.fairRange} fair pre-revenue positioning:</span>
          <p>{VALUATION_RATIONALE.fairRangeReason}</p>
        </div>
        <div className="svc-rat-range polished">
          <span className="svc-rat-range-label">Why {VALUATION_POSITIONING.polishedPitchRange} polished pitch positioning:</span>
          <p>{VALUATION_RATIONALE.polishedPitchRangeReason}</p>
        </div>
      </div>

      <p className="eyebrow" style={{ marginTop: '20px' }}>Source Basis</p>
      <ol className="svc-source-list">
        {VALUATION_RATIONALE.sourceBasis.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <p className="svc-summary">{SUMMARY_STATEMENT}</p>

      {/* Expandable sources panel */}
      <button
        className="svc-sources-toggle"
        onClick={() => setSourcesOpen(v => !v)}
        aria-expanded={sourcesOpen}
      >
        Sources / Valuation Basis {sourcesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {sourcesOpen && (
        <div className="svc-sources-panel">
          {VALUATION_SOURCES.map(s => (
            <div key={s.label} className="svc-source-item">
              <strong>{s.label}:</strong>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Startup Value & Investment Case ─────────────────────────────────────────
export default function StartupValueCase() {
  const [showRationale, setShowRationale] = useState(false);

  return (
    <section className="section svc-section" id="valuation" aria-labelledby="svc-title">
      <div className="sectionHead">
        <p className="eyebrow">Startup Value & Investment Case</p>
        <h3 id="svc-title" className="svc-title">Pre-Revenue Modular AI-Assisted Software Ecosystem</h3>
      </div>

      {/* Main positioning */}
      <div className="svc-intro-card">
        <p>
          4P3X Verse™ is currently best understood as an advanced pre-revenue modular AI-assisted software
          ecosystem. The current value is not based on one app. The value is in the repeatable model:
          reusable base architecture, 11 working product versions, demo/live readiness,
          GitHub-installable structure, AI-assisted assembly, sector refactoring, and a roadmap that
          scales toward 55, 110, 220, 550 and up to 1,100 possible product pathways.
        </p>
      </div>

      {/* Valuation range cards */}
      <div className="svc-range-grid">
        <div className="svc-range-card fair">
          <p className="svc-range-type">Fair Pre-Revenue Positioning</p>
          <p className="svc-range-value">{VALUATION_POSITIONING.fairRange}</p>
          <p className="svc-range-note">Beyond idea stage. Working architecture proven. Pre-revenue constraint applies.</p>
        </div>
        <div className="svc-range-card polished">
          <p className="svc-range-type">Polished Pitch Positioning</p>
          <p className="svc-range-value">{VALUATION_POSITIONING.polishedPitchRange}</p>
          <p className="svc-range-note">Subject to professional portfolio presentation, strong pitch copy, live evidence, and commercial validation.</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="svc-disclaimer-banner">
        <AlertCircle size={16} aria-hidden="true" />
        <p>{VALUATION_POSITIONING.disclaimer}</p>
      </div>

      {/* Evidence table */}
      <div className="svc-evidence-wrap">
        <p className="eyebrow">Valuation Evidence Table</p>
        <div className="svc-evidence-table" role="table" aria-label="Valuation evidence drivers">
          <div className="svc-evidence-header" role="row">
            <span role="columnheader">Evidence Driver</span>
            <span role="columnheader">4P3X Verse™ Evidence</span>
            <span role="columnheader">Valuation Impact</span>
          </div>
          {VALUATION_EVIDENCE.map(row => (
            <div key={row.driver} className="svc-evidence-row" role="row">
              <span className="svc-ev-driver" role="cell">{row.driver}</span>
              <span className="svc-ev-evidence" role="cell">{row.evidence}</span>
              <span className="svc-ev-impact" role="cell">{row.impact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rationale toggle */}
      <button
        className="svc-rationale-toggle"
        onClick={() => setShowRationale(v => !v)}
        aria-expanded={showRationale}
      >
        Valuation Rationale & Source Basis {showRationale ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {showRationale && <ValuationRationale />}

      {/* Full disclaimer */}
      <div className="svc-full-disclaimer">
        <AlertCircle size={14} aria-hidden="true" />
        <p>{VALUATION_POSITIONING.fullDisclaimer}</p>
      </div>
    </section>
  );
}
