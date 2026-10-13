import React from 'react';
import { CheckCircle2, ArrowRight, Factory, Truck, Recycle, Award, Sparkles, Scale, ShieldCheck } from 'lucide-react';

export const LifecycleTimeline = ({ traceability }) => {
  return (
    <div className="card" style={{ padding: '2rem' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-ai">
              <Sparkles size={12} /> CIRCULAR TRACEABILITY CONFIRMED
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>
              Batch ID: {traceability.batchId}
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--slate-900)' }}>
            End-to-End Material Transformation Flow
          </h2>
        </div>

        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-200)', padding: '0.65rem 1rem', borderRadius: 'var(--radius-md)', textAlign: 'right' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--primary-800)', textTransform: 'uppercase', fontWeight: 700 }}>Recycling Yield Efficiency</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-600)' }}>
            {traceability.massBalance.yieldPercent}% <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--slate-600)' }}>({traceability.massBalance.recycledKg} kg Output)</span>
          </div>
        </div>
      </div>

      {/* Stage Progression Flow Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '2rem' }}>
        {traceability.stages.map((st, idx) => (
          <div
            key={st.step}
            style={{
              background: idx === traceability.stages.length - 1 ? 'linear-gradient(135deg, #059669, #10b981)' : 'var(--slate-50)',
              color: idx === traceability.stages.length - 1 ? 'white' : 'var(--slate-900)',
              border: idx === traceability.stages.length - 1 ? 'none' : '1px solid var(--slate-200)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.1rem',
              position: 'relative',
              boxShadow: idx === traceability.stages.length - 1 ? '0 8px 20px rgba(16, 185, 129, 0.3)' : 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.8, textTransform: 'uppercase' }}>
                Stage 0{st.step}
              </span>
              <CheckCircle2 size={16} color={idx === traceability.stages.length - 1 ? '#ffffff' : '#10b981'} />
            </div>

            <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '6px' }}>
              {st.name}
            </div>

            <div style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '4px' }}>
              {st.quantityKg} <span style={{ fontSize: '0.75rem', fontWeight: 400 }}>kg</span>
            </div>

            <div style={{ fontSize: '0.72rem', opacity: 0.85, marginTop: '8px', borderTop: idx === traceability.stages.length - 1 ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--slate-200)', paddingTop: '6px' }}>
              📍 {st.facility.split('(')[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Mass Balance Breakdown Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          marginBottom: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          border: '1px solid var(--slate-800)'
        }}
      >
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', textTransform: 'uppercase', fontWeight: 600 }}>Original Waste Generated</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>{traceability.massBalance.originalKg} kg</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>Apex EcoPlastics (Vijayawada)</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', textTransform: 'uppercase', fontWeight: 600 }}>Material Delivered & Inspected</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{traceability.massBalance.deliveredKg} kg</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>Purity 99.0%</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', textTransform: 'uppercase', fontWeight: 600 }}>Processed & Shredded</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-amber)' }}>{traceability.massBalance.processedKg} kg</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>8mm Flakes</div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--primary-400)', textTransform: 'uppercase', fontWeight: 700 }}>Final Recycled Output</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-400)' }}>{traceability.massBalance.recycledKg} kg</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--primary-300)' }}>rHDPE Pellets (Yield: 92.5%)</div>
        </div>
      </div>

      {/* Final Recycled Output Highlight Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
          border: '2px solid var(--primary-500)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-600)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Recycle size={26} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-900)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Final Circular Transformation Result
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-950)' }}>
              {traceability.finalOutput}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--primary-800)', fontWeight: 600 }}>Verification Hash</div>
            <code style={{ fontSize: '0.75rem', background: 'rgba(5, 150, 105, 0.15)', padding: '3px 8px', borderRadius: '4px', color: 'var(--primary-900)' }}>
              {traceability.blockchainVerificationHash.substring(0, 16)}...
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
