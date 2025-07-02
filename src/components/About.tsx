import { ScrollDownButton } from "@/components/ui/scroll-down-button";
import { getImagePath } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-light text-primary mb-2">
                Beautiful Homes
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                SINCE 1999
              </h3>
            </div>
            <div className="w-12 h-px bg-primary mx-auto md:mx-0 mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over two decades, Misty Harbor Builders has been crafting exceptional custom homes 
              that reflect our clients' dreams and our commitment to quality. Every home we build 
              combines traditional craftsmanship with modern innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our family-owned business takes pride in personal relationships with our clients, 
              ensuring every detail meets your vision and exceeds your expectations.
            </p>
          </div>
          <div className="relative">
            <img
              src={getImagePath("/uploads/1family3-min.jpg")}
              alt="Beautiful custom home exterior"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
