import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

// Define the FadeUp animation
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.city) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "consultations"), {
        ...formData,
        createdAt: new Date(),
      });

      // Reset the form after submission
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });

      alert("Consultation request submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <section
      className="bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage: `url('/young.svg')`,
      }}
    >
      <Navbar />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] py-14 relative z-10">
        <div className="flex flex-col justify-center text-white space-y-4 md:text-left px-4">
          <motion.h1
            variants={FadeUp(0.6)} // Add animation delay
            initial="initial"
            animate="animate"
            className="text-6xl font-bold"
          >
            <span className="block">Consultation,</span>
            <span className="block">Design</span>
            <span className="block">& Marketing</span>
          </motion.h1>
        </div>

        <motion.div
          variants={FadeUp(0.8)} // Add animation delay
          initial="initial"
          animate="animate"
          className="bg-blue-600/50 backdrop-blur-sm rounded-lg p-8 mx-4 md:mx-0 w-full h-full max-w-[500px] max-h-[500px] flex flex-col justify-between border-2 border-white"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Get a Free Consultation</h2>
          <form className="space-y-4 flex-1 overflow-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-md focus:outline-none placeholder-gray-300 bg-white text-gray-900"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email Address"
              className="w-full p-3 rounded-md focus:outline-none placeholder-gray-300 bg-white text-gray-900"
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="w-full p-3 rounded-md focus:outline-none placeholder-gray-300 bg-white text-gray-900"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Area/City"
              className="w-full p-3 rounded-md focus:outline-none placeholder-gray-300 bg-white text-gray-900"
            />
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition"
            >
              Get Quick Quote
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
