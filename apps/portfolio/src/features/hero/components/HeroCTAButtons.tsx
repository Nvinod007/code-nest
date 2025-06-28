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
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
            // Optional: Focus on the first input after scroll
            setTimeout(() => {
              const firstInput = contactSection.querySelector('input');
              firstInput?.focus();
            }, 1000);
          }
        }}
      >
        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
        Get In Touch
      </motion.button>

      <motion.button
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
            // Optional: Add a subtle highlight effect to projects section
            setTimeout(() => {
              projectsSection.style.transform = 'scale(1.02)';
              setTimeout(() => {
                projectsSection.style.transform = 'scale(1)';
              }, 300);
            }, 500);
          }
        }}
      >
        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
        View My Work
      </motion.button>

      {personal.resume && (
        <motion.button
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-green-400 hover:text-green-400 hover:shadow-lg hover:shadow-green-400/25 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const resumeUrl = personal.resume;
            
            // Check if it's an external URL (GitHub)
            if (resumeUrl.startsWith('http')) {
              // External URL - open in new tab for download
              const link = document.createElement('a');
              link.href = resumeUrl;
              link.download = 'Vinod_Kumar_Nelanakula_Resume.pdf';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              // Local file - check if exists first
              fetch(resumeUrl, { method: 'HEAD' })
                .then(response => {
                  if (response.ok) {
                    const link = document.createElement('a');
                    link.href = resumeUrl;
                    link.download = 'Vinod_Kumar_Nelanakula_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } else {
                    alert('📋 Resume coming soon!\n\nFor now, you can contact me directly to request my latest resume.');
                  }
                })
                .catch(() => {
                  alert('📋 Resume download temporarily unavailable.\n\nPlease contact me directly for my latest resume!');
                });
            }
          }}
        >
          <Download className="h-4 w-4 sm:h-5 sm:w-5" />
          Download Resume
        </motion.button>
      )}
    </motion.div>
  );
}
