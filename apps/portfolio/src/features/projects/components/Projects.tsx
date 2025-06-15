"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Play } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

export default function Projects() {
  const { projects } = portfolioData;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
      y: 0,
    },
  };

  return (
    <section id="projects" className="bg-gray-900/30 px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl px-4 text-base text-gray-400 sm:px-0 sm:text-lg"
          >
            A showcase of my recent work and side projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:bg-gray-800/50">
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  {/* Project Title */}
                  <h3 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-400 sm:mb-6 sm:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="mb-2 text-sm font-semibold text-white">
                        Key Features:
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-400 sm:text-sm">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 text-green-400">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="rounded-lg border border-gray-600 bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300 sm:px-3"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="h-4 w-4" />
                        Live Demo
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
