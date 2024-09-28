import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        {/* Subscription Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[450px] mx-auto bg-blue-50 p-8 rounded-md shadow-lg">
            <h1 className="text-4xl font-bold !leading-snug text-blue-600">
              5k+ Students Found Their Perfect Room
            </h1>
            <p className="text-gray-700">
              Join thousands of students who have used Room Dekho to find the
              perfect living space in Indore. Subscribe to get exclusive offers and tips.
            </p>
            <a
              href="#"
              className="primary-btn bg-yellow-500 hover:bg-yellow-600 text-white mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-md group transition-all duration-300"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
