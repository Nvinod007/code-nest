"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

export default function HeroContactInfo() {
  const { personal } = portfolioData;

  return (
    <motion.div
      className="mb-8 flex flex-col flex-wrap justify-center gap-3 text-xs text-gray-500 sm:mb-12 sm:flex-row sm:gap-6 sm:text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
    >
      <span className="flex items-center justify-center gap-2">
        <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
        <span className="break-all">{personal.email}</span>
      </span>
      <span className="flex items-center justify-center gap-2">
        <span>📱</span>
        {personal.phone}
      </span>
      <span className="flex items-center justify-center gap-2">
        <span>📍</span>
        {personal.location}
      </span>
    </motion.div>
  );
}
