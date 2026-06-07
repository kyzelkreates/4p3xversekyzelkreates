import React from 'react';
import { ArrowRight } from 'lucide-react';
import DiagramCard from './DiagramCard';

// ─── Reusable diagram feature section ────────────────────────────────────────
// Used inline on homepage and audience sections to show relevant diagrams
export default function DiagramFeatureSection({
  eyebrow,
  title,
  intro,
  diagrams,
  onOpen,
  onViewAll,
  layout = 'grid', // 'grid' | 'featured'
  maxCards = 3
}) {
  const visible = diagrams.slice(0, maxCards);

  return (
    <div className="dfs-wrap">
      <div className="dfs-head">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h3 className="dfs-title">{title}</h3>
        {intro && <p className="dfs-intro">{intro}</p>}
      </div>

      <div className={`dfs-grid${layout === 'featured' ? ' dfs-featured' : ''}`}>
        {visible.map(d => (
          <DiagramCard
            key={d.id}
            diagram={d}
            onOpen={onOpen}
            compact={layout === 'featured' && visible.indexOf(d) > 0}
          />
        ))}
      </div>

      {onViewAll && (
        <div className="dfs-cta">
          <button className="secondary dfs-all-btn" onClick={onViewAll}>
            View all architecture diagrams <ArrowRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
