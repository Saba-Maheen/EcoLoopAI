import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const MaterialRequirementPage = () => {
  const { addBuyerRequirement, setDemoStep } = useApp();
  const navigate = useNavigate();

  const [materialRequired, setMaterialRequired] = useState('');
  const [category, setCategory] = useState('Plastic Scrap');
  const [requiredQuantityKg, setRequiredQuantityKg] = useState('');
  const [requiredQualityPercent, setRequiredQualityPercent] = useState('80');
  const [location, setLocation] = useState('');
  const [maxBudgetPerKg, setMaxBudgetPerKg] = useState('');
  const [description, setDescription] = useState('');

  const handlePreFill = () => {
    setMaterialRequired('Plastic Scrap (HDPE/PET Mix)');
    setCategory('Plastic Scrap');
    setRequiredQuantityKg('1500');
    setRequiredQualityPercent('80');
    setLocation('Hyderabad, Telangana');
    setMaxBudgetPerKg('50');
    setDescription('Need high purity post-industrial plastic scrap for polymer compounding into recycled pellets.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBuyerRequirement({
      materialRequired,
      category,
      requiredQuantityKg: parseFloat(requiredQuantityKg),
      requiredQualityPercent: parseFloat(requiredQualityPercent),
      location,
      maxBudgetPerKg: parseFloat(maxBudgetPerKg),
      description
    });
    setDemoStep(2);
    navigate('/ai-matches');
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(6,182,212,0.2)', color: 'var(--accent-cyan)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
              <Search size={12} /> BUYER MATERIAL PROCUREMENT
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
              Post Material Sourcing Requirement
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>
              Enter your raw material criteria. AI will match you with verified industrial waste sellers with optimal freight logistics.
            </p>
          </div>

          <button className="btn btn-primary" onClick={handlePreFill}>
            <Sparkles size={16} /> Pre-fill Sample Buyer Request
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Material Required *</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Plastic Scrap"
              value={materialRequired}
              onChange={(e) => setMaterialRequired(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category *</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Plastic Scrap">Plastic Scrap</option>
              <option value="Metal Scrap">Metal Scrap</option>
              <option value="Paper Waste">Paper Waste</option>
              <option value="Textile Waste">Textile Waste</option>
              <option value="Glass Waste">Glass Waste</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Required Quantity (kg) *</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 1500"
              value={requiredQuantityKg}
              onChange={(e) => setRequiredQuantityKg(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Required Quality (%) *</label>
            <input
              type="number"
              min="0"
              max="100"
              className="form-control"
              placeholder="e.g. 80"
              value={requiredQualityPercent}
              onChange={(e) => setRequiredQualityPercent(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Delivery Location (City) *</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Hyderabad"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Maximum Budget (₹/kg) *</label>
            <input
              type="number"
              step="0.5"
              className="form-control"
              placeholder="e.g. 50"
              value={maxBudgetPerKg}
              onChange={(e) => setMaxBudgetPerKg(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Description & Application Specs</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Specify technical parameters, melt flow index, contamination tolerance..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
          Find AI Matched Sellers <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};
