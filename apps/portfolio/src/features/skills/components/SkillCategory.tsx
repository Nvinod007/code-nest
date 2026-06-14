"use client";

import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: string[];
  color: string;
  icon: string;
  categoryIndex: number;
  inView: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
};

export default function SkillCategory({
  title,
  description,
  skills,
  color,
  icon,
  categoryIndex,
  inView,
}: SkillCategoryProps) {
  const isAsymmetric = categoryIndex % 3 === 1;
  return (
    <motion.div variants={itemVariants} className="group">
      <div
        className={`h-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 sm:p-6 ${
          isAsymmetric ? "rounded-tl-[2rem] rounded-br-[1.5rem] rounded-tr-xl rounded-bl-xl" : "rounded-3xl"
        }`}
      >
        <div className="mb-4 flex items-center gap-3 sm:mb-6">
          <div
            className={`h-10 w-10 rounded-2xl bg-gradient-to-r sm:h-12 sm:w-12 ${color} flex items-center justify-center text-xl sm:text-2xl`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              {title}
            </h3>
            <p className="text-xs text-gray-400 sm:text-sm">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <SkillBadge
              key={skill}
              skill={skill}
              delay={categoryIndex * 0.2 + skillIndex * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
