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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ margin: "-30px auto" }}
      >
        <path
          fill="#F2FFEF"
          fill-opacity="1"
          d="M0,64L60,85.3C120,107,240,149,360,176C480,203,600,213,720,202.7C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <PeranIwkz />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ margin: "-20px auto" }}
      >
        <path
          fill="#F2FFEF"
          fill-opacity="1"
          d="M0,288L60,288C120,288,240,288,360,261.3C480,235,600,181,720,170.7C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <Timeline />
    </div>
  );
};

export default Home;
