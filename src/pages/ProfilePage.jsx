import React from 'react';
import { useApp } from '../context/AppContext';
import { Building2, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Award, Leaf } from 'lucide-react';

export const ProfilePage = () => {
  const { currentUser, userRole } = useApp();

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Company Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800 }}>
            {currentUser.name.charAt(0)}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
                {currentUser.company}
              </h1>
              <span className="badge badge-success">
                <CheckCircle2 size={12} /> CPCB Level 3 Verified
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-300)' }}>
              {currentUser.businessType} • <MapPin size={14} style={{ display: 'inline' }} /> {currentUser.location}
            </p>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', color: 'var(--slate-900)', marginBottom: '1.25rem', borderBottom: '2px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
            Corporate & Regulatory Verification
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase' }}>Primary Authorized Officer</div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{currentUser.name}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase' }}>GSTIN Identifier</div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'monospace' }}>{currentUser.gstin}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase' }}>CPCB EPR License Number</div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--primary-600)', fontFamily: 'monospace' }}>{currentUser.cpcbLicense}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.1rem', color: 'var(--slate-900)', marginBottom: '1.25rem', borderBottom: '2px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
            Materials Handled & Facility Specs
          </h3>

          <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '1rem' }}>
            Enterprise certified for collecting, baling, washing, and circular trading of industrial waste streams:
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {currentUser.handledMaterials.map(mat => (
              <span key={mat} style={{ background: 'var(--primary-50)', color: 'var(--primary-700)', padding: '6px 12px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '0.8rem', border: '1px solid var(--primary-200)' }}>
                ♻️ {mat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
