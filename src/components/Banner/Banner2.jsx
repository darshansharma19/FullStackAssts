import React from "react";
import Indore_Icon from "../../assets/indore.jpeg";
import { motion } from "framer-motion";

// Sample Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Tips for Newcomers in Indore",
    excerpt: "Discover how to adjust to life in Indore with this handy guide...",
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Hidden Gems of Indore",
    excerpt: "Explore the less-known but amazing spots in the city...",
    link: "#",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Food Lover’s Guide to Indore",
    excerpt: "From street food to fine dining, here's what foodies should not miss...",
    link: "#",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Indore for Students: A Complete Guide",
    excerpt: "Tips on accommodation, study spots, and the best hangout places...",
    link: "#",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Guest Blogs: Share Your Indore Story",
    excerpt: "Want to write about your experience in Indore? Submit your story here...",
    link: "#",
    delay: 0.6,
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
        {/* Banner Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <h1 className="text-4xl font-bold !leading-snug text-blue-600">
                Join Our Community to Start Your Journey in Indore
              </h1>
              <p className="text-gray-600">
                Whether you're new to the city or have been here a while, our blog will help you uncover everything Indore has to offer.
              </p>
              <a
                href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
                className="primary-btn bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 mt-8 px-6 py-3 rounded-md"
              >
                Join Now
              </a>
            </div>
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={Indore_Icon}
              alt="Banner"
              className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            />
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Explore Our Latest Blog Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeIn(post.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-6 bg-[#f4f4f4] rounded-xl hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-yellow-500 hover:text-yellow-600 font-semibold transition-all"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
