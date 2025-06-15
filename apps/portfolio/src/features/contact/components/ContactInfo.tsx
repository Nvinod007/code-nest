"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
};

export default function ContactInfo() {
  const { personal, contact } = portfolioData;

  const contactMethods = [
    {
      href: `mailto:${personal.email}`,
      icon: Mail,
      label: "Email",
      primary: true,
      value: personal.email,
    },
    {
      href: `tel:${personal.phone}`,
      icon: Phone,
      label: "Phone",
      primary: false,
      value: personal.phone,
    },
    {
      href: "#",
      icon: MapPin,
      label: "Location",
      primary: false,
      value: personal.location,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={itemVariants}>
        <h3 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl">
          Get In Touch
        </h3>
        <div className="space-y-4">
          {contactMethods.map(({ icon: Icon, label, value, href, primary }) => (
            <motion.a
              key={label}
              href={href}
              className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${
                primary
                  ? "border-blue-500/30 bg-blue-600/10 hover:border-blue-400"
                  : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${
                  primary ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400">{label}</div>
                <div className="text-base font-medium text-white sm:text-lg">
                  {value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Availability Status */}
      <motion.div
        variants={itemVariants}
        className="rounded-xl border border-green-500/30 bg-green-600/10 p-4 sm:p-6"
      >
        <div className="mb-2 flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
          <span className="font-medium text-green-400">
            {contact.availability}
          </span>
        </div>
        <p className="text-sm text-gray-400">{contact.responseTime}</p>
      </motion.div>
    </div>
  );
}
