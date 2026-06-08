export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  accent: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "project" | "leadership" | "work";
}

export const skills: Record<string, string[]> = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Socket.io", "PostgreSQL", "PostGIS", "MongoDB"],
  "Cloud & DevOps": ["AWS", "Docker", "Git", "GitHub", "Vercel", "Nginx", "PM2", "CI/CD", "Linux", "Jest", "Postman"],
  AI: ["LLMs", "Claude", "Anthropic API", "Prompt Engineering", "Stable Diffusion"],
};

export const projects: Project[] = [
  {
    title: "Vibe Check",
    description:
      "Real-time location-based social discovery platform. Users view the live atmosphere of nearby locations through community posts, heatmaps, and location-verified interactions.",
    highlights: [
      "Led 5-person engineering team",
      "PostgreSQL/PostGIS geospatial queries",
      "Socket.io real-time updates",
      "AWS cloud deployment",
      "Location-based access control",
      "Real-time vibe scoring algorithm",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "PostGIS", "Socket.io", "AWS"],
    liveUrl: "https://vibe-check-sepia.vercel.app/",
    githubUrl: null,
    accent: "#4ade80",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fvibe-check-sepia.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Texas Hold'em Poker II",
    description:
      "Full-stack multiplayer poker platform with real-time gameplay, authentication, lobby management, and a complete side-pot allocation engine.",
    highlights: [
      "Multiplayer game engine",
      "Real-time Socket.io sync",
      "Authentication system",
      "Lobby & session management",
      "Side-pot calculation logic",
    ],
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "EJS", "Socket.io"],
    liveUrl: "https://term-project-baxter-hirpara-kakadiya-iwpj.onrender.com/",
    githubUrl: null,
    accent: "#60a5fa",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fterm-project-baxter-hirpara-kakadiya-iwpj.onrender.com%2F&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Orbital Debris Tracker",
    description:
      "AI-powered satellite debris analysis platform using Anthropic APIs to process large datasets and assess conjunction risks with a multi-agent pipeline.",
    highlights: [
      "Multi-agent architecture",
      "Large dataset processing",
      "Automated risk analysis pipeline",
      "Space technology domain",
    ],
    tech: ["Python", "Anthropic API", "React"],
    liveUrl: "https://orbital-debris-tracker-client.vercel.app/",
    githubUrl: null,
    accent: "#a78bfa",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Forbital-debris-tracker-client.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "AI Dungeon Master",
    description:
      "Interactive AI storytelling platform that uses Claude Sonnet and Stable Diffusion to generate dynamic narratives and matching visual scenes in real time.",
    highlights: [
      "Multi-turn conversation memory",
      "Narrative state management",
      "AI-generated scene imagery",
      "Prompt optimization engine",
    ],
    tech: ["React", "Node.js", "Claude Sonnet", "Stable Diffusion"],
    liveUrl: null,
    githubUrl: null,
    accent: "#f97316",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Engineering Team Lead",
    organization: "Vibe Check",
    period: "2024 — Present",
    description:
      "Led a cross-functional 5-person engineering team building a real-time location-based social platform. Architected the backend with PostgreSQL/PostGIS for geospatial queries, Socket.io for live updates, and managed AWS deployment infrastructure.",
    type: "project",
  },
  {
    role: "ISA Events Head",
    organization: "Indian Student Association, SFSU",
    period: "2024 — Present",
    description:
      "Lead event planning and coordination for SFSU's Indian Student Association, organizing large-scale cultural events and community engagement initiatives for hundreds of students.",
    type: "leadership",
  },
  {
    role: "Orientation Leader",
    organization: "San Francisco State University",
    period: "2023 — 2024",
    description:
      "Guided incoming students through SFSU orientation programs, facilitating campus integration and providing academic and social support to help new students transition successfully.",
    type: "leadership",
  },
];
