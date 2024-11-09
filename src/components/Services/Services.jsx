import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Fetch the projects data from the backend
    fetch('http://localhost:5000/projects')  // Ensure the backend server is running
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Our Projects
        </h1>
        <p className="text-black text-center text-lg mb-12">
          We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their home.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={SlideLeft(index * 0.2)}  // Delay each project
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg flex flex-col items-center p-6 hover:scale-105 duration-300 shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-700 text-center">{project.name}</h2>
              <p className="text-gray-600 text-center px-3 mb-4">{project.description}</p>
              {/* Updated button styling */}
              <button className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all duration-300 text-center">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
