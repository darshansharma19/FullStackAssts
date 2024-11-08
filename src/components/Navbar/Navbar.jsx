import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" }, 
  { id: 3, title: "About Projects", path: "/aboutprojects" },
  { id: 4, title: "Testimonial", path: "/testimonial" },
  { id: 5, title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-20 bg-white shadow-md bg-cover bg-center"
      style={{
        backgroundImage: "url('/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home-1.svg')" // path to the svg file in the public folder
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
   
        <div className="flex items-center">
          <motion.img
            src="/logo.svg"
            alt="Real Trust Logo"
            className="w-15 h-16 mr-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
        </div>

        
        <div className="hidden lg:flex gap-8 items-center">
          <ul className="flex items-center gap-8">
            {NavbarMenu.slice(0, 4).map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 font-bold text-black transition duration-300 hover:font-extrabold hover:text-blue-500 hover:underline"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={NavbarMenu[4].path}
                className="bg-orange-500 text-white py-2 px-6 rounded-lg font-bold transition duration-300 hover:bg-orange-600"
              >
                {NavbarMenu[4].title}
              </a>
            </li>
          </ul>

       
          <div className="relative">
            <motion.button
              onClick={toggleDropdown}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-600 transition"
            >
              Sign Up
            </motion.button>

         
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isDropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden ${isDropdownOpen ? "block" : "hidden"}`}
            >
              <ul className="py-2 text-gray-700">
                <li>
                  <a
                    href="/signup-admin"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition"
                  >
                    Sign Up as Admin
                  </a>
                </li>
                <li>
                  <a
                    href="/signup-user"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition"
                  >
                    Sign Up as User
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-blue-600" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
