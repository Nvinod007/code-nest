"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";
import { useState } from "react";

export default function HeroSocialLinks() {
  const { personal, social } = portfolioData;
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      accentColor: "from-purple-400 to-pink-400",
      bgGradient: "group-hover:from-purple-500/20 group-hover:to-pink-500/20",
      borderColor: "group-hover:border-purple-400",
      glowColor: "group-hover:shadow-purple-400/50",
      href: social.github,
      icon: Github,
      label: "GitHub",
      shimmer: "group-hover:bg-gradient-to-r group-hover:from-purple-400/10 group-hover:via-transparent group-hover:to-pink-400/10",
      textColor: "group-hover:text-purple-300",
    },
    {
      accentColor: "from-blue-400 to-cyan-400",
      bgGradient: "group-hover:from-blue-500/20 group-hover:to-cyan-500/20",
      borderColor: "group-hover:border-blue-400",
      glowColor: "group-hover:shadow-blue-400/50",
      href: social.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      shimmer: "group-hover:bg-gradient-to-r group-hover:from-blue-400/10 group-hover:via-transparent group-hover:to-cyan-400/10",
      textColor: "group-hover:text-blue-300",
    },
    {
      accentColor: "from-green-400 to-emerald-400",
      bgGradient: "group-hover:from-green-500/20 group-hover:to-emerald-500/20",
      borderColor: "group-hover:border-green-400",
      glowColor: "group-hover:shadow-green-400/50",
      href: `mailto:${personal.email}`,
      icon: Mail,
      label: "Email",
      shimmer: "group-hover:bg-gradient-to-r group-hover:from-green-400/10 group-hover:via-transparent group-hover:to-emerald-400/10",
      textColor: "group-hover:text-green-300",
    },
  ].filter(({ href }) => href);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        damping: 20,
        stiffness: 300,
        type: "spring",
      },
      y: 0,
    },
  };

  return (
    <motion.div
      className="mb-12 flex justify-center gap-6 sm:mb-16 sm:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(({ 
        icon: Icon, 
        href, 
        label, 
        accentColor, 
        borderColor, 
        glowColor, 
        textColor,
        shimmer 
      }) => (
        <motion.div
          key={label}
          className="group relative"
          variants={itemVariants}
          onHoverStart={() => setHoveredLink(label)}
          onHoverEnd={() => setHoveredLink(null)}
          whileHover={{ 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 ${accentColor}`}
            initial={false}
            animate={{
              scale: hoveredLink === label ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: hoveredLink === label ? Infinity : 0,
            }}
          />

          {/* Main button */}
          <motion.a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`
              relative flex h-14 w-14 items-center justify-center rounded-full 
              border border-gray-600/50 bg-gray-900/80 text-gray-400 
              backdrop-blur-sm transition-all duration-500
              ${borderColor} ${textColor} ${glowColor}
              sm:h-16 sm:w-16
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 ${shimmer}`}
              initial={false}
              animate={{
                backgroundPosition: hoveredLink === label ? "200% 0" : "0% 0",
                opacity: hoveredLink === label ? 1 : 0,
              }}
              transition={{
                backgroundPosition: { duration: 1.5, repeat: Infinity },
                opacity: { duration: 0.3 },
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />

            {/* Icon */}
            <Icon className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" />

            {/* External link indicator with sparkle */}
            {href.startsWith("http") && (
              <motion.div
                className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors duration-300 group-hover:text-white"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="h-2.5 w-2.5" />
              </motion.div>
            )}

            {/* Particle effects */}
            {hoveredLink === label && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-white"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.cos(i * 60 * (Math.PI / 180)) * 30,
                      y: Math.sin(i * 60 * (Math.PI / 180)) * 30,
                    }}
                    transition={{
                      delay: i * 0.1,
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </>
            )}
          </motion.a>

          {/* Enhanced tooltip */}
          {hoveredLink === label && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute -bottom-14 left-1/2 z-50 -translate-x-1/2"
            >
              <div className={`
                relative rounded-lg border border-gray-600/50 bg-gray-900/90 
                px-3 py-2 text-xs font-medium text-white backdrop-blur-sm
                shadow-lg ${glowColor.replace('group-hover:', '')}
              `}>
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r opacity-20 ${accentColor}`} />
                <span className="relative z-10">{label}</span>
                
                {/* Tooltip arrow */}
                <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-gray-600/50 bg-gray-900/90" />
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
