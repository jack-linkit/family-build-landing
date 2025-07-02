import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollDownButton } from "@/components/ui/scroll-down-button";

// Spring easing function
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

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with darker overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 14, 4, 0.55), rgba(20, 14, 4, 0.55)), url('/uploads/11_410OtisAvenue_3_FamilyRoom_HiRes.jpg')`
        }}
      />

      {/* Blurred vignette behind text card */}
      <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[420px] md:h-[440px] rounded-3xl bg-gradient-to-b from-black/40 to-black/10 blur-xl opacity-70 pointer-events-none" />

      {/* Content Card */}
      <div className="relative z-20 mx-auto px-6 py-10 md:py-14 max-w-3xl rounded-3xl bg-white/70 shadow-2xl backdrop-blur-md flex flex-col items-center animate-fadein">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wide text-gray-900 drop-shadow-lg text-center">
          BUILDING HIGH QUALITY HOMES
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-primary drop-shadow text-center">
          FOR OVER 25 YEARS
        </h2>
        <p className="text-lg md:text-xl mb-0 max-w-2xl mx-auto leading-relaxed text-gray-800 text-center drop-shadow">
          Creating custom homes with exceptional craftsmanship, attention to detail, and personalized service that exceeds expectations.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 animate-fadein"
          >
            View Our Homes
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/80 border-2 border-blue-600 text-blue-700 hover:bg-blue-50 hover:text-blue-900 px-8 py-3 text-lg font-semibold shadow rounded-xl transition-all duration-300 animate-fadein"
          >
            Get Started
          </Button>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
