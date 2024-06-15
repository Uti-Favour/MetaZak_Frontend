import React from "react";
import { listedFeature } from "../constant";

const LandingFeatures = () => {
  return (
    <>
      <div className="lg:flex space-x-5 lg:mx-10 mx-5 lg:mt-24 mt-16">
        {/* Text Div */}
        <div>
          {/* Header */}
          <div className="mb-5">
            <h1 className="text-4xl lg:text-5xl max-w-md text-white font-normal">Get lower, <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-white">volume-based </span> pricing with Advanced Trade</h1>
          </div>
          {/* List */}
          {listedFeature.map(lists => (
            <div className="flex items-center space-x-3 text-white lg:space-y-5 space-y-8">
            <div className="" >
            <i class={lists.icon}></i>
            </div>
            <div>
              <h2 className="text-gray-100 font-bold text-lg">
                {lists.heading}
              </h2>
              <p className="text-gray-300">
                {lists.paragrapgh}
              </p>
              
            </div>
            
          </div>
          ))}

          <div className="mt-16">
          <a href="#"><button className="py-3 px-10 bg-white text-gray-900 rounded-3xl text-md ">Learn More</button></a>
          </div>
        </div>

        <div  className="lg:max-w-2xl w-full mx-auto mt-16 lg:mt-0 ">
          <img src="https://images.ctfassets.net/o10es7wu5gm1/6Ek6ntzQGzeW18LxdsyyzJ/55fcb928e10ceeef11686e2f017cbfdd/visual-spot__2_.png" alt=""  />
        </div>

      </div>
      
    </>
  );
};

export default LandingFeatures;
