import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Sparkles, Upload, CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';

export const ListWastePage = () => {
  const { addWasteListing, setDemoStep } = useApp();
  const navigate = useNavigate();

  const [materialName, setMaterialName] = useState('');
  const [category, setCategory] = useState('Plastic Scrap');
  const [quantityKg, setQuantityKg] = useState('');
  const [qualityPercent, setQualityPercent] = useState('85');
  const [location, setLocation] = useState('');
  const [expectedPricePerKg, setExpectedPricePerKg] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Quick Pre-Fill Sample Data (Requirement 6)
  const handlePreFill = () => {
    setMaterialName('Plastic Scrap (HDPE/PET Mix)');
    setCategory('Plastic Scrap');
    setQuantityKg('2000');
    setQualityPercent('85');
    setLocation('Vijayawada, Andhra Pradesh');
    setExpectedPricePerKg('40');
    setDescription('Post-industrial shredded HDPE beverage bottle trims and clean PET flakes. Compressed and washed.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newListing = {
      materialName,
      category,
      quantityKg: parseFloat(quantityKg),
      qualityPercent: parseFloat(qualityPercent),
      location,
      expectedPricePerKg: parseFloat(expectedPricePerKg),
      description,
      photoUrl
    };

    setTimeout(() => {
      addWasteListing(newListing);
      setIsSubmitting(false);
      setSuccessMessage(true);

      setTimeout(() => {
        setDemoStep(2);
        navigate('/ai-matches');
      }, 1500);
    }, 800);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Title & Quick Pre-Fill Banner */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.2)', color: 'var(--primary-400)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <Sparkles size={12} /> SELLER MATERIAL INGESTION
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
              List Reusable Industrial Waste Scrap
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Submit your raw waste materials to trigger AI multi-factor buyer matching and freight route optimization.
            </p>
          </div>

          <button className="btn btn-primary" onClick={handlePreFill}>
            <Sparkles size={16} /> Pre-fill Sample Data (2000kg Plastic Scrap)
          </button>
        </div>
      </div>

      {/* Success AI Scanning Banner */}
      {successMessage && (
        <div
          style={{
            background: 'linear-gradient(135deg, #059669, #10b981)',
            color: 'white',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)'
          }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={24} className="pulse-anim" />
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>
              Waste successfully listed!
            </div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
              AI is finding the best buyer matches based on compatibility, price, quality, and freight cost...
            </div>
          </div>
        </div>
      )}

      {/* Listing Form */}
      <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
        {/* Photo Upload / Preset Selector */}
        <div className="form-group" style={{ marginBottom: '2rem' }}>
          <label className="form-label">Material Photo Preview</label>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <img
              src={photoUrl}
              alt="Material preview"
              style={{ width: '120px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--slate-300)' }}
            />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate-800)', marginBottom: '4px' }}>
                Upload Waste Photo or Select Sample Image
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setPhotoUrl('https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?w=500')}>
                  <ImageIcon size={14} /> Plastic Scrap
                </button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setPhotoUrl('https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500')}>
                  <ImageIcon size={14} /> Metal Scrap
                </button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setPhotoUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500')}>
                  <ImageIcon size={14} /> Paper Bales
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Material Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Plastic Scrap"
              value={materialName}
              onChange={(e) => setMaterialName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Material Category *</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Plastic Scrap">Plastic Scrap (HDPE/PET/PP)</option>
              <option value="Metal Scrap">Metal Scrap (Aluminum/Steel/Copper)</option>
              <option value="Paper Waste">Paper Waste (Corrugated/Kraft)</option>
              <option value="Textile Waste">Textile Waste (Cotton/Synthetic Edge Trims)</option>
              <option value="Glass Waste">Glass Waste (Float Cullet/Bottles)</option>
              <option value="Chemical Sludge">Industrial Sludge / Byproducts</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Quantity Available (kg) *</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 2000"
              value={quantityKg}
              onChange={(e) => setQuantityKg(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Quality Percentage (%) *</label>
            <input
              type="number"
              min="0"
              max="100"
              className="form-control"
              placeholder="e.g. 85"
              value={qualityPercent}
              onChange={(e) => setQualityPercent(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Location (City, State) *</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Vijayawada"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Expected Selling Price (₹/kg) *</label>
            <input
              type="number"
              step="0.5"
              className="form-control"
              placeholder="e.g. 40"
              value={expectedPricePerKg}
              onChange={(e) => setExpectedPricePerKg(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Detailed Material Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Describe contamination level, washing state, packaging (baled/loose), etc."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Ingesting Waste Data...' : 'Submit Listing & Trigger AI Match Engine'} <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};
