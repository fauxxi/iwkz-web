import React from "react";
import Hero from "./Hero/Hero";
import AboutMasjid from "./HomeComponents/AboutMasjid";
import PeranIwkz from "./HomeComponents/PeranIwkz/PeranIwkz";
import Timeline from "./Timeline/Timeline";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMasjid />
      <PeranIwkz />
      <Timeline />
    </div>
  );
};

export default Home;
