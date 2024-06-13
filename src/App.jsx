import React from "react";
import NavBar from "./components/common/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LandingFeatures from "./components/LandingFeatures";
// import Features from './components/Features'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LandingFeatures/>
      <Features />
    </>
  );
};

export default App;
