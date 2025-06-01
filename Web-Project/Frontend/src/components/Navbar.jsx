import React, { useState } from "react";
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../assets/Newlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // State for About Us submenu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutMenu = () => {
    setAboutOpen(!aboutOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#1e181a] shadow-md">
      <div className="px-6 md:px-16 flex justify-between items-center h-20">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Predict"
            className="w-36 md:w-48"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-6 text-lg md:text-xl text-white">
            <Link to="/">
              <li className="relative block px-3 py-2 group cursor-pointer">
                Home
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></div>
              </li>
            </Link>

            {/* About Us with Submenu */}
            <li className="relative">
              <button
                onClick={toggleAboutMenu}
                className="relative block px-3 py-2 group flex items-center cursor-pointer"
              >
                <span className="relative z-10 transition-colors text-lg group-hover:text-gray-200">
                  Disasters
                </span>
                <FaChevronDown
                  className={`ml-2 text-white transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <ul className="absolute bg-white rounded-xl w-72 text-gray-800 shadow-lg mt-2 py-4 px-6">
                  <Link to="/Earth">
                    <li className="text-gray-600 text-base transition-transform transform hover:scale-105 py-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      EarthQuake
                    </li>
                  </Link>
                  <Link to="/Flood">
                    {" "}
                    <li className="text-gray-600 text-base transition-transform transform hover:scale-105 py-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      Flood
                    </li>
                  </Link>
                  <Link to="/ForestFire">
                    {" "}
                    <li className="text-gray-600 text-base transition-transform transform hover:scale-105 py-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      Forest Fire
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/About">
              <li className="relative block px-3 py-2 group cursor-pointer">
                About Us
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></div>
              </li>
            </Link>
            <Link to="/FAQ">
              <li className="relative block px-3 py-2 group cursor-pointer">
                FAQ's
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></div>
              </li>
            </Link>
            <Link to="/Contact">
              <li className="relative block px-3 py-2 group cursor-pointer">
                Contact Us
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></div>
              </li>
            </Link>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e181a] py-4 px-6">
          <ul className="flex flex-col space-y-4 text-white">
            <li className="cursor-pointer transition-transform transform hover:scale-105">
              Home
            </li>
            <li>
              <button
                onClick={toggleAboutMenu}
                className="flex justify-between items-center w-full cursor-pointer transition-transform transform hover:scale-105"
              >
                Disasters
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li className="cursor-pointer transition-transform transform hover:scale-105">
                    EarthQuake
                  </li>
                  <li className="cursor-pointer transition-transform transform hover:scale-105">
                    Floods
                  </li>
                  <li className="cursor-pointer transition-transform transform hover:scale-105">
                    Forest Fire
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer transition-transform transform hover:scale-105">
              About Us
            </li>
            <li className="cursor-pointer transition-transform transform hover:scale-105">
              FAQ's
            </li>
            <li className="cursor-pointer transition-transform transform hover:scale-105">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
