import React from "react";
import Hero from "./Hero/Hero";
import AboutMasjid from "./HomeComponents/AboutMasjid";
import PeranIwkz from "./HomeComponents/PeranIwkz/PeranIwkz";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMasjid />
      <PeranIwkz />
    </div>
  );
};

export default Home;
