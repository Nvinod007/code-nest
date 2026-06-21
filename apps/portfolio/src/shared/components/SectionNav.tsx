"use client";

import { useEffect, useState } from "react";
import {
  portfolioSections,
  type PortfolioSectionId,
} from "@/config/sections";

function scrollToSection(id: PortfolioSectionId) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function NavLinks({
  layout,
  activeId,
}: {
  layout: "mobile" | "desktop";
  activeId: PortfolioSectionId;
}) {
  return (
    <>
      {portfolioSections.map(({ id, label }) => {
        const active = activeId === id;
        if (layout === "mobile") {
          return (
            <button
              key={id}
              type="button"
              className={[
                "shrink-0 rounded-full px-3 py-2 text-sm transition-all sm:text-base",
                active
                  ? "bg-white/[0.06] ring-1 ring-white/10"
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-300",
              ].join(" ")}
              onClick={() => scrollToSection(id)}
            >
              <span
                className={
                  active
                    ? "bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text font-semibold text-transparent"
                    : "font-medium"
                }
              >
                {label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={id}
            type="button"
            className="group relative flex items-center justify-end gap-3 text-right"
            onClick={() => scrollToSection(id)}
          >
            <span
              className={[
                "text-sm font-medium uppercase tracking-wider transition-all duration-300 xl:text-base",
                active
                  ? "bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text font-semibold text-transparent"
                  : "text-gray-400 group-hover:text-gray-300",
              ].join(" ")}
            >
              {label}
            </span>
            <span
              className={[
                "relative z-10 h-3 w-3 shrink-0 rounded-full border transition-all duration-300",
                active
                  ? "scale-125 border-blue-400 bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]"
                  : "border-white/30 bg-transparent group-hover:border-white/50",
              ].join(" ")}
            />
          </button>
        );
      })}
    </>
  );
}

export function SectionNavMobile() {
  const [activeId, setActiveId] = useState<PortfolioSectionId>("home");
  useSectionSpy(setActiveId);

  return (
    <nav
      aria-label="Page sections"
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/[0.04] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2.5">
        <NavLinks layout="mobile" activeId={activeId} />
      </div>
    </nav>
  );
}

/** Sits in left grid column — content stays centered in middle column */
export function SectionNavDesktop() {
  const [activeId, setActiveId] = useState<PortfolioSectionId>("home");
  useSectionSpy(setActiveId);

  return (
    <aside
      aria-label="Page sections"
      className="sticky top-0 hidden h-screen flex-col justify-center pr-3 lg:flex xl:pr-4"
    >
      <nav className="relative flex flex-col items-end gap-5">
        <div
          aria-hidden
          className="absolute bottom-2 right-[6px] top-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        <NavLinks layout="desktop" activeId={activeId} />
      </nav>
    </aside>
  );
}

function useSectionSpy(setActiveId: (id: PortfolioSectionId) => void) {
  useEffect(() => {
    const sectionElements = portfolioSections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as PortfolioSectionId);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveId]);
}

/** @deprecated use SectionNavMobile + SectionNavDesktop in page grid */
export default function SectionNav() {
  return (
    <>
      <SectionNavMobile />
      <SectionNavDesktop />
    </>
  );
}
