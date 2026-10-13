import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { History, Eye, FileCheck, CheckCircle2, Search, ArrowRight } from 'lucide-react';

export const TransactionsPage = () => {
  const { transactions } = useApp();
  const navigate = useNavigate();
  const [selectedTxnModal, setSelectedTxnModal] = useState(null);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <History size={12} /> AUDIT LEDGER
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
              Waste Exchange Transaction Audit History
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Complete immutable record of all material exchanges, freight receipts, and recycling verification certificates.
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Material</th>
                <th>Quantity</th>
                <th>Buyer / Recycler</th>
                <th>Price / kg</th>
                <th>Freight Cost</th>
                <th>Status</th>
                <th>Recycling Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 700 }}>{t.id}</td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>{t.date}</td>
                  <td style={{ fontWeight: 600 }}>{t.material}</td>
                  <td>{t.quantityKg} kg</td>
                  <td>{t.buyer}</td>
                  <td>₹{t.basePricePerKg}</td>
                  <td style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>₹{t.transportCost.toLocaleString()}</td>
                  <td><span className="badge badge-success">{t.shipmentStatus}</span></td>
                  <td><span className="badge badge-info">{t.recyclingStatus}</span></td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedTxnModal(t)}
                    >
                      <Eye size={14} /> Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {selectedTxnModal && (
        <div className="modal-overlay" onClick={() => setSelectedTxnModal(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.1rem', color: 'var(--slate-900)' }}>
                Transaction Lifecycle: {selectedTxnModal.id}
              </h3>
              <button
                onClick={() => setSelectedTxnModal(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--slate-50)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>MATERIAL</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)' }}>{selectedTxnModal.material}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>Quantity: {selectedTxnModal.quantityKg} kg</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>SELLER</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{selectedTxnModal.seller}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>BUYER</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{selectedTxnModal.buyer}</div>
                </div>
              </div>

              <div style={{ background: 'var(--primary-50)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-200)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', fontWeight: 700 }}>RECYCLING YIELD STATUS</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary-600)' }}>{selectedTxnModal.recyclingStatus}</div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedTxnModal(null);
                  navigate('/compliance-report');
                }}
              >
                <FileCheck size={16} /> View Compliance Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
