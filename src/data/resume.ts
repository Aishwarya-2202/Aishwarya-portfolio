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
    title: 'IPL Matches Analytics',
    subtitle: 'End-to-End Data & BI Project',
    tech: ['Python', 'SQL', 'Power BI', 'Matplotlib', 'Seaborn'],
    year: '2026',
    description:
      'Ingested and profiled raw IPL CSV data; applied advanced SQL window functions to surface a counter-intuitive insight — toss winners convert to match victories only ≈50% of the time. Built an interactive Power BI dashboard with Season and Team slicers.',
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
  'Data & Analytics': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Power BI', 'Recharts'],
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
