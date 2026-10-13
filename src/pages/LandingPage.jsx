import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Leaf, Sparkles, ArrowRight, ShieldCheck, Truck, Recycle, BarChart3, CheckCircle2, Lock } from 'lucide-react';

export const LandingPage = () => {
  const { loginAsDemoSeller, loginAsDemoBuyer } = useApp();
  const navigate = useNavigate();

  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('srinivas@apexecoplastics.com');
  const [password, setPassword] = useState('••••••••••••');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginAsDemoSeller();
    navigate('/role-selection');
  };

  const handleSellerDemo = () => {
    loginAsDemoSeller();
    navigate('/role-selection');
  };

  const handleBuyerDemo = () => {
    loginAsDemoBuyer();
    navigate('/role-selection');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)', color: 'white' }}>
      {/* Top Navbar */}
      <header style={{ padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)' }}>
            <Leaf size={26} color="white" />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit', letterSpacing: '-0.02em' }}>
              EcoLoop<span style={{ color: 'var(--primary-400)' }}>AI</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--primary-300)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Circular Intelligence Platform</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }} onClick={handleSellerDemo}>
            Demo Seller
          </button>
          <button className="btn btn-primary" onClick={handleBuyerDemo}>
            Demo Buyer
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '3rem 2rem 5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Left Column: Vision & Pitch */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary-400)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            <Sparkles size={16} /> NEXT-GEN INDUSTRIAL CIRCULAR ECONOMY
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, fontFamily: 'Outfit', color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Turning Waste Into Value With AI-Powered Circular Intelligence
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--slate-300)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            EcoLoopAI bridges manufacturing companies generating reusable industrial waste directly with verified recyclers and buyers. Multi-factor AI matching optimizes price, freight cost, distance, and environmental footprint.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={18} />
              </div>
              <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>Multi-Factor AI Matching</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={18} />
              </div>
              <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>Freight & Distance Routing</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Recycle size={18} />
              </div>
              <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>100% End-to-End Traceability</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={18} />
              </div>
              <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>CPCB/EPR Compliance Reports</span>
            </div>
          </div>
        </div>

        {/* Right Column: Authentication Card with Demo Shortcuts */}
        <div className="card" style={{ padding: '2.5rem', background: 'rgba(255, 255, 255, 0.98)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--radius-xl)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)', color: 'var(--slate-900)' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid var(--slate-200)' }}>
            <button
              onClick={() => setIsLoginTab(true)}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'none',
                border: 'none',
                borderBottom: isLoginTab ? '3px solid var(--primary-600)' : '3px solid transparent',
                color: isLoginTab ? 'var(--primary-700)' : 'var(--slate-500)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLoginTab(false)}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'none',
                border: 'none',
                borderBottom: !isLoginTab ? '3px solid var(--primary-600)' : '3px solid transparent',
                color: !isLoginTab ? 'var(--primary-700)' : 'var(--slate-500)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">Company Business Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: '1.5rem' }}>
              {isLoginTab ? 'Login to Workspace' : 'Create Enterprise Account'} <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ position: 'relative', textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderBottom: '1px solid var(--slate-200)' }}></div>
            <span style={{ position: 'relative', background: 'white', padding: '0 12px', fontSize: '0.78rem', color: 'var(--slate-500)', fontWeight: 600 }}>
              OR ONE-CLICK PROTOTYPE DEMO
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              onClick={handleSellerDemo}
              style={{
                background: 'var(--slate-900)',
                color: 'white',
                border: 'none',
                padding: '0.85rem',
                borderRadius: 'var(--radius-lg)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              🏭 Demo as Seller
              <div style={{ fontSize: '0.7rem', color: 'var(--primary-400)', fontWeight: 400 }}>Apex EcoPlastics</div>
            </button>

            <button
              onClick={handleBuyerDemo}
              style={{
                background: 'var(--primary-600)',
                color: 'white',
                border: 'none',
                padding: '0.85rem',
                borderRadius: 'var(--radius-lg)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
              }}
            >
              🛒 Demo as Buyer
              <div style={{ fontSize: '0.7rem', color: 'var(--primary-100)', fontWeight: 400 }}>GreenTech Recyclers</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
