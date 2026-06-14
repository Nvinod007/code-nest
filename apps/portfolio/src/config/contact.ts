export const contactConfig = {
  availability: "Available for freelance work",
  calendlyUrl: "",
  description:
    "I'm always interested in new opportunities and exciting projects. Whether you're a company looking for a developer or you're a fellow developer wanting to collaborate, I'd love to hear from you!",
  emailjs: {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  },
  formAction: "",
  preferredContact: "email" as const,
  responseTime: "I typically respond within 24 hours",
  socialCTA: "Follow me on social media for updates on my latest projects",
  subtitle: "Ready to bring your ideas to life",
  title: "Let's Work Together",
};