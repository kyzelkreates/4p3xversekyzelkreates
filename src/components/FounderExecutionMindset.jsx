import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const FOUNDER_SKILLS = [
  'Architecture mapping and systems thinking',
  'AI-assisted development with real deliverables',
  'Rapid refactoring and modular component thinking',
  'UI/UX product structure and PWA planning',
  'State logic and demo/live mode separation',
  'Prompt engineering for product assembly',
  'Documented, structured, testable output',
  'Multi-sector product adaptation'
];

// ─── Founder Execution Mindset ────────────────────────────────────────────────
export default function FounderExecutionMindset() {
  return (
    <section className="section fem-section" id="founder" aria-labelledby="fem-title">
      <div className="fem-inner">
        <div className="fem-text">
          <p className="eyebrow">Founder Execution</p>
          <h3 id="fem-title" className="fem-title">The Advantage Behind 4P3X Verse™</h3>
          <blockquote className="fem-quote">
            "When I commit to building something, I break it down into architecture, workflows,
            dashboards, PWAs, AI guidance, validation gates and working deployed versions.
            4P3X Verse™ is proof of that mindset."
            <cite>— Ciaran / Kyzel Kreates™</cite>
          </blockquote>
          <p className="fem-body">
            The founder advantage behind 4P3X Verse™ is execution speed and systems thinking.
            The risk is no longer whether the founder can build. The next challenge is commercial
            validation, pilots, partners, customers, funding and scaling.
          </p>
          <p className="fem-body">
            11 working product versions from 1 reusable base architecture is practical execution
            proof — not just a concept or a business plan.
          </p>
        </div>
        <div className="fem-skills">
          <p className="eyebrow">Demonstrated capabilities</p>
          <ul className="fem-skill-list">
            {FOUNDER_SKILLS.map(s => (
              <li key={s}><CheckCircle2 size={14} />{s}</li>
            ))}
          </ul>
          <div className="fem-proof-note">
            <p>
              "This is practical execution proof: architecture thinking, AI-assisted development,
              UI/UX structure, PWA planning, state logic, demo/live separation, product refactoring
              and client-specific platform assembly."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
