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
  Globe,
  MapPin,
  Music,
  ShoppingCart,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

function getProjectVisual(projectId: string, category: string): LucideIcon {
  const byId: Record<string, LucideIcon> = {
    "calculator-node": Calculator,
    drawnguess: Gamepad2,
    "food-ordering": ShoppingCart,
    "live-sync": Globe,
    "location-finder": MapPin,
    "music-player": Music,
    nexgpt: Film,
    "pim-match": BarChart3,
    "react-exploration": Code2,
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

export interface ProjectImageProps {
  src: string | undefined;
  alt: string;
  className?: string;
  projectId: string;
  category: string;
}

export default function ProjectImage({
  src,
  alt,
  className = "",
  projectId,
  category,
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const IconCmp = getProjectVisual(projectId, category);
  const hasValidSrc = Boolean(src && src.trim() !== "");

  const showIconOnly = !hasValidSrc || imageError;

  if (showIconOnly) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/90 to-slate-900 ${className}`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg sm:h-20 sm:w-20">
          {createElement(IconCmp, {
            className: "h-8 w-8 sm:h-10 sm:w-10",
            strokeWidth: 1.5,
          })}
        </div>
        <p className="mt-3 max-w-[90%] truncate px-2 text-center text-sm font-medium text-gray-300">
          {alt}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          {hasValidSrc && imageError ? "Preview unavailable" : "Project"}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src as string}
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
