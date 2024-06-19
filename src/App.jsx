import React from "react";
import NavBar from "./components/common/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { LandingFeatures } from "./components/Features";
import { GridList } from "./components/Features";


// import Features from './components/Features'

const App = () => {
  return (
    <>
      <div className="relative h-screen bg-purple-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <NavBar />
        <Hero />
        <Features />
        <LandingFeatures />
       <GridList/>
       
      </div>
    </>
  );
};

export default App;
