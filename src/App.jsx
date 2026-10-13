import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/common/Sidebar';
import { Header } from './components/common/Header';
import { DemoFlowBanner } from './components/common/DemoFlowBanner';

// Pages
import { LandingPage } from './pages/LandingPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import { SellerDashboard } from './pages/SellerDashboard';
import { BuyerDashboard } from './pages/BuyerDashboard';
import { ListWastePage } from './pages/ListWastePage';
import { MaterialRequirementPage } from './pages/MaterialRequirementPage';
import { AIMatchingPage } from './pages/AIMatchingPage';
import { MatchDetailsPage } from './pages/MatchDetailsPage';
import { ConnectionChatPage } from './pages/ConnectionChatPage';
import { TransportationPage } from './pages/TransportationPage';
import { TrackingPage } from './pages/TrackingPage';
import { TraceabilityPage } from './pages/TraceabilityPage';
import { ImpactDashboardPage } from './pages/ImpactDashboardPage';
import { ComplianceReportPage } from './pages/ComplianceReportPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfilePage } from './pages/ProfilePage';

import './styles/main.css';

const Layout = ({ children }) => {
  const { userRole } = useApp();

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <DemoFlowBanner />
        <main className="content-container">
          {children}
        </main>
      </div>
    </div>
  );
};

const DashboardRouter = () => {
  const { userRole } = useApp();
  return userRole === 'SELLER' ? <SellerDashboard /> : <BuyerDashboard />;
};

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Landing & Role Selection */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/role-selection" element={<RoleSelectionPage />} />

          {/* Authenticated Dashboard Workspace */}
          <Route path="/dashboard" element={<Layout><DashboardRouter /></Layout>} />
          <Route path="/list-waste" element={<Layout><ListWastePage /></Layout>} />
          <Route path="/buyer-requirement" element={<Layout><MaterialRequirementPage /></Layout>} />
          <Route path="/ai-matches" element={<Layout><AIMatchingPage /></Layout>} />
          <Route path="/match-details" element={<Layout><MatchDetailsPage /></Layout>} />
          <Route path="/connection-chat" element={<Layout><ConnectionChatPage /></Layout>} />
          <Route path="/transportation" element={<Layout><TransportationPage /></Layout>} />
          <Route path="/tracking" element={<Layout><TrackingPage /></Layout>} />
          <Route path="/traceability" element={<Layout><TraceabilityPage /></Layout>} />
          <Route path="/impact" element={<Layout><ImpactDashboardPage /></Layout>} />
          <Route path="/compliance-report" element={<Layout><ComplianceReportPage /></Layout>} />
          <Route path="/transactions" element={<Layout><TransactionsPage /></Layout>} />
          <Route path="/notifications" element={<Layout><NotificationsPage /></Layout>} />
          <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
