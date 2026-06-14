"use client";

import { getThemePresetDefinition } from "@code-nest/themes/browser";
import { Button, type ButtonProps } from "@heroui/react";
import { useTheme } from "next-themes";
import * as React from "react";

import { useCodeNestTheme } from "./code-nest-provider.js";

/**
 * HeroUI button tinted with the **active Code Nest preset** (tracks `useCodeNestTheme` + light/dark).
 * Use inside `CodeNestProvider`.
 */
export function HeroPrimaryButton({
  style,
  ...props
}: ButtonProps) {
  const { preset } = useCodeNestTheme();
  const { resolvedTheme } = useTheme();
  const def = getThemePresetDefinition(preset);
  const hex =
    resolvedTheme === "dark" ? def.heroUi.dark : def.heroUi.light;

  return (
    <Button
      className="font-medium"
      color="primary"
      style={{
        backgroundColor: hex.primary,
        color: hex.primaryForeground,
        ...style,
      }}
      variant="solid"
      {...props}
    />
  );
}
