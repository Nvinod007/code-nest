"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Download } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

export default function HeroCTAButtons() {
  const { personal } = portfolioData;

  return (
    <motion.div
      className="mb-12 flex flex-col items-center justify-center gap-3 px-4 sm:mb-16 sm:flex-row sm:gap-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
        Get In Touch
      </motion.button>

      <motion.button
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-blue-400 hover:text-blue-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
        View My Work
      </motion.button>

      {personal.resume && (
        <motion.a
          href={personal.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-green-400 hover:text-green-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="h-4 w-4 sm:h-5 sm:w-5" />
          Download Resume
        </motion.a>
      )}
    </motion.div>
  );
}
