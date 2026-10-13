import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AIMatchCard } from '../components/ai/AIMatchCard';
import { Sparkles, SlidersHorizontal, ArrowDownAZ, DollarSign, Award, MapPin, Search } from 'lucide-react';

export const AIMatchingPage = () => {
  const { aiMatches, userRole } = useApp();
  const [filterType, setFilterType] = useState('HIGHEST_MATCH');
  const [searchTerm, setSearchTerm] = useState('');

  // Process & Filter 10 AI Matches dynamically
  let processedMatches = [...aiMatches];

  if (searchTerm) {
    processedMatches = processedMatches.filter(m =>
      m.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (filterType === 'LOWEST_COST') {
    processedMatches.sort((a, b) => a.totalEffectiveCostPerKg - b.totalEffectiveCostPerKg);
  } else if (filterType === 'HIGHEST_MATCH') {
    processedMatches.sort((a, b) => b.aiMatchPercent - a.aiMatchPercent);
  } else if (filterType === 'NEAREST') {
    processedMatches.sort((a, b) => a.distanceKm - b.distanceKm);
  } else if (filterType === 'BEST_QUALITY') {
    processedMatches.sort((a, b) => b.qualityPercent - a.qualityPercent);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* AI Engine Hero Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #064e3b 100%)',
          color: 'white',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', zIndex: 2, position: 'relative' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              <Sparkles size={14} className="pulse-anim" /> AI MULTI-FACTOR MATCHING ENGINE
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Outfit', color: 'white', marginBottom: '0.5rem' }}>
              {userRole === 'SELLER' ? '10 Top Buyer Matches Found for Plastic Scrap' : '10 Top Seller Matches Found'}
            </h1>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.95rem', maxWidth: '750px', lineHeight: 1.5 }}>
              Our AI engine evaluates material purity, freight route distance (NH65 highway network), estimated transportation cost, and base pricing to compute the <strong>Total Effective Cost per kg</strong>.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)', textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-300)', textTransform: 'uppercase', fontWeight: 600 }}>Evaluated Candidates</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-400)' }}>10 Matches</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)' }}>Real-time Freight Optimization</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div
        className="card"
        style={{
          padding: '1rem 1.5rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-600)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <SlidersHorizontal size={16} /> Filter AI Matches:
          </span>

          <button
            className={`btn btn-sm ${filterType === 'HIGHEST_MATCH' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('HIGHEST_MATCH')}
          >
            <Sparkles size={14} /> Highest Match Score
          </button>

          <button
            className={`btn btn-sm ${filterType === 'LOWEST_COST' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('LOWEST_COST')}
          >
            <DollarSign size={14} /> Lowest Total Cost
          </button>

          <button
            className={`btn btn-sm ${filterType === 'NEAREST' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('NEAREST')}
          >
            <MapPin size={14} /> Nearest Distance
          </button>

          <button
            className={`btn btn-sm ${filterType === 'BEST_QUALITY' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('BEST_QUALITY')}
          >
            <Award size={14} /> Best Quality
          </button>
        </div>

        {/* Search Filter */}
        <div style={{ position: 'relative', width: '220px' }}>
          <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-400)' }} />
          <input
            type="text"
            className="form-control"
            style={{ paddingLeft: '32px', fontSize: '0.82rem' }}
            placeholder="Search company or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid of 10 AI Match Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {processedMatches.map((match, idx) => (
          <AIMatchCard key={match.id} match={match} rank={idx + 1} />
        ))}
      </div>
    </div>
  );
};
