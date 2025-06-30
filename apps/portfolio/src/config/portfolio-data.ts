export const portfolioData = {
  certifications: [
    {
      date: "2024",
      name: "Certified Safe Agile Scrum Master",
      organization: "Agile Alliance",
      url: "#",
    },
    // Add more certifications
  ],
  contact: {
    availability: "Available for freelance work",
    // email, phone, or form
    calendlyUrl: "",

    description:
      "I'm always interested in new opportunities and exciting projects. Whether you're a company looking for a developer or you're a fellow developer wanting to collaborate, I'd love to hear from you!",

    // Optional - for booking calls
    formAction: "",

    preferredContact: "email",

    responseTime: "I typically respond within 24 hours",

    // For form submission endpoint
    socialCTA: "Follow me on social media for updates on my latest projects",

    subtitle: "Ready to bring your ideas to life",
    title: "Let's Work Together",
  },
  education: [
    {
      degree: "B.Tech - CSE",
      endDate: "May 2023",
      grade: "CGPA: 8.4",
      institution: "RGUKT IIIT RKV",
      location: "Kadapa, AP",
      startDate: "Jul 2019",
    },
    {
      degree: "Pre-University",
      endDate: "May 2019",
      grade: "CGPA: 8.2",
      institution: "RGUKT IIIT RKV",
      location: "Kadapa, AP",
      startDate: "Jul 2017",
    },
  ],
  experience: [
    {
      company: "Carrier Global Technologies",
      description:
        "Building scalable web and mobile applications for smart HVAC systems",
      endDate: "Present",
      id: "carrier-2023",
      location: "Hyderabad, TG",
      logo: "/assets/companies/carrier.png",
      position: "Associate Software Engineer",
      projects: [
        {
          achievements: [
            "Bootstrapped the project from scratch using React Native Web, Tailwind CSS, Webpack, and Vite",
            "Implemented deep linking and SEO optimizations, significantly improving search visibility",
            "Enhanced user experience by optimizing bundle size, lazy loading, and responsive rendering",
            "Increased test coverage to 90% using Jest and React Testing Library",
          ],
          description:
            "A responsive web platform enabling homeowners to manage smart HVAC devices and access real-time insights.",
          name: "Consumer Portal Web",
          technologies: ["React Native Web", "Tailwind CSS", "Webpack", "Vite"],
        },
        {
          achievements: [
            "Developed core mobile features to monitor indoor air quality and device connectivity",
            "Integrated real-time APIs to provide pollution data overlays",
            "Participated in app redesign improving stability and device compatibility",
            "Added geospatial matching via MongoDB geo queries and Redis caching",
          ],
          description:
            "React Native mobile application for Carrier smart HVAC system users.",
          name: "SmartHome App",
          technologies: [
            "React Native",
            "TypeScript",
            "Redux Toolkit",
            "Firebase Auth",
          ],
        },
      ],
      startDate: "Jun 2023",
      // Add company logo
      website: "https://carrier.com",
    },
    {
      company: "Cartracker",
      description:
        "Developed internal inventory management system and payment gateway integration",
      endDate: "Apr 2023",
      id: "cartracker-2023",
      location: "Hyderabad, TG",
      position: "Internship",
      projects: [
        {
          achievements: [
            "Integrated the Stripe payment gateway into existing systems",
            "Quickly ramped up on Node.js and Express.js within 2 weeks",
            "Demonstrated adaptability and commitment to fast-paced learning",
          ],
          description:
            "Spearheaded the development of an internal inventory management system as my first full-stack application.",
          name: "Internal Inventory Management System",
          technologies: ["Node.js", "Express.js"],
        },
      ],
      startDate: "Mar 2023",
    },
  ],
  personal: {
    avatar: "/assets/avatar.jpg",
    email: "vinodkumar.nelanakula@gmail.com",
    location: "Hyderabad, TG",
    name: "Vinod Kumar Nelanakula",
    phone: "7981181409",
    // Add your photo path
    resume: "/assets/VinodKumar_Fullstack.pdf",

    subtitle: "React & React Native Expert",

    summary:
      "Associate Software Engineer with 2+ years of experience building scalable web and mobile apps using React, TypeScript, Node.js, and MongoDB.",
    // Add your resume path
    tagline: [
      "I build amazing React applications",
      "I create smooth user experiences",
      "I work with React Native",
      "I develop with TypeScript",
      "I build scalable web solutions",
    ],
    title: "Frontend Developer",
  },
  projects: [
    {
      category: "Web Application",
      description:
        "Real-time communication platform featuring live video calls, instant messaging, and collaborative tools.",
      featured: true,
      features: [
        "Real-time chat messaging",
        "Video conferencing",
        "Live collaboration tools",
        "Screen sharing capabilities",
        "Secure communications",
      ],
      githubUrl: "https://github.com/Nvinod007/code-nest",
      id: "live-sync",
      image: "/assets/projects/live-sync.png",
      liveUrl: "https://live-sync.vercel.app",
      name: "Live Sync",
      status: "deployed",
      technologies: [
        "Next.js",
        "WebRTC",
        "WebSocket",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      category: "Game Development",
      description:
        "Interactive drawing and guessing game with real-time multiplayer features. Players can draw and guess what others are drawing in an engaging social gaming experience.",
      featured: true,
      features: [
        "Real-time drawing collaboration",
        "Multiplayer guessing game",
        "Interactive canvas drawing",
        "Live chat integration",
        "Score tracking system",
      ],
      githubUrl: "https://github.com/Nvinod007/drawnguess",
      id: "drawnguess",
      image: "/assets/projects/drawnguess.png",
      liveUrl: "",
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
        "Netflix-inspired frontend application with authentication, Google Firebase integration, and ChatGPT API integration for intelligent content recommendations.",
      featured: true,
      features: [
        "Netflix-style UI/UX",
        "Firebase Authentication",
        "AI-powered recommendations",
        "Content browsing interface",
        "Responsive design",
      ],
      githubUrl: "https://github.com/Nvinod007/NexGPT",
      id: "nexgpt",
      image: "/assets/projects/nexgpt.png",
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
      image: "/assets/projects/food-ordering.png",
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
      image: "/assets/projects/pim-match.png",
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
      image: "/assets/projects/calculator.png",
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
      image: "/assets/projects/wifi-sharing.png",
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
      image: "/assets/projects/music-player.png",
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
      image: "/assets/projects/location-finder.png",
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
  ],
  skills: {
    backend: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "Redis",
      "SQL",
      "REST APIs",
    ],
    cloud: ["Firebase", "Vercel", "Netlify", "AWS S3"],
    frontend: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "Next.js",
    ],
    mobile: ["React Native", "Expo", "Android Studio", "Xcode"],
    tools: [
      "Firebase Auth",
      "RTK Query",
      "Jest",
      "React Testing Library",
      "Git",
      "Webpack",
      "Vite",
      "Docker",
    ],
  },
  social: {
    codepen: "",
    github: "https://github.com/Nvinod007",

    linkedin: "https://www.linkedin.com/in/nvinod007/",
    portfolio: "https://your-portfolio.com",
    twitter: "",
  },
};

export type PortfolioData = typeof portfolioData;
