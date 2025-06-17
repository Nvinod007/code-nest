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
