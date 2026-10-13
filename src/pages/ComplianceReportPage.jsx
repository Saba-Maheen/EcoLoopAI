import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ComplianceReportDocument } from '../components/report/ComplianceReportDocument';
import { FileCheck, Sparkles, Printer, Download, ShieldCheck } from 'lucide-react';

export const ComplianceReportPage = () => {
  const { transactions, traceability, shipment } = useApp();
  const [selectedTxnId, setSelectedTxnId] = useState('TXN-2026-8841');

  const currentTxn = transactions.find(t => t.id === selectedTxnId) || transactions[0];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title & Selector Banner */}
      <div className="card no-print" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <ShieldCheck size={12} /> GOVERNMENT & REGULATORY COMPLIANCE
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
              EPR & CPCB Circular Economy Documentation Hub
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Generate official documentation for applicable government, regulatory, and Extended Producer Responsibility requirements.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--slate-300)' }}>Select Batch Txn:</span>
            <select
              className="form-control"
              style={{ width: 'auto', background: 'var(--slate-800)', color: 'white', borderColor: 'var(--slate-700)' }}
              value={selectedTxnId}
              onChange={(e) => setSelectedTxnId(e.target.value)}
            >
              {transactions.map(t => (
                <option key={t.id} value={t.id}>{t.id} - {t.material.substring(0, 20)}...</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Embedded Printable Compliance Report Document */}
      <ComplianceReportDocument transaction={currentTxn} traceability={traceability} shipment={shipment} />
    </div>
  );
};
