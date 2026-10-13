import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  CheckCircle2,
  Truck,
  Recycle,
  IndianRupee,
  Leaf,
  PlusCircle,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  MapPin
} from 'lucide-react';

export const SellerDashboard = () => {
  const { currentUser, listings, shipment, transactions, setSelectedMatch, aiMatches } = useApp();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Welcome & Quick Action Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>
            Welcome back, {currentUser.name}! 🏭
          </h2>
          <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>
            {currentUser.company} • Enterprise Waste Seller Workspace
          </p>
        </div>

        <button className="btn btn-primary btn-lg" onClick={() => navigate('/list-waste')}>
          <PlusCircle size={18} /> + List New Industrial Waste
        </button>
      </div>

      {/* 6 Key Stats Cards Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'var(--primary-50)', color: 'var(--primary-600)' }}>
            <Package size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">14,250 kg</div>
            <div className="stat-label">Total Waste Listed</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#ecfeff', color: '#0891b2' }}>
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">12,500 kg</div>
            <div className="stat-label">Waste Sold</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#fffbeb', color: '#b45309' }}>
            <Truck size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">2,000 kg</div>
            <div className="stat-label">Currently in Transit</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#f5f3ff', color: '#6d28d9' }}>
            <Recycle size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">13,100 kg</div>
            <div className="stat-label">Successfully Recycled</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#ecfdf5', color: '#047857' }}>
            <IndianRupee size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">₹5,70,000</div>
            <div className="stat-label">Revenue Generated</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#f0fdf4', color: '#15803d' }}>
            <Leaf size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">28.5 Tons</div>
            <div className="stat-label">Est. CO₂ Diverted</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Active Shipment Telematics & Top AI Matches */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {/* Active Shipment Widget */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Truck size={20} color="var(--primary-600)" /> Active Shipment Tracker
            </div>
            <span className="badge badge-warning">IN TRANSIT</span>
          </div>

          <div style={{ background: 'var(--slate-900)', color: 'white', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>SHIPMENT ID</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary-400)', fontWeight: 700 }}>{shipment.shipmentId}</span>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>
              {shipment.sourceCity.split(',')[0]} ➔ {shipment.destinationCity.split(',')[0]}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--slate-300)', marginBottom: '12px' }}>
              Container Truck: <strong>{shipment.vehicleNumber}</strong> • Driver: {shipment.driverName}
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '8px', background: 'var(--slate-800)', borderRadius: '4px', overflow: 'hidden', marginBottom: '6px' }}>
              <div style={{ width: `${shipment.routeProgressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #10b981, #06b6d4)' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--slate-400)' }}>
              <span>Location: {shipment.currentLocationName}</span>
              <span>ETA: {shipment.eta}</span>
            </div>
          </div>

          <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => navigate('/tracking')}>
            View Live Telematics Map <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Top AI Match Spotlight Widget */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Sparkles size={20} color="var(--primary-600)" /> Top AI Match Spotlight
            </div>
            <span className="badge badge-ai">95% MATCH</span>
          </div>

          <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-200)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '4px' }}>
              GreenTech Polymer Recyclers
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginBottom: '10px' }}>
              <MapPin size={12} style={{ display: 'inline' }} /> Hyderabad, TS (280 km) • Total Effective Cost: <strong>₹45/kg</strong>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--primary-900)', background: 'rgba(16,185,129,0.15)', padding: '6px 10px', borderRadius: '4px', marginBottom: '10px' }}>
              <strong>AI Analysis:</strong> Recommended based on high quality compatibility (85%), optimal freight distance (NH65), and high demand urgency.
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('/ai-matches')}>
            View All 10 AI Matches <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <TrendingUp size={20} color="var(--primary-600)" /> Recent Waste Exchange Transactions
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => navigate('/transactions')}>
            View All History
          </button>
        </div>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>Material</th>
                <th>Quantity</th>
                <th>Buyer / Recycler</th>
                <th>Total Value</th>
                <th>Shipment Status</th>
                <th>Recycling Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 700 }}>{t.id}</td>
                  <td>{t.material}</td>
                  <td>{t.quantityKg} kg</td>
                  <td>{t.buyer}</td>
                  <td style={{ fontWeight: 700, color: 'var(--slate-900)' }}>₹{t.totalValue.toLocaleString()}</td>
                  <td><span className="badge badge-success">{t.shipmentStatus}</span></td>
                  <td><span className="badge badge-info">{t.recyclingStatus}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
