import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { SimulatedMap } from '../components/transport/SimulatedMap';
import { Truck, Navigation, CheckCircle2, Clock, Gauge, ArrowRight, RefreshCw, Recycle } from 'lucide-react';

export const TrackingPage = () => {
  const { shipment, advanceShipmentProgress, setDemoStep } = useApp();
  const navigate = useNavigate();

  const handleNextTraceability = () => {
    setDemoStep(7);
    navigate('/traceability');
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <Navigation size={12} className="pulse-anim" /> LIVE TELEMATICS TRACKING
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
              Real-time In-Transit Freight Telematics
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Tracking Container Truck <strong>{shipment.vehicleNumber}</strong> • Last Ping: {shipment.lastUpdated}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={advanceShipmentProgress}>
              <RefreshCw size={16} /> Simulate GPS Move
            </button>
            <button className="btn btn-primary" onClick={handleNextTraceability}>
              View Material Traceability <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Live Map Component */}
      <SimulatedMap shipment={shipment} isLiveTracking={true} />

      {/* Shipment Status Timeline Cards */}
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '1.25rem' }}>
          Shipment Milestones & Telematics Timeline
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {shipment.timeline.map((tm, idx) => (
            <div
              key={tm.stage}
              style={{
                background: tm.current ? 'var(--primary-50)' : 'var(--slate-50)',
                border: tm.current ? '2px solid var(--primary-500)' : '1px solid var(--slate-200)',
                padding: '1rem',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: tm.completed ? '#10b981' : tm.current ? '#f59e0b' : '#cbd5e1'
                  }}
                  className={tm.current ? 'pulse-anim' : ''}
                ></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--slate-600)', textTransform: 'uppercase' }}>
                  Milestone 0{idx + 1}
                </span>
              </div>

              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '4px' }}>
                {tm.label}
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>
                {tm.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
