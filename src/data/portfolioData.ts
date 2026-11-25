export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'System Analysis' | 'Web Application' | 'Full-Stack';
  period: string;
  description: string;
  fullDescription: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  role: string;
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  architectureDiagram?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  term: string;
  year: string;
  type: 'Champion' | 'First Runner-up';
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string; description: string }[];
}

export const PERSONAL_DATA = {
  name: "Estiak Bin Tanvir",
  shortName: "Estiak",
  title: "Computer Science & Engineering Graduate",
  subTitle: "Full-Stack Developer · System Analyst · UI/UX Enthusiast",
  cgpa: "3.69 / 4.00",
  university: "United International University (UIU)",
  hscSscGpa: "5.00 / 5.00 (Rangpur Cadet College)",
  email: "etanvir212135@bscse.uiu.ac.bd",
  phone: "+880 1810-174792",
  location: "211 Outer Circular Road, Arong Mogbazar, Flat No-1201, Dhaka, Bangladesh",
  github: "https://github.com/EstiakBinTanvir",
  githubUsername: "EstiakBinTanvir",
  availability: "Available for Entry-Level Tech, Engineering & Coordination Roles",
  summary: `Computer Science and Engineering graduate from United International University with a CGPA of 3.69/4.00. Experienced in academic project work spanning software development, system analysis and design, database management, and UI/UX design. Served as an Undergraduate Teaching Assistant and received multiple awards at UIU CSE Project Shows. Interested in applying technical, analytical, communication, and teamwork skills in an entry-level role across technology, operations, project coordination, or software engineering functions.`,
  cvPrimaryUrl: "/assets/aistudio/Estiak_Bin_Tanvir_CV_a8b42cca.pdf",
  cvSecondaryUrl: "/assets/aistudio/Estiak_CV_resume_006605aa.pdf",
  avatarImage: "/assets/aistudio/MyPhoto_98ee0947.png",
  workspaceImage: "/src/assets/images/tech_workspace_1793810577523.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "kawan",
    title: "Kawan – AI Personal Growth Platform",
    subtitle: "AI-Powered Personal Growth & Well-being Platform",
    category: "System Analysis",
    period: "Spring 2026",
    description: "An all-in-one system focused on personal growth and well-being, unifying 5 core modules: AI Chatbot, E-Book Library, Habit Tracker, Health & Nutrition, and Skill Development.",
    fullDescription: "Kawan bridges holistic wellness and structured personal development within a single platform. Built as a comprehensive System Analysis & Design project, Kawan empowers users through AI-guided conversations, personalized reading logs, daily habit tracking with visual analytics, health and nutrition monitoring, and milestone-based skill pathways.",
    keyFeatures: [
      "AI Chatbot Guide: Interactive conversations for mental clarity and daily reflection",
      "E-Book Library: Personalized reading goals, bookmarking, and reading progress",
      "Habit Tracker: Interactive streaks, daily checklist, and milestone analytics",
      "Health & Nutrition: Calorie logging, water intake tracker, and wellness insights",
      "Skill Development: Curated learning paths with actionable micro-tasks"
    ],
    techStack: ["Node.js", "Express.js", "JavaScript (ES6+)", "Figma", "HTML5/CSS3", "System Analysis & Design"],
    image: "/src/assets/images/kawan_project_1793810577087.jpg",
    role: "System Analyst & Lead UI/UX Designer",
    highlights: [
      "Designed full multi-module system architecture and database schema",
      "Created complete high-fidelity Figma prototypes and user journey maps",
      "Engineered state management flow for 5 integrated wellness modules"
    ],
    githubUrl: "https://github.com/EstiakBinTanvir",
    architectureDiagram: [
      "Client Layer: Web Frontend (HTML5/JS/Tailwind)",
      "API Layer: Node.js Express REST API Gateway",
      "Services: AI Chat Service | Habit Engine | Library Manager | Health Tracker",
      "Database: MongoDB Document Store & MySQL Relational Schema"
    ]
  },
  {
    id: "retrade",
    title: "ReTrade – Second-Hand Marketplace",
    subtitle: "Full-Stack Web Marketplace Application",
    category: "Web Application",
    period: "2024–2025",
    description: "A feature-rich second-hand marketplace application built with JavaScript frontend technologies and a Node.js/Express backend powered by MongoDB & Mongoose.",
    fullDescription: "ReTrade offers an intuitive buyer-to-seller marketplace platform allowing users to discover pre-owned goods, list items for sale, message buyers/sellers directly, and manage wishlist items. Designed with secure session authentication and efficient item queries.",
    keyFeatures: [
      "User Authentication & Profile Management",
      "Product Listing with Multi-Image Upload & Category Filtering",
      "Order Management & Status Tracking",
      "Real-Time Messaging & Inquiry System between buyers and sellers",
      "Wishlist Management & Favorite Items Bookmark"
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "HTML5", "CSS3"],
    image: "/src/assets/images/retrade_project_1793810578791.jpg",
    role: "Full-Stack Web Developer",
    highlights: [
      "Implemented Express REST API endpoints with robust error handling",
      "Designed database schema in Mongoose with indexed search fields",
      "Built responsive catalog layout with instant search and filter controls"
    ],
    githubUrl: "https://github.com/EstiakBinTanvir"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "spring-2026",
    title: "Champion – Final Year Design Project III",
    event: "UIU CSE Project Show",
    term: "Spring 2026",
    year: "2026",
    type: "Champion",
    description: "Awarded 1st Place Champion for the capstone Final Year Design Project III showcasing outstanding system architecture and technical execution.",
    icon: "Trophy"
  },
  {
    id: "fall-2024-poster",
    title: "Champion – System Analysis & Design Poster",
    event: "UIU CSE Project Show",
    term: "Fall 2024",
    year: "2024",
    type: "Champion",
    description: "Won Champion title for visual poster presentation demonstrating modular system design, requirements analysis, and structural diagrams.",
    icon: "Award"
  },
  {
    id: "summer-2023",
    title: "Champion – Electronics Project",
    event: "UIU CSE Project Show",
    term: "Summer 2023",
    year: "2023",
    type: "Champion",
    description: "Secured 1st Place Champion for innovative hardware-software embedded electronics solution.",
    icon: "Cpu"
  },
  {
    id: "fall-2024-sad",
    title: "First Runner-up – System Analysis & Design",
    event: "UIU CSE Project Show",
    term: "Fall 2024",
    year: "2024",
    type: "First Runner-up",
    description: "Awarded 2nd Place (1st Runner-up) in the System Analysis and Design project competition across undergraduate teams.",
    icon: "Medal"
  },
  {
    id: "spring-2025-micro",
    title: "First Runner-up – Microprocessors & Microcontrollers Lab Project",
    event: "UIU CSE Project Show",
    term: "Spring 2025",
    year: "2025",
    type: "First Runner-up",
    description: "Recognized as 1st Runner-up for high-efficiency assembly & microcontroller embedded engineering project.",
    icon: "CircuitBoard"
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "United International University (UIU)",
    period: "2021 – 2026",
    grade: "CGPA: 3.69 / 4.00",
    details: "Specialized in System Analysis & Design, Software Engineering, Database Systems, Web Development, and Hardware Electronics."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rangpur Cadet College",
    period: "Passing Year: 2012",
    grade: "GPA: 5.00 / 5.00",
    details: "Science Discipline with distinction. Disciplined cadet training focusing on leadership, academic rigor, and team collaboration."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Rangpur Cadet College",
    period: "Passing Year: 2010",
    grade: "GPA: 5.00 / 5.00",
    details: "Science Discipline with top merit honor and cadet college leadership activities."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Undergraduate Teaching Assistant (TA)",
    organization: "United International University",
    period: "Summer 2025 Trimester",
    responsibilities: [
      "Supported teaching and learning activities in an undergraduate computer science academic environment.",
      "Assisted students with course-related guidance, programming lab exercises, and conceptual problem solving.",
      "Evaluated lab submissions and conducted one-on-one student mentoring sessions."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Web",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, icon: "Code2", description: "Modern JS features, async programming, DOM manipulation" },
      { name: "Node.js & Express", level: 85, icon: "Server", description: "REST API design, backend middleware, server routing" },
      { name: "HTML5 & CSS3", level: 92, icon: "Layout", description: "Semantic markup, Tailwind CSS, responsive layouts" },
      { name: "PHP", level: 75, icon: "FileCode", description: "Backend scripting, server-side data processing" }
    ]
  },
  {
    title: "Database Management",
    skills: [
      { name: "MySQL", level: 85, icon: "Database", description: "Relational database schema, SQL queries, table indexing" },
      { name: "MongoDB & Mongoose", level: 88, icon: "Layers", description: "Document data models, aggregation pipelines, ODM schemas" }
    ]
  },
  {
    title: "UI/UX & Design",
    skills: [
      { name: "Figma", level: 88, icon: "Figma", description: "Wireframing, high-fidelity UI design, component systems" },
      { name: "Adobe Illustrator", level: 80, icon: "PenTool", description: "Vector graphics design, system diagrams, visual assets" }
    ]
  },
  {
    title: "Tools & Management",
    skills: [
      { name: "Git & GitHub", level: 88, icon: "GitBranch", description: "Version control, branching workflows, repository management" },
      { name: "Jira", level: 80, icon: "Kanban", description: "Agile task tracking, sprint planning, project workflow" },
      { name: "Google Sheets & Canva", level: 90, icon: "Table", description: "Data organization, project documentation, visual slides" }
    ]
  }
];

export const CORE_COMPETENCIES = [
  "System Analysis & Design",
  "Problem Solving",
  "Teamwork & Leadership",
  "Project Coordination",
  "Technical Communication",
  "Adaptability",
  "Software Documentation"
];
