import React, { useEffect, useRef, useCallback, useState } from 'react';
import { X, ExternalLink, LayoutGrid, ChevronRight, RotateCcw } from 'lucide-react';
import { MODAL_QUIZ, PORTFOLIO_ROUTES } from '../config';

const portfolioList = Object.values(PORTFOLIO_ROUTES);

// ─── Score calculator ─────────────────────────────────────────────────────────
function calculateResult(answers) {
  const scores = { investor: 0, partner: 0, contract: 0, grant: 0, technical: 0 };

  answers.forEach((option, idx) => {
    if (!option) return;
    Object.entries(option.scores || {}).forEach(([id, val]) => {
      scores[id] = (scores[id] || 0) + val;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const tied = sorted.filter(([, v]) => v === topScore);

  if (topScore === 0) return null; // no answers

  if (tied.length === 1) return PORTFOLIO_ROUTES[sorted[0][0]];

  // Tie-break: use first answer's strongest key
  const first = answers[0];
  if (first) {
    const firstWinner = Object.entries(first.scores || {}).sort((a, b) => b[1] - a[1])[0];
    if (firstWinner && tied.find(([id]) => id === firstWinner[0])) {
      return PORTFOLIO_ROUTES[firstWinner[0]];
    }
  }

  return null; // all-portfolios fallback
}

// ─── Progress dots ────────────────────────────────────────────────────────────
function ProgressDots({ total, current }) {
  return (
    <div className="qm-progress" aria-label={`Question ${current + 1} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`qm-dot${i < current ? ' done' : i === current ? ' active' : ''}`}
        />
      ))}
    </div>
  );
}

// ─── Main modal component ─────────────────────────────────────────────────────
export default function PortfolioQuizModal({ isOpen, onClose }) {
  const [step, setStep] = useState('quiz'); // 'quiz' | 'result'
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  // ── Lock body scroll & manage focus ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Keyboard handler ──────────────────────────────────────────────────────
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'Tab') {
      const focusable = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // ── Backdrop click ────────────────────────────────────────────────────────
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ── Quiz logic ────────────────────────────────────────────────────────────
  const selectAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = option;
    setAnswers(newAnswers);

    if (currentQ < MODAL_QUIZ.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Last question — calculate result
      const res = calculateResult(newAnswers);
      setResult(res);
      setStep('result');
      setShowAll(false);
    }
  };

  const resetQuiz = () => {
    setStep('quiz');
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setShowAll(false);
    setTimeout(() => closeButtonRef.current?.focus(), 50);
  };

  const goBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  if (!isOpen) return null;

  const currentQuestion = MODAL_QUIZ[currentQ];

  return (
    <div
      className="qm-backdrop"
      role="presentation"
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div
        ref={modalRef}
        className="qm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qm-title"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="qm-header">
          <div className="qm-header-text">
            <p className="eyebrow qm-eyebrow">4P3X Intelligent AI™ Portfolio Guide</p>
            <h2 id="qm-title">Which 4P3X Verse™ Portfolio Should You View?</h2>
            <p className="qm-intro">Answer a few quick questions and the 4P3X Intelligent AI™ Portfolio Guide will point you to the most relevant portfolio pathway.</p>
          </div>
          <button
            ref={closeButtonRef}
            className="qm-close"
            onClick={onClose}
            aria-label="Close portfolio guide"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="qm-body">
          {step === 'quiz' && (
            <>
              <ProgressDots total={MODAL_QUIZ.length} current={currentQ} />
              <p className="qm-qcount">Question {currentQ + 1} of {MODAL_QUIZ.length}</p>
              <h3 className="qm-question">{currentQuestion.question}</h3>
              <div className="qm-options">
                {currentQuestion.options.map((option, i) => (
                  <button
                    key={i}
                    className={`qm-option${answers[currentQ]?.label === option.label ? ' selected' : ''}`}
                    onClick={() => selectAnswer(option)}
                    aria-pressed={answers[currentQ]?.label === option.label}
                  >
                    <span className="qm-option-letter">{String.fromCharCode(65 + i)}</span>
                    <span className="qm-option-text">{option.label}</span>
                    <ChevronRight size={16} className="qm-option-arrow" />
                  </button>
                ))}
              </div>
              <div className="qm-nav">
                {currentQ > 0 && (
                  <button className="qm-back" onClick={goBack}>← Back</button>
                )}
              </div>
            </>
          )}

          {step === 'result' && !showAll && (
            <div className="qm-result">
              {result ? (
                <>
                  <div className="qm-result-badge">Recommended Portfolio</div>
                  <h3 className="qm-result-title">{result.title}</h3>
                  <p className="qm-result-desc">{result.description}</p>
                  <a
                    className="primary full qm-cta"
                    href={result.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${result.title} — opens in new tab`}
                  >
                    Open {result.shortTitle} Portfolio <ExternalLink size={16} />
                  </a>
                  <button
                    className="secondary full qm-cta"
                    onClick={() => setShowAll(true)}
                  >
                    <LayoutGrid size={16} /> View all five portfolios
                  </button>
                </>
              ) : (
                // All-portfolios fallback (tied/zero score)
                <AllPortfoliosResult onPickOne={() => {}} />
              )}
              <button className="qm-retake" onClick={resetQuiz}>
                <RotateCcw size={14} /> Retake quiz
              </button>
            </div>
          )}

          {step === 'result' && showAll && (
            <div className="qm-result">
              <AllPortfoliosResult />
              <button className="qm-retake" onClick={resetQuiz}>
                <RotateCcw size={14} /> Retake quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── All-portfolios fallback view ─────────────────────────────────────────────
function AllPortfoliosResult() {
  return (
    <>
      <div className="qm-result-badge all">Explore All 5 Portfolio Routes</div>
      <p className="qm-result-desc">
        The 4P3X Verse™ has five portfolio routes because different audiences need different levels of detail. You can explore the investor, partner, contract/hire, grant and technical versions from the gateway.
      </p>
      <div className="qm-all-grid">
        {portfolioList.map(p => (
          <a
            key={p.id}
            className="qm-all-card"
            href={p.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.title} — opens in new tab`}
          >
            <span className="qm-all-title">{p.shortTitle}</span>
            <ExternalLink size={13} />
          </a>
        ))}
      </div>
    </>
  );
}
