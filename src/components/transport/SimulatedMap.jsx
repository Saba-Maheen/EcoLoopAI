import React from 'react';
import { MapPin, Navigation, Truck, ShieldCheck, Clock, Gauge, Compass } from 'lucide-react';

export const SimulatedMap = ({ shipment, isLiveTracking = false }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        color: 'white',
        boxShadow: 'var(--shadow-xl)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--slate-800)'
      }}
    >
      {/* Map Control Overlay Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', zIndex: 2, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Compass size={14} className="pulse-anim" /> OPTIMAL FREIGHT ROUTE SIMULATOR
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--slate-400)' }}>
            Shipment ID: <strong style={{ color: 'white' }}>{shipment.shipmentId}</strong>
          </span>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--slate-300)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>ETA: <strong style={{ color: 'var(--primary-400)' }}>{shipment.eta}</strong></span>
          <span>Speed: <strong style={{ color: 'var(--accent-cyan)' }}>{shipment.telematics.speedKm} km/h</strong></span>
        </div>
      </div>

      {/* Interactive SVG Canvas Map */}
      <div style={{ position: 'relative', height: '280px', width: '100%', background: '#0b1329', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
        {/* Grid Lines Pattern */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
          <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64748b" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mapGrid)" />
        </svg>

        {/* Dynamic Route SVG Line & Animated Vehicle Node */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <defs>
            <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* Dotted Base Route Path (Vijayawada -> Suryapet -> Nalgonda -> Hyderabad) */}
          <path
            d="M 100,200 C 220,180 320,110 500,100 C 650,90 780,140 900,120"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="6"
            strokeDasharray="8 6"
          />

          {/* Traveled Glow Route Path */}
          <path
            d="M 100,200 C 220,180 320,110 500,100 C 650,90 780,140 900,120"
            fill="none"
            stroke="url(#routeGlow)"
            strokeWidth="5"
            strokeDasharray="1000"
            strokeDashoffset={1000 - (1000 * (shipment.routeProgressPercent / 100))}
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />

          {/* Origin Node (Vijayawada) */}
          <g transform="translate(100, 200)">
            <circle r="12" fill="#10b981" fillOpacity="0.3" />
            <circle r="6" fill="#10b981" />
            <text x="-35" y="25" fill="#a7f3d0" fontSize="12" fontWeight="700">Vijayawada (Origin)</text>
          </g>

          {/* Intermediate Checkpost Node (Nalgonda Bypass) */}
          <g transform="translate(500, 100)">
            <circle r="5" fill="#f59e0b" />
            <text x="-40" y="-12" fill="#fde68a" fontSize="10">Nalgonda Bypass (Toll)</text>
          </g>

          {/* Destination Node (Hyderabad) */}
          <g transform="translate(900, 120)">
            <circle r="12" fill="#6366f1" fillOpacity="0.3" />
            <circle r="6" fill="#6366f1" />
            <text x="-45" y="25" fill="#c7d2fe" fontSize="12" fontWeight="700">Hyderabad (Dest)</text>
          </g>
        </svg>

        {/* Live Truck Marker Overlay (Calculated Position from progress) */}
        <div
          style={{
            position: 'absolute',
            top: shipment.routeProgressPercent < 50 ? `${200 - (shipment.routeProgressPercent * 2)}px` : `${100 + ((shipment.routeProgressPercent - 50) * 0.4)}px`,
            left: `${10 + (shipment.routeProgressPercent * 0.8)}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            transition: 'all 0.8s ease'
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #10b981, #06b6d4)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)',
              border: '2px solid white'
            }}
          >
            <Truck size={18} className="pulse-anim" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>{shipment.vehicleNumber}</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.8)', color: 'var(--primary-300)', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', textAlign: 'center', marginTop: '2px' }}>
            {shipment.currentLocationName}
          </div>
        </div>

        {/* Top Right Live GPS Status Pill */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '8px 14px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.75rem',
            zIndex: 5
          }}
        >
          <div style={{ color: 'var(--slate-400)', fontSize: '0.68rem' }}>CURRENT STATUS</div>
          <div style={{ color: 'var(--primary-400)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} className="pulse-anim"></span>
            {shipment.currentStatus.replace('_', ' ')} ({shipment.routeProgressPercent}%)
          </div>
        </div>
      </div>

      {/* Route & Driver Telematics Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
          marginTop: '1.25rem',
          background: 'rgba(255,255,255,0.05)',
          padding: '1rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>Source City</span>
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{shipment.sourceCity}</div>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>Destination City</span>
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{shipment.destinationCity}</div>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>Distance & Route</span>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-400)' }}>{shipment.distanceKm} km (NH65)</div>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>Est. Freight Cost</span>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-amber)' }}>₹{shipment.estimatedCostRs.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};
