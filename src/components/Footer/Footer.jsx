import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-28 bg-white">
      {/* Background image with darker overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/Rectangle.svg')" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container relative z-10"
      >
        {/* Section with text and button */}
        <div className="text-white py-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Learn more about our listing process, as well as our
            <br />
            additional straight and design work.
          </h2>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Section with blue background and links */}
        <div className="bg-blue-600 text-white py-5 mt-12">
          <div className="flex justify-between items-center container">
            <div className="space-x-10 flex">
              <h3 className="text-xl font-bold">Home</h3>
              <h3 className="text-xl font-bold">Services</h3>
              <h3 className="text-xl font-bold">Projects</h3>
              <h3 className="text-xl font-bold">Testimonial</h3>
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Stay Connected</h1>
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
            </div>
          </div>
        </div>

      </motion.div>

      {/* Footer bottom section with darker black background */}
      <div className="bg-black text-white py-6">
        <div className="container flex justify-between items-center">
          <img src="/logo.svg" alt="Logo" className="w-32" />
          <div className="flex items-center space-x-4">
            <span className="text-sm">+1 (123) 456-7890</span>
            <div className="flex space-x-3">
              <FaInstagram className="text-white" />
              <FaWhatsapp className="text-white" />
              <FaTwitter className="text-white" />
              <FaLinkedin className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
