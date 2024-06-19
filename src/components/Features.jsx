import React from "react";
import { features, listedFeature, gridtext } from "../constant";
import Button from "./common/Button";

const Features = () => {
  return (
    <>
      <section className="bg-top bg-no-repeat py-10  bg-purple-900 ">
        <div className="flex justify-center mb-16">
          <div className="mt-10">
            <h1 className="font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-pink-600 text-center">
              Metazaksk Mind blowing features
            </h1>
            <p className="text-center text-lg lg:text-xl text-gray-400 leading-normal max-w-4xl mt-8  mx-3 lg:mx-0">
              Discover the unparalleled capabilities of Metazaksk that set us
              apart in the crypto world. Our platform offers innovative
              solutions designed to enhance your digital asset experience
            </p>
          </div>
        </div>
        <div className="container">
          <div className="mb-8 text-center lg:mb-20">
            <div className="space-y-12">
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 sm:gap-16 sm:grid-col-2 lg:mt-24 gap-16 lg:ml-24 mx-2 lg:mx-0">
                {features.map((feature) => (
                  <div
                    className={
                      "before:block before:content-[''] before:absolute before:w-full before:h-full before:rounded-3xl before:z-0 before:-top-4 lg:before:-top-8 before:-left-4 lg:before:-left-8 relative before:bg-purple-500 aos-init aos-animate"
                    }
                  >
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

export const LandingFeatures = () => {
  return (
    <>
      <div className="bg-white">
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
                <Button content={"Learn More"} link={"#"} />
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

const GridFeatures = ({ icon, heading, description, link }) => {
  return (
    <>
      <div className="border border-slate-200 py-8 px-4 rounded-lg">
        <i className={icon}></i>
        <h2 className="text-xl font-normal mt-6">{heading}</h2>
        <p className="text-gray-700 mt-2 mb-10 leading-8">{description}</p>
        <a href={link} className="text-purple-900">
          Learn More
        </a>
      </div>
    </>
  );
};

export const GridList = () => {
  return (
    <>
      <div className="ml-5 lg:ml-24 lg:mt-32 mt-16">
        <h1 className="text-3xl lg:text-4xl max-w-sm lg:max-w-none text-gray-950 font-normal">
        The most trusted onChain Analysis Platform
        </h1>
        <p className="mt-5 text-xl text-gray-700 ">Millions of users trust us, and so can you. The proof is in our platform:</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-5 lg:mx-24 mt-16 lg:mt-16 gap-4">
        {gridtext.map((lists) => (
          <GridFeatures
            key={lists.id}
            icon={lists.icon}
            heading={lists.heading}
            description={lists.paragraph}
            link={lists.link}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
