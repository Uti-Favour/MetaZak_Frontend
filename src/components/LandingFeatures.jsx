import React from "react";
import { listedFeature } from "../constant";

const LandingFeatures = () => {
  return (
    <>

<div className="text-white space-y-5 mx-10 mt-16">
        {listedFeature.map((feature) => (
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <div>
              <h2 className="text-xl">{feature.heading}</h2>
              <p className="max-w-lg">{feature.paragrapgh}</p>
            </div>
          </div>
        ))}

        {/* image */}
        <div>
          <img src="src/assets/images/chat-deck.png" alt="" />
        </div>
      </div>

    </>
  );
};

export default LandingFeatures;
