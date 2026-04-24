"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view for scroll-spy navigation.
 * Returns the id of the section whose top has most recently passed the offset line.
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionIdsKey = sectionIds.join(",");

  useEffect(() => {
    const ids = sectionIdsKey.split(",").filter(Boolean);

    const handleScroll = () => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el != null);

      let current: string | null = null;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
          current = section.id;
        }
      }
      setActiveId(current ?? ids[0] ?? null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIdsKey, offset]);

  return activeId;
}
