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
      "I&apos;m always interested in new opportunities and exciting projects. Whether you&apos;re a company looking for a developer or you&apos;re a fellow developer wanting to collaborate, I&apos;d love to hear from you!",

    // Optional - for booking calls
    formAction: "",

    preferredContact: "email",

    responseTime: "I typically respond within 24 hours",

    // For form submission endpoint
    socialCTA: "Follow me on social media for updates on my latest projects",

    subtitle: "Ready to bring your ideas to life",
    title: "Let&apos;s Work Together",
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
    resume: "/assets/resume.pdf",

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
      description:
        "Real-time communication platform featuring live video calls, instant messaging, and collaborative tools.",
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
      technologies: [
        "Next.js",
        "WebRTC",
        "WebSocket",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    // Add more projects here
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

    linkedin: "https://linkedin.com/in/vinod-kumar-nelanakula",
    // Optional
    portfolio: "https://your-portfolio.com",
    twitter: "", // Optional
  },
};

export type PortfolioData = typeof portfolioData;
