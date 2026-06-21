import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";
import { LinkifiedText } from "@/shared/components";

type ExperienceProject = (typeof portfolioData.experience)[number]["projects"][number];

function ExperienceLiveLink({ url }: { url: string }) {
  const label = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-2 transition-colors hover:text-cyan-300"
    >
      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {label}
    </a>
  );
}

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <div className="py-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Work Experience
      </h2>
      <div className="mx-auto max-w-4xl">
        {experience.map(job => (
          <div
            key={job.id}
            className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="mb-1 text-2xl font-semibold text-white">
                  {job.position}
                </h3>
                <p className="mb-2 text-xl text-blue-400">{job.company}</p>
                <p className="text-gray-400">{job.location}</p>
              </div>
              <span className="font-medium text-green-400">
                {job.startDate} - {job.endDate}
              </span>
            </div>

            <p className="mb-6 text-gray-300">{job.description}</p>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Key Projects:
              </h4>
              {job.projects.map((project: ExperienceProject, index: number) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h5 className="mb-2 text-lg font-semibold text-yellow-400">
                    {project.name}
                  </h5>
                  <p className="mb-2 text-gray-300">
                    <LinkifiedText text={project.description} />
                  </p>
                  {"liveUrl" in project && project.liveUrl && (
                    <ExperienceLiveLink url={project.liveUrl} />
                  )}

                  <div className="mb-4">
                    <span className="mb-2 block text-sm text-gray-400">
                      Technologies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="rounded bg-blue-500/20 px-2 py-1 text-sm text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="mb-2 block text-sm text-gray-400">
                      Key Achievements:
                    </span>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-green-400">✓</span>
                          <LinkifiedText text={achievement} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
