import { getImagePath } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src={getImagePath("/lovable-uploads/bc69ca0b-2229-4651-8a99-e05ba51e1f5c.png")}
              alt="Misty Harbor Builders"
              className="h-20 w-auto mx-auto filter brightness-110 contrast-110"
            />
          </div>
          <p className="text-gray-300 text-lg mb-8 font-light">
            Building exceptional homes since 1999
          </p>
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Misty Harbor Builders. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
