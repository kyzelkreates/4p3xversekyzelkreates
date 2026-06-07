import React, { useState } from 'react';
import { X, LayoutGrid } from 'lucide-react';
import { DIAGRAMS } from '../data/diagramRegistry';
import DiagramCard from './DiagramCard';
import DiagramLightbox from './DiagramLightbox';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Investor',    value: 'investor' },
  { label: 'Partner',     value: 'partner' },
  { label: 'Contract / Hire', value: 'contract' },
  { label: 'Grant',       value: 'grant' },
  { label: 'Technical',   value: 'technical' },
];

// ─── Full architecture diagrams gallery page ──────────────────────────────────
export default function ArchitectureDiagrams({ onBack }) {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // diagram object or null

  const filtered = filter === 'all'
    ? DIAGRAMS
    : DIAGRAMS.filter(d => d.audiences.includes(filter));

  const openLightbox = (diagram) => setLightbox(diagram);
  const closeLightbox = () => setLightbox(null);

  const lbIndex = lightbox ? filtered.findIndex(d => d.id === lightbox.id) : -1;
  const goPrev = () => lbIndex > 0 && setLightbox(filtered[lbIndex - 1]);
  const goNext = () => lbIndex < filtered.length - 1 && setLightbox(filtered[lbIndex + 1]);

  return (
    <>
      {lightbox && (
        <DiagramLightbox
          diagram={lightbox}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={lbIndex > 0}
          hasNext={lbIndex < filtered.length - 1}
        />
      )}

      <section className="section adg-page">
        {/* Back button */}
        <button className="adg-back" onClick={onBack} aria-label="Back to gateway">
          ← Back to Gateway
        </button>

        {/* Header */}
        <div className="sectionHead adg-head">
          <p className="eyebrow">Architecture & Thinking Diagrams</p>
          <h2>4P3X Verse™ Architecture & Thinking Diagrams</h2>
          <p className="adg-intro">
            These diagrams explain the structure, thinking, scale, and future direction of the 4P3X Verse™ — a modular AI-assisted product ecosystem built from reusable architecture, controlled refactoring, deployed product variants, and demo-to-live pathways.
          </p>
          <p className="adg-count">
            <LayoutGrid size={14} /> Showing {filtered.length} of {DIAGRAMS.length} diagrams
          </p>
        </div>

        {/* Filter bar */}
        <div className="adg-filters" role="group" aria-label="Filter diagrams by audience">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`adg-filter${filter === f.value ? ' active' : ''}`}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="adg-grid">
          {filtered.map(d => (
            <DiagramCard key={d.id} diagram={d} onOpen={openLightbox} />
          ))}
        </div>

        {/* Professional statement */}
        <div className="adg-footer-card">
          <p className="eyebrow">About these diagrams</p>
          <p>
            While many portfolios show individual projects, the 4P3X Verse™ presents something more unusual: a connected product architecture where deployed demos, future variants, AI-assisted workflows, and modular base systems are shown as one organised engineering ecosystem.
          </p>
          <p className="adg-brand">Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™</p>
        </div>
      </section>
    </>
  );
}
