"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/config/portfolio-data";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const { contact } = portfolioData;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
  };

  return (
    <section id="contact" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
          >
            {contact.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-2xl px-4 text-base text-gray-400 sm:px-0 sm:text-lg"
          >
            {contact.subtitle}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl px-4 text-sm text-gray-500 sm:px-0 sm:text-base"
          >
            {contact.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Contact Info Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ContactInfo />
            <div className="mt-6 sm:mt-8">
              <SocialLinks />
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
