"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".section-heading",
  ".intro-grid",
  ".growth-grid",
  ".step",
  ".service-card",
  ".venture-card",
  ".client-project-card",
  ".belief-grid",
  ".contact-inner",
  ".case-study-context-grid",
  ".case-study-deliverable",
  ".case-study-experience-grid",
  ".case-study-scope-card",
  ".work-featured-card",
  ".work-proof-grid",
  ".work-ventures-inner",
  ".ventures-index-heading",
  ".ventures-index-card",
  ".ventures-index-note",
  ".venture-detail-two-col",
  ".venture-detail-focus-grid article",
  ".venture-detail-audiences > div",
  ".about-principle-card",
  ".about-model-grid",
  ".about-ventures-inner",
  ".about-cta-inner",
  ".legal-document > h2",
  ".legal-document > p",
].join(",");

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    const siblingIndexes = new Map<HTMLElement, number>();

    elements.forEach((element) => {
      element.dataset.motion = "reveal";
      element.classList.remove("is-motion-visible");

      const parent = element.parentElement;
      if (!parent) return;

      const index = siblingIndexes.get(parent) ?? 0;
      siblingIndexes.set(parent, index + 1);
      element.style.setProperty(
        "--motion-delay",
        `${Math.min(index * 75, 300)}ms`,
      );
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          (entry.target as HTMLElement).classList.add("is-motion-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -36px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
