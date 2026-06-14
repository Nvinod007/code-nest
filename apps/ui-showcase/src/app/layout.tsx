import "./global.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Preview @code-nest/ui — HeroUI provider, shadcn-style tokens, theme presets.",
  title: "Code Nest UI showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
