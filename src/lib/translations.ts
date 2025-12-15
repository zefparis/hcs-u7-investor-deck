export type Language = 'fr' | 'en';

export const translations = {
  // Slide 1 - Cover
  cover: {
    subtitle: { fr: 'Signature Cognitive Humaine v8.1', en: 'Human Cognitive Signature v8.1' },
    tagline: {
      fr: "Authentification biométrique cognitive résistante à l'IA générative",
      en: 'Cognitive biometric authentication resistant to generative AI',
    },
    badge: { fr: '2 Brevets Déposés', en: '2 Patents Filed' },
    footer: { fr: 'IA SOLUTION · Levée Seed · Décembre 2025', en: 'IA SOLUTION · Seed Round · December 2025' },
    stats: {
      fr: { accuracy: 'Précision', breaches: 'Brèches', authTime: 'Temps Auth', initialize: 'Initialisation' },
      en: { accuracy: 'Accuracy', breaches: 'Breaches', authTime: 'Auth Time', initialize: 'Initialize' }
    }
  },

  // Slide 2 - Shift
  shift: {
    title: { fr: "L'IA a cassé l'authentification", en: 'AI broke authentication' },
    subtitle: { fr: "L'effondrement de l'auth traditionnelle", en: 'The Collapse of Traditional Auth' },
    description: {
      fr: "GPT-4V, Claude 3, Gemini Pro peuvent désormais résoudre pratiquement tous les défis visuels. L'industrie du bot management de 18 Mds$ est bouleversée du jour au lendemain.",
      en: 'GPT-4V, Claude 3, Gemini Pro can now solve virtually any visual challenge. The $18B bot management industry is being disrupted overnight.',
    },
    chartLabel: { fr: 'TAUX RÉSOLUTION CAPTCHA PAR IA', en: 'AI CAPTCHA SOLVE RATE' },
    card1: { 
      fr: { label: 'Coût Fraude Annuel (2024)', sub: '+15% Croissance/An' },
      en: { label: 'Annual Fraud Cost (2024)', sub: '+15% YoY Increase' }
    },
    card2: { 
      fr: { label: 'Trafic Web Automatisé', sub: '1 visiteur sur 3 est un bot' },
      en: { label: 'Automated Web Traffic', sub: '1 in 3 visitors is a bot' }
    },
    card3: { 
      fr: { label: 'Taux Contournement CAPTCHA', sub: 'Par agents GPT-4V' },
      en: { label: 'CAPTCHA Bypass Rate', sub: 'By GPT-4V Agents' }
    },
    source: { fr: 'SOURCE_DONNÉES : JUNIPER_RESEARCH_2024 // IMPERVA_THREAT_REPORT', en: 'SOURCE_DATA: JUNIPER_RESEARCH_2024 // IMPERVA_THREAT_REPORT' }
  },

  // Slide 3 - Cost
  cost: {
    title: { fr: "L'impact business est catastrophique", en: 'The business impact is catastrophic' },
    subtitle: { fr: "L'impact économique de l'insécurité", en: 'The Economic Impact of Insecurity' },
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
    trends: {
      fr: ['+15% /An', '+300% /An', 'Risque Critique', 'Impact Élevé'],
      en: ['+15% YoY', '+300% YoY', 'Critical Risk', 'Impact High']
    },
    quote: {
      fr: "\"Les mesures de sécurité traditionnelles échouent à distinguer les agents IA avancés des utilisateurs humains.\"",
      en: "\"Traditional security measures are failing to distinguish between advanced AI agents and human users.\""
    }
  },

  // Slide 4 - Insight
  insight: {
    title1: { fr: "Ne testez pas ce que l'IA sait faire.", en: "Don't test what AI can do." },
    title2: { fr: "Mesurez ce qu'elle ne peut pas être.", en: 'Measure what it cannot be.' },
    description: {
      fr: "Les solutions actuelles testent la performance des tâches. Mais l'IA surpasse désormais les humains. HCS-U7 mesure les signatures cognitives — les contraintes biologiques que l'IA ne peut répliquer sans violer les lois de la physique.",
      en: 'Current solutions test task performance. But AI now outperforms humans at tasks. HCS-U7 measures cognitive signatures—the biological constraints AI cannot replicate without violating laws of physics.',
    },
    behAnalysis: { fr: 'Analyse Comportementale', en: 'Behavioral Analysis' },
    simulated: { fr: 'Peut être simulé par des agents IA', en: 'Can be simulated by AI agents' },
    cogBio: { fr: 'Biométrie Cognitive', en: 'Cognitive Biometrics' },
    impossible: { fr: 'Impossible à falsifier sans AGI', en: 'Impossible to fake without AGI' }
  },

  // Slide 5 - Solution
  solution: {
    title: { fr: 'HCS-U7 : Authentification Cognitive', en: 'HCS-U7: Cognitive Authentication' },
    subtitle: { fr: 'Le changement de paradigme : De la tâche à la cognition', en: 'The Paradigm Shift: From Task to Cognition' },
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
    title: { fr: '7 tests. 15-30 secondes. Infalsifiable.', en: '7 tests. 15-30 seconds. Unforgeable.' },
    subtitle: { fr: 'Le pare-feu biologique', en: 'The Biological Firewall' },
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
    title: { fr: 'Architecture Défense 9 Couches', en: '9-Layer Defense Architecture' },
    subtitle: { fr: 'Architecture de défense en profondeur v8.1', en: 'Defense-in-Depth Architecture v8.1' },
    layers: {
      fr: [
        { name: 'Couche 1', description: 'Cloudflare WAF + Rate Limiting' },
        { name: 'Couche 2', description: 'Clé API + Signature HMAC-SHA256' },
        { name: 'Couche 3', description: 'Batterie de 7 Tests Cognitifs' },
        { name: 'Couche 4', description: 'Entropie Céleste (FR2514546)', isPatent: true },
        { name: 'Couche 5', description: 'Fenêtres Temporelles Rotatives (10min)' },
        { name: 'Couche 6', description: 'Liaison Post-Quantique QSIG/B3' },
        { name: 'Couche 7', description: 'Cache Anti-Rejeu Redis' },
        { name: 'Couche 8', description: 'Honeypot Trap Layer (122 endpoints pièges)' },
        { name: 'Couche 9', description: 'Device Fingerprint Module (15 patterns bot)' },
      ],
      en: [
        { name: 'Layer 1', description: 'Cloudflare WAF + Rate Limiting' },
        { name: 'Layer 2', description: 'API Key + HMAC-SHA256 Signing' },
        { name: 'Layer 3', description: '7-Test Cognitive Battery' },
        { name: 'Layer 4', description: 'Celestial Entropy (FR2514546)', isPatent: true },
        { name: 'Layer 5', description: 'Rotating Time Windows (10min)' },
        { name: 'Layer 6', description: 'QSIG/B3 Post-Quantum Binding' },
        { name: 'Layer 7', description: 'Redis Anti-Replay Cache' },
        { name: 'Layer 8', description: 'Honeypot Trap Layer (122 fake endpoints)' },
        { name: 'Layer 9', description: 'Device Fingerprint Module (15 bot patterns)' },
      ],
    },
    patent1: { fr: 'Brevet #1', en: 'Patent #1' },
    patent1Desc: { fr: 'Système HCS-U7', en: 'HCS-U7 System' },
    patent2: { fr: 'Brevet #2', en: 'Patent #2' },
    patent2Desc: { fr: 'Couche Entropie Céleste', en: 'Celestial Entropy Layer' },
    statusLabel: { fr: 'Statut', en: 'Status' },
    status: { fr: 'Statut : Déposé INPI · Novembre 2025', en: 'Status: Filed INPI · November 2025' },
  },

  // Slide 8 - Validation
  validation: {
    title: { fr: 'Testé contre les modèles IA de pointe', en: 'Tested against frontier AI models' },
    subtitle: { fr: 'Validation scientifique & contradictoire', en: 'Scientific & Adversarial Validation' },
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
    confirmed: { fr: '"Résistance aux modèles de pointe confirmée"', en: '"Frontier Model Resistance Confirmed"' },
    callout: {
      fr: 'GPT-4V, Claude 3 Opus, Gemini Pro Vision détectés avec >99% de confiance sur toutes les batteries de tests.',
      en: 'GPT-4V, Claude 3 Opus, Gemini Pro Vision detected with >99% confidence across all test batteries.',
    },
    source: {
      fr: 'Source : Recherche doctorale · 10 chapitres · Protocoles validés par les pairs',
      en: 'Source: Doctoral research · 10 chapters · Peer-reviewed protocols',
    },
    operationalTitle: { fr: 'Sécurité Opérationnelle (15 jours)', en: 'Operational Security (15-day metrics)' },
    operational: {
      fr: [
        { value: '518', label: 'Attaques bloquées', sub: 'Détection temps réel' },
        { value: '0', label: 'Brèches', sub: 'Zéro compromission' },
        { value: '556+', label: 'Tests automatisés', sub: 'CI/CD' },
        { value: '12', label: 'Types d\'attaques', sub: 'Siege Wall simulés' },
      ],
      en: [
        { value: '518', label: 'Attacks blocked', sub: 'Real-time detection' },
        { value: '0', label: 'Breaches', sub: 'Zero compromise' },
        { value: '556+', label: 'Automated tests', sub: 'CI/CD' },
        { value: '12', label: 'Attack types', sub: 'Siege Wall simulated' },
      ],
    },
    siegeWall: {
      title: { fr: 'Siege Wall Framework', en: 'Siege Wall Framework' },
      attacks: {
        fr: ['honeypot-scan (24 chemins)', 'bot-fingerprint (5 types)', 'ip-rotation (vélocité)', 'ua-spoofing', 'evasion (7 techniques)'],
        en: ['honeypot-scan (24 paths)', 'bot-fingerprint (5 types)', 'ip-rotation (velocity)', 'ua-spoofing', 'evasion (7 techniques)'],
      },
    },
  },

  // Slide 9 - Market
  market: {
    title: { fr: 'Marché de 18,4 Mds$. Objectif €12M en Année 3.', en: "$18.4B market. We're targeting €12M Year 3." },
    subtitle: { fr: 'Marché adressable & vecteurs de croissance', en: 'Addressable Market & Growth Vectors' },
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
    cagr: { fr: 'CAGR_MARCHÉ : +24% (2024-2030)', en: 'MARKET_CAGR: +24% (2024-2030)' },
    tailwinds: { fr: 'VENTS_RÉGLEMENTAIRES : FORTS', en: 'REGULATORY_TAILWINDS: STRONG' }
  },

  // Slide 10 - Competition
  competition: {
    title: { fr: 'On ne concurrence pas. On remplace.', en: "We're not competing. We're replacing." },
    subtitle: { fr: 'Paysage concurrentiel & fossés', en: 'Competitive Landscape & Moats' },
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
    subtitle: { fr: 'Modèle SaaS scalable à forte marge', en: 'Scalable SaaS Model with High Margins' },
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
    subtitle: { fr: 'Vélocité d\'exécution & actifs', en: 'Execution Velocity & Assets' },
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
        { value: '9', label: 'Couches sécurité' },
        { value: '2', label: 'Brevets Recevables' },
        { value: '100%', label: 'Déployé' },
      ],
      en: [
        { value: '7', label: 'Cognitive tests' },
        { value: '9', label: 'Security layers' },
        { value: '2', label: 'Patents Recevable' },
        { value: '100%', label: 'Deployed' },
      ],
    },
    maturityLabel: { fr: 'Maturité Produit (Déc 2025)', en: 'Product Maturity (Dec 2025)' },
    maturity: {
      fr: [
        { value: '30+', label: 'Routes live', sub: 'Support bilingue complet' },
        { value: '126', label: 'Composants React', sub: 'Production-grade' },
        { value: '2', label: 'Packages NPM', sub: '@hcs-u7/widget, siege-wall' },
        { value: '17', label: 'Endpoints API', sub: 'Backend Railway' },
      ],
      en: [
        { value: '30+', label: 'Live routes', sub: 'Full bilingual support' },
        { value: '126', label: 'React components', sub: 'Production-grade' },
        { value: '2', label: 'NPM packages', sub: '@hcs-u7/widget, siege-wall' },
        { value: '17', label: 'API endpoints', sub: 'Railway backend' },
      ],
    },
  },

  // Slide 13 - GTM
  gtm: {
    title: { fr: 'Atterrir. Étendre. Scaler.', en: 'Land. Expand. Scale.' },
    subtitle: { fr: 'Stratégie de mise sur le marché', en: 'Go-to-Market Strategy' },
    targetLabel: { fr: 'Cible', en: 'Target' },
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
    icpLabel: { fr: 'Profil Client Idéal (ICP)', en: 'Ideal Customer Profile (ICP)' },
    icp: {
      fr: 'Fintech/Néobanques (PSD2 obligatoire) · Banques régionales · E-commerce premium · Gaming',
      en: 'Fintech/Neobanks (PSD2 mandated) · Regional banks · Premium e-commerce · Gaming',
    },
    contentLabel: { fr: 'Assets Marketing (Live)', en: 'Content Marketing Assets (Live)' },
    contentAssets: {
      fr: [
        { path: '/why-hcs-u7', label: 'Comparatif concurrentiel' },
        { path: '/use-cases', label: '4 pages industries' },
        { path: '/whitepaper', label: 'Livre blanc technique' },
        { path: '/ai-act', label: 'Conformité EU AI Act' },
        { path: '/the-proof', label: 'Validations scientifiques' },
        { path: '/patents', label: 'Portfolio PI' },
      ],
      en: [
        { path: '/why-hcs-u7', label: 'Competitive comparison' },
        { path: '/use-cases', label: '4 industry-specific pages' },
        { path: '/whitepaper', label: 'Technical white paper' },
        { path: '/ai-act', label: 'EU AI Act compliance' },
        { path: '/the-proof', label: 'Scientific validations' },
        { path: '/patents', label: 'IP portfolio details' },
      ],
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
    subtitle: { fr: "Opportunité d'investissement", en: 'Investment Opportunity' },
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
    liveDemos: { fr: 'Démos Live', en: 'Live Demos' },
    demos: [
      { name: 'HCS-AUTH', url: 'https://hcs-u7.com', icon: '🔐' },
      { name: 'HCS-SHIELD', url: 'https://shield.ia-solution.fr', icon: '🚁' },
      { name: 'HCS-SIEGE', url: 'https://app.hcs-u7.org/', icon: '🛡️' },
    ],
  },

  // Slide 17 - Crypto
  crypto: {
    title: { fr: 'Innovation Cryptographique', en: 'Cryptographic Innovation' },
    subtitle: { fr: 'Algorithmes propriétaires sécurisant HCS-U7', en: 'Proprietary algorithms securing HCS-U7' },
    algorithms: {
      fr: [
        { name: 'QSIG', title: 'Signature Quantique', tech: 'HMAC-SHA256 + Fenêtres Temporelles', features: ['Rotation 30s', 'Validation timing-safe', 'Brevet FR2514274'] },
        { name: 'B3', title: 'Hachage Canonique BLAKE3', tech: 'Hachage cryptographique moderne', features: ['3x plus rapide que SHA-256', 'Résistant aux collisions', 'Canonicalisation du code'] },
        { name: 'Bouclier Hiéroglyphique', title: 'Chiffrement Memory-Hard', tech: 'scrypt + AES-256-GCM', features: ['Coût mémoire 16 MB', 'Dérivation 50-100ms', 'Anti-brute-force'] },
        { name: 'Entropie Céleste', title: 'CSPRNG Astronomique', tech: 'Positions planétaires + CSPRNG', features: ['Entropie 512 bits', 'Brevet FR2514546', 'Déterministe + sécurisé'] }
      ],
      en: [
        { name: 'QSIG', title: 'Quantum-Safe Signature', tech: 'HMAC-SHA256 + Time Windows', features: ['Rotation 30s', 'Timing-safe validation', 'Patent FR2514274'] },
        { name: 'B3', title: 'BLAKE3 Canonical Hash', tech: 'Modern cryptographic hash', features: ['3x faster SHA-256', 'Collision-resistant', 'Code canonicalization'] },
        { name: 'Hieroglyphic Shield', title: 'Memory-Hard Encryption', tech: 'scrypt + AES-256-GCM', features: ['16 MB memory cost', '50-100ms derivation', 'Anti-brute-force'] },
        { name: 'Celestial Entropy', title: 'Astronomical CSPRNG', tech: 'Planetary positions + CSPRNG', features: ['512 bits entropy', 'Patent FR2514546', 'Deterministic + secure'] }
      ]
    },
    architectureTitle: { fr: 'Architecture de Défense à 9 Couches', en: '9-Layer Defense Architecture' },
    layers: {
      fr: ['1. Double Signature QSIG + B3', '2. Bouclier Hiéroglyphique', '3. Entropie Céleste', '4. AES-256-GCM', '5. Validation Timing-Safe', '6. Preuve de Travail', '7. Limitation de Débit', '8. Honeypot Trap Layer', '9. Device Fingerprint Module'],
      en: ['1. QSIG + B3 Dual Signature', '2. Hieroglyphic Shield', '3. Celestial Entropy', '4. AES-256-GCM', '5. Timing-Safe Validation', '6. Proof-of-Work', '7. Rate Limiting', '8. Honeypot Trap Layer', '9. Device Fingerprint Module']
    }
  },

  // Slide 18 - Use Cases
  useCases: {
    title: { fr: 'Matrice des Cas d\'Usage', en: 'Use Cases Matrix' },
    subtitle: { fr: 'Applications multi-secteurs de la biométrie cognitive', en: 'Multi-sector applications of cognitive biometrics' },
    sectors: {
      fr: [
        { name: 'Entreprise', items: [
          { title: 'MFA Sans Mot de Passe', desc: 'Auth 30s impossible à hameçonner', impact: '-95% vol d\'identifiants' },
          { title: 'Prévention Fraude au Président', desc: 'Approbation virements résistante deepfake', impact: 'Économie $4.5M/brèche moy.' },
          { title: 'Auth Travailleur Distant', desc: 'Contrôle cognitif accès VPN', impact: '99.6% précision' }
        ]},
        { name: 'Finance', items: [
          { title: 'Vérification KYC/AML', desc: 'Document ID + preuve cognitive', impact: 'Conformité réglementaire' },
          { title: 'Auth Virements', desc: 'Verrouillage transactions >$100K', impact: 'Zéro usurpation IA' },
          { title: 'Accès Salle de Marché', desc: '2FA Physique + Cognitif', impact: 'Menace interne ↓60%' }
        ]},
        { name: 'Défense', items: [
          { title: 'Anti-Détournement Drone', desc: 'Scellement mission hors-ligne', impact: 'Résistant brouillage GE' },
          { title: 'Verrouillage Dispositif Tactique', desc: 'Auth opérateur systèmes d\'armes', impact: 'Usage non autorisé = 0' },
          { title: 'Accès Classifié', desc: 'Porte cognitive entrée ZRR', impact: 'Impossible à falsifier' }
        ]},
        { name: 'Santé', items: [
          { title: 'Contrôle Accès DSE', desc: 'Preuve identité médecin/infirmier', impact: 'Conforme HDS/HIPAA' },
          { title: 'Autorisation Ordonnances', desc: 'Verrou substances contrôlées', impact: 'Fraude opioïdes ↓80%' },
          { title: 'Auth Salle Opération', desc: 'Validation pré-op chirurgien', impact: 'Erreur patient = 0' }
        ]},
        { name: 'Industriel', items: [
          { title: 'Accès SCADA', desc: 'Verrou infrastructure critique', impact: 'Résistant ransomware' },
          { title: 'Contrôle Flotte Robots', desc: 'Liaison cognitive opérateur', impact: 'Preuve anti-sabotage' },
          { title: 'Auth Centrale Nucléaire', desc: 'Porte opérateur système sûreté', impact: 'Non-autorisé = impossible' }
        ]},
        { name: 'Aviation', items: [
          { title: 'Accès Cockpit', desc: 'Validation pré-vol pilote', impact: 'Usurpation = 0' },
          { title: 'Autorisation ATC', desc: 'Auth contrôleur aérien', impact: 'Verrou commandes critiques' },
          { title: 'Approbation Maintenance', desc: 'Porte ingénieur certifié', impact: 'Conformité sécurité' }
        ]}
      ],
      en: [
        { name: 'Enterprise', items: [
          { title: 'Passwordless MFA', desc: '30s auth impossible to phish', impact: '-95% credential theft' },
          { title: 'CEO Fraud Prevention', desc: 'Deepfake-resistant wire approval', impact: 'Save $4.5M avg breach' },
          { title: 'Remote Worker Auth', desc: 'VPN access cognitive gating', impact: '99.6% accuracy' }
        ]},
        { name: 'Finance', items: [
          { title: 'KYC/AML Verification', desc: 'ID document + cognitive proof', impact: 'Regulatory compliant' },
          { title: 'Wire Transfer Auth', desc: '>$100K transactions lock', impact: 'Zero AI spoofing' },
          { title: 'Trading Floor Access', desc: 'Physical + cognitive 2FA', impact: 'Insider threat ↓60%' }
        ]},
        { name: 'Defense', items: [
          { title: 'Drone Anti-Takeover', desc: 'Mission sealing offline', impact: 'EW jamming resistant' },
          { title: 'Tactical Device Lock', desc: 'Weapon systems operator auth', impact: 'Unauthorized use = 0' },
          { title: 'Classified Access', desc: 'SCIF entry cognitive gate', impact: 'Spoof-proof' }
        ]},
        { name: 'Healthcare', items: [
          { title: 'EHR Access Control', desc: 'Doctor/nurse identity proof', impact: 'HIPAA compliant' },
          { title: 'Prescription Authorization', desc: 'Controlled substances lock', impact: 'Opioid fraud ↓80%' },
          { title: 'Surgery Room Auth', desc: 'Surgeon pre-op validation', impact: 'Wrong patient = 0' }
        ]},
        { name: 'Industrial', items: [
          { title: 'SCADA Access', desc: 'Critical infrastructure lock', impact: 'Ransomware resistant' },
          { title: 'Robot Fleet Control', desc: 'Operator cognitive binding', impact: 'Sabotage proof' },
          { title: 'Nuclear Plant Auth', desc: 'Safety system operator gate', impact: 'Unauthorized = impossible' }
        ]},
        { name: 'Aviation', items: [
          { title: 'Cockpit Access', desc: 'Pilot pre-flight validation', impact: 'Impersonation = 0' },
          { title: 'ATC Authorization', desc: 'Air traffic controller auth', impact: 'Critical commands lock' },
          { title: 'Maintenance Approval', desc: 'Certified engineer gate', impact: 'Safety compliance' }
        ]}
      ]
    },
    footer: {
      fr: '18+ cas d\'usage à travers 6 secteurs critiques — Une technologie, applications illimitées',
      en: '18+ use cases across 6 critical sectors — One technology, unlimited applications'
    }
  },

  // Slide 19 - Architecture
  architecture: {
    title: { fr: 'Architecture Détaillée', en: 'Architecture Deep-Dive' },
    subtitle: { fr: 'Déploiement dual de qualité production', en: 'Production-grade dual deployment' },
    cloud: {
      title: { fr: 'HCS-AUTH (Cloud)', en: 'HCS-AUTH (Cloud)' },
      frontend: { 
        title: { fr: 'Couche Frontend', en: 'Frontend Layer' }, 
        items: {
          fr: ['→ Next.js 16 + React 19', '→ Admin: hcs-u7.info', '→ Client: hcs-u7.com', '→ Marketing: hcs-u7.com'],
          en: ['→ Next.js 16 + React 19', '→ Admin: hcs-u7.info', '→ Client: hcs-u7.com', '→ Marketing: hcs-u7.com']
        }
      },
      backend: { 
        title: { fr: 'Couche Backend', en: 'Backend Layer' }, 
        items: {
          fr: ['→ Fastify (Node.js)', '→ Déploiement Railway', '→ 88 fichiers production', '→ Audité Siege-Wall'],
          en: ['→ Fastify (Node.js)', '→ Railway deployment', '→ 88 files production', '→ Siege-Wall audited']
        }
      },
      security: { title: { fr: 'Couches Sécurité (9)', en: 'Security Layers (9)' }, items: {
        fr: ['1. Signatures QSIG + B3', '2. Bouclier Hiéroglyphique', '3. Entropie Céleste', '4. AES-256-GCM', '5. Timing-safe (150ms min)', '6. Preuve de Travail', '7. Limitation de débit', '8. Honeypot Trap', '9. Device Fingerprint'],
        en: ['1. QSIG + B3 signatures', '2. Hieroglyphic Shield', '3. Celestial Entropy', '4. AES-256-GCM', '5. Timing-safe (150ms min)', '6. Proof-of-Work', '7. Rate limiting', '8. Honeypot Trap', '9. Device Fingerprint']
      }},
      db: { 
        title: { fr: 'Base de Données', en: 'Database' }, 
        items: {
          fr: ['→ PostgreSQL (Railway)', '→ Redis (cache)', '→ Chiffré au repos'],
          en: ['→ PostgreSQL (Railway)', '→ Redis (caching)', '→ Encrypted at rest']
        }
      },
      audit: { fr: 'Audit Sécurité : 518 attaques bloquées • 0 brèche • 15 jours continus', en: 'Security Audit: 518 attacks blocked • 0 breaches • 15 days continuous' }
    },
    offline: {
      title: { fr: 'HCS-SHIELD (Hors-Ligne)', en: 'HCS-SHIELD (Offline)' },
      pwa: { 
        title: { fr: 'Application PWA', en: 'PWA Application' }, 
        items: {
          fr: ['→ Next.js 16 PWA', '→ shield.ia-solution.fr', '→ Offline-first', '→ Stockage IndexedDB'],
          en: ['→ Next.js 16 PWA', '→ shield.ia-solution.fr', '→ Offline-first', '→ IndexedDB storage']
        }
      },
      tests: { title: { fr: 'Tests Cognitifs (7)', en: 'Cognitive Tests (7)' }, items: {
        fr: ['1. Réaction (V)', '2. Mémoire', '3. Traçage (F)', '4. Motif (Cr)', '5. Défilement (S)', '6. Coordination (S)', '7. Stroop (C)'],
        en: ['1. Reaction (V)', '2. Memory', '3. Tracing (F)', '4. Pattern (Cr)', '5. Scroll (S)', '6. Coordination (S)', '7. Stroop (C)']
      }},
      crypto: { 
        title: { fr: 'Crypto Embarquée', en: 'Crypto Embedded' }, 
        items: {
          fr: ['→ QSIG (HMAC-SHA256 local)', '→ B3 (BLAKE3 local)', '→ AES-256-GCM (QR)', '→ Web Crypto API'],
          en: ['→ QSIG (HMAC-SHA256 local)', '→ B3 (BLAKE3 local)', '→ AES-256-GCM (QR)', '→ Web Crypto API']
        }
      },
      mission: { 
        title: { fr: 'Planification Mission', en: 'Mission Planning' }, 
        items: {
          fr: ['→ Intégration MapBox', '→ Waypoints GPS', '→ Génération QR code', '→ Opérations hors-ligne'],
          en: ['→ MapBox integration', '→ GPS Waypoints', '→ QR code generation', '→ Offline operations']
        }
      },
      deployment: { fr: 'Déploiement : LWS France • ISO 27001 • Hébergement souverain', en: 'Deployment: LWS France • ISO 27001 • Sovereign hosting' }
    },
    stats: {
      fr: 'Stats Production : 88 fichiers backend • 7 tests cognitifs • 8 couches sécu • 100% uptime',
      en: 'Production Stats: 88 backend files • 7 cognitive tests • 8 security layers • 100% uptime'
    },
    reliability: { fr: 'Fiabilité', en: 'Reliability' }
  },

  // Slide 20 - IP
  ip: {
    title: { fr: 'Propriété Intellectuelle', en: 'Intellectual Property' },
    subtitle: { fr: 'Fossé de protection par brevet de 20 ans', en: '20-year patent protection moat' },
    patents: {
      fr: [
        { number: 'FR2514274', title: 'Système auth biométrique cognitive multi-couches', status: 'PENDING', scope: ['Mécanisme auth cognitif principal', 'Architecture 9 couches', 'Algorithme scoring combiné (70% cognitif + 30% comportemental)', 'Agrégation multi-tests', 'Génération & validation code'] },
        { number: 'FR2514546', title: 'Architecture distribuée pour auth biométrique cognitive', status: 'PENDING', scope: ['Source entropie astronomique', 'Scalabilité déploiement enterprise', 'CSPRNG déterministe', 'Renforcement cryptographique', 'Mixage entropie hybride'] }
      ],
      en: [
        { number: 'FR2514274', title: 'Multi-layer cognitive biometric authentication system', status: 'PENDING', scope: ['Core cognitive auth mechanism', '9-layer architecture', 'Combined scoring algorithm (70% cognitive + 30% behavioral)', 'Multi-test aggregation', 'Code generation & validation'] },
        { number: 'FR2514546', title: 'Distributed architecture for cognitive biometric authentication', status: 'PENDING', scope: ['Astronomical entropy source', 'Scalability and enterprise deployment', 'Deterministic CSPRNG', 'Cryptographic enhancement', 'Hybrid entropy mixing'] }
      ]
    },
    filedDate: { fr: 'Dépôt : 30 Novembre 2025 | INPI France', en: 'Filed: November 30, 2025 | INPI France' },
    licenseInfo: { fr: 'Licence commerciale : LICENSE-COMMERCIAL.md', en: 'Commercial licensing: LICENSE-COMMERCIAL.md' },
    labels: {
      filed: { fr: 'Dépôt', en: 'Filed' },
      protection: { fr: 'Protection', en: 'Protection' },
      scope: { fr: 'Périmètre', en: 'Scope' }
    },
    moatTitle: { fr: 'Fossé Concurrentiel', en: 'Competitive Moat' },
    moat: {
      fr: [
        { title: 'Protection Brevet', desc: 'Droits exclusifs 20 ans', impact: 'Barrière légale' },
        { title: 'Complexité Technique', desc: 'Architecture crypto 9 couches', impact: '5-7 ans réplication' },
        { title: 'Algorithmes Propriétaires', desc: 'QSIG, B3, Bouclier Hiéroglyphique', impact: 'Secrets commerciaux' },
        { title: 'Premier Entrant', desc: 'Pionnier auth cognitive', impact: 'Reconnaissance marque' }
      ],
      en: [
        { title: 'Patent Protection', desc: '20-year exclusive rights', impact: 'Legal moat' },
        { title: 'Technical Complexity', desc: '9-layer crypto architecture', impact: '5-7 years replication' },
        { title: 'Proprietary Algorithms', desc: 'QSIG, B3, Hieroglyphic Shield', impact: 'Trade secrets' },
        { title: 'First-Mover', desc: 'Cognitive auth pioneer', impact: 'Brand recognition' }
      ]
    },
    roadmapTitle: { fr: 'Feuille de Route Extensions', en: 'Patent Extensions Roadmap' },
    roadmap: { fr: ['Q2 2025: OEB (Europe)', 'Q3 2025: USPTO (USA)', 'Q4 2025: Japon, Chine, Corée'], en: ['Q2 2025: EPO (Europe)', 'Q3 2025: USPTO (USA)', 'Q4 2025: Japan, China, Korea'] }
  },

  // Slide 21 - Audit
  audit: {
    title: { fr: 'Résultats Audit de Sécurité', en: 'Security Audit Results' },
    subtitle: { fr: 'Pentest indépendant par Siege-Wall', en: 'Siege-Wall independent pentesting' },
    stats: {
      fr: [
        { label: 'Attaques Bloquées', sub: '15 jours continus' },
        { label: 'Brèches', sub: 'Zéro compromission' },
        { label: 'Tests Automatisés', sub: 'CI/CD passés' },
        { label: 'Types Attaques', sub: 'Siege Wall simulés' }
      ],
      en: [
        { label: 'Attacks Blocked', sub: '15 days continuous' },
        { label: 'Breaches', sub: 'Zero compromise' },
        { label: 'Automated Tests', sub: 'CI/CD passed' },
        { label: 'Attack Types', sub: 'Siege Wall simulated' }
      ]
    },
    attacksTitle: { fr: 'Types d\'Attaques Bloquées', en: 'Attack Types Blocked' },
    defenseTitle: { fr: 'Défense à 9 Couches', en: '9-Layer Defense' },
    layers: {
      fr: ['Double signature validation', 'KDF Memory-hard (coût 16 MB)', 'Entropie céleste', 'Chiffrement AES-256', 'Empêche attaques temporelles', 'Preuve de travail', 'Limitation débit', 'Honeypot Trap (122 endpoints)', 'Device Fingerprint (15 patterns)'],
      en: ['Double signature validation', 'Memory-hard KDF (16 MB cost)', 'Celestial entropy', 'AES-256 encryption', 'Prevents timing attacks', 'Proof-of-work', 'Rate limiting', 'Honeypot Trap (122 endpoints)', 'Device Fingerprint (15 patterns)']
    },
    siegeWallTitle: { fr: 'Framework Siege Wall', en: 'Siege Wall Framework' },
    siegeWall: {
      fr: [
        { type: 'honeypot-scan', desc: '24 chemins pièges' },
        { type: 'bot-fingerprint', desc: '5 types de bots' },
        { type: 'ip-rotation', desc: 'Détection vélocité' },
        { type: 'ua-spoofing', desc: 'User-Agent spoofing' },
        { type: 'evasion', desc: '7 techniques contournement' },
      ],
      en: [
        { type: 'honeypot-scan', desc: '24 trap paths' },
        { type: 'bot-fingerprint', desc: '5 bot types' },
        { type: 'ip-rotation', desc: 'Velocity detection' },
        { type: 'ua-spoofing', desc: 'User-Agent spoofing' },
        { type: 'evasion', desc: '7 bypass techniques' },
      ],
    },
    targetRate: { fr: 'Objectif : 100% taux détection', en: 'Target: 100% detection rate' },
    conclusionTitle: { fr: 'Conclusion de l\'Audit', en: 'Audit Conclusion' },
    conclusion: {
      fr: "\"Architecture de sécurité de niveau militaire. Aucune vulnérabilité critique trouvée. Prêt pour déploiement en production dans environnements haute sécurité.\"",
      en: "\"Military-grade security architecture. No critical vulnerabilities found. Ready for production deployment in high-security environments.\""
    },
    source: { fr: '— Siege-Wall Security, Décembre 2024', en: '— Siege-Wall Security, December 2024' }
  },

  // Slide 22 - Deployment
  deployment: {
    title: { fr: 'Options de Déploiement', en: 'Deployment Options' },
    subtitle: { fr: 'Architecture flexible pour tout environnement', en: 'Flexible architecture for every environment' },
    options: {
      fr: [
        { title: 'HCS-AUTH Cloud (B2B SaaS)', subtitle: 'Plateforme SaaS multi-tenant', features: ['Infra entièrement gérée', 'Auto-scaling (1-100K users)', 'Dispo SLA 99.9%', 'CDN Global', 'Conforme SOC2 Type II', 'Prêt GDPR/CCPA'], pricing: '€50-500/user/an', time: '< 24h mise en service' },
        { title: 'HCS-AUTH On-Premise', subtitle: 'Déploiement auto-hébergé', features: ['Prêt Docker/Kubernetes', 'Installation air-gap', 'Intégration LDAP/AD', 'Isolation VPN/pare-feu', 'Ingénieur support dédié', 'Option séquestre code'], pricing: '€50K/an base + €500/user', time: '2-4 semaines setup' },
        { title: 'HCS-SHIELD Offline', subtitle: 'PWA Tactique hors-ligne', features: ['Opération 100% hors-ligne', 'Aucune émission RF (OPSEC)', 'Hébergement souverain (FR)', 'Chiffrement mission AES-256', 'Scellement QR code', 'UX durcie combat'], pricing: '€5K-50K/unité/an', time: 'Instantané (install PWA)' },
        { title: 'HCS-HYBRID (Global)', subtitle: 'Déploiement multi-région', features: ['Cloud (HQ) + On-prem (sites)', 'Réplication active-active', 'Conformité régionale', 'Analytics centralisés', 'SSO Unifié', 'Reprise après sinistre'], pricing: 'Sur mesure', time: '4-8 semaines déploiement' }
      ],
      en: [
        { title: 'HCS-AUTH Cloud (B2B SaaS)', subtitle: 'Multi-tenant SaaS platform', features: ['Fully managed infrastructure', 'Auto-scaling (1-100K users)', '99.9% SLA uptime', 'Global CDN distribution', 'SOC2 Type II compliant', 'GDPR/CCPA ready'], pricing: '$50-500/user/year', time: '< 24h onboarding' },
        { title: 'HCS-AUTH On-Premise', subtitle: 'Self-hosted deployment', features: ['Docker/Kubernetes ready', 'Air-gapped installation', 'Custom LDAP/AD integration', 'VPN/firewall isolation', 'Dedicated support engineer', 'Source code escrow option'], pricing: '$50K/year base + $500/user', time: '2-4 weeks setup' },
        { title: 'HCS-SHIELD Offline', subtitle: 'Tactical offline PWA', features: ['100% offline operation', 'No RF emissions (OPSEC)', 'Sovereign hosting (France)', 'Mission encryption (AES-256)', 'QR code sealing', 'Combat-hardened UX'], pricing: '$5K-50K/unit/year', time: 'Instant (PWA install)' },
        { title: 'HCS-HYBRID (Global)', subtitle: 'Multi-region deployment', features: ['Cloud (HQ) + On-prem (sites)', 'Active-active replication', 'Regional compliance', 'Centralized analytics', 'Unified SSO', 'Disaster recovery'], pricing: 'Custom', time: '4-8 weeks rollout' }
      ]
    },
    labels: {
      pricing: { fr: 'Prix :', en: 'Pricing:' },
      deployment: { fr: 'Déploiement :', en: 'Deployment:' }
    },
    footer: {
      fr: '4 modèles de déploiement • Cloud à Air-gapped • Intégrations sur mesure disponibles',
      en: '4 deployment models • Cloud to air-gapped • Custom integrations available'
    },
    widgetTitle: { fr: 'Distribution Widget', en: 'Widget Distribution' },
    widget: {
      cdn: 'https://cdn.hcs-u7.com/widget.js',
      embed: '<div id="hcs-captcha" data-sitekey="YOUR_SITE_KEY"></div>',
    },
    npmTitle: { fr: 'Packages NPM', en: 'NPM Packages' },
    npm: [
      { name: '@hcs-u7/widget', desc: { fr: 'Widget JavaScript embarquable', en: 'Embeddable JavaScript widget' } },
      { name: '@hcs-u7/siege-wall', desc: { fr: 'Framework de tests de sécurité', en: 'Security testing framework' } },
    ],
  },

  // Slide 23 - Portfolio
  portfolio: {
    title: { fr: 'Portefeuille Produits', en: 'Product Portfolio' },
    subtitle: { fr: 'Une technologie, deux marchés', en: 'One technology, dual markets' },
    products: {
      fr: [
        { name: 'HCS-U7', tagline: 'Moteur d\'Authentification Cognitive', market: 'Cybersécurité Entreprise', revenue: 'SaaS (€99-€2499/user/an)', stage: 'Production (hcs-u7.com)', tam: '€50M (logiciel auth)', customers: 'Fintech, E-commerce, Gaming', diff: '99.6% détection bot • Conforme PSD2 • Sécu 9 couches' },
        { name: 'HCS-SHIELD', tagline: 'Planification de Mission Tactique', market: 'Défense & Ops Critiques', revenue: 'Licences (€79-€499/appareil/an)', stage: 'Prêt au combat (shield.ia-solution.fr)', tam: '€50M (logiciel drones tactique)', customers: 'Forces Spéciales, Pompiers, Industriel', diff: '100% hors-ligne • Lié au matériel • Panic wipe <3s' }
      ],
      en: [
        { name: 'HCS-U7', tagline: 'Cognitive Authentication Engine', market: 'Enterprise Cybersecurity', revenue: 'SaaS (€99-€2499/user/year)', stage: 'Production (hcs-u7.com)', tam: '€50M (auth software)', customers: 'Fintech, E-commerce, Gaming', diff: '99.6% bot detection • PSD2 compliant • 9-layer security' },
        { name: 'HCS-SHIELD', tagline: 'Tactical Mission Planning', market: 'Defense & Critical Ops', revenue: 'Licenses (€79-€499/device/year)', stage: 'Combat-ready (shield.ia-solution.fr)', tam: '€50M (tactical drones SW)', customers: 'Special Forces, Firefighters, Industrial', diff: '100% offline • Hardware-bound • Panic wipe <3s' }
      ]
    },
    labels: {
      market: { fr: 'Marché :', en: 'Market:' },
      revenue: { fr: 'Modèle Revenu :', en: 'Revenue Model:' },
      stage: { fr: 'Stade :', en: 'Stage:' },
      tam: { fr: 'TAM :', en: 'TAM:' },
      customers: { fr: 'Clients :', en: 'Customers:' },
      diff: { fr: 'Différenciateurs Clés :', en: 'Key Differentiators:' },
      patents: { fr: 'Couverture Brevet :', en: 'Patent Coverage:' }
    },
    synergies: {
      title: { fr: 'Stack Technologique Partagée', en: 'Shared Technology Stack' },
      items: {
        fr: ['• Signature QSIG + B3', '• Chiffrement AES-256-GCM', '• Entropie Céleste', '• Liaison Matérielle WebAuthn', '• Validation Timing-Safe', '• Moteur Tests Cognitifs', '• Preuve de Travail', '• Blockchain d\'Audit'],
        en: ['• QSIG + B3 Signatures', '• AES-256-GCM Encryption', '• Celestial Entropy', '• WebAuthn Hardware Binding', '• Timing-Safe Validation', '• Cognitive Testing Engine', '• Proof-of-Work', '• Audit Blockchain']
      },
      desc: { fr: '85% réutilisation code entre produits → Efficacité R&D + cycles innovation rapides', en: '85% code reuse between products → R&D efficiency + faster innovation cycles' }
    },
    revenueMix: {
      fr: [{ val: '60%', label: 'Revenu HCS-U7', sub: '(SaaS Entreprise)' }, { val: '40%', label: 'Revenu HCS-SHIELD', sub: '(Défense/Critique)' }, { val: '€7.5M', label: 'ARR Combiné A3', sub: '(flux revenus duaux)' }],
      en: [{ val: '60%', label: 'Revenue from HCS-U7', sub: '(Enterprise SaaS)' }, { val: '40%', label: 'Revenue from HCS-SHIELD', sub: '(Defense/Critical)' }, { val: '€7.5M', label: 'Combined ARR Y3', sub: '(dual revenue streams)' }]
    }
  },

  // Slide 24 - Limitations
  limitations: {
    title: { fr: 'Ce que nous ne faisons PAS', en: "What We DON'T Do" },
    subtitle: { fr: 'Périmètre honnête = produit crédible', en: 'Honest scope = credible product' },
    do: {
      title: { fr: 'Ce que HCS-U7 Bloque', en: 'What HCS-U7 Blocks' },
      subtitle: { fr: 'Attaques qui passent à l\'échelle', en: 'Attacks that scale' },
      cats: {
        fr: [{ title: 'Attaques Automatisées (95% de la fraude)', items: ['Bots & scrapers (99.6% détection)', 'Credential stuffing (scalable)', 'Injection de prompt (jailbreaks LLM)', 'Fraude au clic (scripts)', 'Account takeover (attaques de masse)'], impact: 'Coût global €95 Mds/an (FBI IC3)' }],
        en: [{ title: 'Automated Attacks (95% of fraud)', items: ['Bots & scrapers (99.6% detection)', 'Credential stuffing (scalable)', 'Prompt injection (LLM jailbreaks)', 'Click fraud (scripts)', 'Account takeover (mass attacks)'], impact: '€95B/year global cost (FBI IC3)' }]
      }
    },
    dont: {
      title: { fr: 'Ce que HCS-U7 ne Bloque Pas', en: "What HCS-U7 Doesn't Block" },
      subtitle: { fr: 'Attaques manuelles ciblées', en: 'Manual targeted attacks' },
      cats: {
        fr: [{ title: 'Attaques Manuelles Ciblées (5% du volume)', items: ['Ingénierie sociale (style Mitnick)', 'Menaces internes (employés malveillants)', 'Attaques supply chain (SolarWinds)', 'Zero-days (vulnérabilités matérielles)', 'Accès physique (appareils volés)'], impact: 'Impact élevé mais non scalable' }],
        en: [{ title: 'Manual Targeted Attacks (5% of volume)', items: ['Social engineering (Mitnick-style)', 'Insider threats (malicious employees)', 'Supply chain attacks (SolarWinds)', 'Zero-days (hardware vulnerabilities)', 'Physical access (stolen devices)'], impact: 'High impact but not scalable' }]
      }
    },
    strategy: {
      title: { fr: 'Stratégie de Défense Complète', en: 'Complete Defense Strategy' },
      autoTitle: { fr: 'Pour Menaces Automatisées (95%) :', en: 'For Automated Threats (95%):' },
      autoItems: { fr: ['✅ HCS-U7 (biométrie cognitive)', '✅ WAF (pare-feu applicatif)', '✅ Rate limiting', '✅ Réputation IP'], en: ['✅ HCS-U7 (cognitive biometrics)', '✅ WAF (web application firewall)', '✅ Rate limiting', '✅ IP reputation'] },
      manualTitle: { fr: 'Pour Menaces Manuelles (5%) :', en: 'For Manual Threats (5%):' },
      manualItems: { fr: ['🎓 Formation employés (sensibilisation)', '🔒 Contrôles d\'accès (moindre privilège)', '👥 Équipe SOC (monitoring 24/7)', '📋 Plan réponse incident'], en: ['🎓 Employee training (awareness)', '🔒 Access controls (least privilege)', '👥 SOC team (24/7 monitoring)', '📋 Incident response plan'] },
      insight: { fr: 'Insight clé : Automatiser la défense contre 95% des attaques → Libérer les équipes sécurité pour les 5% critiques.', en: 'Key insight: Automate defense against 95% of attacks → Free up security teams for the critical 5% (APT, insider threats)' }
    },
    trust: {
      fr: 'La transparence crée la confiance. Nous ne sommes pas une solution miracle. Nous résolvons le problème des menaces scalables (95% de la fraude), pour que les CISO puissent se concentrer sur les APT ciblées (5% mais critiques).',
      en: "Transparency builds trust. We don't claim to be a silver bullet. We solve the scalable threat problem (95% of fraud), so CISOs can focus resources on targeted APTs (5% but critical)."
    }
  },

  // Slide 25 - Ecosystem
  ecosystem: {
    title: { fr: 'Écosystème & Partenariats', en: 'Ecosystem & Partnerships' },
    subtitle: { fr: 'Intégrations stratégiques pour l\'expansion du marché', en: 'Strategic integrations for market expansion' },
    cats: {
      fr: [
        { name: 'Infrastructure IA', items: [{ name: 'Mistral AI', val: 'Génération tests cognitifs via LLM', status: 'Intégration prévue' }, { name: 'Anthropic (Claude)', val: 'Détection avancée injection prompt', status: 'API intégrée' }] },
        { name: 'Cloud & Infra', items: [{ name: 'Railway', val: 'Hébergement Backend', status: 'Prod live' }, { name: 'Vercel', val: 'Hébergement Frontend', status: 'Prod live' }, { name: 'Cloudflare', val: 'CDN + Protection DDoS', status: 'Actif' }] },
        { name: 'Défense & Tactique', items: [{ name: 'ArduPilot / PX4', val: 'Intégration autopilot drone open-source', status: 'Prévu Q1 2025' }, { name: 'ATAK (TAK.gov)', val: 'Plugin Android Team Awareness Kit', status: 'Évaluation' }] },
        { name: 'Matériel & Sécu', items: [{ name: 'YubiKey (Yubico)', val: 'Intégration HSM pour HCS-SHIELD', status: 'Roadmap' }, { name: 'AWS KMS', val: 'Gestion secrets (clés non-extractibles)', status: 'Actif' }] }
      ],
      en: [
        { name: 'AI Infrastructure', items: [{ name: 'Mistral AI', val: 'LLM-powered cognitive test generation', status: 'Integration planned' }, { name: 'Anthropic (Claude)', val: 'Advanced prompt injection detection', status: 'API integrated' }] },
        { name: 'Cloud & Infrastructure', items: [{ name: 'Railway', val: 'Backend hosting', status: 'Production live' }, { name: 'Vercel', val: 'Frontend hosting', status: 'Production live' }, { name: 'Cloudflare', val: 'CDN + DDoS protection', status: 'Active' }] },
        { name: 'Defense & Tactical', items: [{ name: 'ArduPilot / PX4', val: 'Open-source drone autopilot integration', status: 'Planned Q1 2025' }, { name: 'ATAK (TAK.gov)', val: 'Android Team Awareness Kit plugin', status: 'Evaluation' }] },
        { name: 'Hardware & Security', items: [{ name: 'YubiKey (Yubico)', val: 'HSM integration for HCS-SHIELD', status: 'Roadmap' }, { name: 'AWS KMS', val: 'Secret management (non-extractible keys)', status: 'Active' }] }
      ]
    },
    strategyTitle: { fr: 'Stratégie Partenariat', en: 'Partnership Strategy' },
    strategy: {
      fr: [
        { title: 'Partenaires Techno', desc: 'Levier infra best-in-class (Mistral, Cloudflare) pour accélérer time-to-market.' },
        { title: 'Partenaires Distribution', desc: 'Intégration plateformes tactiques existantes (ATAK) pour atteindre clients défense.' },
        { title: 'Partenaires Sécurité', desc: 'Intégration matérielle (YubiKey) pour clients entreprise exigeant protection HSM.' }
      ],
      en: [
        { title: 'Technology Partners', desc: 'Leverage best-in-class infrastructure (Mistral, Cloudflare) to accelerate time-to-market.' },
        { title: 'Distribution Partners', desc: 'Integrate with existing tactical platforms (ATAK) to reach defense customers.' },
        { title: 'Security Partners', desc: 'Hardware integration (YubiKey) for enterprise customers requiring HSM protection.' }
      ]
    },
    stats: {
      fr: [{ val: '12+', label: 'Partenaires' }, { val: '6', label: 'Intégrations Live' }, { val: '4', label: 'Canaux Défense' }, { val: '€0', label: 'Coût Intégration' }],
      en: [{ val: '12+', label: 'Partners' }, { val: '6', label: 'Live integrations' }, { val: '4', label: 'Defense channels' }, { val: '€0', label: 'Integration cost' }]
    }
  },

  // Slide 26 - Thought Leadership
  leadership: {
    title: { fr: 'Leadership d\'Opinion', en: 'Thought Leadership' },
    subtitle: { fr: 'Construire l\'autorité de la marque en sécurité cognitive', en: 'Building brand authority in cognitive security' },
    metrics: {
      fr: [{ label: 'Abonnés LinkedIn', trend: '+340% (6 mois)' }, { label: 'Posts Techniques', trend: '120K impressions' }, { label: 'CISO Engagés', trend: 'Discussions actives' }, { label: 'Taux Engagement', trend: '3x moy. industrie' }],
      en: [{ label: 'LinkedIn Followers', trend: '+340% (6 months)' }, { label: 'Technical Posts', trend: '120K impressions' }, { label: 'Engaged CISOs', trend: 'Active discussions' }, { label: 'Engagement Rate', trend: '3x industry avg' }]
    },
    postsTitle: { fr: 'Posts Techniques Viraux', en: 'Viral Technical Posts' },
    posts: {
      fr: [
        { title: 'GPT-4V a cassé les CAPTCHAs. Et maintenant ?', date: 'Déc 2024', impact: 'Mentionné dans TechCrunch' },
        { title: 'Ingénierie Sociale vs Automation : Quelle menace scale ?', date: 'Déc 2024', impact: 'Débat CISO déclenché' },
        { title: 'Pourquoi les ops timing-safe comptent en 2025', date: 'Nov 2024', impact: 'Partagé par 3 VCs' }
      ],
      en: [
        { title: 'GPT-4V broke CAPTCHAs. What now?', date: 'Dec 2024', impact: 'Featured in TechCrunch article' },
        { title: 'Social Engineering vs Automation: Which threat scales?', date: 'Dec 2024', impact: 'Sparked CISO debate' },
        { title: 'Why timing-safe ops matter in 2025', date: 'Nov 2024', impact: 'Shared by 3 VCs' }
      ]
    },
    strategyTitle: { fr: 'Stratégie de Contenu', en: 'Content Strategy' },
    strategy: {
      fr: [
        { title: 'Éducatif', desc: 'Deep-dives sur attaques temporelles, injection prompt. Bâtir confiance via expertise.' },
        { title: 'Provocateur', desc: 'Challenger les acquis ("CAPTCHAs sont morts"). Positionner HCS-U7 comme alternative.' },
        { title: 'Transparent', desc: 'Reconnaître limites. Crée crédibilité et différencie du hype.' }
      ],
      en: [
        { title: 'Educational', desc: 'Deep-dives on timing attacks, prompt injection. Build trust through expertise.' },
        { title: 'Provocative', desc: 'Challenge assumptions ("CAPTCHAs are dead"). Position HCS-U7 as alternative.' },
        { title: 'Transparent', desc: 'Acknowledge limitations. Builds credibility and differentiates from hype.' }
      ]
    },
    impact: {
      fr: { title: 'Impact Business', desc: '45% des leads entrants attribuent le premier contact au contenu LinkedIn', stat: 'Démos entreprise réservées' },
      en: { title: 'Business Impact', desc: '45% of inbound leads attribute first touch to LinkedIn content', stat: 'Enterprise demos booked' }
    }
  },

  // Slide 27 - Risks
  risks: {
    title: { fr: 'Atténuation des Risques', en: 'Risk Mitigation' },
    subtitle: { fr: 'Stratégie proactive de gestion des risques', en: 'Proactive risk management strategy' },
    categories: {
      fr: [
        { name: 'Technologie', items: [
          { risk: 'Avancées IA contournent tests', prob: 'Moyen', mit: 'Diversité 7 tests + MAJ continues. Brevets couvrent méthode.', status: 'Monitoring actif' },
          { risk: 'Adoption WebAuthn lente', prob: 'Faible', mit: 'Fallback SMS/Email. Support mobile 89%. Standard W3C.', status: 'Atténué' },
          { risk: 'Attaques temporelles', prob: 'Faible', mit: 'Plancher 150ms + ops timing-safe. Audité Siege-Wall.', status: 'Atténué' }
        ]},
        { name: 'Marché', items: [
          { risk: 'Big Tech entre sur le marché', prob: 'Moyen', mit: 'Brevets (20 ans). Marque premier entrant. Niche spécialisée.', status: 'Fossé brevet' },
          { risk: 'Cycle vente entreprise long', prob: 'Moyen', mit: 'GTM Double : SMB self-service + Enterprise. POC < 30 jours.', status: 'Validé' },
          { risk: 'Bloqueurs GDPR', prob: 'Faible', mit: 'Traitement local. Pas de stockage PII. Cognitif != biométrique.', status: 'Avis légal sécurisé' }
        ]},
        { name: 'Compétition', items: [
          { risk: 'CAPTCHA 2.0 des incumbents', prob: 'Élevé', mit: 'Déjà échoué (taux contournement 94%). HCS-U7 fondamentalement différent.', status: 'Avantage compétitif' },
          { risk: 'Clone Open-source', prob: 'Moyen', mit: 'Brevets empêchent usage commercial. Crypto 8 couches = 5-7 ans.', status: 'IP protégée' },
          { risk: 'Protectionnisme Défense', prob: 'Moyen', mit: 'Solution souveraine FR. Compatible NATO. Pas dépendance US.', status: 'Avantage (FR/EU)' }
        ]},
        { name: 'Exécution', items: [
          { risk: 'Dépendance Homme-Clé', prob: 'Élevé', mit: 'Recrutement CTO Q1 2025. Doc code. IP séparée légalement.', status: 'Recrutement actif' },
          { risk: 'Burn rate vs runway', prob: 'Moyen', mit: 'Seed €500K = 18 mois runway. Projections revenus conservatrices.', status: 'Levée Q1' },
          { risk: 'Régulation (AI Act)', prob: 'Faible', mit: 'Cognitif = mesure humaine, pas décision IA. Compliant-by-design.', status: 'Monitoring AI Act' }
        ]}
      ],
      en: [
        { name: 'Technology', items: [
          { risk: 'AI advances bypass cognitive tests', prob: 'Medium', mit: '7-test diversity + continuous updates. Patents cover method.', status: 'Active monitoring' },
          { risk: 'WebAuthn adoption too slow', prob: 'Low', mit: 'Fallback to SMS/Email OTP. 89% mobile support. W3C standard.', status: 'Mitigated' },
          { risk: 'Timing attacks on validation', prob: 'Low', mit: '150ms latency floor + timing-safe ops. Audited by Siege-Wall.', status: 'Mitigated' }
        ]},
        { name: 'Market', items: [
          { risk: 'Big Tech (Google/Microsoft) enters space', prob: 'Medium', mit: 'Patents (20y). First-mover brand. Specialized niche.', status: 'Patent moat' },
          { risk: 'Enterprise sales cycle too long', prob: 'Medium', mit: 'Dual GTM: SMB self-service + Enterprise. POC < 30 days.', status: 'Validated' },
          { risk: 'GDPR compliance blockers', prob: 'Low', mit: 'Local-only processing. No PII storage. Cognitive != biometric.', status: 'Legal opinion secured' }
        ]},
        { name: 'Competition', items: [
          { risk: 'CAPTCHA 2.0 from incumbents', prob: 'High', mit: 'Already failed (94% bypass). HCS-U7 fundamentally different.', status: 'Competitive advantage' },
          { risk: 'Open-source clone', prob: 'Medium', mit: 'Patents prevent commercial use. 8-layer crypto = 5-7 years.', status: 'IP protected' },
          { risk: 'Defense market protectionism', prob: 'Medium', mit: 'French sovereign solution. NATO-compatible. No US dependencies.', status: 'Advantage (FR/EU)' }
        ]},
        { name: 'Execution', items: [
          { risk: 'Key person dependency (founder)', prob: 'High', mit: 'Hiring CTO Q1 2025. Code documentation. IP legally separated.', status: 'Recruiting active' },
          { risk: 'Burn rate vs runway', prob: 'Medium', mit: '€500K seed = 18mo runway. Conservative revenue projections.', status: 'Fundraising Q1' },
          { risk: 'Regulatory changes (AI Act)', prob: 'Low', mit: 'Cognitive = human measurement, not AI decision. Compliant-by-design.', status: 'Monitoring EU AI Act' }
        ]}
      ]
    },
    profile: {
      title: { fr: 'Profil de Risque : Gérable', en: 'Risk Profile: Manageable' },
      tech: { title: { fr: 'Risque Techno', en: 'Technology Risk' }, desc: { fr: 'Faible : Brevets + crypto 8 couches + MAJ continues', en: 'Low: Patents + 8-layer crypto + continuous updates' } },
      market: { title: { fr: 'Risque Marché', en: 'Market Risk' }, desc: { fr: 'Moyen : Compétitif mais défendable (fossé IP)', en: 'Medium: Competitive but defensible (IP moat)' } },
      exec: { title: { fr: 'Risque Exécution', en: 'Execution Risk' }, desc: { fr: 'Moyen : Atténué par fonds seed + plan recrutement', en: 'Medium: Mitigated by seed funding + hiring plan' } },
      conclusion: {
        fr: 'Conclusion : Tous les risques élevés/moyens ont des stratégies d\'atténuation actives. Le seed €500K offre le runway pour exécuter le plan de réduction des risques.',
        en: 'Conclusion: All high/medium risks have active mitigation strategies. €500K seed provides runway to execute risk reduction plan.'
      }
    }
  }
};

export function t<T>(obj: { fr: T; en: T }, lang: Language): T {
  return obj[lang];
}
