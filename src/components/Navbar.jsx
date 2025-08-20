import React, { useState } from "react";
import pic from "../assets/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Contact" },
  ];

  const handleScroll = (section) => {
    setMenu(false);
    scroller.scrollTo(section, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 shadow-md hover:scale-110 transition-transform">
            <img src={pic} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Rajan
            </h1>
            <p className="text-gray-600 text-sm">Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-10 font-medium">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="relative group cursor-pointer text-gray-700 hover:text-green-500 transition"
              onClick={() => handleScroll(text)}
            >
              {text}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setMenu(!menu)}>
          {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden fixed top-16 right-0 w-2/3 h-screen bg-white shadow-lg transform ${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:text-green-500 transition cursor-pointer"
              onClick={() => handleScroll(text)}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
