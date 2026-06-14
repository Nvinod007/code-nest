"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { portfolioData } from "@/config/portfolio-data";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then(mod => mod.TypeAnimation),
  { ssr: false }
);

export default function TypingAnimation() {
  const { personal } = portfolioData;

  return (
    <motion.div
      className="mb-6 flex h-12 items-center justify-center text-base text-gray-300 sm:mb-8 sm:h-16 sm:text-lg md:text-xl lg:text-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {/* Ensure TypeAnimation is only rendered if it's available (i.e., on the client) */}
      {TypeAnimation && (
        <TypeAnimation
          sequence={personal.tagline.flatMap(text => [text, 2000])}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block", fontSize: "1em" }}
          repeat={Infinity}
        />
      )}
    </motion.div>
  );
}
