import React from "react";
import { gridtext } from "../constant";

export const GridFeatures = ({ icon, heading, description, link }) => {
  return (
    <>
        <div className="border border-slate-200 py-8 px-4 rounded-xl">
          <i className={icon}></i>
          <h2 className="text-xl font-normal mt-6">{heading}</h2>
          <p className="text-gray-700 mt-2 mb-10 leading-8">{description}</p>
          <a href={link} className="text-purple-900">Learn More</a>
        </div>
    </>
  );
};

const GridList = () => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-4 mx-5 lg:mx-24 mt-10 lg:mt-24 gap-4">
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

export default GridList;
