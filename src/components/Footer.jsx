import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-3xl font-bold text-white">
             <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">MyPortfolio</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Building modern web apps with MERN stack & C++ DSA 
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-green-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            Connect with me
          </h3>
          <div className="flex space-x-5 mt-2">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 text-3xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 text-3xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 text-3xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 text-3xl transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm md:text-base">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
