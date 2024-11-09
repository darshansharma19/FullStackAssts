import React from "react";
import { motion } from "framer-motion";

// Sample Client Data
const clients = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/100",  // Use actual image URL for client profile
    review: "This is an amazing service, highly recommend it to anyone looking to explore Indore!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/100",  // Use actual image URL for client profile
    review: "Great experience! The blog provided helpful tips for newcomers.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://via.placeholder.com/100",  // Use actual image URL for client profile
    review: "A wonderful guide to the hidden gems of Indore. I had a great time following these tips.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://via.placeholder.com/100",  // Use actual image URL for client profile
    review: "Fantastic! The food recommendations were spot on. Loved every dish I tried.",
  },
  {
    id: 5,
    name: "Chris Lee",
    image: "https://via.placeholder.com/100",  // Use actual image URL for client profile
    review: "Indore is full of surprises! This blog helped me find some great spots to visit.",
  },
  {
    id: 6,
    name: "Sarah Brown",
    image: "https://via.placeholder.com/100",  // Use actual image URL for client profile
    review: "As a student, I found the guide to Indore invaluable. It made settling in so much easier.",
  },
];

// Animation Variants
const fadeIn = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const BlogPage = () => {
  return (
    <section className="bg-white">
      <div className="container py-14 md:py-24">
        {/* Happy Client Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Happy Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                variants={fadeIn(index * 0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-6 bg-[#f4f4f4] rounded-xl hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
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

export default BlogPage;
