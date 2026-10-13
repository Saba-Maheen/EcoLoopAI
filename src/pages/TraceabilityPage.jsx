import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { LifecycleTimeline } from '../components/traceability/LifecycleTimeline';
import { Recycle, Sparkles, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export const TraceabilityPage = () => {
  const { traceability, setDemoStep } = useApp();
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    setDemoStep(8);
    navigate('/compliance-report');
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <Recycle size={12} className="pulse-anim" /> CIRCULAR MATERIAL TRACEABILITY HUB
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
              End-to-End Waste-to-Value Lifecycle Ledger
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Batch Number: <strong>{traceability.batchId}</strong> • Verification Hash: <code>{traceability.blockchainVerificationHash.substring(0, 12)}...</code>
            </p>
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleGenerateReport}>
            <FileCheck size={18} /> Generate Compliance Report <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Lifecycle Timeline Visualizer */}
      <LifecycleTimeline traceability={traceability} />
    </div>
  );
};
