
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Our Homes", href: "#homes" },
    { name: "Our Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/bc69ca0b-2229-4651-8a99-e05ba51e1f5c.png"
                alt="Misty Harbor Builders"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center text-blue-800 font-semibold">
              <Phone className="h-4 w-4 mr-2" />
              708-372-1689
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-slate-700 hover:text-blue-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center text-blue-800 font-semibold py-2">
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
