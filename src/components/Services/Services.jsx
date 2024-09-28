import React from "react";
import { RiHome2Line } from "react-icons/ri"; // Updated for Room, PG, Hostel
import { AiOutlineTeam } from "react-icons/ai"; // For AI Matching system
import { FiMapPin } from "react-icons/fi"; // For Explore city
import { BiNews } from "react-icons/bi"; // For Concerts, Events, etc.
import { MdOutlineLocalLaundryService } from "react-icons/md"; // For Local Vendors (Cook, Laundry)
import { MdOutlinePayment } from "react-icons/md"; // For Payment Reminder
import { motion } from "framer-motion";

// Updated Services Data with your descriptions
const ServicesData = [
  {
    id: 1,
    title: "Room, PG, Hostel Finder",
    description: "Helping students and professionals find rooms, PGs, and hostels.",
    icon: <RiHome2Line />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "AI-based Roommate Matching",
    description: "Find perfect roommates based on religion, nature, and other factors.",
    icon: <AiOutlineTeam />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Explore the City",
    description: "Explore city trends and new places for newcomers.",
    icon: <FiMapPin />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Events & Concert Updates",
    description: "Stay updated with events and concerts tailored to your interests.",
    icon: <BiNews />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Local Vendors Assistance",
    description: "Connect with local vendors like cooks, laundry, and tiffin centers.",
    icon: <MdOutlineLocalLaundryService />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Payment Reminder & Direct Pay",
    description: "Pay rent directly to landlords with reminders from our platform.",
    icon: <MdOutlinePayment />,
    delay: 0.7,
  },
];

// Animation for sliding in from the right
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white py-16"> {/* White background */}
      <div className="container">
        <h1 className="text-4xl font-bold text-left pb-10 text-blue-600">
          Services We Provide {/* Blue heading */}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-blue-50 hover:bg-blue-100 rounded-2xl flex flex-col gap-4 items-center justify-center p-6 hover:scale-105 duration-300 shadow-lg hover:shadow-2xl transition-all" 
            >
              <div className="text-blue-600 text-5xl mb-4">{service.icon}</div> {/* Blue icons */}
              <h2 className="text-xl font-semibold text-blue-700 text-center">{service.title}</h2> {/* Blue titles */}
              <p className="text-gray-600 text-center px-3">{service.description}</p> {/* Gray descriptions */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
