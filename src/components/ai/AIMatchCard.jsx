import React from 'react';
import { Sparkles, MapPin, Truck, Award, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const AIMatchCard = ({ match, rank }) => {
  const { setSelectedMatch } = useApp();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    setSelectedMatch(match);
    navigate('/match-details');
  };

  return (
    <div
      className="card"
      style={{
        position: 'relative',
        border: match.isRecommended ? '2px solid var(--primary-500)' : '1px solid var(--slate-200)',
        background: match.isRecommended ? 'linear-gradient(180deg, rgba(236, 253, 245, 0.4) 0%, #ffffff 100%)' : '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Recommended Ribbon / Badge */}
      {match.isRecommended && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'linear-gradient(135deg, var(--primary-600), var(--primary-500))',
            color: 'white',
            padding: '4px 14px',
            borderBottomLeftRadius: 'var(--radius-lg)',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
          }}
        >
          <Sparkles size={14} /> AI RECOMMENDED MATCH
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', marginTop: match.isRecommended ? '0.5rem' : '0' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ background: 'var(--slate-100)', color: 'var(--slate-700)', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
              #{rank}
            </span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)' }}>
              {match.companyName}
            </h3>
            <span className="badge badge-success">
              <CheckCircle2 size={11} /> Verified
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--slate-500)' }}>
            {match.companyType} • <MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> {match.location} ({match.distanceKm} km away)
          </p>
        </div>

        {/* AI Score Badge */}
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              background: match.aiMatchPercent >= 90 ? 'linear-gradient(135deg, #10b981, #059669)' : 'var(--slate-800)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              fontWeight: 800,
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: match.aiMatchPercent >= 90 ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none'
            }}
          >
            <Sparkles size={16} /> {match.aiMatchPercent}%
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)', marginTop: '2px', fontWeight: 600 }}>AI Match Score</div>
        </div>
      </div>

      {/* AI Recommendation Reason Banner */}
      {match.isRecommended && (
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            borderLeft: '3px solid var(--primary-500)',
            padding: '0.65rem 0.85rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            color: 'var(--primary-900)',
            marginBottom: '1.25rem',
            fontWeight: 500
          }}
        >
          <strong>Why AI Recommended:</strong> Recommended based on material compatibility, price, quality, distance and transportation cost.
        </div>
      )}

      {/* Financial Breakdown Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          background: 'var(--slate-50)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.25rem',
          border: '1px solid var(--slate-200)'
        }}
      >
        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', textTransform: 'uppercase', fontWeight: 600 }}>Material Price</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--slate-800)' }}>
            ₹{match.materialPricePerKg}<span style={{ fontSize: '0.75rem', fontWeight: 400 }}>/kg</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', textTransform: 'uppercase', fontWeight: 600 }}>Transport Cost</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-amber)' }}>
            + ₹{match.transportCostPerKg}<span style={{ fontSize: '0.75rem', fontWeight: 400 }}>/kg</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--primary-700)', textTransform: 'uppercase', fontWeight: 700 }}>Total Effective Cost</div>
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-600)' }}>
            ₹{match.totalEffectiveCostPerKg}<span style={{ fontSize: '0.75rem', fontWeight: 500 }}>/kg</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', textTransform: 'uppercase', fontWeight: 600 }}>Quality Rating</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--slate-800)' }}>
            {match.qualityPercent}%
          </div>
        </div>
      </div>

      {/* Multi-Factor Score Bars */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-600)', marginBottom: '3px' }}>
            <span>Material Compatibility</span>
            <strong style={{ marginLeft: 'auto' }}>{match.scores.materialCompatibility}%</strong>
          </div>
          <div style={{ width: '100%', height: '5px', background: 'var(--slate-200)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${match.scores.materialCompatibility}%`, height: '100%', background: 'var(--primary-500)' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate-600)', marginBottom: '3px' }}>
            <span>Freight & Distance</span>
            <strong style={{ marginLeft: 'auto' }}>{match.scores.distanceScore}%</strong>
          </div>
          <div style={{ width: '100%', height: '5px', background: 'var(--slate-200)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${match.scores.distanceScore}%`, height: '100%', background: 'var(--accent-cyan)' }}></div>
          </div>
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
          Distance: <strong>{match.distanceKm} km</strong> • Quantity: <strong>{match.quantityKg} kg</strong>
        </div>

        <button className="btn btn-primary btn-sm" onClick={handleViewDetails}>
          View Details <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};
