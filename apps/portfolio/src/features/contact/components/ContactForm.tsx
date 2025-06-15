"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
};

export default function ContactForm() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    subject: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const subject = encodeURIComponent(
        formData.subject || "Portfolio Contact"
      );
      const body = encodeURIComponent(
        `Hi Vinod,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:${personal.email}?subject=${subject}&body=${body}`;

      window.open(mailtoLink, "_blank");

      setFormStatus("success");
      setFormData({ email: "", message: "", name: "", subject: "" });
    } catch (error) {
      setFormStatus("error");
    }

    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl border border-gray-700 bg-gray-900/50 p-6 backdrop-blur-sm sm:p-8"
    >
      <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            placeholder="Project Discussion"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            placeholder="Tell me about your project..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={formStatus === "sending"}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold transition-all duration-300 ${
            formStatus === "success"
              ? "bg-green-600 text-white"
              : formStatus === "error"
                ? "bg-red-600 text-white"
                : formStatus === "sending"
                  ? "cursor-not-allowed bg-gray-600 text-gray-300"
                  : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          whileHover={formStatus === "idle" ? { scale: 1.02 } : {}}
          whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
        >
          {formStatus === "sending" && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
          )}
          {formStatus === "success" && <CheckCircle className="h-5 w-5" />}
          {formStatus === "error" && <AlertCircle className="h-5 w-5" />}
          {formStatus === "idle" && <Send className="h-5 w-5" />}

          {formStatus === "idle" && "Send Message"}
          {formStatus === "sending" && "Opening Email Client..."}
          {formStatus === "success" && "Email Client Opened!"}
          {formStatus === "error" && "Please Try Again"}
        </motion.button>

        {formStatus === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-green-400"
          >
            Your email client should now be open with the message pre-filled!
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
