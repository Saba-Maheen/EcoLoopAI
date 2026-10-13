import React from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

export const DemoFlowBanner = () => {
  const { demoStep, setDemoStep } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const steps = [
    { num: 1, label: 'List Waste', path: '/list-waste' },
    { num: 2, label: 'AI Matching (10 Matches)', path: '/ai-matches' },
    { num: 3, label: 'Match Details', path: '/match-details' },
    { num: 4, label: 'Connection & Chat', path: '/connection-chat' },
    { num: 5, label: 'Transportation & Freight', path: '/transportation' },
    { num: 6, label: 'Live Tracking', path: '/tracking' },
    { num: 7, label: 'Material Traceability', path: '/traceability' },
    { num: 8, label: 'Govt Compliance Report', path: '/compliance-report' }
  ];

  // Determine active step index from current path
  const currentStepObj = steps.find(s => s.path === location.pathname) || steps[1];
  const nextStepObj = steps.find(s => s.num === currentStepObj.num + 1) || steps[0];

  const handleNext = () => {
    setDemoStep(nextStepObj.num);
    navigate(nextStepObj.path);
  };

  return (
    <div className="demo-banner">
      <div className="demo-banner-content">
        <span className="demo-chip">
          <Sparkles size={12} /> Innovation Demo Flow
        </span>
        <div className="demo-step-text">
          Current Step <strong>{currentStepObj.num}/8: {currentStepObj.label}</strong>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Quick Jump Buttons */}
        <div style={{ display: 'none', mdDisplay: 'flex', gap: '4px' }}>
          {steps.map(s => (
            <button
              key={s.num}
              onClick={() => {
                setDemoStep(s.num);
                navigate(s.path);
              }}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: 'none',
                background: location.pathname === s.path ? 'var(--primary-500)' : 'var(--slate-800)',
                color: 'white',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
              title={`Jump to Step ${s.num}: ${s.label}`}
            >
              {s.num}
            </button>
          ))}
        </div>

        <button className="demo-action-btn" onClick={handleNext}>
          Next Step: {nextStepObj.label} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
