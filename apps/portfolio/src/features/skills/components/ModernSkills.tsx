"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/config/portfolio-data";
import SkillCategory from "./SkillCategory";

export default function ModernSkills() {
  const { skills } = portfolioData;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
  };

  const skillCategories = [
    {
      color: "from-blue-500 to-blue-600",
      description: "User Interface & Experience",
      icon: "🎨",
      skills: skills.frontend,
      title: "Frontend",
    },
    {
      color: "from-green-500 to-green-600",
      description: "Server & Database Technologies",
      icon: "⚙️",
      skills: skills.backend,
      title: "Backend",
    },
    {
      color: "from-purple-500 to-purple-600",
      description: "Development & Deployment Tools",
      icon: "🛠️",
      skills: skills.tools,
      title: "Tools & Others",
    },
    {
      color: "from-orange-500 to-orange-600",
      description: "Mobile App Development",
      icon: "📱",
      skills: skills.mobile,
      title: "Mobile",
    },
    {
      color: "from-cyan-500 to-cyan-600",
      description: "Cloud Services & Deployment",
      icon: "☁️",
      skills: skills.cloud,
      title: "Cloud & DevOps",
    },
  ];

  return (
    <section id="skills" className="px-4 py-12 sm:py-20">
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
            Technical Skills
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl px-4 text-base text-gray-400 sm:px-0 sm:text-lg"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills}
              color={category.color}
              icon={category.icon}
              categoryIndex={categoryIndex}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
