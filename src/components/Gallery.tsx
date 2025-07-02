import { ScrollDownButton } from "@/components/ui/scroll-down-button";

const Gallery = () => {
  const images = [
    {
      src: "/uploads/0005.jpg",
      alt: "Beautiful home exterior",
      category: "Exterior"
    },
    {
      src: "/uploads/11458462_l-2015-min.jpg",
      alt: "Custom home design",
      category: "Design"
    },
    {
      src: "/uploads/74258785_l-2015-min.jpg",
      alt: "Luxury living space",
      category: "Interior"
    },
    {
      src: "/uploads/large_57-min.jpg",
      alt: "Family home",
      category: "Family"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of custom homes and renovation projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">{image.category}</p>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
