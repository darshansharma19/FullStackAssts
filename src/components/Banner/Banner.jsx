import React from "react";
import { motion } from "framer-motion";

const Explore = () => {
  return (
    <section className="bg-white py-14 md:py-24 relative">
      {/* Background shapes */}
      <div className="absolute w-[750px] left-[10%] top-[10%]">
        <img loading="lazy" src="/Ellipse 20.svg" alt="Background Shape" />
      </div>
      <div className="absolute left-[5%] top-[70%]">
        <img loading="lazy" src="/Ellipse 23.svg" alt="Background Shape" className="h-[500px]" />
      </div>
      <div className="absolute w-[300px] left-[5%] top-[110%]">
        <img loading="lazy" src="/Group 1.svg" alt="Background Shape" />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
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
              Not Your Average Realtor
            </motion.h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptas consequatur vitae autem quis corrupti fugit repellendus, officia est minima saepe repudiandae reiciendis numquam in reprehenderit earum itaque eaque quibusdam.
            </p>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="relative w-full h-full min-h-[300px] pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-[300px] right-[2.5%]"
          >
            <img loading="lazy" src="/pexels-andres-ayrton-6578391.svg" alt="Real Estate Image 1" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-[380px] right-[45%] top-[48%]"
          >
            <img loading="lazy" src="/pexels-brett-sayles-2881232-1.svg" alt="Real Estate Image 2" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-[300px] right-[6%] top-[118%]"
          >
            <img loading="lazy" src="/pexels-brett-sayles-2881232.svg" alt="Real Estate Image 3" />
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col w-full h-full items-center mt-[300px]">
          <div className="text-3xl font-bold text-sky-700">Why Choose Us?</div>
          <div className="w-36 h-1 bg-sky-700 mt-5" />
          <div className="w-full h-full flex items-center mt-5 justify-center gap-5 px-20">
            {/* Section Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <img loading="lazy" src="/Ellipse 10.svg" alt="Card Background" />
                <div className="absolute top-1/4 right-1/4">
                  <img loading="lazy" src="/home.svg" alt="Home Icon" />
                </div>
              </div>
              <div className="text-sky-700 text-2xl font-bold mt-5">Potential ROI</div>
              <div className="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptatibus dolorem ut doloribus. Corrupti at laudantium corrupti reprehenderit.
              </div>
            </div>

            {/* Section Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <img loading="lazy" src="/Ellipse 10.svg" alt="Card Background" />
                <div className="absolute top-1/4 right-1/4">
                  <img loading="lazy" src="/paintbrush-2.svg" alt="Design Icon" />
                </div>
              </div>
              <div className="text-sky-700 text-2xl font-bold mt-5">Design</div>
              <div className="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptatibus dolorem ut doloribus. Corrupti at laudantium corrupti reprehenderit.
              </div>
            </div>

            {/* Section Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <img loading="lazy" src="/Ellipse 10.svg" alt="Card Background" />
                <div className="absolute top-1/4 right-1/4">
                  <img loading="lazy" src="/circle-dollar-sign.svg" alt="Marketing Icon" />
                </div>
              </div>
              <div className="text-sky-700 text-2xl font-bold mt-5">Marketing</div>
              <div className="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptatibus dolorem ut doloribus. Corrupti at laudantium corrupti reprehenderit qui nam.
              </div>
            </div>
          </div>
        </div>

        {/* Additional Background Shapes */}
        <div className="mt-10">
          <div className="pr-36">
            <img loading="lazy" src="/Subtract-1.svg" alt="Background Shape" className="ml-auto" />
          </div>
          <div className="relative scale-75 -left-48 h-[1100px] -top-[130px]">
            <div className="pr-20 mt-5 absolute -right-[450px]">
              <img loading="lazy" src="/Group 1000001645.svg" alt="Background Shape" className="ml-auto" />
            </div>
            <div className="absolute left-[14%]">
              <img loading="lazy" src="/Subtract-2.svg" alt="Background Shape" className="w-[80px]" />
            </div>
            <div className="absolute left-[9%] top-[400px]">
              <img loading="lazy" src="/Ellipse 10.svg" alt="Background Shape" />
            </div>
            <div className="absolute left-[4%] top-[550px]">
              <img loading="lazy" src="/Ellipse 17.svg" alt="Background Shape" />
            </div>
            <div className="absolute left-0 top-[620px]">
              <img loading="lazy" src="/Ellipse 22.svg" alt="Background Shape" />
            </div>
            <div className="absolute left-[30%] top-[200px]">
              <img loading="lazy" src="/pexels-brett-sayles-2881232.svg" alt="Real Estate Image 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
