
import { Home, Hammer, PaintBucket, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description: "From concept to completion, we build homes tailored to your lifestyle and preferences with exceptional attention to detail."
    },
    {
      icon: Hammer,
      title: "In-House Carpentry",
      description: "Our skilled craftsmen ensure quality control and attention to detail when crafting your home both inside and out."
    },
    {
      icon: PaintBucket,
      title: "Interior Design",
      description: "Complete interior solutions including custom millwork, cabinetry, and finishes that reflect your personal style."
    },
    {
      icon: Wrench,
      title: "Renovations & Additions",
      description: "Transform your existing space with our renovation expertise, from kitchen remodels to full home additions."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive home building and renovation services backed by decades of experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
