"use client";

import { createElement, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Calculator,
  Code2,
  Film,
  Gamepad2,
  MapPin,
  Music,
  ShoppingCart,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

function getProjectVisual(projectId: string, category: string): LucideIcon {
  const byId: Record<string, LucideIcon> = {
    "calculator-node": Calculator,
    "code-nest": Code2,
    drawnguess: Gamepad2,
    "exec-lens": Code2,
    "food-ordering": ShoppingCart,
    "location-finder": MapPin,
    "music-player": Music,
    nexgpt: Film,
    "pim-match": BarChart3,
    "react-exploration": Code2,
    "sprint-poker": BarChart3,
    "wifi-data-sharing": Wifi,
  };
  if (byId[projectId]) return byId[projectId];
  if (category.includes("Game")) return Gamepad2;
  if (category.includes("E-commerce") || category.includes("Food"))
    return UtensilsCrossed;
  if (category.includes("Data")) return BarChart3;
  if (category.includes("Backend")) return Calculator;
  if (category.includes("Networking")) return Wifi;
  if (category.includes("Desktop") || category.includes("Music")) return Music;
  if (category.includes("Utility")) return MapPin;
  return Code2;
}

function isSvgSrc(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

export interface ProjectImageProps {
  src: string | undefined;
  alt: string;
  className?: string;
  projectId: string;
  category: string;
  /** compact = archive/small cards — icon only, no overlapping labels */
  variant?: "default" | "compact";
}

export default function ProjectImage({
  src,
  alt,
  className = "",
  projectId,
  category,
  variant = "default",
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const IconCmp = getProjectVisual(projectId, category);
  const hasValidSrc = Boolean(src && src.trim() !== "");

  const showIconOnly = !hasValidSrc || imageError;

  if (showIconOnly) {
    const compact = variant === "compact";

    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800/90 to-slate-900 ${className}`}
        aria-label={alt}
      >
        <div
          className={[
            "flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg",
            compact ? "h-10 w-10" : "h-16 w-16 rounded-2xl sm:h-20 sm:w-20",
          ].join(" ")}
        >
          {createElement(IconCmp, {
            className: compact ? "h-5 w-5" : "h-8 w-8 sm:h-10 sm:w-10",
            strokeWidth: 1.5,
          })}
        </div>
        {!compact && (
          <>
            <p className="sr-only">{alt}</p>
            {hasValidSrc && imageError && (
              <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-500">
                Preview unavailable
              </p>
            )}
          </>
        )}
      </div>
    );
  }

  const resolvedSrc = src as string;

  // Next.js Image often fails on local SVGs — use native img instead
  if (isSvgSrc(resolvedSrc)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolvedSrc}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover object-top ${className}`}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      fill
      unoptimized
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  );
}
