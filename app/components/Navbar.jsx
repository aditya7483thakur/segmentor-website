"use client";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-black sticky top-0 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="max-w-16" src="logo.png" alt="" />
            </div>
            <div className="hidden md:block">
              <div className="ml-4 md:ml-8 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>
                <div className="relative inline-block">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-lg font-medium focus:outline-none"
                  >
                    Components <FiChevronDown className="ml-1 h-5 w-5" />
                  </button>
                  {showDropdown && (
                    <div className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Option 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Option 2
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-grow md:flex md:ml-4 w-2/12">
            <div className="md:ml-6 md:flex-grow">
              <div className="flex">
                <input
                  className="rounded-l-none flex-1 appearance-none border-b border-sky-600 md:w-full w-44 py-2 px-4 bg-transparent text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Search"
                />

                <button className="px-3 ml-2 md:ml-4 bg-gradient-to-br from-cyan-600 to-indigo-500 text-white rounded-full font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  <IoMdSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <FaBars className={`${isOpen ? "hidden" : "block"} h-8 w-8`} />
              <FaBars className={`${isOpen ? "block" : "hidden"} h-8 w-8`} />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 md:ml-8 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-lg font-medium"
              >
                <FaGithub className="h-8 w-8 text-white" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-[6px] rounded-md text-lg font-medium"
              >
                <CgDarkMode className="h-9 w-9 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              type="button"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              <div className="flex">
                {" "}
                Components <FiChevronDown className="ml-1 h-5 w-5" />
              </div>
            </button>
            {showDropdown && (
              <div className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:block">
          <div className="ml-4 md:ml-8 flex items-baseline space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-base font-medium"
            >
              <FaGithub className="h-8 w-8 text-white" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-[5px] rounded-md text-base font-medium"
            >
              <CgDarkMode className="h-9 w-9 text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
