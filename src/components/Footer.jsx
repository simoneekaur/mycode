import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left side - Content  */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* "Built with love" message */}
          <p className="text-sm">
            Built with ❤️ by <span className="font-semibold">Simone</span>
          </p>

          {/* Social Icons Container */}
          <div className="flex justify-center md:justify-start space-x-6 my-4">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/cosmoscreativeacademy?igsh=bzJ6N2xzMG1rajVm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-xl transition duration-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/channel/UC8b2DdKPU05QnZVzEDz9QVA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-xl transition duration-200"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/cosmos-animation-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-xl transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright Information */}
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} Cosmos Creative Academy. All rights
            reserved.
          </p>
        </div>

        {/* Right side - Google Map */}
        <div className="mt-6 md:mt-0 md:w-1/2  max-w-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.405100649354!2d73.79592757504005!3d18.55411078258236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e85e1f8f77%3A0x5252f2c5122474b3!2sCosmos%20Creative%20Academy!5e0!3m2!1sen!2sin!4v1718885836229!5m2!1sen!2sin&q=Cosmos+Creative+Academy&z=16"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cosmos Creative Academy Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;