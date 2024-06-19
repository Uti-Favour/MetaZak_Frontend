import React from "react";

const Button = ({ content, link, id }) => {
  return (
    <>
      <a href={link}>
        <button
          className="py-3 px-10 bg-purple-900 rounded-3xl text-md  font-bold text-white hover:border hover:border-purple-900 hover:bg-transparent hover:text-gray-800"
          key={id}
        >
          {content}
        </button>
      </a>
    </>
  );
};



export default Button;
