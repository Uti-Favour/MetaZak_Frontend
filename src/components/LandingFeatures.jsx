import React from "react";
import { listedFeature } from "../constant";

const LandingFeatures = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="lg:flex lg:space-x-5 lg:mx-10 mx-5 lg:mt-24 mt-16">
          {/* Text Div */}
          <div className="lg:ml-16">
            {/* Header */}
            <div className="mb-5">
              <h1 className="text-4xl lg:text-5xl max-w-md text-gray-950 font-normal">
                Get lower volume-based pricing with Advanced Trade
              </h1>
            </div>
            {/* List */}
            {listedFeature.map((lists) => (
              <div className="flex items-center space-x-3 text-white lg:space-y-5 space-y-5">
                <div className="">
                  <i class={lists.icon}></i>
                </div>
                <div>
                  <h2 className="text-gray-700 font-bold text-lg">
                    {lists.heading}
                  </h2>
                  <p className="text-gray-800 max-w-md">{lists.paragrapgh}</p>
                </div>
              </div>
            ))}

            <div className="mt-16 flex ">
              <a href="#">
                <button className="py-3 px-10 bg-purple-900 rounded-3xl text-md  font-bold text-white">
                  Learn More
                </button>
              </a>
              <a href="#">
                <button className="py-3 px-10 border-white  border-rounded-3xl text-md  font-bold text-gray-900">
                  See More
                </button>
              </a>
            </div>
          </div>

          <div className="mt-16 lg:-mt-16  lg:w-[60%] lg:h-[60%]">
            <img
              src="https://images.ctfassets.net/o10es7wu5gm1/4cLXDpcM3WFvWbom0afEjC/b7b32ec046997856db15cf75f76bab95/NL-EN-EUR.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFeatures;
