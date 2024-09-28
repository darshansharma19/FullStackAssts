import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-blue-600">RoomDeekho</h1>
            <p className="text-gray-700">
              RoomDeekho helps students find the perfect accommodation. From PGs to hostel rooms, we provide a user-friendly platform to make your search easier and more efficient.
            </p>
          </div>

          {/* Second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-blue-600">Explore</h1>
              <div className="text-gray-700">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    PGs Near You
                  </li>
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    Hostel Rooms
                  </li>
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    Roommates
                  </li>
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    Student Services
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-blue-600">Quick Links</h1>
              <div className="text-gray-700">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    Contact Us
                  </li>
                  <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-blue-600">Stay Connected</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-gray-500"
              />
              <button className="bg-yellow-500 text-white font-semibold py-4 px-6 rounded-e-xl hover:bg-yellow-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            {/* Social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/RoomDeekho">
                <FaWhatsapp className="cursor-pointer text-blue-600 hover:text-yellow-500 hover:scale-105 transition-all duration-200" />
              </a>
              <a href="https://www.instagram.com/roomdeekho/">
                <FaInstagram className="cursor-pointer text-blue-600 hover:text-yellow-500 hover:scale-105 transition-all duration-200" />
              </a>
              <a href="https://roomdeekho.com/">
                <TbWorldWww className="cursor-pointer text-blue-600 hover:text-yellow-500 hover:scale-105 transition-all duration-200" />
              </a>
              <a href="https://www.youtube.com/@RoomDeekho">
                <FaYoutube className="cursor-pointer text-blue-600 hover:text-yellow-500 hover:scale-105 transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
