import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SECTION_IDS = [
  "hero",
  "about",
  "process",
  "gallery",
  "testimonials",
  "contact"
];

export const StickyScrollDownButton = () => {
  const [currentSection, setCurrentSection] = useState(SECTION_IDS[0]);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Get navbar height
    const nav = document.querySelector('nav');
    if (nav) setNavHeight(nav.getBoundingClientRect().height);

    // Intersection Observer to track current section
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting && e.intersectionRatio > 0.5);
        if (visible.length > 0) {
          // Pick the first visible section in the list order
          const first = SECTION_IDS.find(id => visible.some(e => e.target.id === id));
          if (first) setCurrentSection(first);
        }
      },
      {
        threshold: 0.5,
        rootMargin: `-${navHeight}px 0px 0px 0px`,
      }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [navHeight]);

  const currentIdx = SECTION_IDS.indexOf(currentSection);
  const nextSection = SECTION_IDS[currentIdx + 1];
  const isLastSection = currentIdx === SECTION_IDS.length - 1;

  if (!isLastSection && !nextSection) return null;

  return (
    <button
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 focus:outline-none"
      aria-label={isLastSection ? "Scroll to top" : "Scroll to next section"}
      onClick={() => {
        if (isLastSection) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (nextSection) {
          const section = document.getElementById(nextSection);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }}
      type="button"
      style={{ background: 'none', border: 'none', padding: 0, margin: 0, boxShadow: 'none' }}
    >
      {isLastSection ? (
        <ChevronUp className="h-8 w-8 text-white drop-shadow" />
      ) : (
        <ChevronDown className="h-8 w-8 text-white drop-shadow" />
      )}
    </button>
  );
}; 