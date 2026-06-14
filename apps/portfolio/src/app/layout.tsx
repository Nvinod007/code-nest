import "./global.css";

export const metadata = {
  description:
    "Portfolio showcasing 2+ years of React/React Native development experience and modern web development skills",
  title: "Vinod Kumar Nelanakula - Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="cursor-none overflow-x-hidden bg-black text-white">
        {children}
      </body>
    </html>
  );
}
