import { portfolioData } from "@/config/portfolio-data";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <div className="max-w-4xl text-center">
      <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-6xl font-bold text-transparent">
        {personal.name}
      </h1>
      <h2 className="mb-4 text-2xl text-gray-300">
        {personal.title} | {personal.subtitle}
      </h2>
      <p className="mb-8 text-lg text-gray-400">{personal.summary}</p>
      <div className="flex justify-center gap-4 text-sm text-gray-500">
        <span>📧 {personal.email}</span>
        <span>📱 {personal.phone}</span>
        <span>📍 {personal.location}</span>
      </div>
    </div>
  );
}
