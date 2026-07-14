export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  impact: string;
  problem: string;
  role: string;
  architecture: string;
  highlights: string[];
  stack: string[];
  results: string[];
  github: string;
  live?: string;
  visual: "support" | "travel" | "workspace";
};

export const profile = {
  name: "Sabbir Azim",
  shortName: "Sabbir",
  initials: "SA",
  title: "Generative AI Engineer",
  positioning: "Agentic AI, voice systems & production RAG",
  email: "fazley.azim.sabbir@gmail.com",
  phone: "+8801779231104",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  github: "https://github.com/Sabbir-Azim",
  linkedin: "https://www.linkedin.com/in/sabbirazim",
  website: "https://sabbir-azim.github.io",
  resume: "/Sabbir-Azim-Resume.pdf",
};

export const experience = [
  {
    role: "Generative AI Engineer",
    company: "Voxabeat",
    location: "Hyderabad, India",
    dates: "Nov 2025 - Jun 2026",
    summary:
      "Built production voice-agent infrastructure for multilingual, real-time customer interactions.",
    bullets: [
      "Architected multilingual AI voice agents with LiveKit, Deepgram, OpenAI and Cartesia, sustaining sub-1-second latency across 20+ language variants.",
      "Shipped inbound and outbound voice pipelines on AWS and GCP with MongoDB, SIP telephony and real-time sentiment analysis for live client deployments.",
    ],
    stack: ["LiveKit", "Deepgram", "OpenAI", "Cartesia", "AWS", "GCP", "MongoDB"],
  },
  {
    role: "Research Assistant",
    company: "Intelligence Academy",
    location: "Dhaka, Bangladesh",
    dates: "May 2025 - Oct 2025",
    summary:
      "Applied machine learning, NLP and computer vision to structured research programs.",
    bullets: [
      "Screened 1,048+ Scopus and IEEE articles to synthesize current methods, evidence and research gaps.",
      "Fine-tuned DeBERTa-v3 and BERT and benchmarked YOLO and Mask R-CNN pipelines, reaching up to 99% accuracy on research datasets.",
    ],
    stack: ["DeBERTa-v3", "BERT", "YOLO", "Mask R-CNN", "NLP", "Computer Vision"],
  },
];

export const projects: Project[] = [
  {
    slug: "supportly",
    name: "Supportly",
    eyebrow: "AI customer support SaaS",
    summary:
      "A multi-tenant support platform that connects customers, agents and administrators through secure workflows and knowledge-grounded AI.",
    impact:
      "Turns a standalone chatbot into an end-to-end support operation with human-controlled AI assistance.",
    problem:
      "Support teams need more than generated answers: they need secure identity, tenant isolation, ticket ownership, knowledge retrieval and a clear handoff between automation and people.",
    role:
      "Designed and built the full-stack product across the Next.js frontend, FastAPI services, PostgreSQL data layer and RAG workflow.",
    architecture:
      "Role-specific customer, agent and admin experiences share a FastAPI API. JWT access and refresh tokens, API-level RBAC and tenant-scoped repositories protect data. pgvector powers semantic knowledge retrieval, while the Copilot keeps final replies under agent control.",
    highlights: [
      "Customer, agent and admin workflows in one product",
      "Knowledge-grounded chat with citation metadata",
      "Agent Copilot for replies, summaries and contextual retrieval",
      "Least-loaded assignment and graceful Redis degradation",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "PostgreSQL", "Supabase", "pgvector", "Docker"],
    results: ["66 passing backend tests", "16 verified frontend routes", "Strict TypeScript production build"],
    github: "https://github.com/Sabbir-Azim/Supportly_AI_Powered_Customer_Supprt",
    live: "https://supportly-web-nine.vercel.app/login",
    visual: "support",
  },
  {
    slug: "travelsphere-ai",
    name: "TravelSphere AI",
    eyebrow: "Multi-agent travel planning",
    summary:
      "A coordinated four-agent workflow that converts natural-language travel requests into flight options, hotel research and structured itineraries.",
    impact:
      "Consolidates fragmented travel research into one traceable, stateful planning flow.",
    problem:
      "Planning a trip usually means switching between flight search, hotel research and itinerary documents with no shared context.",
    role:
      "Developed the LangGraph orchestration, external data integrations, persistent conversation state, FastAPI API and responsive interface.",
    architecture:
      "Four specialized agents handle flight discovery, hotel research, itinerary generation and final formatting. LangGraph coordinates the workflow, PostgreSQL preserves conversation state, and Groq generates responses grounded by AviationStack and Tavily data.",
    highlights: [
      "Four-agent LangGraph workflow",
      "Flight data through AviationStack",
      "Tavily-powered hotel research",
      "Persistent PostgreSQL conversation state",
    ],
    stack: ["FastAPI", "LangGraph", "LangChain", "Groq", "PostgreSQL", "Tavily", "AviationStack", "Jinja2"],
    results: ["Four coordinated specialist agents", "Persistent planning context", "Flight and hotel data integrations"],
    github: "https://github.com/Sabbir-Azim/TravelSphere-AI",
    live: "https://travel-sphere-ai-pi.vercel.app/",
    visual: "travel",
  },
  {
    slug: "lunarkchat",
    name: "LunarkChat",
    eyebrow: "Multi-model agentic workspace",
    summary:
      "A streaming AI workspace combining model choice, document RAG, live web search, persistent conversations and long-term memory.",
    impact:
      "Brings the core capabilities of a modern AI workbench into one deployable, server-controlled application.",
    problem:
      "AI workflows often split chat, document search, web research and memory across separate tools while exposing provider configuration to the client.",
    role:
      "Engineered the FastAPI application, LangGraph workflow, multi-format RAG pipeline, persistence layer, responsive interface and AWS delivery workflow.",
    architecture:
      "FastAPI streams responses over SSE. LangGraph and LangChain orchestrate five selectable Gemini and OpenAI models plus RAG, memory, calculator and Tavily tools. ChromaDB stores embeddings, SQLite persists conversations and a GitHub Actions pipeline deploys Docker images through ECR to EC2.",
    highlights: [
      "Five selectable Gemini and OpenAI models",
      "SSE streaming and persistent conversation history",
      "RAG for PDF, DOCX, TXT, Markdown, Python and CSV",
      "Docker and GitHub Actions delivery to AWS",
    ],
    stack: ["FastAPI", "LangGraph", "LangChain", "Gemini", "OpenAI", "ChromaDB", "SQLite", "Tavily", "Docker", "AWS"],
    results: ["Five available model choices", "Six supported upload formats", "Automated ECR-to-EC2 deployment workflow"],
    github: "https://github.com/Sabbir-Azim/Lunark_Chat",
    live: "https://lunark-chat.vercel.app/",
    visual: "workspace",
  },
];

export const skillGroups = [
  {
    title: "Agentic AI & LLM systems",
    level: "Core expertise",
    skills: ["LangGraph", "LangChain", "RAG", "Tool use", "Semantic search", "Embeddings", "Voice AI", "Prompt engineering"],
  },
  {
    title: "Product engineering",
    level: "Core expertise",
    skills: ["Python", "TypeScript", "FastAPI", "Next.js", "React", "PostgreSQL", "SQLAlchemy", "Pydantic"],
  },
  {
    title: "ML, NLP & vision",
    level: "Strong working knowledge",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "BERT", "DeBERTa", "YOLO", "Mask R-CNN", "scikit-learn"],
  },
  {
    title: "Cloud, data & delivery",
    level: "Strong working knowledge",
    skills: ["Docker", "GitHub Actions", "AWS ECR/EC2", "GCP", "Supabase", "Redis", "MongoDB", "MLflow"],
  },
];

export const education = {
  degree: "B.Sc. in Textile Engineering",
  institution: "Bangladesh University of Textiles",
  location: "Dhaka, Bangladesh",
  dates: "Jan 2018 - Dec 2023",
};

export const certificates = [
  { name: "AI Engineer Career Track", issuer: "365 Data Science", dates: "Dec 2024 - Jul 2025" },
  { name: "Data Scientist Career Track", issuer: "365 Data Science", dates: "Jan 2025 - Jul 2025" },
  { name: "Machine Learning Specialist", issuer: "Codecademy", dates: "Nov 2024 - Jun 2025" },
];
