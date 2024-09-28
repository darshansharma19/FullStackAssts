import React from "react";
import IndoreCityPng from "../../assets/Indore_Icon.png"; 
import { FaUtensils, FaBicycle } from "react-icons/fa"; 
import { GiWashingMachine } from "react-icons/gi"; 
import { MdOutlineEventAvailable } from "react-icons/md"; 
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const ExploreIndore = () => {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={IndoreCityPng} // Image of Indore city
            alt="Indore City"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-blue-600"
            >
              Explore Indore & Connect with Local Vendors
            </motion.h1>
            <p className="text-lg text-gray-600">
              Discover the best local vendors, events, and services in Indore, Madhya Pradesh. From laundry to tiffin services, we have everything to make your stay comfortable.
            </p>

            {/* Services */}
            <div className="flex flex-col gap-6">
              {/* Local Food & Tiffin Services */}
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 duration-300 hover:shadow-2xl"
              >
                <FaUtensils className="text-2xl text-yellow-500" />
                <p className="text-lg text-blue-700">Food & Tiffin Services</p>
              </motion.div>

              {/* Laundry & Housekeeping Services */}
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 duration-300 hover:shadow-2xl"
              >
                <GiWashingMachine className="text-2xl text-yellow-500" />
                <p className="text-lg text-blue-700">Laundry & Housekeeping</p>
              </motion.div>

              {/* Cycling and Delivery Services */}
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 duration-300 hover:shadow-2xl"
              >
                <FaBicycle className="text-2xl text-yellow-500" />
                <p className="text-lg text-blue-700">Cycling & Delivery Services</p>
              </motion.div>

              {/* Events and Concerts */}
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 duration-300 hover:shadow-2xl"
              >
                <MdOutlineEventAvailable className="text-2xl text-yellow-500" />
                <p className="text-lg text-blue-700">Events & Concerts Updates</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreIndore;
