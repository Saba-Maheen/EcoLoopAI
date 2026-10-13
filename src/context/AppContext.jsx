import React, { createContext, useContext, useState } from 'react';
import {
  INITIAL_USER,
  INITIAL_BUYER_USER,
  INITIAL_LISTINGS,
  INITIAL_BUYER_REQUIREMENTS,
  SAMPLE_AI_MATCHES,
  INITIAL_CHAT_MESSAGES,
  INITIAL_SHIPMENT,
  INITIAL_TRACEABILITY_DATA,
  INITIAL_TRANSACTIONS,
  INITIAL_NOTIFICATIONS
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userRole, setUserRole] = useState('SELLER'); // SELLER or BUYER
  const [currentUser, setCurrentUser] = useState(INITIAL_USER);

  // Core Data Collections
  const [listings, setListings] = useState(INITIAL_LISTINGS);
  const [requirements, setRequirements] = useState(INITIAL_BUYER_REQUIREMENTS);
  const [aiMatches, setAiMatches] = useState(SAMPLE_AI_MATCHES);
  const [selectedMatch, setSelectedMatch] = useState(SAMPLE_AI_MATCHES[0]);

  // Chat & Connection State
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT_MESSAGES);
  const [isDealConfirmed, setIsDealConfirmed] = useState(false);

  // Transportation & Tracking State
  const [shipment, setShipment] = useState(INITIAL_SHIPMENT);
  const [traceability, setTraceability] = useState(INITIAL_TRACEABILITY_DATA);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  // Interactive Demo Progress Step (1 to 10)
  const [demoStep, setDemoStep] = useState(3);

  // Auth Handlers
  const loginAsDemoSeller = () => {
    setIsAuthenticated(true);
    setUserRole('SELLER');
    setCurrentUser(INITIAL_USER);
  };

  const loginAsDemoBuyer = () => {
    setIsAuthenticated(true);
    setUserRole('BUYER');
    setCurrentUser(INITIAL_BUYER_USER);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const switchRole = (role) => {
    setUserRole(role);
    if (role === 'SELLER') {
      setCurrentUser(INITIAL_USER);
    } else {
      setCurrentUser(INITIAL_BUYER_USER);
    }
  };

  // Add Waste Listing (Seller)
  const addWasteListing = (newListing) => {
    const listingObj = {
      id: `WST-2026-00${listings.length + 1}`,
      ...newListing,
      dateListed: new Date().toISOString().split('T')[0],
      status: 'ACTIVE'
    };
    setListings([listingObj, ...listings]);

    // Push new notification
    const newNotif = {
      id: `notif-${Date.now()}`,
      title: 'AI Processing Active Listing',
      message: `Analyzing multi-factor matches for ${newListing.materialName} (${newListing.quantityKg} kg)...`,
      time: 'Just now',
      type: 'ai',
      read: false
    };
    setNotifications([newNotif, ...notifications]);
  };

  // Add Buyer Requirement
  const addBuyerRequirement = (newReq) => {
    const reqObj = {
      id: `REQ-2026-00${requirements.length + 1}`,
      ...newReq,
      dateSubmitted: new Date().toISOString().split('T')[0]
    };
    setRequirements([reqObj, ...requirements]);
  };

  // Chat Actions
  const sendChatMessage = (text) => {
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: userRole,
      senderName: currentUser.name + ` (${currentUser.company})`,
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages(prev => [...prev, newMsg]);
  };

  // Confirm Deal Connection
  const confirmDealConnection = () => {
    setIsDealConfirmed(true);
    const newNotif = {
      id: `notif-${Date.now()}`,
      title: 'Connection Confirmed!',
      message: `Deal agreed for 2000kg Plastic Scrap. Transportation logistics dispatched.`,
      time: 'Just now',
      type: 'transport',
      read: false
    };
    setNotifications([newNotif, ...notifications]);
  };

  // Shipment Progress Simulator
  const advanceShipmentProgress = () => {
    const stages = ['PICKED_UP', 'IN_TRANSIT', 'NEAR_DESTINATION', 'DELIVERED'];
    const currentIndex = stages.indexOf(shipment.currentStatus);
    if (currentIndex < stages.length - 1) {
      const nextStatus = stages[currentIndex + 1];
      const progressMap = {
        'PICKED_UP': 25,
        'IN_TRANSIT': 65,
        'NEAR_DESTINATION': 90,
        'DELIVERED': 100
      };
      
      const updatedShipment = {
        ...shipment,
        currentStatus: nextStatus,
        routeProgressPercent: progressMap[nextStatus],
        timeline: shipment.timeline.map((t, idx) => ({
          ...t,
          completed: idx <= currentIndex + 1,
          current: idx === currentIndex + 1
        }))
      };
      setShipment(updatedShipment);
    }
  };

  const markNotificationRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        userRole,
        currentUser,
        listings,
        requirements,
        aiMatches,
        selectedMatch,
        setSelectedMatch,
        chatMessages,
        isDealConfirmed,
        shipment,
        traceability,
        transactions,
        notifications,
        demoStep,
        setDemoStep,
        loginAsDemoSeller,
        loginAsDemoBuyer,
        logout,
        switchRole,
        addWasteListing,
        addBuyerRequirement,
        sendChatMessage,
        confirmDealConnection,
        advanceShipmentProgress,
        markNotificationRead
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
