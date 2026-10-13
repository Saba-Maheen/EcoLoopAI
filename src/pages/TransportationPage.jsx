import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { SimulatedMap } from '../components/transport/SimulatedMap';
import { Truck, MapPin, Navigation, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export const TransportationPage = () => {
  const { shipment, setDemoStep } = useApp();
  const navigate = useNavigate();

  const handleStartTracking = () => {
    setDemoStep(6);
    navigate('/tracking');
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <Truck size={12} /> LOGISTICS FREIGHT & ROUTE DISPATCH
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
              Vijayawada ➔ Hyderabad Freight Corridor (NH65)
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Shipment ID: <strong>{shipment.shipmentId}</strong> • EcoTrans Express Heavy Transport Logistics
            </p>
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleStartTracking}>
            Track Shipment <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Simulated Map Visualizer Component */}
      <SimulatedMap shipment={shipment} />

      {/* Detailed Logistics Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        <div className="card">
          <h4 style={{ fontSize: '0.85rem', color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Vehicle & Driver Manifest
          </h4>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '4px' }}>
            {shipment.vehicleNumber}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '8px' }}>
            {shipment.vehicleType}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)', borderTop: '1px solid var(--slate-100)', paddingTop: '6px' }}>
            Driver: <strong>{shipment.driverName}</strong> ({shipment.driverPhone})
          </div>
        </div>

        <div className="card">
          <h4 style={{ fontSize: '0.85rem', color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Route & Telematics Summary
          </h4>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-600)', marginBottom: '4px' }}>
            {shipment.distanceKm} km • {shipment.estimatedTime}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '8px' }}>
            Optimal Freight Cost: <strong>₹{shipment.estimatedCostRs.toLocaleString()}</strong>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)', borderTop: '1px solid var(--slate-100)', paddingTop: '6px' }}>
            Route: {shipment.route}
          </div>
        </div>

        <div className="card">
          <h4 style={{ fontSize: '0.85rem', color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Pickup & Delivery Addresses
          </h4>
          <div style={{ fontSize: '0.82rem', color: 'var(--slate-700)', marginBottom: '6px' }}>
            📍 <strong>Pickup:</strong> {shipment.sourceAddress}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--slate-700)' }}>
            🏁 <strong>Delivery:</strong> {shipment.destinationAddress}
          </div>
        </div>
      </div>
    </div>
  );
};
