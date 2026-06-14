"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

export default function SocialLinksFooter() {
  const { social, personal } = portfolioData;
  
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-4">
      <motion.a
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-gray-400 transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-400/25"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github className="h-4 w-4" />
        <span className="text-sm font-medium">GitHub</span>
        <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.a>

      <motion.a
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-gray-400 transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Linkedin className="h-4 w-4" />
        <span className="text-sm font-medium">LinkedIn</span>
        <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.a>

      <motion.a
        href={`mailto:${personal.email}`}
        className="group flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-gray-400 transition-all duration-300 hover:border-green-400 hover:text-green-400 hover:shadow-lg hover:shadow-green-400/25"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail className="h-4 w-4" />
        <span className="text-sm font-medium">Email</span>
      </motion.a>
    </div>
  );
}
