import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLIENT_ASSEMBLY_FLOW } from '../data/portfolioPitchData';

// ─── Client Assembly Flow ─────────────────────────────────────────────────────
export default function ClientAssemblyFlow() {
  return (
    <section className="section caf-section" id="assembly" aria-labelledby="caf-title">
      <div className="sectionHead">
        <p className="eyebrow">Client Platform Assembly</p>
        <h3 id="caf-title" className="caf-title">How 4P3X Verse™ Builds a Client Platform</h3>
        <p className="caf-intro">
          A repeatable, AI-assisted process from client brief to deployed working product.
          The platform does not start from a blank screen — it starts from the right base systems.
        </p>
      </div>

      <div className="caf-flow">
        {CLIENT_ASSEMBLY_FLOW.map((step, i) => (
          <React.Fragment key={step.step}>
            <div className="caf-step">
              <div className="caf-step-icon" aria-hidden="true">{step.icon}</div>
              <div className="caf-step-body">
                <p className="caf-step-num">Step {step.step}</p>
                <h4 className="caf-step-title">{step.title}</h4>
                <p className="caf-step-desc">{step.description}</p>
              </div>
            </div>
            {i < CLIENT_ASSEMBLY_FLOW.length - 1 && (
              <div className="caf-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="caf-footer">
        <p className="caf-tagline">
          "Built once. Refactored many times. Assembled for each client."
        </p>
        <p className="caf-tagline-2">
          "One ecosystem. Many bases. Hundreds of possible product pathways."
        </p>
      </div>
    </section>
  );
}
