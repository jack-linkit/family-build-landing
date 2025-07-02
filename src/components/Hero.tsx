
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.4), rgba(30, 58, 138, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3011&q=80')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          BUILDING HIGH QUALITY HOMES
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-blue-100">
          FOR OVER 25 YEARS
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Creating custom homes with exceptional craftsmanship, attention to detail, and personalized service that exceeds expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Our Homes
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
