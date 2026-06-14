"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio-data";
import TypingAnimation from "./TypingAnimation";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroContactInfo from "./HeroContactInfo";
import HeroSocialLinks from "./HeroSocialLinks";
import ScrollIndicator from "./ScrollIndicator";

export default function ModernHero() {
  const { personal } = portfolioData;

  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="font-mono text-base text-blue-400 sm:text-lg">
            👋 Hi there, I&apos;m
          </span>
        </motion.div>

        {/* Animated Name */}
        <motion.h1
          className="mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {personal.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="mb-6 text-lg text-cyan-100 sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {personal.title} | {personal.subtitle}
        </motion.h2>

        {/* Typing Animation */}
        <TypingAnimation />

        {/* Description */}
        <motion.p
          className="mx-auto mb-8 max-w-2xl px-4 text-sm leading-relaxed text-gray-200 sm:mb-12 sm:px-0 sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {personal.summary}
        </motion.p>

        {/* Contact Info */}
        <HeroContactInfo />

        {/* CTA Buttons */}
        <HeroCTAButtons />

        {/* Social Links */}
        <HeroSocialLinks />

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </motion.section>
  );
}
