import React from "react";
import { useState, useEffect, useContext } from "react";
import NavBar from "./common/NavBar";
import "../css/index.css";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen bg-purple-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    
        <div className="relative flex justify-center">
          <div className="mt-32 lg:mt-40">
            <h1 className="text-4xl lg:text-7xl max-w-3xl flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-purple-600 text-center font-bold mx-5 lg:mx-0">
              GateWay to Intelligent Crypto Investment
            </h1>

            <p className="flex justify-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
              Empowering the future, one block at a time
            </p>

            {/* ------ Image pattern ------ */}
            <div className="flex mt-16 space-x-8 lg:space-x-24 justify-center">
              <div className="bg-transparent border border-slate-100 lg:w-24 w-16 lg:h-24 h-16 flex justify-center items-center rounded-3xl animation-up-down">
                <img
                  src="public/Bitcoin.svg"
                  alt=""
                  className="lg:w-16 w-10 lg:h-16 h-10"
                />
              </div>
              <div className="bg-transparent border border-slate-100 lg:w-24 w-16 lg:h-24 h-16 flex justify-center items-center rounded-3xl mt-10 animation-up-down">
                <img
                  src="public/Etherium.svg"
                  alt=""
                  className="lg:w-16 w-10 lg:h-16 h-10"
                />
              </div>
              <div className="bg-transparent border border-slate-100 lg:w-24 w-16 lg:h-24 h-16 flex justify-center items-center rounded-3xl mt-10 animation-up-down">
                <img
                  src="public/coin-3.svg"
                  alt=""
                  className="lg:w-16 w-10 lg:h-16 h-10"
                />
              </div>
              <div className="bg-transparent border border-slate-100 lg:w-24 w-16 lg:h-24 h-16 flex justify-center items-center rounded-3xl animation-up-down">
                <img
                  src="public/coin-4.svg"
                  alt=""
                  className="lg:w-16 w-10 lg:h-16 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
