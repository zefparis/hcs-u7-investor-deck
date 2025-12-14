export type Language = 'fr' | 'en';

export const translations = {
  // Slide 1 - Cover
  cover: {
    subtitle: { fr: 'Signature Cognitive Humaine', en: 'Human Cognitive Signature' },
    tagline: {
      fr: "Authentification biométrique cognitive résistante à l'IA générative",
      en: 'Cognitive biometric authentication resistant to generative AI',
    },
    badge: { fr: '2 Brevets Déposés', en: '2 Patents Filed' },
    footer: { fr: 'IA SOLUTION · Levée Seed · Décembre 2025', en: 'IA SOLUTION · Seed Round · December 2025' },
  },

  // Slide 2 - Shift
  shift: {
    title: { fr: "L'IA a cassé l'authentification", en: 'AI broke authentication' },
    description: {
      fr: "GPT-4V, Claude 3, Gemini Pro peuvent désormais résoudre pratiquement tous les défis visuels. L'industrie du bot management de 18 Mds$ est bouleversée du jour au lendemain.",
      en: 'GPT-4V, Claude 3, Gemini Pro can now solve virtually any visual challenge. The $18B bot management industry is being disrupted overnight.',
    },
  },

  // Slide 3 - Cost
  cost: {
    title: { fr: "L'impact business est catastrophique", en: 'The business impact is catastrophic' },
    metrics: {
      fr: [
        { value: '$6.2M', label: 'Pertes annuelles credential stuffing', description: 'Moyenne par entreprise' },
        { value: '+340%', label: 'Augmentation annuelle', description: 'Tentatives de fraude par IA' },
        { value: '15-25%', label: 'Abandon de panier', description: 'Friction des CAPTCHAs' },
        { value: '8-15%', label: 'Taux de faux positifs', description: 'Utilisateurs légitimes bloqués' },
      ],
      en: [
        { value: '$6.2M', label: 'Annual credential stuffing losses', description: 'Average per enterprise' },
        { value: '+340%', label: 'YoY increase', description: 'AI-powered fraud attempts' },
        { value: '15-25%', label: 'Cart abandonment', description: 'From CAPTCHA friction' },
        { value: '8-15%', label: 'False positive rates', description: 'Blocking legitimate users' },
      ],
    },
  },

  // Slide 4 - Insight
  insight: {
    title1: { fr: "Ne testez pas ce que l'IA sait faire.", en: "Don't test what AI can do." },
    title2: { fr: "Mesurez ce qu'elle ne peut pas être.", en: 'Measure what it cannot be.' },
    description: {
      fr: "Les solutions actuelles testent la performance des tâches. Mais l'IA surpasse désormais les humains. HCS-U7 mesure les signatures cognitives — les contraintes biologiques que l'IA ne peut répliquer sans violer les lois de la physique.",
      en: 'Current solutions test task performance. But AI now outperforms humans at tasks. HCS-U7 measures cognitive signatures—the biological constraints AI cannot replicate without violating laws of physics.',
    },
  },

  // Slide 5 - Solution
  solution: {
    title: { fr: 'HCS-U7 : Authentification Cognitive', en: 'HCS-U7: Cognitive Authentication' },
    traditionalLabel: { fr: 'CAPTCHAs Traditionnels', en: 'Traditional CAPTCHAs' },
    cognitiveLabel: { fr: 'HCS-U7 Cognitif', en: 'HCS-U7 Cognitive' },
    traditional: {
      fr: [
        { test: "Reconnaissance d'images", result: 'IA résout 94%' },
        { test: 'Distorsion de texte', result: 'IA résout 99%+' },
        { test: 'Analyse comportementale', result: 'IA imite les patterns' },
        { test: 'Scoring de risque', result: 'IA apprend les seuils' },
      ],
      en: [
        { test: 'Image recognition', result: 'AI solves 94%' },
        { test: 'Text distortion', result: 'AI solves 99%+' },
        { test: 'Behavioral analysis', result: 'AI mimics patterns' },
        { test: 'Risk scoring', result: 'AI learns thresholds' },
      ],
    },
    cognitive: {
      fr: [
        { test: 'Délais de traitement synaptique', result: 'Constante biologique immuable' },
        { test: 'Limites mémoire de travail (7±2)', result: 'Loi de Miller incontournable' },
        { test: 'Interférence Stroop', result: "Conflit neurologique absent chez l'IA" },
        { test: "Patterns d'hésitation vocale", result: 'Respiration, fatigue, micro-pauses' },
      ],
      en: [
        { test: 'Synaptic processing delays', result: 'Immutable biological constant' },
        { test: 'Working memory limits (7±2)', result: "Miller's Law cannot be bypassed" },
        { test: 'Stroop interference', result: 'Neurological conflict AI lacks' },
        { test: 'Vocal hesitation patterns', result: 'Breath, fatigue, micro-pauses' },
      ],
    },
    stats: {
      fr: [
        { value: '98.9%', label: 'Précision' },
        { value: '2.2%', label: 'Faux Positifs' },
        { value: '99.6%', label: 'Vrais Négatifs' },
        { value: '0.994', label: 'AUC-ROC' },
      ],
      en: [
        { value: '98.9%', label: 'Accuracy' },
        { value: '2.2%', label: 'False Positive' },
        { value: '99.6%', label: 'True Negative' },
        { value: '0.994', label: 'AUC-ROC' },
      ],
    },
  },

  // Slide 6 - How
  how: {
    title: { fr: '6 tests. 15-30 secondes. Infalsifiable.', en: '6 tests. 15-30 seconds. Unforgeable.' },
    footer: {
      fr: 'Tous les tests validés par la recherche depuis 1868-2024',
      en: 'All tests peer-reviewed, validated since 1868-2024',
    },
    tests: {
      fr: [
        { name: 'STROOP', year: '1935', line1: 'Interférence', line2: 'couleur-mot' },
        { name: 'N-BACK', year: '1958', line1: 'Capacité mémoire', line2: 'de travail' },
        { name: 'TRAIL MAKING', year: '1938', line1: 'Flexibilité', line2: 'cognitive' },
        { name: 'DIGIT SPAN', year: '1939', line1: 'Mémoire court', line2: 'terme 7±2' },
        { name: 'REACTION TIME', year: '1868', line1: 'Distribution', line2: 'Ex-Gaussienne' },
        { name: 'RAN VOCAL', year: 'HCS-U7 v8', line1: 'Dénomination rapide', line2: '+ respiration/pause' },
      ],
      en: [
        { name: 'STROOP', year: '1935', line1: 'Color-word', line2: 'interference' },
        { name: 'N-BACK', year: '1958', line1: 'Working memory', line2: 'capacity' },
        { name: 'TRAIL MAKING', year: '1938', line1: 'Cognitive', line2: 'flexibility' },
        { name: 'DIGIT SPAN', year: '1939', line1: 'Short-term', line2: 'memory 7±2' },
        { name: 'REACTION TIME', year: '1868', line1: 'Ex-Gaussian', line2: 'distribution' },
        { name: 'RAN VOCAL', year: 'HCS-U7 v8', line1: 'Rapid naming', line2: '+ breath/pause' },
      ],
    },
  },

  // Slide 7 - Technology
  technology: {
    title: { fr: 'Architecture Défense en Profondeur', en: 'Defense-in-Depth Architecture' },
    layers: {
      fr: [
        { name: 'Couche 1', description: 'Cloudflare WAF + Rate Limiting' },
        { name: 'Couche 2', description: 'Clé API + Signature HMAC-SHA256' },
        { name: 'Couche 3', description: 'Batterie de 6 Tests Cognitifs' },
        { name: 'Couche 4', description: 'Entropie Céleste (FR2514546)', isPatent: true },
        { name: 'Couche 5', description: 'Fenêtres Temporelles Rotatives (10min)' },
        { name: 'Couche 6', description: 'Liaison Post-Quantique QSIG/B3' },
        { name: 'Couche 7', description: 'Cache Anti-Rejeu Redis' },
      ],
      en: [
        { name: 'Layer 1', description: 'Cloudflare WAF + Rate Limiting' },
        { name: 'Layer 2', description: 'API Key + HMAC-SHA256 Signing' },
        { name: 'Layer 3', description: '6-Test Cognitive Battery' },
        { name: 'Layer 4', description: 'Celestial Entropy (FR2514546)', isPatent: true },
        { name: 'Layer 5', description: 'Rotating Time Windows (10min)' },
        { name: 'Layer 6', description: 'QSIG/B3 Post-Quantum Binding' },
        { name: 'Layer 7', description: 'Redis Anti-Replay Cache' },
      ],
    },
    patent1: { fr: 'Brevet #1', en: 'Patent #1' },
    patent1Desc: { fr: 'Système HCS-U7', en: 'HCS-U7 System' },
    patent2: { fr: 'Brevet #2', en: 'Patent #2' },
    patent2Desc: { fr: 'Couche Entropie Céleste', en: 'Celestial Entropy Layer' },
    status: { fr: 'Statut : Déposé INPI · Novembre 2025', en: 'Status: Filed INPI · November 2025' },
  },

  // Slide 8 - Validation
  validation: {
    title: { fr: 'Testé contre les modèles IA de pointe', en: 'Tested against frontier AI models' },
    headers: { fr: ['Moy. Industrie', 'HCS-U7'], en: ['Industry Avg', 'HCS-U7'] },
    rows: {
      fr: [
        { metric: 'Précision', values: ['70-82%', '98.9%'] },
        { metric: 'Vrais Négatifs', values: ['85-92%', '99.6%'] },
        { metric: 'Faux Positifs', values: ['8-15%', '2.2%'] },
        { metric: 'AUC-ROC', values: ['0.75-0.85', '0.994'] },
        { metric: 'Résistant IA', values: ['Non', 'Oui'] },
      ],
      en: [
        { metric: 'Accuracy', values: ['70-82%', '98.9%'] },
        { metric: 'True Negative', values: ['85-92%', '99.6%'] },
        { metric: 'False Positive', values: ['8-15%', '2.2%'] },
        { metric: 'AUC-ROC', values: ['0.75-0.85', '0.994'] },
        { metric: 'AI-Resistant', values: ['No', 'Yes'] },
      ],
    },
    callout: {
      fr: 'GPT-4V, Claude 3 Opus, Gemini Pro Vision détectés avec >99% de confiance sur toutes les batteries de tests.',
      en: 'GPT-4V, Claude 3 Opus, Gemini Pro Vision detected with >99% confidence across all test batteries.',
    },
    source: {
      fr: 'Source : Recherche doctorale · 10 chapitres · Protocoles validés par les pairs',
      en: 'Source: Doctoral research · 10 chapters · Peer-reviewed protocols',
    },
  },

  // Slide 9 - Market
  market: {
    title: { fr: 'Marché de 18,4 Mds$. Objectif €12M en Année 3.', en: "$18.4B market. We're targeting €12M Year 3." },
    funnel: {
      fr: [
        { label: 'TAM', value: '$18.4B', description: 'Bot management mondial 2030 (TCAC +24%)', width: '100%' },
        { label: 'SAM', value: '€2.1B', description: 'Entreprises UE avec exigences PSD2/SCA', width: '70%' },
        { label: 'SOM', value: '€12M', description: 'Fintech françaises + e-commerce premium (~200 comptes × €60K ARR)', width: '40%' },
      ],
      en: [
        { label: 'TAM', value: '$18.4B', description: 'Global bot management 2030 (CAGR +24%)', width: '100%' },
        { label: 'SAM', value: '€2.1B', description: 'EU enterprises with PSD2/SCA requirements', width: '70%' },
        { label: 'SOM', value: '€12M', description: 'French fintech + premium e-commerce (~200 accounts × €60K ARR)', width: '40%' },
      ],
    },
    driversLabel: { fr: 'Moteurs de Croissance', en: 'Growth Drivers' },
    drivers: {
      fr: [
        { label: 'Fraude IA', value: '+340%/an' },
        { label: 'PSD3', value: 'Arrive en 2025' },
        { label: 'EU AI Act', value: 'Exigences de transparence' },
      ],
      en: [
        { label: 'AI fraud', value: '+340% YoY' },
        { label: 'PSD3', value: 'Coming 2025' },
        { label: 'EU AI Act', value: 'Transparency requirements' },
      ],
    },
  },

  // Slide 10 - Competition
  competition: {
    title: { fr: 'On ne concurrence pas. On remplace.', en: "We're not competing. We're replacing." },
    rows: {
      fr: [
        { metric: 'Détection IA', values: ['6%', '15%', '25%', '18%', '98.9%'] },
        { metric: 'Faux Positifs', values: ['12%', '10%', '8%', '8%', '2.2%'] },
        { metric: 'PSD2 Natif', values: [false, false, false, 'Partiel', true] },
        { metric: 'Brevets', values: ['—', '—', '—', '—', '2 FR'] },
      ],
      en: [
        { metric: 'AI Detection', values: ['6%', '15%', '25%', '18%', '98.9%'] },
        { metric: 'False Positive', values: ['12%', '10%', '8%', '8%', '2.2%'] },
        { metric: 'PSD2 Native', values: [false, false, false, 'Partial', true] },
        { metric: 'Patents', values: ['—', '—', '—', '—', '2 FR'] },
      ],
    },
    moats: {
      fr: [
        { title: 'Juridique', description: '2 brevets créent un levier de licence' },
        { title: 'Technique', description: "Approche cognitive = résistant à l'IA par conception" },
        { title: 'Réglementaire', description: 'Conformité UE native (PSD2, AI Act)' },
      ],
      en: [
        { title: 'Legal', description: '2 patents create licensing leverage' },
        { title: 'Technical', description: 'Cognitive approach = AI-resistant by design' },
        { title: 'Regulatory', description: 'Native EU compliance (PSD2, AI Act)' },
      ],
    },
  },

  // Slide 11 - Business
  business: {
    title: { fr: 'SaaS + Usage. 85% de marge brute.', en: 'SaaS + Usage. 85% gross margin.' },
    tiers: {
      fr: [
        { name: 'Starter', price: 'Gratuit', features: ['1K vérifications', 'Widget intégré', 'Analytics basiques', 'Support communauté'] },
        { name: 'Business', price: '€1 499/mois', features: ['100K inclus', '+ €0.50/1K suppl.', 'SDKs JS/Python', 'SLA 99.9%', 'Support prioritaire'], highlighted: true },
        { name: 'Enterprise', price: 'Sur mesure', features: ['Illimité', 'Option on-premise', 'CSM dédié', 'Support SOC2', 'Intégrations custom'] },
      ],
      en: [
        { name: 'Starter', price: 'Free', features: ['1K verifications', 'Widget embed', 'Basic analytics', 'Community support'] },
        { name: 'Business', price: '€1,499/mo', features: ['100K included', '+ €0.50/1K overage', 'JS/Python SDKs', '99.9% SLA', 'Priority support'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'On-premise option', 'Dedicated CSM', 'SOC2 support', 'Custom integrations'] },
      ],
    },
    economics: {
      fr: [
        { label: 'Coût/1K', value: '€0.50' },
        { label: 'Marge Brute', value: '85%' },
        { label: 'ACV Moyen', value: '€18K' },
        { label: 'Objectif LTV/CAC', value: '12 mois' },
      ],
      en: [
        { label: 'Cost/1K', value: '€0.50' },
        { label: 'Gross Margin', value: '85%' },
        { label: 'Avg ACV', value: '€18K' },
        { label: 'LTV/CAC Target', value: '12mo' },
      ],
    },
  },

  // Slide 12 - Traction
  traction: {
    title: { fr: 'Autofinancé. Entièrement construit. Prêt pour les clients.', en: 'Self-funded. Fully built. Ready for customers.' },
    assetsLabel: { fr: 'Actifs Construits', en: 'Assets Built' },
    timeline: {
      fr: [
        { date: 'T4 2024', title: 'Brevets RECEVABLES', items: ['FR2514274 (Système HCS) - RECEVABLE', 'FR2514546 (Entropie) - RECEVABLE', 'Backend production (88 fichiers)', 'Audit Siege-Wall: 99.9/100'] },
        { date: 'T4 2024', title: 'Déploiement Prod', items: ['Backend HCS-AUTH live', 'PWA HCS-SHIELD déployée', 'Dashboard Admin', 'Portail Client'] },
        { date: 'T1 2025', title: 'Validation Marché', items: ['5 Pilotes B2B Enterprise', 'Démos Défense B2G', 'Levée Seed €500K', 'Expansion équipe (3→6)'] },
        { date: '2025+', title: 'Accélération', items: ['Certification SOC2', 'Extensions Brevets US/EU', 'Partenariats Stratégiques'] },
      ],
      en: [
        { date: 'Q4 2024', title: 'Patents RECEVABLE', items: ['FR2514274 (HCS System) - RECEVABLE', 'FR2514546 (Entropy) - RECEVABLE', 'Backend production (88 files)', 'Siege-Wall audit: 99.9/100'] },
        { date: 'Q4 2024', title: 'Production Deployment', items: ['HCS-AUTH backend live', 'HCS-SHIELD PWA deployed', 'Admin dashboard', 'Client portal'] },
        { date: 'Q1 2025', title: 'Market Validation', items: ['5 B2B Enterprise pilots', 'B2G Defense demos', 'Seed fundraising €500K', 'Team expansion (3→6)'] },
        { date: '2025+', title: 'Acceleration', items: ['SOC2 Certification', 'US/EU Patent Extensions', 'Strategic Partnerships'] },
      ],
    },
    assets: {
      fr: [
        { value: '7', label: 'Tests cognitifs' },
        { value: '8', label: 'Couches sécurité' },
        { value: '2', label: 'Brevets Recevables' },
        { value: '100%', label: 'Déployé' },
      ],
      en: [
        { value: '7', label: 'Cognitive tests' },
        { value: '8', label: 'Security layers' },
        { value: '2', label: 'Patents Recevable' },
        { value: '100%', label: 'Deployed' },
      ],
    },
  },

  // Slide 13 - GTM
  gtm: {
    title: { fr: 'Atterrir. Étendre. Scaler.', en: 'Land. Expand. Scale.' },
    phases: {
      fr: [
        { phase: 'PHASE 1', period: 'M1-6', title: 'Atterrir', items: ['3-5 pilotes (gratuit)', 'Études de cas', 'Preuve PSD2'], target: '€50K ARR' },
        { phase: 'PHASE 2', period: 'M6-12', title: 'Étendre', items: ['Conversion payant', 'Partenariats PSP', 'Contenu + SEO'], target: '€500K ARR' },
        { phase: 'PHASE 3', period: 'A2-3', title: 'Scaler', items: ['Équipe Enterprise', 'Certification SOC2', 'Expansion UK/DACH'], target: '€3.5M ARR' },
      ],
      en: [
        { phase: 'PHASE 1', period: 'M1-6', title: 'Land', items: ['3-5 pilots (free)', 'Case studies', 'PSD2 proof'], target: '€50K ARR' },
        { phase: 'PHASE 2', period: 'M6-12', title: 'Expand', items: ['Convert to paid', 'PSP partnerships', 'Content + SEO'], target: '€500K ARR' },
        { phase: 'PHASE 3', period: 'Y2-3', title: 'Scale', items: ['Enterprise team', 'SOC2 certification', 'UK/DACH expansion'], target: '€3.5M ARR' },
      ],
    },
    icp: {
      fr: 'Fintech/Néobanques (PSD2 obligatoire) · Banques régionales · E-commerce premium · Gaming',
      en: 'Fintech/Neobanks (PSD2 mandated) · Regional banks · Premium e-commerce · Gaming',
    },
  },

  // Slide 14 - Financials
  financials: {
    title: { fr: '€500K → €7.5M ARR en 36 mois', en: '€500K → €7.5M ARR in 36 months' },
    profitLabel: { fr: 'Chemin vers la Rentabilité', en: 'Path to Profitability' },
    profitText: { fr: 'Rentabilité à ~€2.5M ARR (Mois 30)', en: 'Break-even at ~€2.5M ARR (Month 30)' },
    // Simplified structure for the translation file, but we will likely use hardcoded logic for the dual bar chart in the component 
    // to match the specific "cyber + defense" requirement properly. 
    // Keeping a basic structure here for fallback/reference.
    chartData: {
      fr: [
        { label: 'Année 1', value: 0.06, displayValue: '€60K', subItems: ['100 utilisateurs Cyber', '10 unités Défense'] },
        { label: 'Année 2', value: 1.9, displayValue: '€1.9M', subItems: ['2K utilisateurs Cyber', '500 unités Défense'] },
        { label: 'Année 3', value: 7.5, displayValue: '€7.5M', subItems: ['10K utilisateurs Cyber', '2K unités Défense'] },
      ],
      en: [
        { label: 'Year 1', value: 0.06, displayValue: '€60K', subItems: ['100 Cyber users', '10 Defense units'] },
        { label: 'Year 2', value: 1.9, displayValue: '€1.9M', subItems: ['2K Cyber users', '500 Defense units'] },
        { label: 'Year 3', value: 7.5, displayValue: '€7.5M', subItems: ['10K Cyber users', '2K Defense units'] },
      ],
    },
  },

  // Slide 15 - Ask
  ask: {
    title: { fr: '€500K Seed · €3M Cap · 18 Mois de Runway', en: '€500K Seed · €3M Cap · 18 Months Runway' },
    fundsLabel: { fr: 'Utilisation des Fonds', en: 'Use of Funds' },
    termsLabel: { fr: 'Termes', en: 'Terms' },
    milestonesLabel: { fr: 'Jalons à 18 Mois', en: '18-Month Milestones' },
    useOfFunds: {
      fr: [
        { category: 'Ingénierie', percent: '45%', amount: '€225K', description: 'Backend, widget, SDKs, prép SOC2' },
        { category: 'Ventes/Marketing', percent: '30%', amount: '€150K', description: 'Premier recrutement, contenu, événements' },
        { category: 'Opérations', percent: '15%', amount: '€75K', description: 'Juridique, certifications, infra' },
        { category: 'Réserve', percent: '10%', amount: '€50K', description: 'Contingence' },
      ],
      en: [
        { category: 'Engineering', percent: '45%', amount: '€225K', description: 'Backend, widget, SDKs, SOC2 prep' },
        { category: 'Sales/Marketing', percent: '30%', amount: '€150K', description: 'First hire, content, events' },
        { category: 'Operations', percent: '15%', amount: '€75K', description: 'Legal, certifications, infra' },
        { category: 'Reserve', percent: '10%', amount: '€50K', description: 'Contingency' },
      ],
    },
    terms: {
      fr: [
        { label: 'Instrument', value: 'SAFE ou Equity' },
        { label: 'Valorisation Cap', value: '€3M' },
        { label: 'Runway', value: '18 mois' },
      ],
      en: [
        { label: 'Instrument', value: 'SAFE or Equity' },
        { label: 'Valuation Cap', value: '€3M' },
        { label: 'Runway', value: '18 months' },
      ],
    },
    milestones: {
      fr: ['€500K ARR (15+ clients)', 'Certifié SOC2 Type 1', 'Équipe de 8 personnes', 'Prêt pour Série A (€2-3M)'],
      en: ['€500K ARR (15+ customers)', 'SOC2 Type 1 certified', 'Team of 8', 'Series A ready (€2-3M)'],
    },
  },

  // Slide 16 - Team
  team: {
    role: { fr: 'Fondateur & CEO', en: 'Founder & CEO' },
    bio: {
      fr: ['15+ ans tech & sécurité', 'Recherche en psychologie cognitive', 'Full-stack (React, Node, Python)', '2 brevets déposés, thèse doctorale'],
      en: ['15+ years tech & security', 'Cognitive psychology research', 'Full-stack (React, Node, Python)', '2 patents filed, doctoral thesis'],
    },
    founded: { fr: 'Alès, France', en: 'Alès, France' },
    tagline: {
      fr: "Le seul système d'authentification cognitive breveté résistant à l'IA générative.",
      en: 'The only patented cognitive authentication system resistant to generative AI.',
    },
  },
};

export function t<T>(obj: { fr: T; en: T }, lang: Language): T {
  return obj[lang];
}
