"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform sm:bottom-8 sm:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex cursor-pointer flex-col items-center gap-2 text-gray-500"
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-sm">Scroll down</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </motion.div>
  );
}
