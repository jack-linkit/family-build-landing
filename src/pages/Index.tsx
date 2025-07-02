import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { StickyScrollDownButton } from "@/components/ui/sticky-scroll-down-button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyScrollDownButton />
    </div>
  );
};

export default Index;
