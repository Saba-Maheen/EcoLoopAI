import React from 'react';
import { ShieldCheck, FileCheck, Printer, Download, Leaf, Award, CheckCircle2, QrCode } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ComplianceReportDocument = ({ transaction, traceability, shipment }) => {
  const { currentUser } = useApp();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* Action Header bar for downloading/printing */}
      <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', background: 'var(--slate-900)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-lg)', color: 'white' }}>
        <div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCheck size={20} color="var(--primary-400)" /> Official Circular Economy Regulatory Compliance Certificate
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--slate-400)' }}>
            Documentation generated for Central Pollution Control Board (CPCB) Extended Producer Responsibility (EPR) compliance audit.
          </p>
        </div>

        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={16} /> Print / Download PDF Report
        </button>
      </div>

      {/* Printable Official Document Layout */}
      <div
        className="printable-report"
        style={{
          background: 'white',
          border: '2px solid var(--slate-300)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-xl)',
          color: 'var(--slate-900)',
          position: 'relative'
        }}
      >
        {/* Document Official Watermark / Header Seal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '3px double var(--slate-300)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '12px', background: 'linear-gradient(135deg, #059669, #10b981)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Leaf size={32} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)', letterSpacing: '-0.02em' }}>
                EcoLoop<span style={{ color: 'var(--primary-600)' }}>AI</span> Certificate
              </h1>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', fontWeight: 600 }}>
                Circular Economy Material Traceability & Compliance Document
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-50)', color: 'var(--primary-700)', padding: '6px 12px', borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: '0.8rem', border: '1px solid var(--primary-200)', marginBottom: '4px' }}>
              <ShieldCheck size={16} /> CPCB/SPCB VERIFIED
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Certificate No: <strong>EPR-2026-8841-IND</strong></div>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Issued Date: <strong>04 Sept 2026</strong></div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div style={{ background: 'var(--slate-50)', border: '1px solid var(--slate-200)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--slate-700)', marginBottom: '2rem' }}>
          <strong>Notice:</strong> Documentation compiled for applicable government, regulatory, Extended Producer Responsibility (EPR), and corporate ESG compliance requirements. Validated by EcoLoopAI multi-factor ledger verification.
        </div>

        {/* Section 1: Entity & Transaction Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--slate-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px' }}>
              1. Waste Generator (Seller) Details
            </h3>
            <table style={{ width: '100%', fontSize: '0.85rem' }}>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>Company Name:</td>
                  <td style={{ fontWeight: 600 }}>{currentUser.company}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>GSTIN:</td>
                  <td style={{ fontWeight: 600 }}>{currentUser.gstin}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>CPCB License ID:</td>
                  <td style={{ fontWeight: 600 }}>{currentUser.cpcbLicense}</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>Facility Location:</td>
                  <td style={{ fontWeight: 600 }}>{currentUser.location}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--slate-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px' }}>
              2. Recycler (Buyer) Details
            </h3>
            <table style={{ width: '100%', fontSize: '0.85rem' }}>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>Recycler Unit:</td>
                  <td style={{ fontWeight: 600 }}>GreenTech Polymer Recyclers</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>GSTIN:</td>
                  <td style={{ fontWeight: 600 }}>36BBBBB1111B2Z8</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>EPR Recycler Reg:</td>
                  <td style={{ fontWeight: 600 }}>CPCB/EPR-REC/2024/7721</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--slate-500)', padding: '4px 0' }}>Facility Location:</td>
                  <td style={{ fontWeight: 600 }}>Cherlapally IDA, Hyderabad, TS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Material Manifest & Mass Balance Audit */}
        <h3 style={{ fontSize: '1rem', color: 'var(--slate-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '2px solid var(--slate-200)', paddingBottom: '4px' }}>
          3. Waste Material Audit & Mass Balance Yield
        </h3>

        <div className="table-responsive" style={{ marginBottom: '2rem' }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Material Category</th>
                <th>Original Quantity</th>
                <th>Delivered Quantity</th>
                <th>Processed Quantity</th>
                <th>Recycled Yield Output</th>
                <th>Diversion Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 700 }}>{transaction.id}</td>
                <td>{transaction.material}</td>
                <td>{traceability.massBalance.originalKg} kg</td>
                <td>{traceability.massBalance.deliveredKg} kg</td>
                <td>{traceability.massBalance.processedKg} kg</td>
                <td style={{ color: 'var(--primary-600)', fontWeight: 700 }}>{traceability.massBalance.recycledKg} kg</td>
                <td style={{ fontWeight: 700 }}>{traceability.massBalance.yieldPercent}%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3: Transportation & Logistics Manifest */}
        <h3 style={{ fontSize: '1rem', color: 'var(--slate-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '2px solid var(--slate-200)', paddingBottom: '4px' }}>
          4. Logistics & Manifest Details
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', background: 'var(--slate-50)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid var(--slate-200)' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>SHIPMENT ID</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{shipment.shipmentId}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>VEHICLE NUMBER</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{shipment.vehicleNumber}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>DRIVER NAME</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{shipment.driverName}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>ROUTE DISTANCE</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{shipment.distanceKm} km (NH65)</div>
          </div>
        </div>

        {/* Section 4: Estimated Environmental Impact Statement */}
        <div style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', border: '1px solid var(--primary-300)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-900)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>
            Estimated Environmental Impact Statement
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--primary-950)' }}>
            By diverting <strong>2,000 kg</strong> of industrial plastic scrap from landfill into closed-loop recycling:
          </p>
          <ul style={{ fontSize: '0.85rem', color: 'var(--primary-900)', marginLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Avoided Greenhouse Gas Emissions: <strong>~4.0 Tons CO₂ equivalent</strong></li>
            <li>Energy Savings: <strong>~11,600 kWh</strong> of virgin polymer refining energy</li>
            <li>Landfill Space Saved: <strong>5.3 cubic meters</strong></li>
          </ul>
        </div>

        {/* Signatures & Verification Seal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--slate-300)', paddingTop: '1.5rem' }}>
          <div>
            <div style={{ width: '80px', height: '80px', border: '1px stroke #cbd5e1', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
              <QrCode size={60} color="#0f172a" />
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--slate-500)', marginTop: '4px' }}>
              Scan to verify live CPCB ledger trace
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ borderBottom: '1px solid var(--slate-400)', width: '180px', marginBottom: '6px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontWeight: 700, color: 'var(--primary-700)' }}>
              Srinivas Rao
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>Authorized Waste Seller</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>Apex EcoPlastics Mfg</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ borderBottom: '1px solid var(--slate-400)', width: '180px', marginBottom: '6px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontWeight: 700, color: 'var(--primary-700)' }}>
              Vikram Reddy
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>Authorized Recycler</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)' }}>GreenTech Recyclers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
