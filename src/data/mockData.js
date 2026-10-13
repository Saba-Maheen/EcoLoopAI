export const INITIAL_USER = {
  id: 'usr-101',
  name: 'Srinivas Rao',
  company: 'Apex EcoPlastics Mfg Pvt Ltd',
  email: 'srinivas@apexecoplastics.com',
  phone: '+91 98480 12345',
  role: 'SELLER', // SELLER or BUYER
  location: 'Vijayawada, Andhra Pradesh',
  gstin: '37AAAAA0000A1Z5',
  cpcbLicense: 'CPCB/EPR-IND/2025/9482',
  verified: true,
  businessType: 'Polymers & Industrial Plastics Processing',
  handledMaterials: ['Plastic Scrap', 'PET Flakes', 'HDPE Regrind', 'Polypropylene Granules'],
  impact: {
    wasteDivertedKg: 14250,
    recycledKg: 13100,
    co2SavedTons: 28.5,
    waterSavedLiters: 42000,
    landfillSpaceSavedM3: 38,
    revenueGenerated: 570000,
  }
};

export const INITIAL_BUYER_USER = {
  id: 'usr-202',
  name: 'Vikram Reddy',
  company: 'GreenTech Polymer Recyclers',
  email: 'vikram@greentechpolymer.in',
  phone: '+91 94401 67890',
  role: 'BUYER',
  location: 'Hyderabad, Telangana',
  gstin: '36BBBBB1111B2Z8',
  cpcbLicense: 'CPCB/EPR-REC/2024/7721',
  verified: true,
  businessType: 'Circular Material Recycling & Compounding',
  handledMaterials: ['Plastic Scrap', 'Raw Polymer Scrap', 'Textile Fiber Waste'],
  impact: {
    materialsProcuredKg: 18500,
    moneySavedRs: 145000,
    recycledOutputKg: 17200,
  }
};

export const INITIAL_LISTINGS = [
  {
    id: 'WST-2026-001',
    materialName: 'Plastic Scrap (HDPE / PET Mix)',
    category: 'Plastic Scrap',
    quantityKg: 2000,
    qualityPercent: 85,
    location: 'Vijayawada, AP',
    expectedPricePerKg: 40,
    description: 'Post-industrial high-density polyethylene and PET shredded scrap from beverage container manufacturing. Cleaned and baled.',
    dateListed: '2026-09-02',
    status: 'ACTIVE',
    photoUrl: 'https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'WST-2026-002',
    materialName: 'Industrial Aluminum Offcuts',
    category: 'Metal Scrap',
    quantityKg: 5000,
    qualityPercent: 92,
    location: 'Visakhapatnam, AP',
    expectedPricePerKg: 145,
    description: 'Clean 6063 grade aluminum extrusion offcuts and sheet trimmings from automotive body fabrication.',
    dateListed: '2026-08-28',
    status: 'ACTIVE',
    photoUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'WST-2026-003',
    materialName: 'Corrugated Paperboard Bales',
    category: 'Paper Waste',
    quantityKg: 8500,
    qualityPercent: 88,
    location: 'Chennai, Tamil Nadu',
    expectedPricePerKg: 14,
    description: 'High-burst kraft paper packaging waste collected from logistics fulfillment hub. Compressed standard mill bales.',
    dateListed: '2026-09-01',
    status: 'ACTIVE',
    photoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'WST-2026-004',
    materialName: 'Cotton Textile Selvage Waste',
    category: 'Textile Waste',
    quantityKg: 3200,
    qualityPercent: 80,
    location: 'Coimbatore, TN',
    expectedPricePerKg: 28,
    description: 'Virgin 100% cotton weaving edge trims and yarn waste from textile spinning mill.',
    dateListed: '2026-08-30',
    status: 'ACTIVE',
    photoUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'WST-2026-005',
    materialName: 'Clear Float Glass Cullet',
    category: 'Glass Waste',
    quantityKg: 12000,
    qualityPercent: 95,
    location: 'Bengaluru, Karnataka',
    expectedPricePerKg: 8,
    description: 'Crushed architectural glass manufacturing trimmings, zero contamination, furnace ready.',
    dateListed: '2026-09-03',
    status: 'ACTIVE',
    photoUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

export const INITIAL_BUYER_REQUIREMENTS = [
  {
    id: 'REQ-2026-001',
    materialRequired: 'Plastic Scrap (HDPE/PET)',
    category: 'Plastic Scrap',
    requiredQuantityKg: 1500,
    requiredQualityPercent: 80,
    location: 'Hyderabad, TS',
    maxBudgetPerKg: 50,
    description: 'Need clean plastic scrap for compounding into recycled resin pellets for packaging applications.',
    dateSubmitted: '2026-09-03'
  }
];

export const SAMPLE_AI_MATCHES = [
  {
    id: 'MATCH-001',
    companyName: 'GreenTech Polymer Recyclers',
    companyType: 'Recycler & Compounder',
    location: 'Hyderabad, TS',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 40,
    distanceKm: 280,
    transportCostPerKg: 5,
    totalEffectiveCostPerKg: 45,
    totalFreightCost: 10000,
    totalOrderValue: 90000,
    aiMatchPercent: 95,
    isRecommended: true,
    recommendationReason: 'Highest overall score: Excellent quality match (85%), optimal distance via NH65, lowest total effective cost (₹45/kg).',
    scores: {
      materialCompatibility: 98,
      qualityScore: 94,
      distanceScore: 90,
      financialEfficiency: 96,
      demandUrgency: 95
    },
    contactPerson: 'Vikram Reddy',
    phone: '+91 94401 67890',
    email: 'deals@greentechpolymer.in'
  },
  {
    id: 'MATCH-002',
    companyName: 'ABC Plastics Pvt Ltd',
    companyType: 'Manufacturing Unit',
    location: 'Secunderabad, TS',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 38,
    distanceKm: 295,
    transportCostPerKg: 10,
    totalEffectiveCostPerKg: 48,
    totalFreightCost: 20000,
    totalOrderValue: 96000,
    aiMatchPercent: 91,
    isRecommended: false,
    scores: {
      materialCompatibility: 95,
      qualityScore: 90,
      distanceScore: 86,
      financialEfficiency: 92,
      demandUrgency: 90
    },
    contactPerson: 'Anil Kumar',
    phone: '+91 98765 11223',
    email: 'procurement@abcplastics.co.in'
  },
  {
    id: 'MATCH-003',
    companyName: 'RePlast Solutions India',
    companyType: 'Circular Material Processor',
    location: 'Visakhapatnam, AP',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 36,
    distanceKm: 350,
    transportCostPerKg: 15,
    totalEffectiveCostPerKg: 51,
    totalFreightCost: 30000,
    totalOrderValue: 102000,
    aiMatchPercent: 87,
    isRecommended: false,
    scores: {
      materialCompatibility: 94,
      qualityScore: 88,
      distanceScore: 78,
      financialEfficiency: 88,
      demandUrgency: 85
    },
    contactPerson: 'Sandeep Varma',
    phone: '+91 91234 56789',
    email: 'sourcing@replast.in'
  },
  {
    id: 'MATCH-004',
    companyName: 'EcoVanguard Polymers',
    companyType: 'Industrial Packaging Mfg',
    location: 'Guntur, AP',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 42,
    distanceKm: 35,
    transportCostPerKg: 3.5,
    totalEffectiveCostPerKg: 45.5,
    totalFreightCost: 7000,
    totalOrderValue: 91000,
    aiMatchPercent: 89,
    isRecommended: false,
    scores: {
      materialCompatibility: 90,
      qualityScore: 85,
      distanceScore: 99,
      financialEfficiency: 94,
      demandUrgency: 80
    },
    contactPerson: 'K. Rama Rao',
    phone: '+91 99887 66554',
    email: 'info@ecovanguard.org'
  },
  {
    id: 'MATCH-005',
    companyName: 'Deccan Polytech Materials',
    companyType: 'Automotive Plastics Molder',
    location: 'Chennai, TN',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 35,
    distanceKm: 450,
    transportCostPerKg: 18,
    totalEffectiveCostPerKg: 53,
    totalFreightCost: 36000,
    totalOrderValue: 106000,
    aiMatchPercent: 84,
    isRecommended: false,
    scores: {
      materialCompatibility: 92,
      qualityScore: 86,
      distanceScore: 70,
      financialEfficiency: 82,
      demandUrgency: 88
    },
    contactPerson: 'M. Swaminathan',
    phone: '+91 94440 99887',
    email: 'purchase@deccanpolytech.com'
  },
  {
    id: 'MATCH-006',
    companyName: 'Bangalore Circular Resins',
    companyType: 'Waste-to-Resource Enterprise',
    location: 'Bengaluru, KA',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 39,
    distanceKm: 620,
    transportCostPerKg: 22,
    totalEffectiveCostPerKg: 61,
    totalFreightCost: 44000,
    totalOrderValue: 122000,
    aiMatchPercent: 81,
    isRecommended: false,
    scores: {
      materialCompatibility: 95,
      qualityScore: 90,
      distanceScore: 55,
      financialEfficiency: 75,
      demandUrgency: 92
    },
    contactPerson: 'Deepak Hegde',
    phone: '+91 98450 11223',
    email: 'deepak@bengaluroresins.in'
  },
  {
    id: 'MATCH-007',
    companyName: 'Coimbatore Textile & Polymer Hub',
    companyType: 'Synthetic Yarn Spinner',
    location: 'Coimbatore, TN',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 37,
    distanceKm: 740,
    transportCostPerKg: 25,
    totalEffectiveCostPerKg: 62,
    totalFreightCost: 50000,
    totalOrderValue: 124000,
    aiMatchPercent: 78,
    isRecommended: false,
    scores: {
      materialCompatibility: 88,
      qualityScore: 82,
      distanceScore: 48,
      financialEfficiency: 72,
      demandUrgency: 85
    },
    contactPerson: 'R. Kanna',
    phone: '+91 98940 33445',
    email: 'rkanna@cbe-polymers.in'
  },
  {
    id: 'MATCH-008',
    companyName: 'Pune EcoClean Materials',
    companyType: 'Industrial Recycler',
    location: 'Pune, MH',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 44,
    distanceKm: 810,
    transportCostPerKg: 28,
    totalEffectiveCostPerKg: 72,
    totalFreightCost: 56000,
    totalOrderValue: 144000,
    aiMatchPercent: 75,
    isRecommended: false,
    scores: {
      materialCompatibility: 90,
      qualityScore: 88,
      distanceScore: 42,
      financialEfficiency: 65,
      demandUrgency: 80
    },
    contactPerson: 'Sanjay Deshmukh',
    phone: '+91 98220 77665',
    email: 'sanjay@puneecoclean.com'
  },
  {
    id: 'MATCH-009',
    companyName: 'Gujarat PolyCycle Corp',
    companyType: 'Polymer Compounder',
    location: 'Ahmedabad, GJ',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 34,
    distanceKm: 1100,
    transportCostPerKg: 35,
    totalEffectiveCostPerKg: 69,
    totalFreightCost: 70000,
    totalOrderValue: 138000,
    aiMatchPercent: 72,
    isRecommended: false,
    scores: {
      materialCompatibility: 92,
      qualityScore: 86,
      distanceScore: 30,
      financialEfficiency: 68,
      demandUrgency: 75
    },
    contactPerson: 'Harish Patel',
    phone: '+91 98250 44332',
    email: 'hpatel@polycycle.co.in'
  },
  {
    id: 'MATCH-010',
    companyName: 'Kolkata Green Resources',
    companyType: 'East Zone Circular Hub',
    location: 'Kolkata, WB',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    qualityPercent: 85,
    materialPricePerKg: 36,
    distanceKm: 1250,
    transportCostPerKg: 38,
    totalEffectiveCostPerKg: 74,
    totalFreightCost: 76000,
    totalOrderValue: 148000,
    aiMatchPercent: 70,
    isRecommended: false,
    scores: {
      materialCompatibility: 86,
      qualityScore: 82,
      distanceScore: 25,
      financialEfficiency: 64,
      demandUrgency: 70
    },
    contactPerson: 'Subhash Sen',
    phone: '+91 98300 11998',
    email: 's.sen@kolkatagreen.org'
  }
];

export const INITIAL_CHAT_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'BUYER',
    senderName: 'Vikram Reddy (GreenTech Polymer Recyclers)',
    text: 'Hello Srinivas! We saw your listing for 2000 kg Plastic Scrap (HDPE/PET Mix). Our Hyderabad recycling facility has high demand for this exact quality (85%).',
    timestamp: '10:15 AM'
  },
  {
    id: 'msg-2',
    sender: 'SELLER',
    senderName: 'Srinivas Rao (Apex EcoPlastics)',
    text: 'Hi Vikram! Glad to connect. The scrap is stored at our Vijayawada hub, washed and baled. Expected price is ₹40/kg.',
    timestamp: '10:18 AM'
  },
  {
    id: 'msg-3',
    sender: 'BUYER',
    senderName: 'Vikram Reddy (GreenTech Polymer Recyclers)',
    text: 'The AI match engine estimated freight at ₹5/kg via NH65 (₹10,000 total). That brings total effective cost to ₹45/kg. We agree to this rate for the full 2000 kg lot.',
    timestamp: '10:22 AM'
  }
];

export const INITIAL_SHIPMENT = {
  shipmentId: 'EL-2026-001',
  transactionId: 'TXN-2026-8841',
  sourceCity: 'Vijayawada, Andhra Pradesh',
  sourceAddress: 'Plot 45, Auto Nagar Industrial Estate, Vijayawada',
  destinationCity: 'Hyderabad, Telangana',
  destinationAddress: 'Phase 3, IDA Cherlapally, Hyderabad',
  distanceKm: 342,
  route: 'NH65 Highway (Vijayawada -> Suryapet -> Nalgonda -> Hyderabad)',
  estimatedTime: '6 hours 20 mins',
  estimatedCostRs: 6800,
  vehicleNumber: 'AP 16 TV 4892',
  vehicleType: '10-Ton Container Truck',
  driverName: 'Rajesh Kumar',
  driverPhone: '+91 98765 43210',
  logisticsPartner: 'EcoTrans Express Logistics Pvt Ltd',
  currentStatus: 'IN_TRANSIT', // PICKED_UP, IN_TRANSIT, NEAR_DESTINATION, DELIVERED
  currentLocationName: 'Nalgonda Highway Bypass (Km 210)',
  routeProgressPercent: 65,
  lastUpdated: '10 mins ago',
  eta: '2h 15m remaining',
  telematics: {
    speedKm: 58,
    engineTempC: 84,
    co2EmittedKg: 112,
    fuelEfficiencyKmpl: 4.8
  },
  timeline: [
    { stage: 'PICKED_UP', label: 'Picked Up at Vijayawada Freight Hub', time: 'Today, 06:30 AM', completed: true },
    { stage: 'IN_TRANSIT', label: 'In Transit on NH65 Highway', time: 'Today, 09:45 AM', completed: true, current: true },
    { stage: 'NEAR_DESTINATION', label: 'Near Destination (LB Nagar Checkpost)', time: 'Expected 02:30 PM', completed: false },
    { stage: 'DELIVERED', label: 'Delivered at Cherlapally Recycling Hub', time: 'Expected 03:15 PM', completed: false }
  ]
};

export const INITIAL_TRACEABILITY_DATA = {
  batchId: 'BT-PL-2026-884',
  transactionId: 'TXN-2026-8841',
  materialName: 'Post-Industrial HDPE / PET Plastic Scrap',
  originalSeller: 'Apex EcoPlastics Mfg Pvt Ltd (Vijayawada)',
  recyclerBuyer: 'GreenTech Polymer Recyclers (Hyderabad)',
  processingFacility: 'Hyderabad Advanced Polymer Recovery Hub #4',
  currentStage: 'RECYCLED', // GENERATED, PICKED_UP, DELIVERED, IN_PROCESSING, RECYCLED
  timestamp: '2026-09-04 14:30 IST',
  stages: [
    {
      step: 1,
      name: 'Waste Generated',
      quantityKg: 2000,
      facility: 'Apex EcoPlastics (Vijayawada)',
      date: '2026-09-02',
      status: 'Completed',
      details: 'Initial generation from bottle blowing trim offcuts.'
    },
    {
      step: 2,
      name: 'Picked Up & Transported',
      quantityKg: 2000,
      facility: 'EcoTrans Logistics Container Truck AP 16 TV 4892',
      date: '2026-09-04 06:30',
      status: 'Completed',
      details: 'Secure sealed container transport via NH65 route.'
    },
    {
      step: 3,
      name: 'Delivered & Received',
      quantityKg: 2000,
      facility: 'GreenTech Recyclers Yard (Cherlapally, Hyderabad)',
      date: '2026-09-04 15:15',
      status: 'Completed',
      details: 'Weight bridge verified: 2000 kg gross weight confirmed.'
    },
    {
      step: 4,
      name: 'Sorting & Cleaning Inspection',
      quantityKg: 1980,
      facility: 'Processing Line A (Optical Sorting)',
      date: '2026-09-04 16:30',
      status: 'Completed',
      details: '20 kg non-recyclable labels and dirt removed (99% purity).'
    },
    {
      step: 5,
      name: 'Industrial Processing & Shredding',
      quantityKg: 1950,
      facility: 'Granulator Unit 2',
      date: '2026-09-04 18:00',
      status: 'Completed',
      details: 'Shredded into 8mm uniform polymer flakes.'
    },
    {
      step: 6,
      name: 'Extrusion & Recycling',
      quantityKg: 1850,
      facility: 'Twin-Screw Extruder & Pelletizer',
      date: '2026-09-04 20:00',
      status: 'Completed',
      details: 'Melt-filtered and pelletized into rHDPE circular granules.'
    }
  ],
  massBalance: {
    originalKg: 2000,
    deliveredKg: 2000,
    processedKg: 1950,
    recycledKg: 1850,
    yieldPercent: 92.5,
    residueKg: 150
  },
  finalOutput: '1850 kg High-Grade Recycled HDPE Plastic Granules (rHDPE-Grade A)',
  blockchainVerificationHash: '0x8f3a99bc4d12e87c6541b009e4512a9c33f81e6a',
  qrCodeData: 'https://ecoloopai.org/verify/BT-PL-2026-884'
};

export const INITIAL_TRANSACTIONS = [
  {
    id: 'TXN-2026-8841',
    date: '2026-09-04',
    material: 'Plastic Scrap (HDPE / PET Mix)',
    quantityKg: 2000,
    seller: 'Apex EcoPlastics (Vijayawada)',
    buyer: 'GreenTech Polymer Recyclers (Hyderabad)',
    basePricePerKg: 40,
    totalMaterialPrice: 80000,
    transportCost: 6800,
    totalValue: 86800,
    shipmentStatus: 'Delivered',
    recyclingStatus: '1850 kg Recycled Granules',
    complianceReportGenerated: true
  },
  {
    id: 'TXN-2026-7712',
    date: '2026-08-25',
    material: 'Industrial Aluminum Offcuts',
    quantityKg: 4500,
    seller: 'Apex EcoPlastics (Visakhapatnam)',
    buyer: 'Deccan Smelters & Foundry (Hyderabad)',
    basePricePerKg: 142,
    totalMaterialPrice: 639000,
    transportCost: 18500,
    totalValue: 657500,
    shipmentStatus: 'Completed',
    recyclingStatus: '4410 kg Aluminum Ingot Yield',
    complianceReportGenerated: true
  },
  {
    id: 'TXN-2026-5509',
    date: '2026-08-12',
    material: 'Corrugated Paperboard Bales',
    quantityKg: 6000,
    seller: 'Apex EcoPlastics (Vijayawada)',
    buyer: 'Sri Rama Paper Mills (Rajahmundry)',
    basePricePerKg: 13.5,
    totalMaterialPrice: 81000,
    transportCost: 4500,
    totalValue: 85500,
    shipmentStatus: 'Completed',
    recyclingStatus: '5700 kg Recycled Kraft Paper',
    complianceReportGenerated: true
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'AI Match Found!',
    message: 'GreenTech Polymer Recyclers is a 95% match for your 2000kg Plastic Scrap listing.',
    time: '10 mins ago',
    type: 'ai',
    read: false
  },
  {
    id: 'notif-2',
    title: 'Buyer Connected',
    message: 'Vikram Reddy from GreenTech Polymer initiated a negotiation conversation.',
    time: '25 mins ago',
    type: 'connection',
    read: false
  },
  {
    id: 'notif-3',
    title: 'Shipment Dispatch',
    message: 'Shipment EL-2026-001 (Container Truck AP 16 TV 4892) has departed Vijayawada.',
    time: '3 hours ago',
    type: 'transport',
    read: true
  },
  {
    id: 'notif-4',
    title: 'Material Recycled',
    message: 'Batch BT-PL-2026-884 successfully processed into 1850kg rHDPE granules.',
    time: '5 hours ago',
    type: 'recycling',
    read: true
  },
  {
    id: 'notif-5',
    title: 'EPR Compliance Report Ready',
    message: 'Government regulatory document for TXN-2026-8841 is generated and signed.',
    time: '1 day ago',
    type: 'report',
    read: true
  }
];
