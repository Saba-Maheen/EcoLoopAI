import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Truck, Award, CheckCircle2, MessageSquare, ArrowRight, DollarSign, Building2, Phone, Mail } from 'lucide-react';

export const MatchDetailsPage = () => {
  const { selectedMatch, setDemoStep } = useApp();
  const navigate = useNavigate();

  if (!selectedMatch) {
    return (
      <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>No match selected</h2>
        <button className="btn btn-primary" onClick={() => navigate('/ai-matches')} style={{ marginTop: '1rem' }}>
          Back to AI Matches
        </button>
      </div>
    );
  }

  const handleStartConnect = () => {
    setDemoStep(4);
    navigate('/connection-chat');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #064e3b 100%)',
          color: 'white',
          padding: '2rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              <Sparkles size={14} /> AI CANDIDATE EVALUATION DOSSIER
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.4rem' }}>
              {selectedMatch.companyName}
            </h1>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.9rem' }}>
              {selectedMatch.companyType} • <MapPin size={14} style={{ display: 'inline' }} /> {selectedMatch.location} ({selectedMatch.distanceKm} km distance)
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ background: 'var(--primary-500)', color: 'white', padding: '8px 16px', borderRadius: 'var(--radius-md)', fontWeight: 800, fontSize: '1.4rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={20} /> {selectedMatch.aiMatchPercent}%
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-300)', marginTop: '4px', fontWeight: 600 }}>Overall AI Compatibility</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Company Specs & Multi-Factor Score Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Left Column: Material & Financial Breakdown */}
        <div className="card">
          <h3 style={{ fontSize: '1.15rem', color: 'var(--slate-900)', marginBottom: '1.25rem', borderBottom: '2px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
            Financial & Logistics Feasibility
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>Material Requested:</span>
              <strong style={{ color: 'var(--slate-900)' }}>{selectedMatch.material}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>Quantity Available:</span>
              <strong style={{ color: 'var(--slate-900)' }}>{selectedMatch.quantityKg} kg</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>Quality Assurance Rating:</span>
              <strong style={{ color: 'var(--primary-600)' }}>{selectedMatch.qualityPercent}% Purity</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>Base Material Price:</span>
              <strong>₹{selectedMatch.materialPricePerKg}/kg</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>Freight & Distance (NH65):</span>
              <strong style={{ color: 'var(--accent-amber)' }}>₹{selectedMatch.transportCostPerKg}/kg ({selectedMatch.distanceKm} km)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--primary-50)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-200)' }}>
              <span style={{ color: 'var(--primary-900)', fontWeight: 700, fontSize: '0.95rem' }}>Total Effective Cost:</span>
              <strong style={{ color: 'var(--primary-700)', fontSize: '1.2rem' }}>₹{selectedMatch.totalEffectiveCostPerKg}/kg</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={handleStartConnect}>
              Connect & Start Chat <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: AI Multi-Factor Scoring Breakdown */}
        <div className="card">
          <h3 style={{ fontSize: '1.15rem', color: 'var(--slate-900)', marginBottom: '1.25rem', borderBottom: '2px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
            AI Algorithm Scoring Components
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--slate-700)', fontWeight: 600, marginBottom: '4px' }}>
                <span>Material Compatibility</span>
                <span style={{ color: 'var(--primary-600)' }}>{selectedMatch.scores.materialCompatibility}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--slate-200)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${selectedMatch.scores.materialCompatibility}%`, height: '100%', background: 'var(--primary-500)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--slate-700)', fontWeight: 600, marginBottom: '4px' }}>
                <span>Quality & Purity Match</span>
                <span style={{ color: 'var(--primary-600)' }}>{selectedMatch.scores.qualityScore}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--slate-200)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${selectedMatch.scores.qualityScore}%`, height: '100%', background: 'var(--primary-500)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--slate-700)', fontWeight: 600, marginBottom: '4px' }}>
                <span>Logistics & Route Efficiency</span>
                <span style={{ color: 'var(--accent-cyan)' }}>{selectedMatch.scores.distanceScore}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--slate-200)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${selectedMatch.scores.distanceScore}%`, height: '100%', background: 'var(--accent-cyan)' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--slate-700)', fontWeight: 600, marginBottom: '4px' }}>
                <span>Financial Efficiency Score</span>
                <span style={{ color: 'var(--accent-amber)' }}>{selectedMatch.scores.financialEfficiency}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--slate-200)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${selectedMatch.scores.financialEfficiency}%`, height: '100%', background: 'var(--accent-amber)' }}></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--slate-200)' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-800)', marginBottom: '4px' }}>
              Verified Contact Representative:
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--slate-700)' }}>
              <strong>{selectedMatch.contactPerson}</strong> • {selectedMatch.phone}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
              {selectedMatch.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
