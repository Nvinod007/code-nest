"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
};

export default function SocialLinks() {
  const { social, contact } = portfolioData;

  const socialLinks = [
    { href: social.github, icon: Github, label: "GitHub" },
    { href: social.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: social.twitter, icon: Twitter, label: "Twitter" },
  ].filter(link => link.href);

  return (
    <motion.div variants={itemVariants}>
      <h4 className="mb-4 text-lg font-semibold text-white">Follow Me</h4>
      <div className="flex gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-400 transition-colors hover:border-gray-600 hover:text-white sm:h-12 sm:w-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.a>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">{contact.socialCTA}</p>
    </motion.div>
  );
}
