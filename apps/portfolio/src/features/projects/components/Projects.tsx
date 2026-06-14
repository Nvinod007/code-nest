"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Github, Play, Filter } from "lucide-react";
import { portfolioData, type PortfolioData } from "@/config/portfolio-data";
import { ProjectImage } from "@/shared/components";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map(p => p.category).filter(Boolean)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  // Separate projects by importance
  const featuredProjects = filteredProjects.filter(p =>
    ["live-sync", "drawnguess"].includes(p.id)
  );

  const learningProjects = filteredProjects.filter(p =>
    ["nexgpt", "food-ordering", "pim-match"].includes(p.id)
  );

  const archiveProjects = filteredProjects.filter(
    p =>
      ![
        "live-sync",
        "drawnguess",
        "nexgpt",
        "food-ordering",
        "pim-match",
      ].includes(p.id)
  );

  return (
    <section id="projects" className="bg-gray-900/30 px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-1000 sm:mb-16 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-gray-400 sm:px-0 sm:text-lg">
            A showcase of my development journey and key projects
          </p>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="mr-4 flex items-center gap-2 text-sm text-gray-400">
              <Filter className="h-4 w-4" />
              <span>Filter by:</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div
          className={`mb-16 transition-all delay-200 duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="mb-8 text-2xl font-bold text-white">
            🌟 Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                size="large"
              />
            ))}
          </div>
        </div>

        {/* Learning Projects */}
        {learningProjects.length > 0 && (
          <div
            className={`delay-400 mb-16 transition-all duration-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-300">
              📚 Learning & Development Projects
            </h3>
            <p className="mb-6 text-sm text-gray-400">
              Projects built while exploring new technologies and concepts
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {learningProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  size="medium"
                />
              ))}
            </div>
          </div>
        )}

        {/* Archive Projects - Collapsible */}
        {archiveProjects.length > 0 && (
          <div
            className={`delay-600 transition-all duration-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <details className="group">
              <summary className="cursor-pointer list-none">
                <div className="mb-6 flex items-center gap-3">
                  <h3 className="text-lg font-medium text-gray-400 group-open:text-gray-300">
                    🗃️ Archive Projects ({archiveProjects.length})
                  </h3>
                  <span className="text-sm text-gray-500 transition-transform group-open:rotate-90">
                    ▶
                  </span>
                </div>
              </summary>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {archiveProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    size="small"
                  />
                ))}
              </div>
            </details>
          </div>
        )}
      </div>
    </section>
  );
}

// Project Card Component without Framer Motion
function ProjectCard({
  project,
  index,
  size,
}: {
  project: PortfolioData['projects'][0];
  index: number;
  size: "large" | "medium" | "small";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getSizeClasses = () => {
    switch (size) {
      case "large":
        return {
          container: "p-6",
          description: "text-base",
          image: "h-56",
          showFeatures: true,
          title: "text-2xl",
        };
      case "medium":
        return {
          container: "p-4",
          description: "text-sm",
          image: "h-40",
          showFeatures: false,
          title: "text-lg",
        };
      case "small":
        return {
          container: "p-3",
          description: "text-xs",
          image: "h-24",
          showFeatures: false,
          title: "text-sm",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div
      className={`group transition-all duration-500 ${
        isHovered ? "-translate-y-2 scale-105 transform" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
        opacity: 1,
        transform: "translateY(0)",
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:bg-gray-800/50">
        {/* Status Badge */}
        {project.status && size !== "small" && (
          <div
            className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold ${
              project.status === "deployed"
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                : project.status === "wip"
                  ? "animate-pulse bg-gradient-to-r from-orange-500 to-yellow-600 text-white"
                  : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
            }`}
          >
            {project.status === "deployed" && "🚀 Live"}
            {project.status === "wip" && "🚧 WIP"}
            {project.status === "completed" && "✅ Done"}
          </div>
        )}

        {/* Featured Badge - only for large cards */}
        {project.featured && size === "large" && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
            ⭐ Featured
          </div>
        )}

        {/* Category Badge */}
        {project.category && size !== "small" && (
          <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            {project.category}
          </div>
        )}

        {/* Project Image */}
        {project.image && (
          <div className={`relative ${sizeClasses.image} overflow-hidden`}>
            <ProjectImage
              src={project.image}
              alt={project.name}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        )}

        <div className={sizeClasses.container}>
          {/* Project Title */}
          <h3 className={`mb-2 font-bold text-white ${sizeClasses.title}`}>
            {project.name}
          </h3>

          {/* Project Description */}
          <p
            className={`mb-4 leading-relaxed text-gray-400 ${sizeClasses.description}`}
          >
            {size === "small"
              ? `${project.description.slice(0, 80)}...`
              : project.description}
          </p>

          {/* Features - only for large cards */}
          {sizeClasses.showFeatures && project.features && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-white">
                Key Features:
              </h4>
              <ul className="space-y-1 text-xs text-gray-400">
                {project.features
                  .slice(0, 3)
                  .map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 text-green-400">•</span>
                      {feature}
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, size === "small" ? 2 : 5)
                .map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-gray-600 bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              {project.technologies.length > (size === "small" ? 2 : 5) && (
                <span className="rounded-lg border border-gray-600 bg-gray-800 px-2 py-1 text-xs font-medium text-gray-500">
                  +{project.technologies.length - (size === "small" ? 2 : 5)}
                </span>
              )}
            </div>
          </div>

          {/* Project Links */}
          {size !== "small" && (
            <div className="flex flex-col gap-3 sm:flex-row">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  <Play className="h-4 w-4" />
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          )}

          {/* Minimal links for small cards */}
          {size === "small" && (
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-white"
                >
                  <Github className="h-3 w-3" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Play className="h-3 w-3" />
                  Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
