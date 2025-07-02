import { ChevronDown } from "lucide-react";
import React from "react";

function springEase(t: number) {
  return 1 - Math.cos(t * Math.PI / 2) * Math.exp(-3 * t);
}

function springScrollTo(targetY: number, duration = 1400) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const t = Math.min(elapsed / duration, 1);
    const eased = springEase(t);
    window.scrollTo(0, startY + diff * eased);
    if (t < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

export const ScrollDownButton: React.FC<{ targetId: string }> = ({ targetId }) => (
  <button
    className="mx-auto mt-8 flex items-center justify-center z-30 focus:outline-none bg-black/30 hover:bg-black/50 rounded-full p-2 shadow-lg transition-colors duration-200"
    aria-label="Scroll to next section"
    onClick={() => {
      const section = document.getElementById(targetId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const targetY = rect.top + window.scrollY;
        springScrollTo(targetY, 1400);
      }
    }}
    type="button"
    style={{ position: 'relative' }}
  >
    <ChevronDown className="h-8 w-8 text-white drop-shadow" />
  </button>
); 