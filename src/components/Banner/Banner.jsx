import React from "react";
import { motion } from "framer-motion";

const Explore = () => {
  return (
    <section className="bg-white py-14 md:py-24 relative w-full h-full">
      <div className="flex">
        {/* Left Section: Text and Background Shapes */}
        <div className="relative w-full h-full min-h-[500px] flex justify-center items-center">
          <div className="px-20">
            <h1 className="text-sky-700 text-3xl font-bold py-2">
              Not Your Average Realtor
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, voluptas consequatur vitae autem quis corrupti fugit
              repellendus, officia est minima saepe repudiandae reiciendis numquam
              in reprehenderit earum itaque eaque quibusdam.
            </p>
          </div>
          {/* Background Shapes */}
          <div className="absolute w-[750px] left-[10%] top-[10%]">
            <img loading="lazy" src="/Ellipse 20.svg" alt="Background Shape" />
          </div>
          <div className="absolute left-[5%] top-[70%]">
            <img loading="lazy" src="/Ellipse 23.svg" alt="Background Shape" className="h-[500px]" />
          </div>
          <div className="absolute w-[300px] left-[5%] top-[110%]">
            <img loading="lazy" src="/Group 1.svg" alt="Background Shape" />
          </div>
        </div>

        {/* Right Section: Images and Additional Background Shapes */}
        <div className="relative w-full h-full min-h-[300px]">
          <div className="relative w-full h-full min-h-[300px] pt-10">
            <div className="absolute w-[300px] right-[2.5%]">
              <img loading="lazy" src="/Ellipse 11.svg" alt="Icon" />
            </div>
            <div className="absolute w-[380px] right-[45%] top-[48%]">
              <img loading="lazy" src="/Ellipse 12.svg" alt="Icon" />
            </div>
            <div className="absolute w-[300px] right-[6%] top-[118%]">
              <img loading="lazy" src="/Ellipse 13.svg" alt="Icon" />
            </div>
          </div>
          {/* Rotated Background Shapes */}
          <div className="absolute w-[750px] right-[6%] -top-[20%] -rotate-[30deg]">
            <img loading="lazy" src="/Ellipse 7.svg" alt="Background Shape" />
          </div>
          <div className="absolute -left-[2%] top-[25%] -rotate-[30deg]">
            <img loading="lazy" src="/Ellipse 24.svg" alt="Background Shape" />
          </div>
          <div className="absolute w-[750px] right-[11%] -bottom-[30%] -rotate-[30deg]">
            <img loading="lazy" src="/Ellipse 25.svg" alt="Background Shape" />
          </div>
          <div className="absolute w-[750px] -right-[30%] -bottom-[114%] -rotate-[30deg]">
            <img loading="lazy" src="/Ellipse 26.svg" alt="Background Shape" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col w-full h-full items-center mt-[300px]">
        <h2 className="text-3xl font-bold text-sky-700">Why Choose Us?</h2>
        <div className="w-36 h-1 bg-sky-700 mt-5" />
        <div className="w-full h-full flex items-center mt-5 justify-center gap-5 px-20">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img loading="lazy" src="/Ellipse 10.svg" alt="Card Background" />
              <div className="absolute top-1/4 right-1/4">
                <img loading="lazy" src="/home.svg" alt="Home Icon" />
              </div>
            </div>
            <h3 className="text-sky-700 text-2xl font-bold mt-5">Potential ROI</h3>
            <p className="mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati voluptatibus dolorem ut doloribus. Corrupti at laudantium
              corrupti reprehenderit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img loading="lazy" src="/Ellipse 10.svg" alt="Card Background" />
              <div className="absolute top-1/4 right-1/4">
                <img loading="lazy" src="/paintbrush-2.svg" alt="Design Icon" />
              </div>
            </div>
            <h3 className="text-sky-700 text-2xl font-bold mt-5">Design</h3>
            <p className="mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati voluptatibus dolorem ut doloribus. Corrupti at laudantium
              corrupti reprehenderit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img loading="lazy" src="/Ellipse 10.svg" alt="Card Background" />
              <div className="absolute top-1/4 right-1/4">
                <img loading="lazy" src="/circle-dollar-sign.svg" alt="Marketing Icon" />
              </div>
            </div>
            <h3 className="text-sky-700 text-2xl font-bold mt-5">Marketing</h3>
            <p className="mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati voluptatibus dolorem ut doloribus. Corrupti at laudantium
              corrupti reprehenderit qui nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
