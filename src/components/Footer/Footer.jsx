import React from "react";
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-28">
      {/* Background section */}
      <div className="relative">
        <div className="absolute w-full h-full bg-black bg-opacity-50">
          <div className="w-[600px] mx-auto text-center text-2xl font-bold text-white mt-24">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </div>
          <div className="text-center mt-16">
            <button className="bg-white text-sky-500 rounded-lg mx-auto px-28 py-2 font-bold border-[1px] border-solid border-sky-500">
              Learn More
            </button>
          </div>
        </div>
        <img loading="lazy" className="" src="/Rectangle.svg" />
      </div>

      {/* Links section */}
      <div className="w-full h-[100px] bg-blue-500 text-white flex justify-between px-28 items-center">
        <div>Home</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <div className="ml-32">Subscribe Us</div>
        <form onSubmit={(e) => e.preventDefault()} className="border-2 border-white rounded-md">
          <input
            name="email"
            placeholder="Enter Email Address"
            className="placeholder-white outline-none text-white bg-inherit px-8"
          />
          <span>
            <button className="bg-white text-sky-500 h-full p-2 px-8" type="submit">
              Subscribe
            </button>
          </span>
        </form>
      </div>

      {/* Bottom footer section */}
      <div className="w-full h-[100px] bg-[#21202e] flex justify-between px-28 text-white items-center">
        <div>All Rights Reserved 2024</div>
        <div>
          <img loading="lazy" src="/logo.svg" className="h-[40px]" alt="Logo" />
        </div>
        <div className="flex gap-2">
          <div className="rounded-full p-1 bg-white">
            <FaInstagram className="text-sky-500" />
          </div>
          <div className="rounded-full p-1 bg-white">
            <FaWhatsapp className="text-sky-500" />
          </div>
          <div className="rounded-full p-1 bg-white">
            <FaTwitter className="text-sky-500" />
          </div>
          <div className="rounded-full p-1 bg-white">
            <FaLinkedin className="text-sky-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
