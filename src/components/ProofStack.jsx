import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { PROOF_STACK, PROOF_STACK_STATEMENT } from '../data/portfolioPitchData';

// ─── Proof Stack — visual evidence panel ─────────────────────────────────────
export default function ProofStack() {
  return (
    <section className="section prs-section" id="proofstack" aria-labelledby="prs-title">
      <div className="sectionHead">
        <p className="eyebrow">Evidence Layer</p>
        <h3 id="prs-title" className="prs-title">What Has Already Been Built and Proven</h3>
      </div>

      <div className="prs-grid">
        {PROOF_STACK.map(item => (
          <div key={item.id} className={`prs-item ${item.status}`}>
            {item.status === 'live'
              ? <CheckCircle2 size={18} className="prs-icon live" aria-hidden="true" />
              : <Clock size={18} className="prs-icon roadmap" aria-hidden="true" />
            }
            <span className="prs-label">{item.label}</span>
            <span className={`prs-badge ${item.status}`}>
              {item.status === 'live' ? 'Live' : 'Roadmap'}
            </span>
          </div>
        ))}
      </div>

      <div className="prs-statement">
        <p>{PROOF_STACK_STATEMENT}</p>
      </div>
    </section>
  );
}
