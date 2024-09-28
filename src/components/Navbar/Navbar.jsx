import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from '../../assets/logo.jpeg';

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Find Rooms", path: "/find-room" }, 
  { id: 3, title: "Roommate Match", path: "/roommate-match" },
  { id: 4, title: "About Us", path: "/about" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-20 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="RoomDeekho Logo"
            className="w-16 h-16 mr-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="font-bold text-4xl text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            RoomDeekho
          </motion.h1>
        </div>

        {/* Menu section */}
        <div className="hidden lg:flex gap-8 items-center">
          <ul className="flex items-center gap-8">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 relative group"
                >
                  <span className="text-blue-600 transition duration-300 group-hover:font-bold">
                    {menu.title}
                  </span>
                  <span className="block h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Sign In Dropdown */}
          <div className="relative">
            <motion.button
              onClick={toggleDropdown}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-600 transition"
            >
              Sign In
            </motion.button>

            {/* Animated Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isDropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden ${isDropdownOpen ? "block" : "hidden"}`}
            >
              <ul className="py-2 text-gray-700">
                <li>
                  <a
                    href="/signin-owner"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition"
                  >
                    Sign In as Property Owner
                  </a>
                </li>
                <li>
                  <a
                    href="/signin-user"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition"
                  >
                    Sign In as User
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-blue-600" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
