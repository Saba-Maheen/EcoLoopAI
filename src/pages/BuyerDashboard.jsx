import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Sparkles,
  Users,
  Truck,
  PackageCheck,
  PiggyBank,
  PlusCircle,
  ArrowUpRight,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const BuyerDashboard = () => {
  const { currentUser, requirements, shipment, aiMatches } = useApp();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>
            Welcome back, {currentUser.name}! 🛒
          </h2>
          <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem' }}>
            {currentUser.company} • Enterprise Circular Material Purchaser
          </p>
        </div>

        <button className="btn btn-primary btn-lg" onClick={() => navigate('/buyer-requirement')}>
          <PlusCircle size={18} /> + Add Material Requirement
        </button>
      </div>

      {/* 6 Buyer Stat Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#ecfeff', color: '#0891b2' }}>
            <Search size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">1,500 kg</div>
            <div className="stat-label">Materials Required</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#f5f3ff', color: '#6d28d9' }}>
            <Sparkles size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">10 Matches</div>
            <div className="stat-label">Active AI Matches</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#ecfdf5', color: '#047857' }}>
            <Users size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">4 Sellers</div>
            <div className="stat-label">Connected Sellers</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#fffbeb', color: '#b45309' }}>
            <Truck size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">1 Shipment</div>
            <div className="stat-label">Active In-Transit</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#f0fdf4', color: '#16a34a' }}>
            <PackageCheck size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">18,500 kg</div>
            <div className="stat-label">Materials Received</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: '#eff6ff', color: '#2563eb' }}>
            <PiggyBank size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">₹1,45,000</div>
            <div className="stat-label">Money Saved via AI</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Active Sourcing Requests & AI Matched Sellers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {/* Active Requirements List */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Search size={20} color="var(--primary-600)" /> Active Sourcing Requests
            </div>
          </div>

          {requirements.map((req) => (
            <div key={req.id} style={{ background: 'var(--slate-50)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--slate-200)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <strong style={{ fontSize: '1rem', color: 'var(--slate-900)' }}>{req.materialRequired}</strong>
                <span className="badge badge-success">Active Sourcing</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginBottom: '8px' }}>
                Quantity: <strong>{req.requiredQuantityKg} kg</strong> • Required Quality: <strong>{req.requiredQualityPercent}%+</strong> • Max Budget: <strong>₹{req.maxBudgetPerKg}/kg</strong>
              </p>
              <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>
                📍 Delivery Location: {req.location}
              </div>
            </div>
          ))}

          <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('/ai-matches')}>
            View Recommended AI Seller Matches <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Incoming Shipment Status */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Truck size={20} color="var(--primary-600)" /> Incoming Shipment Telematics
            </div>
            <span className="badge badge-warning">IN TRANSIT</span>
          </div>

          <div style={{ background: 'var(--slate-900)', color: 'white', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--primary-400)', fontWeight: 700, marginBottom: '4px' }}>
              SHIPMENT ID: {shipment.shipmentId}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>
              From: Apex EcoPlastics (Vijayawada)
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--slate-300)', marginBottom: '10px' }}>
              2000 kg Plastic Scrap (HDPE/PET Mix)
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--slate-400)', display: 'flex', justifyContent: 'space-between' }}>
              <span>ETA: <strong style={{ color: 'var(--primary-400)' }}>{shipment.eta}</strong></span>
              <span>Speed: <strong>{shipment.telematics.speedKm} km/h</strong></span>
            </div>
          </div>

          <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => navigate('/tracking')}>
            Track Freight Truck <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
