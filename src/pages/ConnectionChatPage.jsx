import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle2, Truck, Sparkles, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const ConnectionChatPage = () => {
  const {
    chatMessages,
    sendChatMessage,
    selectedMatch,
    isDealConfirmed,
    confirmDealConnection,
    setDemoStep
  } = useApp();
  const navigate = useNavigate();

  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    sendChatMessage(inputMsg);
    setInputMsg('');
  };

  const handleConfirmConnection = () => {
    confirmDealConnection();
    setTimeout(() => {
      setDemoStep(5);
      navigate('/transportation');
    }, 1200);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Left Column: Chat Window */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '650px', padding: 0, overflow: 'hidden' }}>
        {/* Chat Header */}
        <div style={{ padding: '1rem 1.5rem', background: 'var(--slate-900)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--primary-600)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
              VR
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                {selectedMatch ? selectedMatch.companyName : 'GreenTech Recyclers'}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--primary-400)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <CheckCircle2 size={11} /> Verified Buyer Representative
              </div>
            </div>
          </div>

          <span className="badge badge-ai">
            <Sparkles size={12} /> AI ASSISTED DEAL
          </span>
        </div>

        {/* Messages Body */}
        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--slate-50)' }}>
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                alignSelf: msg.sender === 'SELLER' ? 'flex-end' : 'flex-start',
                maxWidth: '80%'
              }}
            >
              <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', marginBottom: '3px', textAlign: msg.sender === 'SELLER' ? 'right' : 'left' }}>
                {msg.senderName} • {msg.timestamp}
              </div>
              <div
                style={{
                  background: msg.sender === 'SELLER' ? 'var(--primary-600)' : 'white',
                  color: msg.sender === 'SELLER' ? 'white' : 'var(--slate-900)',
                  padding: '0.85rem 1.1rem',
                  borderRadius: 'var(--radius-lg)',
                  borderTopRightRadius: msg.sender === 'SELLER' ? '2px' : 'var(--radius-lg)',
                  borderTopLeftRadius: msg.sender === 'BUYER' ? '2px' : 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.9rem',
                  border: msg.sender === 'BUYER' ? '1px solid var(--slate-200)' : 'none'
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isDealConfirmed && (
            <div style={{ background: 'linear-gradient(135deg, #059669, #10b981)', color: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.9rem', fontWeight: 700 }}>
              🎉 Connection & Deal Confirmed! Redirecting to Transportation Logistics...
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} style={{ padding: '1rem', background: 'white', borderTop: '1px solid var(--slate-200)', display: 'flex', gap: '0.75rem' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Type your message or proposal..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Right Column: Deal Parameters & Confirmation Panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ fontSize: '1.15rem', color: 'var(--slate-900)', marginBottom: '1.25rem', borderBottom: '2px solid var(--slate-100)', paddingBottom: '0.5rem' }}>
            Agreed Deal Parameters
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Material:</span>
              <strong style={{ fontSize: '0.9rem' }}>Plastic Scrap (HDPE/PET)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Agreed Quantity:</span>
              <strong style={{ fontSize: '0.9rem' }}>2000 kg</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Agreed Base Price:</span>
              <strong style={{ fontSize: '0.9rem' }}>₹40 / kg</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Estimated Freight Cost:</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--accent-amber)' }}>₹6,800 (₹3.40/kg)</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Delivery Destination:</span>
              <strong style={{ fontSize: '0.9rem' }}>Cherlapally, Hyderabad</strong>
            </div>

            <div style={{ background: 'var(--primary-50)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-200)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', textTransform: 'uppercase', fontWeight: 700 }}>Total Agreed Transaction Value</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-600)' }}>₹86,800</div>
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={handleConfirmConnection}
            disabled={isDealConfirmed}
          >
            {isDealConfirmed ? 'Connection Confirmed!' : 'Confirm Connection'} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
