import React from "react";
import { features } from "../constant";
import { motion } from "framer-motion";




const Features = () => {
  return (
    <>
      <section className="bg-top bg-no-repeat py-10 lg:py-16 bg-purple-900 rounded-tr-[50px] rounded-3xl lg:rounded-tl-[50px]">
        <div className="flex justify-center mb-16">
          <h1 className="font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-pink-600 text-center">Metazaksk Mind blowing features</h1>
        </div>
        <div className="container">
          <div className="mb-8 text-center lg:mb-20">
            <div className="space-y-12">
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 sm:gap-16 sm:grid-col-2 lg:mt-24 gap-16 lg:ml-24 mx-2 lg:mx-0">
                {features.map((feature) => (
                  <div className={"before:block before:content-[''] before:absolute before:w-full before:h-full before:rounded-3xl before:z-0 before:-top-4 lg:before:-top-8 before:-left-4 lg:before:-left-8 relative before:bg-purple-500 aos-init aos-animate"}>
                    <div className="relative z-10 h-full rounded-3xl border border-white bg-white/85 px-6 py-12 shadow lg:p-12">
                      <img
                        className="mx-auto -mt-4 -mb-4 w-[400px] h-[400px] bg-transparent"
                        src={feature.image}
                        alt="crypto-assets"
                      />
                      <h2 className="mt-10 text-3xl font-bold">
                       {feature.heading}
                      </h2>
                      <p className="mt-5 text-xl text-left leading-loose text-gray-600">
                       {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This section contains the benefits of Metazak, implemented the grid pattern shown in intmax */}
    </>
  );
};

export default Features;
