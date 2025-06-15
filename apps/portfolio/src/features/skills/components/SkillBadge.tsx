"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  delay: number;
  inView: boolean;
}

export default function SkillBadge({ skill, delay, inView }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        delay,
        duration: 0.4,
      }}
      className="cursor-default rounded-lg border border-gray-600 bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-gray-500 hover:bg-gray-700 sm:px-3 sm:py-2 sm:text-sm"
    >
      {skill}
    </motion.span>
  );
}
