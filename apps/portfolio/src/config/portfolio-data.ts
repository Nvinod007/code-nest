import { personalConfig } from "./personal";
import { socialConfig } from "./social";
import { contactConfig } from "./contact";
import { skillsConfig } from "./skills";

/** Public path under `public/`, e.g. `/assets/projects/shot.png`. Omit for icon placeholder. */
export type PortfolioProject = {
  category: string;
  description: string;
  featured: boolean;
  features: string[];
  githubUrl: string;
  id: string;
  image?: string;
  liveUrl: string;
  name: string;
  status: "completed" | "deployed" | "wip";
  technologies: string[];
};

export const portfolioData = {
  certifications: [
    {
      date: "",
      name: "Certified SAFe Agile Scrum Master",
      organization: "Scaled Agile",
      url: "https://github.com/Nvinod007/documents/blob/main/office/2_carrier/scrum_master_certif.pdf",
    },
    {
      date: "Apr 2026",
      name: "AWS Certified AI Practitioner",
      organization: "Amazon Web Services (AWS)",
      url: "#",
    },
    {
      date: "Apr 2026",
      name: "Supervised Machine Learning: Regression and Classification",
      organization: "DeepLearning.AI",
      url: "#",
    },
  ],
  contact: contactConfig,
  education: [
    {
      degree: "B.Tech - CSE",
      endDate: "May 2023",
      grade: "CGPA: 8.4",
      institution: "RGUKT IIIT RKV",
      location: "Kadapa, AP",
      startDate: "Jul 2019",
    },
  ],
  experience: [
    {
      company: "Carrier Global Technologies",
      description:
        "Software Engineer on Carrier SmartHome — React Native mobile, RN Web portal, and full-stack support tools in production.",
      endDate: "Present",
      id: "carrier-2023",
      location: "Hyderabad, TG",
      logo: "/assets/companies/carrier.png",
      position: "Software Engineer",
      projects: [
        {
          achievements: [
            "Bootstrapped cross-platform web app from scratch — React Native Web, Tailwind, Webpack, and Vite",
            "Implemented deep linking and SEO optimisations — improved search visibility for my.carrier.com",
            "Reached 90% test coverage with Jest and React Testing Library",
            "Integrated analytics and auth flows for production homeowners",
          ],
          description:
            "Responsive web platform for homeowners to manage smart HVAC devices.",
          liveUrl: "https://my.carrier.com/login",
          name: "Consumer Portal Web",
          technologies: ["React", "React Native Web", "Tailwind CSS", "Webpack", "Vite"],
        },
        {
          achievements: [
            "Shipped React 18 support portal with TypeScript, Redux Toolkit, and Firebase Auth",
            "Built real-time technician tracking — RTK Query plus browser geolocation",
            "Integrated MongoDB geo queries, Redis caching, BullMQ job queues, and i18n",
            "Delivered responsive UI with Material UI and Tailwind CSS",
          ],
          description:
            "Full-stack support app for field technicians with real-time tracking.",
          liveUrl: "https://customer-support-007.web.app/",
          name: "Carrier Support Portal",
          technologies: [
            "React 18",
            "TypeScript",
            "Redux Toolkit",
            "Material UI",
            "Tailwind CSS",
            "Firebase Auth",
          ],
        },
        {
          achievements: [
            "Contributed to React Native platform upgrade — improved stability and performance across releases",
            "Hardened Wi‑Fi connectivity and scan edge cases — fewer production interruptions",
            "Shipped auth, device connectivity, and energy management flows for smart HVAC users",
            "Added TalkBack accessibility and localization for global markets",
            "Maintained production through iterative fixes, reverts, and follow-up releases",
          ],
          description:
            "React Native mobile app for Carrier smart HVAC users — production at scale.",
          name: "SmartHome App",
          technologies: [
            "React Native",
            "TypeScript",
            "Redux Toolkit",
            "Firebase Auth",
          ],
        },
      ],
      startDate: "Apr 2023",
      // Add company logo
      website: "https://carrier.com",
    },
    {
      company: "Cartracker",
      description:
        "Internship — inventory system and Stripe payment integration on Node.js/Express.",
      endDate: "Apr 2023",
      id: "cartracker-2023",
      location: "Hyderabad, TG",
      position: "Internship",
      projects: [
        {
          achievements: [
            "Integrated Stripe payment gateway into existing systems",
            "Ramped on Node.js and Express.js in 2 weeks",
            "Built internal inventory management as first full-stack application",
          ],
          description:
            "Internal inventory management system with payment gateway integration.",
          name: "Internal Inventory Management System",
          technologies: ["Node.js", "Express.js"],
        },
      ],
      startDate: "Mar 2023",
    },
  ],
  personal: personalConfig,
  projects: [
    {
      category: "Developer Tools",
      description:
        "Step-by-step JavaScript execution visualizer — call stack, event loop, and async/await. CodeMirror 6 editor with Node sandbox API.",
      featured: true,
      features: [
        "Call stack & event loop visualization",
        "Async/await step tracing",
        "CodeMirror 6 + shadcn/ui editor",
        "POST /api/run Node sandbox",
        "Acorn + esbuild AST pipeline",
      ],
      githubUrl: "https://github.com/Nvinod007/exec-lens",
      id: "exec-lens",
      image: "/assets/projects/exec-lens.svg",
      liveUrl: "https://js-exec-lens.vercel.app/",
      name: "ExecLens",
      status: "deployed",
      technologies: ["Next.js", "TypeScript", "CodeMirror 6", "shadcn/ui", "Node.js"],
    },
    {
      category: "Web Application",
      description:
        "No-login planning poker — create a room, share the code, vote, and reveal in real time.",
      featured: true,
      features: [
        "Create room without sign-up",
        "Share room code instantly",
        "Real-time voting",
        "Reveal votes in sync",
        "Supabase Realtime backend",
      ],
      githubUrl: "https://github.com/Nvinod007/sprint-poker",
      id: "sprint-poker",
      image: "/assets/projects/sprint-poker.svg",
      liveUrl: "https://sprintpoker.vercel.app/",
      name: "Sprint Poker",
      status: "deployed",
      technologies: ["Next.js", "React", "TypeScript", "Supabase Realtime"],
    },
    {
      category: "Game Development",
      description:
        "Multiplayer pictionary — lobby live at drawnplay.vercel.app (create/join rooms). Building real-time canvas drawing and scoring.",
      featured: true,
      features: [
        "Create and join game rooms",
        "Lobby shipped and live",
        "Real-time canvas drawing (in progress)",
        "Socket.io multiplayer",
        "Score tracking (in progress)",
      ],
      githubUrl: "https://github.com/Nvinod007/drawnguess",
      id: "drawnguess",
      image: "/assets/projects/drawnguess.svg",
      liveUrl: "https://drawnplay.vercel.app/",
      name: "DrawnGuess",
      status: "wip",
      technologies: [
        "TypeScript",
        "React",
        "Socket.io",
        "Canvas API",
        "Node.js",
      ],
    },
    {
      category: "Web Application",
      description:
        "This portfolio — Nx monorepo with shared UI, types, themes, and Nx Cloud caching.",
      featured: true,
      features: [
        "Nx monorepo architecture",
        "Shared UI components & themes",
        "Portfolio app with Next.js",
        "Nx Cloud build caching",
        "TypeScript throughout",
      ],
      githubUrl: "https://github.com/Nvinod007/code-nest",
      id: "code-nest",
      image: "/assets/projects/code-nest.svg",
      liveUrl: "https://vinodkumar-flame.vercel.app/",
      name: "CodeNest",
      status: "deployed",
      technologies: ["Next.js", "TypeScript", "Nx", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Web Application",
      description:
        "Netflix-inspired frontend with Firebase auth and ChatGPT-powered content recommendations — learning project.",
      featured: false,
      features: [
        "Netflix-style UI/UX",
        "Firebase Authentication",
        "AI-powered recommendations",
        "Content browsing interface",
        "Responsive design",
      ],
      githubUrl: "https://github.com/Nvinod007/NexGPT",
      id: "nexgpt",
      liveUrl: "",
      name: "NexGPT",
      status: "wip",
      technologies: [
        "TypeScript",
        "React",
        "Firebase Auth",
        "OpenAI API",
        "Tailwind CSS",
      ],
    },
    {
      category: "E-commerce",
      description:
        "Modern food ordering platform built with React and TypeScript, featuring intuitive UI for browsing restaurants, managing cart, and placing orders.",
      featured: false,
      features: [
        "Restaurant browsing",
        "Cart management",
        "Order placement system",
        "Responsive design",
        "State management with Redux",
      ],
      githubUrl: "https://github.com/Nvinod007/Food-ordering-web-app-react",
      id: "food-ordering",
      liveUrl: "",
      name: "Food Ordering Web App",
      status: "wip",
      technologies: [
        "TypeScript",
        "React",
        "Redux",
        "CSS Modules",
        "REST APIs",
      ],
    },
    {
      category: "Data Science",
      description:
        "Python-based matching algorithm system for Product Information Management, optimizing product data synchronization and matching processes.",
      featured: false,
      features: [
        "Product data matching",
        "Algorithm optimization",
        "Data synchronization",
        "Processing automation",
        "Performance optimization",
      ],
      githubUrl: "https://github.com/Nvinod007/pim-match",
      id: "pim-match",
      liveUrl: "",
      name: "PIM Match",
      status: "completed",
      technologies: ["Python", "Data Processing", "Algorithm Design", "JSON"],
    },
    {
      category: "Backend Development",
      description:
        "Server-side calculator application built with Node.js and Express.js, demonstrating backend development fundamentals and API design.",
      featured: false,
      features: [
        "Mathematical operations API",
        "Express.js backend",
        "RESTful endpoints",
        "Error handling",
        "Server-side computation",
      ],
      githubUrl: "https://github.com/Nvinod007/simpleCalculatorNode",
      id: "calculator-node",
      liveUrl: "",
      name: "Simple Calculator API",
      status: "completed",
      technologies: ["JavaScript", "Node.js", "Express.js", "REST API"],
    },
    {
      category: "Networking",
      description:
        "Cross-platform application for WiFi connection management and data sharing, enabling seamless file and text transmission between devices.",
      featured: false,
      features: [
        "WiFi connection management",
        "File transfer capabilities",
        "Text sharing functionality",
        "Cross-device compatibility",
        "Network optimization",
      ],
      githubUrl:
        "https://github.com/Nvinod007/Wifi-Connection-and-Data-Sharing",
      id: "wifi-data-sharing",
      liveUrl: "",
      name: "WiFi Data Sharing",
      status: "completed",
      technologies: [
        "JavaScript",
        "Network Programming",
        "File Transfer",
        "WiFi APIs",
      ],
    },
    {
      category: "Desktop Application",
      description:
        "Java-based music player application with modern UI and comprehensive audio management features, built for desktop environments.",
      featured: false,
      features: [
        "Audio playback controls",
        "Playlist management",
        "File format support",
        "Modern desktop UI",
        "Audio visualization",
      ],
      githubUrl: "https://github.com/Nvinod007/musicPlayer",
      id: "music-player",
      liveUrl: "",
      name: "Music Player",
      status: "completed",
      technologies: ["Java", "Swing/JavaFX", "Audio APIs", "File Management"],
    },
    {
      category: "Utility",
      description:
        "JavaScript application for fetching location details using pincode, demonstrating API integration and geolocation services.",
      featured: false,
      features: [
        "Pincode-based location search",
        "API integration",
        "Geographic data retrieval",
        "User-friendly interface",
        "Error handling",
      ],
      githubUrl: "https://github.com/Nvinod007/Fecthing-Location-By-pincode",
      id: "location-finder",
      liveUrl: "",
      name: "Location by Pincode",
      status: "completed",
      technologies: [
        "JavaScript",
        "REST APIs",
        "Geolocation",
        "DOM Manipulation",
      ],
    },
    {
      category: "Web Application",
      description:
        "React exploration and learning project—experiments and components built with React and HTML.",
      featured: false,
      features: [
        "React components",
        "Learning experiments",
        "HTML integration",
        "Frontend exploration",
      ],
      githubUrl: "https://github.com/Nvinod007/ReactExploration",
      id: "react-exploration",
      liveUrl: "",
      name: "React Exploration",
      status: "completed",
      technologies: ["HTML", "React", "JavaScript"],
    },
  ] as PortfolioProject[],
  skills: skillsConfig,
  social: socialConfig,
};

export type PortfolioData = typeof portfolioData;
