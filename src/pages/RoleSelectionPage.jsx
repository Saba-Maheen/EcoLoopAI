import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Factory, ShoppingBag, ArrowRight, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';

export const RoleSelectionPage = () => {
  const { switchRole } = useApp();
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    switchRole(role);
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '1rem' }}>
          <Sparkles size={14} /> STEP 2: SELECT YOUR ENTERPRISE ROLE
        </div>

        <h1 style={{ fontSize: '2.5rem', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
          How will you use EcoLoopAI today?
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Choose your active operational mode. You can switch between Seller and Buyer roles at any time from your header avatar profile.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* SELLER CARD */}
          <div
            className="card"
            style={{
              padding: '2.5rem 2rem',
              textAlign: 'left',
              cursor: 'pointer',
              border: '2px solid var(--slate-200)',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleSelectRole('SELLER')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-500)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--slate-200)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-lg)', background: 'var(--primary-50)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Factory size={32} />
            </div>

            <span className="badge badge-success" style={{ marginBottom: '0.75rem' }}>ENTERPRISE SELLER</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
              "I have reusable industrial waste"
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              List your scrap, plastic, metal, paper, or byproduct materials. Let AI calculate optimal buyer matches, highest prices, and generate EPR compliance reports.
            </p>

            <button className="btn btn-primary" style={{ width: '100%' }}>
              Continue as Seller <ArrowRight size={16} />
            </button>
          </div>

          {/* BUYER CARD */}
          <div
            className="card"
            style={{
              padding: '2.5rem 2rem',
              textAlign: 'left',
              cursor: 'pointer',
              border: '2px solid var(--slate-200)',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleSelectRole('BUYER')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(6, 182, 212, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--slate-200)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-lg)', background: '#ecfeff', color: '#0891b2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <ShoppingBag size={32} />
            </div>

            <span className="badge badge-info" style={{ marginBottom: '0.75rem' }}>CIRCULAR BUYER / RECYCLER</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
              "I need reusable materials"
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Source high-grade raw waste scrap for recycling or manufacturing. Compare freight costs, quality ratings, and track live shipments.
            </p>

            <button className="btn btn-dark" style={{ width: '100%' }}>
              Continue as Buyer <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
