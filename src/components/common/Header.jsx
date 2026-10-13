import React from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Sparkles, User, RefreshCw, LogOut, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const { currentUser, userRole, switchRole, notifications, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const unreadCount = notifications.filter(n => !n.read).length;

  const getPageTitle = (path) => {
    switch (path) {
      case '/dashboard': return userRole === 'SELLER' ? 'Seller Workspace & Overview' : 'Buyer Sourcing Workspace';
      case '/list-waste': return 'List Industrial Waste Material';
      case '/buyer-requirement': return 'Material Sourcing Requirement';
      case '/ai-matches': return 'AI Multi-Factor Match Engine';
      case '/match-details': return 'Match Evaluation & Feasibility Breakdown';
      case '/connection-chat': return 'Connection & Negotiations Hub';
      case '/transportation': return 'Optimized Freight & Logistics Hub';
      case '/tracking': return 'Live Telematics & Transport Tracking';
      case '/traceability': return 'Material Traceability & Circular Lifecycle';
      case '/impact': return 'Environmental Impact & Revenue Analytics';
      case '/compliance-report': return 'Government Regulatory & EPR Compliance Reports';
      case '/transactions': return 'Audit Log & Transaction History';
      case '/notifications': return 'System Alerts & Notifications';
      case '/profile': return 'Corporate Identity & License Profile';
      default: return 'EcoLoopAI Workspace';
    }
  };

  return (
    <header className="top-navbar">
      <div className="navbar-title">
        <h1>{getPageTitle(location.pathname)}</h1>
        <p>AI-Powered Circular Economy Platform • {currentUser.company}</p>
      </div>

      <div className="navbar-actions">
        {/* Quick Role Switcher Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--slate-100)', padding: '6px 12px', borderRadius: 'var(--radius-full)', border: '1px solid var(--slate-200)' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--slate-600)', fontWeight: 600 }}>Active Role:</span>
          <select
            value={userRole}
            onChange={(e) => switchRole(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'var(--primary-700)', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', outline: 'none' }}
          >
            <option value="SELLER">🏭 Seller (Has Waste)</option>
            <option value="BUYER">🛒 Buyer (Needs Raw Material)</option>
          </select>
        </div>

        {/* Notification Bell */}
        <button
          className="icon-btn"
          onClick={() => navigate('/notifications')}
          title="Notifications"
          aria-label="View notifications"
        >
          <Bell size={18} />
          {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
        </button>

        {/* User Avatar Pill */}
        <div
          onClick={() => navigate('/profile')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '4px 8px', borderRadius: 'var(--radius-full)', transition: 'background 0.2s' }}
        >
          <div className="user-avatar">
            {currentUser.name.charAt(0)}
          </div>
          <div style={{ display: 'none', smDisplay: 'block' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate-900)' }}>{currentUser.name}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <CheckCircle2 size={11} /> Verified Enterprise
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
