import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${
        isScrolled ? "opacity-45" : "opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className={`transition-transform duration-300 ${
              isScrolled ? "w-12 h-12" : "w-20 h-20"
            } object-contain mr-6 hover:animate-spin`}
          />
        </div>

        {/* Navigation Section */}
        <div className="flex justify-center items-center flex-grow">
          <div
            className="flex space-x-6 bg-white border border-gray-300 rounded-full px-8 py-2 shadow-md transition-transform duration-300 group"
          >
            {/* Navigation Links */}
            {["Home", "About", "Courses", "Contact Us"].map((item) => (
              <a
                key={item}
                href={
                  item === "Contact Us"
                    ? "#footer"
                    : `#${item.toLowerCase().replace(" ", "-")}`
                }
                className={`rounded-full px-6 py-1 text-sm text-white font-large shadow-md border border-white bg-gradient-to-r from-blue-900 to-pink-300 hover:from-pink-700 hover:to-blue-400 transition-all duration-300`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;