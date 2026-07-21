// ─── Resume Data ────────────────────────────────────────────────────────────

export const personal = {
  name: 'Aishwarya S',
  location: 'Bengaluru, India',
  phone: '+91 9148771379',
  email: 'aishwaryashivakumar19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aishwarya-s19/',
  github: 'https://github.com/Aishwarya-2202',
  tagline: 'Data Science Engineer · Full-Stack Developer · Insight Storyteller',
  summary:
    "Final-year B.E. student in Computer Science (Data Science) at Atria Institute of Technology, Bengaluru. I bridge the gap between raw data and human decisions — turning complex datasets into clear narratives and building full-stack products that are data-instrumented from day one. I'm actively looking for opportunities where analytical rigour meets engineering craft.",
};

export const education = [
  {
    degree: 'B.E. Computer Science (Data Science)',
    institution: 'Atria Institute of Technology, Bengaluru',
    period: '2022 – 2026',
    grade: 'CGPA: 7.69 / 10',
  },
  {
    degree: 'Class XII — Science',
    institution: "KLE Society's S. Nijalingappa PU College",
    period: '2021 – 2022',
    grade: '72.5%',
  },
  {
    degree: 'Class X',
    institution: 'Florence High School',
    period: '2019 – 2020',
    grade: '83.36%',
  },
];

export const experience = [
  {
    role: 'IT Intern',
    company: 'Atria Institute of Technology',
    period: 'Internship',
    type: 'Internship',
    bullets: [
      'Managed and configured Microsoft 365 services including user account provisioning and system operations at enterprise scale.',
      'Assisted in troubleshooting and maintaining IT infrastructure; gained practical exposure to enterprise-level tools and system administration workflows.',
    ],
  },
  {
    role: 'Secretary',
    company: 'Cybersecurity Club — Atria Institute of Technology',
    period: 'Leadership Role',
    type: 'Leadership',
    bullets: [
      'Organised technical events, workshops, and cybersecurity awareness programmes.',
      'Actively participated in hackathons and collaborative engineering initiatives, strengthening cross-functional teamwork and communication skills.',
    ],
  },
];

export const projects = [
  {
    title: 'Enterprise Business Analytics & Decision Intelligence Platform',
    subtitle: 'End-to-End Data Warehouse · ML · BI Project',
    tech: ['Python', 'PostgreSQL', 'SQL', 'Power BI', 'Excel', 'Scikit-learn', 'XGBoost'],
    year: '2026',
    description:
      'Designed a centralized analytics platform consolidating raw sales, customer, product, and store data into a governed data warehouse. Automated KPI calculations (revenue, CLV, AOV, customer segmentation), validated statistical significance of business trends, and built interactive Power BI dashboards with DAX measures, KPI scorecards, and drill-down analysis. Developed classification models using Random Forest and XGBoost achieving up to 100% accuracy, and produced executive reports translating analytical findings into actionable business recommendations.',
    bullets: [
      'Eliminated fragmented spreadsheet-based reporting by designing a centralized analytics platform that consolidated raw sales, customer, product, and store data into a governed data warehouse, providing a single source of truth for business reporting and executive decision-making.',
      'Standardized business KPI calculations by automating revenue, gross profit, customer lifetime value, average order value, monthly growth, and customer segmentation, replacing inconsistent manual reporting with reproducible analytical metrics.',
      'Discovered that 85.7% of total quarterly revenue originated from the Furniture category, with a single product contributing a significant share of overall sales, highlighting revenue concentration risk and recommending product diversification.',
      'Analysed monthly revenue trends and demonstrated that apparent business growth (+25.0% followed by -26.1%) was not statistically significant using regression analysis (p = 0.863), preventing misleading strategic decisions based on short-term fluctuations.',
      'Investigated customer purchasing behaviour through statistical hypothesis testing and established that weekend transactions showed higher average order values than weekdays, though the difference was not statistically significant (p = 0.104).',
      'Evaluated the relationship between product pricing and purchase quantity using Pearson correlation analysis (r = 0.103, p = 0.211), demonstrating that pricing alone was not a statistically significant driver of purchasing behaviour.',
      'Compared multiple forecasting techniques including Linear Regression, ARIMA, and Excel forecasting models, identifying stable short-term demand while recommending additional historical data collection before relying on long-term forecasts.',
      'Performed Customer Lifetime Value analysis to classify customers into Platinum, Gold, Silver, and Bronze segments, identifying high-value customers for retention strategies and supporting data-driven CRM.',
      'Benchmarked predictive models against a naïve baseline and demonstrated evidence-based model validation rather than reporting misleading results, preventing deployment of an unreliable predictive model.',
      'Developed classification models using Random Forest and XGBoost, achieving up to 100% classification accuracy while analysing feature importance to identify the strongest predictors of product category classification.',
      'Designed reusable SQL analytics using CTEs, Window Functions, Ranking Functions, Views, Aggregations, and Joins to automate revenue contribution, customer ranking, sales trends, profitability analysis, and growth reporting.',
      'Automated the complete analytics workflow through a modular ETL architecture transforming raw transactional data into validated analytical datasets, ensuring repeatable, idempotent data processing across analytics, ML, and BI modules.',
      'Built interactive Power BI dashboards with custom DAX measures, KPI scorecards, drill-down analysis, time intelligence, and executive visualisations enabling stakeholder self-service analysis across revenue, profitability, and operational performance.',
      'Produced executive reports translating analytical findings into actionable business recommendations including revenue diversification, customer retention strategies, and improved forecasting capabilities while documenting analytical limitations.',
    ],
    github: 'https://github.com/Aishwarya-2202',
    color: 'from-teal-500/20 to-cyan-500/20',
    accent: '#14b8a6',
  },
  {
    title: 'Job Tracker',
    subtitle: 'Full-Stack Web Application (Data-Instrumented)',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Recharts'],
    year: '2025',
    description:
      'Architected a full-stack job-application tracker with JWT auth, role-based access control, RESTful API, Supabase storage for resume PDFs, and Recharts visualisation layer. Deployed on Vercel; Docker-ready.',
    github: 'https://github.com/Aishwarya-2202',
    color: 'from-violet-500/20 to-purple-500/20',
    accent: '#818cf8',
  },
  {
    title: 'Blockchain Certificate Verification',
    subtitle: 'Decentralised Application (dApp)',
    tech: ['Ethereum', 'Solidity', 'Node.js', 'Web3.js', 'Ganache'],
    year: '2025',
    description:
      'Architected a dApp using Ethereum smart contracts, SHA-256 hashing for tamper-proof digital fingerprints, and a hybrid on-chain/off-chain storage model. QR-code verification for instant validation. Research accepted at BIDA 2026 (SCOPUS / Springer).',
    github: 'https://github.com/Aishwarya-2202',
    color: 'from-amber-500/20 to-orange-500/20',
    accent: '#f59e0b',
  },
  {
    title: 'Donation Platform',
    subtitle: 'Full-Stack Web Application',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    year: '2024',
    description:
      'Multi-user role-based donation management (donors, admins, delivery) with distinct access controls. Real-time delivery status, chatbot support module, and full CRUD via PHP + MySQL.',
    github: 'https://github.com/Aishwarya-2202',
    color: 'from-rose-500/20 to-pink-500/20',
    accent: '#f472b6',
  },
  {
    title: 'Forest Fire Prediction',
    subtitle: 'Machine Learning Research',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    year: '2024',
    description:
      'Implemented and benchmarked Random Forest, SVM, KNN, and ANN on environmental datasets. Feature engineering and model evaluation across accuracy, precision, recall, and F1. Research accepted at IECCR / MVJCE.',
    github: 'https://github.com/Aishwarya-2202',
    color: 'from-green-500/20 to-emerald-500/20',
    accent: '#22c55e',
  },
];

export const skills = {
  Languages: ['Python', 'SQL', 'JavaScript', 'Solidity', 'PHP'],
  'Data & Analytics': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'XGBoost', 'Power BI', 'Excel', 'Recharts'],
  'Web & Full-Stack': ['HTML', 'CSS'],
  Databases: ['MySQL', 'PostgreSQL', 'Supabase'],
  'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Microsoft 365', 'Ganache', 'Web3.js'],
  'Soft Skills': ['Analytical Thinking', 'Data Storytelling', 'Problem Solving', 'Cross-functional Collaboration', 'Technical Documentation', 'Adaptability'],
};

export const certifications = [
  { name: 'Python for Data Science', issuer: 'NPTEL', year: '2024' },
  { name: 'Cloud Computing', issuer: 'NPTEL', year: '2024' },
  { name: 'Database Management Systems', issuer: 'Infosys Springboard', year: '2024' },
  { name: 'PostgreSQL Training', issuer: 'IIT Bombay', year: '2025' },
  { name: 'Data Science Methodology', issuer: 'IBM / Coursera', year: '' },
  { name: 'Databases and SQL for Data Science', issuer: 'IBM / Coursera', year: '' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM / Coursera', year: '' },
  { name: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Forage', year: '2025' },
  { name: 'Power BI for Beginners', issuer: '', year: '2025' },
];

export const publications = [
  {
    title: 'A Blockchain Framework for Secure Academic Certificate Verification',
    venue: 'BIDA 2026 — SCOPUS-indexed Springer Book Series',
    status: 'Accepted',
  },
  {
    title: 'Leveraging Machine Learning for Forest Fire Prediction',
    venue: 'IECCR Conference, MVJCE',
    status: 'Accepted',
  },
];
