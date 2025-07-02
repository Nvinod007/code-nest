import { ModernHero } from "@/features/hero/components";
import { ModernSkills } from "@/features/skills/components";
import { Experience } from "@/features/experience/components";
import { Projects } from "@/features/projects/components";
import { Contact } from "@/features/contact/components";
import {
  AnimatedBackground,
  ParticleField,
  CodeMatrix,
  CursorEffect,
  ScrollProgress,
  PerformanceMonitor,
} from "@/shared/components";
import { SocialLinksFooter } from "@/shared/components";
import { portfolioData } from "@/config/portfolio-data";

export default function Home() {
  const { personal } = portfolioData;
  
  return (
    <div className="relative min-h-screen text-white">
      <AnimatedBackground />
      <ParticleField />
      <CodeMatrix />
      <CursorEffect />
      <ScrollProgress />
      {/* Performance Monitor (Dev only) */}
      <PerformanceMonitor />

      {/* Content with Glassmorphism */}
      <div className="relative z-10">
        {/* Hero Section */}
        <ModernHero />

        {/* Skills Section */}
        <div className="py-4">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.08] shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:mx-8">
            <ModernSkills />
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="py-8">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:mx-8">
            <div className="px-4 py-12 sm:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center sm:mb-16">
                  <h2 className="mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                    Work Experience
                  </h2>
                  <p className="mx-auto max-w-2xl px-4 text-base text-gray-200 sm:px-0 sm:text-lg">
                    My professional journey and key achievements
                  </p>
                </div>
                <Experience />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-4">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.08] shadow-2xl shadow-pink-500/10 backdrop-blur-xl sm:mx-8">
            <Projects />
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-8">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:mx-8">
            <Contact />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 px-4 py-8">
          <div className="mx-auto max-w-6xl text-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {personal.name}
                </h3>
                <p className="text-gray-300">
                  {personal.tagline[0]}
                </p>
              </div>

              {/* Enhanced Social Links */}
              <SocialLinksFooter />

              <p className="text-sm text-gray-400">
                © 2024 {personal.name}. Built with Next.js, TypeScript,
                Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
