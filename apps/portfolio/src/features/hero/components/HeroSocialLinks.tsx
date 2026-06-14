"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";
import { useState } from "react";

export default function HeroSocialLinks() {
  const { personal, social } = portfolioData;
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      bgColor: "hover:bg-purple-400/10",
      color:
        "hover:border-purple-400 hover:text-purple-400 hover:shadow-purple-400/25",
      href: social.github,
      icon: Github,
      label: "GitHub",
    },
    {
      bgColor: "hover:bg-blue-400/10",
      color:
        "hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/25",
      href: social.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      bgColor: "hover:bg-green-400/10",
      color:
        "hover:border-green-400 hover:text-green-400 hover:shadow-green-400/25",
      href: `mailto:${personal.email}`,
      icon: Mail,
      label: "Email",
    },
  ].filter(({ href }) => href);

  return (
    <motion.div
      className="mb-12 flex justify-center gap-4 sm:mb-16 sm:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      {socialLinks.map(({ icon: Icon, href, label, color, bgColor }) => (
        <motion.div
          key={label}
          className="relative"
          onHoverStart={() => setHoveredLink(label)}
          onHoverEnd={() => setHoveredLink(null)}
        >
          <motion.a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`relative rounded-full border border-gray-600 p-3 text-gray-400 transition-all duration-300 hover:shadow-lg sm:p-4 ${color} ${bgColor}`}
            whileHover={{ rotate: 5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />

            {/* External link indicator */}
            {href.startsWith("http") && (
              <ExternalLink className="absolute -right-1 -top-1 h-3 w-3 text-gray-500" />
            )}
          </motion.a>

          {/* Tooltip */}
          {hoveredLink === label && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-lg bg-black/80 px-3 py-1 text-xs text-white backdrop-blur-sm"
            >
              {label}
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black/80" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
