import React from "react";
import { gridtext } from "../constant";

const GridFeatures = ({ icon, heading, description, link }) => {
  return (
    <>
      <div className="gterid grid-cols-1 lg:grid-cols-4 border py-3 px-5 text-black">
      <div>
        <i className={icon}></i>
        <h2>{heading}</h2>
        <p>{description}</p>
        <a href={link}></a>
      </div>
      </div>
    </>
  );
};




 const GridList = () => {
{gridtext.map(lists => (
<GridFeatures icon={lists.icon} heading={lists.heading} description={lists.paragraph} link={lists.link}/>
))}
}

export default GridList
