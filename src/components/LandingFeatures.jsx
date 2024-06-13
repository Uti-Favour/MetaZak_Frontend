import React from "react";

const LandingFeatures = () => {
  return (
    <>
      <div className="text-white">
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
            <h2>Hello World</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              consectetur?
            </p>
          </div>
        </div>

        {/* image */}
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingFeatures;
