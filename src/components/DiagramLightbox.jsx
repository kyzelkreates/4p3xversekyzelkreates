import React, { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Lightbox modal for full-size diagram viewing ─────────────────────────────
export default function DiagramLightbox({ diagram, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const closeRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    prevFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = '';
      prevFocusRef.current?.focus();
    };
  }, [diagram]);

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  if (!diagram) return null;

  return (
    <div
      className="dlb-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Full view: ${diagram.title}`}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="dlb-box">
        {/* Header */}
        <div className="dlb-header">
          <div className="dlb-header-text">
            <p className="eyebrow dlb-eyebrow">Architecture Diagram</p>
            <h3 className="dlb-title">{diagram.title}</h3>
          </div>
          <button
            ref={closeRef}
            className="dlb-close"
            onClick={onClose}
            aria-label="Close diagram view"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image */}
        <div className="dlb-img-wrap">
          <img
            src={diagram.src}
            alt={diagram.title}
            className="dlb-img"
            loading="eager"
          />
        </div>

        {/* Caption */}
        <div className="dlb-caption">
          <p>{diagram.explanation}</p>
          <div className="dlb-audiences">
            {diagram.audiences.filter(a => a !== 'home').map(a => (
              <span key={a} className="dlb-tag">{a}</span>
            ))}
          </div>
        </div>

        {/* Prev/Next */}
        {(hasPrev || hasNext) && (
          <div className="dlb-nav">
            <button
              className="dlb-arrow"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous diagram"
            >
              <ChevronLeft size={20} /> Prev
            </button>
            <button
              className="dlb-arrow"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next diagram"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
