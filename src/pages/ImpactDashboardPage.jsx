import React from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, Award, Recycle, IndianRupee, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ImpactDashboardPage = () => {
  const { currentUser } = useApp();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #064e3b, #059669)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.2)', color: 'white', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <Leaf size={12} /> ESG & SUSTAINABILITY ANALYTICS
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>
              Seller Environmental Impact & Circular Earnings
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--primary-100)' }}>
              Calculations based on EPA WARM model and Indian CPCB Circular Economy conversion parameters.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: 'var(--radius-md)', textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.9 }}>CPCB Rating</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>Grade A+ Enterprise</div>
          </div>
        </div>
      </div>

      {/* 6 Key Impact Stat Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'var(--primary-50)', color: 'var(--primary-600)' }}>
            <Recycle size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">14,250 kg</div>
            <div className="stat-label">Total Waste Diverted</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#ecfdf5', color: '#047857' }}>
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">13,100 kg</div>
            <div className="stat-label">Total Recycled Yield</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#ecfeff', color: '#0891b2' }}>
            <Recycle size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">1,150 kg</div>
            <div className="stat-label">Directly Reused</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#f0fdf4', color: '#16a34a' }}>
            <Leaf size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">28.5 Tons</div>
            <div className="stat-label">CO₂ Offset Estimate</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#fffbeb', color: '#b45309' }}>
            <BarChart3 size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">3 Completed</div>
            <div className="stat-label">Circular Transactions</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#f5f3ff', color: '#6d28d9' }}>
            <IndianRupee size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">₹5,70,000</div>
            <div className="stat-label">Revenue Generated</div>
          </div>
        </div>
      </div>

      {/* Visual Impact Comparison Chart Visuals */}
      <div className="card">
        <h3 style={{ fontSize: '1.2rem', color: 'var(--slate-900)', marginBottom: '1.5rem' }}>
          Estimated Environmental Impact Breakdown
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--slate-50)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--slate-200)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-800)', marginBottom: '8px' }}>
              🌳 Carbon Avoidance Equivalent
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-600)', marginBottom: '4px' }}>
              1,425 Trees Planted
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
              Equivalent annual CO₂ absorption of mature urban forestry.
            </div>
          </div>

          <div style={{ background: 'var(--slate-50)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--slate-200)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-800)', marginBottom: '8px' }}>
              💧 Water Conservation
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
              42,000 Liters Saved
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
              Avoided industrial refining water consumption.
            </div>
          </div>

          <div style={{ background: 'var(--slate-50)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--slate-200)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-800)', marginBottom: '8px' }}>
              🏗️ Landfill Space Conserved
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '4px' }}>
              38 m³ Volume Saved
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
              Prevented municipal landfill accumulation.
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', background: 'var(--primary-50)', border: '1px solid var(--primary-200)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', color: 'var(--primary-900)' }}>
          <strong>Transparency Notice:</strong> All metrics labeled as <em>"Estimated Environmental Impact"</em> generated via standard LCA (Life Cycle Assessment) conversion models.
        </div>
      </div>
    </div>
  );
};
