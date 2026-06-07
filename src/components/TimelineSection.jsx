import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '../config';

export default function TimelineSection({ onOpenQuiz }) {
  return (
    <section id="timeline" className="section timelineSection">
      <div className="sectionHead">
        <p className="eyebrow">Expansion Roadmap</p>
        <h2>4P3X Verse™ Expansion Timeline</h2>
        <p className="tl-intro">
          The 4P3X Verse™ is designed as a staged modular ecosystem. V1 proves the reusable base. V2 expands the system into five focused portfolio directions. Future versions show how the same architecture can scale into 10, 20, 50 and eventually 100 reusable software foundations, each capable of becoming multiple sector-specific products.
        </p>
      </div>

      <div className="tl-grid">
        {TIMELINE.map((item, idx) => (
          <article
            key={item.version}
            className={`tl-card${item.status === 'live' ? ' tl-live' : ' tl-roadmap'}`}
            aria-label={`${item.version} — ${item.bases}`}
          >
            <div className="tl-top">
              <span className="tl-version">{item.version}</span>
              {item.status === 'live'
                ? <span className="tl-status live"><CheckCircle2 size={13}/> Live</span>
                : <span className="tl-status roadmap"><Zap size={13}/> Roadmap</span>
              }
            </div>
            <div className="tl-bases">{item.bases}</div>
            <div className="tl-label">{item.label}</div>
            <p className="tl-desc">{item.description}</p>
            <div className="tl-connector" aria-hidden="true">
              {idx < TIMELINE.length - 1 && <span className="tl-line" />}
            </div>
          </article>
        ))}
      </div>

      <div className="tl-closing">
        <p>
          <strong>4P3X Verse™</strong> — One Modular Architecture. Many AI-Powered Products.
          <br />
          <span className="tl-brand-line">Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™</span>
        </p>
        <button className="primary tl-quiz-cta" onClick={onOpenQuiz}>
          Find the Right Portfolio
        </button>
      </div>
    </section>
  );
}
