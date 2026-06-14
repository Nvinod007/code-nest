import "./global.css";
import { portfolioData } from "@/config/portfolio-data";

export const metadata = {
  description: portfolioData.personal.summary,
  title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="cursor-none overflow-x-hidden bg-black text-white">
        {children}
      </body>
    </html>
  );
}
