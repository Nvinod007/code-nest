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
      className="cursor-default rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:border-white/30 hover:bg-white/15 sm:px-4 sm:py-2 sm:text-sm"
    >
      {skill}
    </motion.span>
  );
}
