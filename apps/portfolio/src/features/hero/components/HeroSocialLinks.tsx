"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

export default function HeroSocialLinks() {
  const { personal, social } = portfolioData;

  const socialLinks = [
    { href: social.github, icon: Github, label: "GitHub" },
    { href: social.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
  ].filter(({ href }) => href);

  return (
    <motion.div
      className="mb-12 flex justify-center gap-4 sm:mb-16 sm:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="rounded-full border border-gray-600 p-2 text-gray-400 transition-colors hover:border-blue-400 hover:text-blue-400 sm:p-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.a>
      ))}
    </motion.div>
  );
}
