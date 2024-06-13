import React from "react";
import { useState, useEffect, useContext } from "react";
import NavBar from "./common/NavBar";
import "../css/index.css";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen bg-purple-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* -------- NavBar ------- */}
        <div>
          <nav className="flex justify-between  mx-10 ">
            <div className=" mt-8">
              <img
                src="/metazak_logo_asset.png"
                alt="metazal logo"
                className="w-10 h-10"
              />
            </div>
            <ul className="flex space-x-10 text-white  mt-8">
              <li>Home</li>
              <li>About</li>
              <li>MetaZak Pro</li>
              <li>MetaZak Academy</li>
              <li>Developer</li>
            </ul>

            <div className="flex items-center space-x-5 text-white">
              <div className="flex space-x-2 items-center">
                <button>Sign In</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 -mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>

              <button className="border border-slate-200 px-3 py-1 rounded-3xl">
                Contact us
              </button>
            </div>
          </nav>
        </div>

        <div className="relative flex justify-center">
          <div className="mt-32 lg:mt-24">
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
