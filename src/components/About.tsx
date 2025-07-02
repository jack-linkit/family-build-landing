
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-light text-blue-600 mb-2">
                Beautiful Homes
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
                SINCE 1999
              </h3>
            </div>
            <div className="w-12 h-px bg-blue-600 mx-auto md:mx-0 mb-8"></div>
            <p className="text-lg text-slate-700 leading-relaxed">
              For over two decades, Misty Harbor Builders has been crafting exceptional custom homes 
              that reflect our clients' dreams and our commitment to quality. Every home we build 
              combines traditional craftsmanship with modern innovation.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our family-owned business takes pride in personal relationships with our clients, 
              ensuring every detail meets your vision and exceeds your expectations.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80"
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
