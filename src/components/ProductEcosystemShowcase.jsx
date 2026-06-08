import React, { useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, TOTAL_PRODUCTS } from '../data/productEcosystemData';

const FILTER_OPTIONS = [
  { value: 'all',      label: 'All Products' },
  { value: 'investor', label: 'Investor View' },
  { value: 'partner',  label: 'Partner View' },
  { value: 'contract', label: 'Contract/Hire' },
  { value: 'grant',    label: 'Grant View' },
  { value: 'technical',label: 'Technical View' }
];

const BADGE_COLORS = {
  'Working Demo': 'green',
  'Live-Ready Pathway': 'gold',
  'Installable': 'silver',
  'PWA-Ready': 'purple',
  'Backend-Ready': 'green',
  'AI-Guided': 'gold',
  'Sector-Adaptable': 'silver'
};

// ─── Product Ecosystem Showcase ───────────────────────────────────────────────
export default function ProductEcosystemShowcase({ portfolioId }) {
  const [filter, setFilter] = useState(portfolioId || 'all');

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.audiences.includes(filter));

  return (
    <section className="section pes-section" id="products" aria-labelledby="pes-title">
      <div className="sectionHead">
        <p className="eyebrow">Product Ecosystem Showcase</p>
        <h3 id="pes-title" className="pes-title">
          {TOTAL_PRODUCTS} Working Product Versions. One Reusable Base Architecture.
        </h3>
        <p className="pes-intro">
          Each product below was built from the same reusable base architecture — proving the
          4P3X Verse™ multiplication model works. Every product runs in Demo Mode now. Each has
          a clear Live Mode pathway.
        </p>
      </div>

      {/* Filter bar */}
      <div className="pes-filters" role="group" aria-label="Filter products by audience">
        {FILTER_OPTIONS.map(f => (
          <button
            key={f.value}
            className={`pes-filter${filter === f.value ? ' active' : ''}`}
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product cards */}
      <div className="pes-grid">
        {filtered.map(product => (
          <article key={product.id} className="pes-card">
            <div className="pes-card-header">
              <h4 className="pes-name">{product.name}</h4>
              <span className="pes-sector">{product.sector}</span>
            </div>
            <p className="pes-problem">{product.problem}</p>
            <div className="pes-badges">
              {product.readiness.map(r => (
                <span key={r} className={`pes-badge color-${BADGE_COLORS[r] || 'silver'}`}>{r}</span>
              ))}
            </div>
            <div className="pes-meta">
              {product.installable && (
                <span className="pes-meta-tag"><CheckCircle2 size={12} /> GitHub-installable</span>
              )}
              <span className="pes-meta-tag"><CheckCircle2 size={12} /> {product.status}</span>
            </div>
            <p className="pes-commercial"><strong>Commercial pathway:</strong> {product.commercialPathway}</p>
            <a
              className="primary full pes-cta"
              href={product.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${product.name} — opens in new tab`}
            >
              View Live Demo <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>

      <div className="pes-count-note">
        Showing {filtered.length} of {TOTAL_PRODUCTS} products
        {filter !== 'all' && ` for ${FILTER_OPTIONS.find(f => f.value === filter)?.label}`}
      </div>
    </section>
  );
}
