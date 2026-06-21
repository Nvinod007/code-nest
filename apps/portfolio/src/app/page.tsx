import { ModernHero } from "@/features/hero/components";
import { ModernSkills } from "@/features/skills/components";
import { Experience } from "@/features/experience/components";
import { Projects } from "@/features/projects/components";
import { Contact } from "@/features/contact/components";
import {
  PortfolioEffects,
  CursorBodyClass,
  PerformanceMonitor,
  SocialLinksFooter,
} from "@/shared/components";
import { portfolioData } from "@/config/portfolio-data";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <div className="relative min-h-screen text-white">
      {/* Persistent gradient so content is visible even when effects are off */}
      <div
        className="fixed inset-0 -z-30 bg-gradient-to-b from-slate-950 via-blue-950/80 to-slate-950"
        aria-hidden
      />
      <CursorBodyClass />
      <PortfolioEffects />
      <PerformanceMonitor />

      <div className="relative z-10 min-h-screen">
        <ModernHero />

        {/* Skills — transparent glass */}
        <div className="py-4">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-purple-500/5 backdrop-blur-sm sm:mx-8">
            <ModernSkills />
          </div>
        </div>

        {/* Experience — transparent glass */}
        <div id="experience" className="py-8">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-blue-500/5 backdrop-blur-sm sm:mx-8">
            <div className="px-4 py-12 sm:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center sm:mb-16">
                  <h2 className="mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                    Work Experience
                  </h2>
                  <p className="mx-auto max-w-2xl px-4 text-base text-gray-200 sm:px-0 sm:text-lg">
                    Production apps at Carrier scale — metrics and live links
                  </p>
                </div>
                <Experience />
              </div>
            </div>
          </div>
        </div>

        {/* Projects — transparent glass */}
        <div className="py-4">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-pink-500/5 backdrop-blur-sm sm:mx-8">
            <Projects />
          </div>
        </div>

        {/* Contact — transparent glass */}
        <div className="py-8">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-cyan-500/5 backdrop-blur-sm sm:mx-8">
            <Contact />
          </div>
        </div>

        {/* Footer — transparent glass */}
        <footer className="mt-8 px-4 py-8">
          <div className="mx-auto max-w-6xl text-center">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {personal.name}
                </h3>
                <p className="text-gray-300">
                  {personal.subtitle}
                </p>
              </div>

              <SocialLinksFooter />

              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} {personal.name}. Built with Next.js,
                TypeScript, Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
