"use client";

//this is the home page where all the imports have been called and merged
import React from "react";
import Navbar from "../Navbar";
import HeroPage from "./Hero";
import WhatIDoPage from "./WhatIDo";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "../Footer";

const HomePage = () => {
    // Define HomePage component
  return (
    <div>
      <Navbar />
      <HeroPage />
      <WhatIDoPage />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default HomePage;
