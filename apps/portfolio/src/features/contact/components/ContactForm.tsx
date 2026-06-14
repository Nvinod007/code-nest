"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";
import emailjs from "@emailjs/browser";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
};

export default function ContactForm() {
  const { personal, contact } = portfolioData;

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    subject: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error" | "mailapp-pending"
  >("idle");
  const [successHint, setSuccessHint] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openMailto = () => {
    const subject = encodeURIComponent(
      formData.subject || "Portfolio Contact"
    );
    const body = encodeURIComponent(
      `Hi ${personal.name.split(" ")[0]},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    let resetToIdleAfterMs = 3000;

    const { serviceId, templateId, publicKey } = contact.emailjs;
    const hasEmailJs =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes("your_") &&
      !templateId.includes("your_") &&
      !publicKey.includes("your_");

    try {
      if (hasEmailJs) {
        const subjectLine = formData.subject || "Portfolio Contact";
        await emailjs.send(
          serviceId,
          templateId,
          {
            email: formData.email,
            from_email: formData.email,
            from_name: formData.name,
            message: formData.message,
            name: formData.name,
            reply_to: formData.email,
            subject: subjectLine,
            to_email: personal.email,
            user_email: formData.email,
            user_name: formData.name,
          },
          publicKey
        );
        setSuccessHint(
          "Check your inbox (and spam). In EmailJS, the template “To Email” must be set to your address."
        );
        setFormStatus("success");
        setFormData({ email: "", message: "", name: "", subject: "" });
      } else {
        openMailto();
        setSuccessHint(
          "No email service configured — your mail app should open with a draft. Press Send there to deliver."
        );
        setFormStatus("mailapp-pending");
        setFormData({ email: "", message: "", name: "", subject: "" });
        resetToIdleAfterMs = 6000;
      }
    } catch (error) {
      // EmailJS failed → mailto fallback; not delivered until user sends from mail app
      console.warn("EmailJS failed, falling back to mailto:", error);
      openMailto();
      setSuccessHint(
        "Could not send through the site. Your mail app should open — press Send there to deliver your message."
      );
      setFormStatus("mailapp-pending");
      setFormData({ email: "", message: "", name: "", subject: "" });
      resetToIdleAfterMs = 6000;
    }

    setTimeout(() => setFormStatus("idle"), resetToIdleAfterMs);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
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
              : formStatus === "mailapp-pending"
                ? "bg-amber-600 text-white"
                : formStatus === "error"
                  ? "bg-red-600 text-white"
                  : formStatus === "sending"
                    ? "cursor-not-allowed bg-gray-600 text-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          whileHover={
            formStatus === "idle" ? { scale: 1.02 } : {}
          }
          whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
        >
          {formStatus === "sending" && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
          )}
          {formStatus === "success" && <CheckCircle className="h-5 w-5" />}
          {formStatus === "mailapp-pending" && <Mail className="h-5 w-5" />}
          {formStatus === "error" && <AlertCircle className="h-5 w-5" />}
          {formStatus === "idle" && <Send className="h-5 w-5" />}

          {formStatus === "idle" && "Send Message"}
          {formStatus === "sending" && "Sending Message..."}
          {formStatus === "success" && "Message Sent!"}
          {formStatus === "mailapp-pending" && "Finish sending from mail"}
          {formStatus === "error" && "Please Try Again"}
        </motion.button>

        {(formStatus === "success" || formStatus === "mailapp-pending") && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={
              formStatus === "success"
                ? "text-center text-sm text-green-400"
                : "text-center text-sm text-amber-200"
            }
          >
            {successHint ||
              (formStatus === "success"
                ? "Your message has been sent successfully!"
                : "")}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
