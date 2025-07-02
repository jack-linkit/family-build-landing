import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { getImagePath } from "@/lib/utils";

const SECTION_IDS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Process", id: "process" },
  { name: "Gallery", id: "gallery" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(SECTION_IDS[0].id);

  useEffect(() => {
    // Get navbar height
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    // Intersection Observer to track current section
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting && e.intersectionRatio > 0.5);
        if (visible.length > 0) {
          // Pick the first visible section in the list order
          const first = SECTION_IDS.find(s => visible.some(e => e.target.id === s.id));
          if (first) setCurrentSection(first.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: `-${navHeight}px 0px 0px 0px`,
      }
    );
    SECTION_IDS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function springEase(t) {
    return 1 - Math.cos(t * Math.PI / 2) * Math.exp(-3 * t);
  }
  function springScrollTo(targetY, duration = 1400) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start = null;
    function step(timestamp) {
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

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.getElementById(id);
    const nav = document.querySelector('nav');
    const navH = nav ? nav.getBoundingClientRect().height : 0;
    if (section) {
      const rect = section.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - navH;
      springScrollTo(targetY, 1400);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src={getImagePath("/lovable-uploads/bc69ca0b-2229-4651-8a99-e05ba51e1f5c.png")}
                alt="Misty Harbor Builders"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {SECTION_IDS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                className={`text-gray-700 hover:text-primary transition-colors duration-200 font-medium ${currentSection === item.id ? 'text-primary font-bold underline underline-offset-4' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center text-primary font-semibold">
              <Phone className="h-4 w-4 mr-2" />
              708-372-1689
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {SECTION_IDS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                className={`block py-2 text-gray-700 hover:text-primary transition-colors duration-200 ${currentSection === item.id ? 'text-primary font-bold underline underline-offset-4' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center text-primary font-semibold py-2">
              <Phone className="h-4 w-4 mr-2" />
              708-372-1689
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
