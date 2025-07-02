import { Star } from "lucide-react";
import { ScrollDownButton } from "@/components/ui/scroll-down-button";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-gray-800 scroll-mt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-2">
              High Quality
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              & AFFORDABLE
            </h3>
            <div className="w-12 h-px bg-primary mb-8"></div>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              We use only the highest quality materials to construct your home. 
              Furthermore, we work closely with our suppliers attending seminars 
              in new systems which improve the homes health and viability in our 
              constantly changing environment.
            </p>
            <div className="flex items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl border border-gray-200">
            <div className="flex items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg italic mb-6 leading-relaxed text-gray-700">
              "Mike and his team exceeded all of our expectations. Their attention to detail, 
              craftsmanship, and communication throughout the entire process was exceptional. 
              We couldn't be happier with our new home!"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-800">Sarah & John Mitchell</p>
              <p className="text-gray-600">Custom Home Build, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
