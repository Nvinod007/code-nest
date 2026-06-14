import { portfolioData } from "@/config/portfolio-data";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <div className="py-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Technical Skills
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6">
          <h3 className="mb-4 text-xl font-semibold text-blue-400">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map(skill => (
              <span
                key={skill}
                className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/20 p-6">
          <h3 className="mb-4 text-xl font-semibold text-green-400">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map(skill => (
              <span
                key={skill}
                className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6">
          <h3 className="mb-4 text-xl font-semibold text-purple-400">
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map(skill => (
              <span
                key={skill}
                className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
