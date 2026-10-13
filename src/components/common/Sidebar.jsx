import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusCircle,
  Search,
  Sparkles,
  MessageSquare,
  Truck,
  Navigation,
  Recycle,
  FileCheck,
  History,
  User,
  Leaf,
  LogOut
} from 'lucide-react';

export const Sidebar = () => {
  const { userRole, currentUser, logout, switchRole } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sellerLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/list-waste', label: 'List Waste', icon: PlusCircle },
    { to: '/ai-matches', label: 'AI Matches', icon: Sparkles, badge: '10' },
    { to: '/connection-chat', label: 'Connections & Chat', icon: MessageSquare },
    { to: '/transportation', label: 'Transportation', icon: Truck },
    { to: '/tracking', label: 'Material Tracking', icon: Navigation },
    { to: '/traceability', label: 'Material Traceability', icon: Recycle },
    { to: '/impact', label: 'Environmental Impact', icon: Leaf },
    { to: '/compliance-report', label: 'Govt Reports', icon: FileCheck },
    { to: '/transactions', label: 'Transactions', icon: History },
    { to: '/profile', label: 'Profile', icon: User }
  ];

  const buyerLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/buyer-requirement', label: 'Find Materials', icon: Search },
    { to: '/ai-matches', label: 'AI Matches', icon: Sparkles, badge: '10' },
    { to: '/connection-chat', label: 'Connections & Chat', icon: MessageSquare },
    { to: '/transportation', label: 'Transportation', icon: Truck },
    { to: '/tracking', label: 'Material Tracking', icon: Navigation },
    { to: '/traceability', label: 'Material Traceability', icon: Recycle },
    { to: '/transactions', label: 'Transactions', icon: History },
    { to: '/profile', label: 'Profile', icon: User }
  ];

  const links = userRole === 'SELLER' ? sellerLinks : buyerLinks;

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-logo">
        <div className="brand-icon">
          <Leaf size={22} color="#ffffff" />
        </div>
        <div>
          <div className="brand-name">EcoLoop<span style={{ color: 'var(--primary-400)' }}>AI</span></div>
          <div className="brand-tag">Circular Intelligence</div>
        </div>
      </div>

      {/* Navigation Options */}
      <nav className="sidebar-nav">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <IconComponent size={18} />
              <span style={{ flex: 1 }}>{link.label}</span>
              {link.badge && (
                <span style={{ background: 'var(--primary-500)', color: 'white', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 700 }}>
                  {link.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Sidebar Footer User Card */}
      <div className="sidebar-footer">
        <div className="user-avatar">
          {currentUser.name.charAt(0)}
        </div>
        <div className="user-info">
          <div className="user-name">{currentUser.company}</div>
          <div className="user-role">{userRole === 'SELLER' ? 'Waste Generator' : 'Material Purchaser'}</div>
        </div>
        <button
          onClick={handleLogout}
          style={{ background: 'transparent', border: 'none', color: 'var(--slate-400)', cursor: 'pointer', padding: '4px' }}
          title="Sign Out"
        >
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  );
};
