import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell, Sparkles, MessageSquare, Truck, Recycle, FileCheck, CheckCircle2 } from 'lucide-react';

export const NotificationsPage = () => {
  const { notifications, markNotificationRead } = useApp();

  const getIcon = (type) => {
    switch (type) {
      case 'ai': return <Sparkles size={20} color="var(--primary-500)" />;
      case 'connection': return <MessageSquare size={20} color="var(--accent-cyan)" />;
      case 'transport': return <Truck size={20} color="var(--accent-amber)" />;
      case 'recycling': return <Recycle size={20} color="var(--primary-600)" />;
      case 'report': return <FileCheck size={20} color="var(--accent-indigo)" />;
      default: return <Bell size={20} color="var(--slate-500)" />;
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bell size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
              System Alerts & Notifications Feed
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Real-time updates on AI multi-factor matching, deal negotiations, freight dispatches, and regulatory EPR filings.
            </p>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notifications.map((n) => (
          <div
            key={n.id}
            className="card"
            style={{
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              borderLeft: !n.read ? '4px solid var(--primary-500)' : '1px solid var(--slate-200)',
              background: !n.read ? 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)' : 'white'
            }}
            onClick={() => markNotificationRead(n.id)}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {getIcon(n.type)}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
                  {n.title}
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>{n.time}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)', lineHeight: 1.4 }}>
                {n.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
