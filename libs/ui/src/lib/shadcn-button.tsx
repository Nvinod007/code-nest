"use client";

import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "./utils/cn";
import { type ButtonVariantProps, buttonVariants } from "./button-variants";

export type ShadcnButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    asChild?: boolean;
  };

/**
 * Headless / shadcn-style button: Tailwind + CVA only (no Radix primitives beyond Slot).
 * Styled via CSS variables emitted by `CodeNestProvider`.
 */
export const ShadcnButton = React.forwardRef<HTMLButtonElement, ShadcnButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);
ShadcnButton.displayName = "ShadcnButton";
