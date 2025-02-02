import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "Services",
    "How it works",
    "Why choose us?",
    "About us",
    "Contact us",
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-[#F9F6E6] px-5 md:px-10 font-medium relative">
      {/* Logo */}
      <div className="text-5xl font-light bg-transparent text-gray-500">
        <b className="text-black font-medium">Z</b>enith
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <ul
        className={`md:flex md:flex-row space-x-6 hidden md:block absolute md:static top-14 left-0 w-full
             bg-transparent md:w-auto md:space-x-6 p-4 md:p-0 transition-transform md:transition-none
              duration-300 ease-in-out transform origin-top `}
      >
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="text-black hover:text-gray-700 cursor-pointer relative md:inline-block
             block py-2 md:py-0"
          >
            <span
              className="relative after:content-[''] after:absolute after:w-full after:h-[2px] 
            after:bg-black after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform 
            after:duration-300 hover:after:scale-x-100"
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Navigation Links */}
      {isOpen && (
        <ul
          className={` flex flex-col items-center space-x-6 md:hidden absolute md:static top-14 left-0 w-full
             bg-white md:w-auto md:space-x-6 p-4 md:p-0 transition-transform md:transition-none
              duration-300 ease-in-out transform origin-top ${
                isOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 hidden md:flex"
              } `}
        >
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="text-black hover:text-gray-700 cursor-pointer relative md:inline-block
             block py-2 md:py-0"
            >
              <span
                className="relative after:content-[''] after:absolute after:w-full after:h-[2px] 
            after:bg-black after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform 
            after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
