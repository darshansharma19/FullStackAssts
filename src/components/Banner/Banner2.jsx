import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "John Doe",
    image: "/Ellipse 28.svg",  
    review: "This is an amazing service, highly recommend it to anyone looking to explore Indore!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/Ellipse 29.svg", 
    review: "Great experience! The blog provided helpful tips for newcomers.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "/Ellipse 31.svg",  
    review: "A wonderful guide to the hidden gems of Indore. I had a great time following these tips.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "/Ellipse 33.svg",  
    review: "Fantastic! The food recommendations were spot on. Loved every dish I tried.",
  },
  {
    id: 5,
    name: "Chris Lee",
    image: "/Ellipse 35.svg",  
    review: "Indore is full of surprises! This blog helped me find some great spots to visit.",
  },
];


const fadeIn = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const client = () => {
  return (
    <section className="bg-white">
      <div className="container py-14 md:py-24">
        {/* Happy Client Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Happy Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                variants={fadeIn(index * 0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-6 bg-[#f4f4f4] rounded-xl hover:shadow-xl hover:bg-white transition-all duration-300 relative"
              >
                {/* Card Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 -mt-12" // Image pulls outside the card with negative margin
                  />
                  <p className="text-gray-700 mb-2">{client.review}</p>
                  <p className="text-blue-600 font-semibold">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default client;
