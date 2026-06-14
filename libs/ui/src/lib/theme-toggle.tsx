"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { ShadcnButton } from "./shadcn-button";

/** Toggles `next-themes` class on `<html>` (light / dark). */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <ShadcnButton size="icon" variant="outline" aria-hidden disabled />;
  }

  const dark = resolvedTheme === "dark";

  return (
    <ShadcnButton
      type="button"
      variant="outline"
      size="icon"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun /> : <Moon />}
    </ShadcnButton>
  );
}
