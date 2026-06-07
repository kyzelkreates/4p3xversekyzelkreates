import React from 'react';
import { Maximize2 } from 'lucide-react';

// ─── Single diagram card — used in gallery and feature sections ───────────────
export default function DiagramCard({ diagram, onOpen, compact = false }) {
  return (
    <article
      className={`dgc-card${compact ? ' dgc-compact' : ''}`}
      aria-label={diagram.title}
    >
      <div className="dgc-img-wrap">
        <img
          src={diagram.src}
          alt={diagram.title}
          className="dgc-img"
          loading="lazy"
        />
        <button
          className="dgc-enlarge"
          onClick={() => onOpen(diagram)}
          aria-label={`Open full view of ${diagram.title}`}
        >
          <Maximize2 size={15} /> Open full view
        </button>
      </div>
      <div className="dgc-body">
        <h4 className="dgc-title">{diagram.title}</h4>
        <p className="dgc-short">{diagram.short}</p>
        {!compact && (
          <div className="dgc-audiences">
            {diagram.audiences.filter(a => a !== 'home').map(a => (
              <span key={a} className="dgc-tag">{a}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
