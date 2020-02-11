import React from "react";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import JadwalSholat from "./HeroComponents/JadwalSholat/JadwalSholat";
import CustomButton from "./HeroComponents/CustomButton/CustomButton";
import { StyledTitle } from "./styled.components";

const Hero = () => {
  const [ref, inView] = useInView({
    rootMargin: "-100px"
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="hero is-fullheight parallax" id="hero">
      <div className="hero-head"></div>

      <div className="hero-body">
        <div className="container" id="jadwal-sholat">
          <animated.div style={props}>
            <div className="columns is-vcentered" ref={ref}>
              <div className="column is-medium is-offset-1 is-5  has-text-white">
                <StyledTitle className="has-text-weight-normal is-size-3">
                  IWKZ
                </StyledTitle>
                <div className="content is-hidden-touch">
                  <p className="has-text-weight-medium is-size-5">
                    Indonesisches Weisheits- und Kulturzentrum e.V.
                  </p>
                  <p className="is-size-6">
                    Saat ini kami berencana untuk membeli gedung sendiri, klik
                    tombol dibawah untuk info lebih lanjut atau berdonasi
                  </p>
                  <div className="buttons">
                    <CustomButton color="prs" text="info" />

                    <CustomButton color="donasi" text="donasi" />
                  </div>
                </div>
              </div>
              <div className="column is-offset-1 is-4">
                <JadwalSholat />
              </div>
            </div>
          </animated.div>
        </div>
      </div>

      <div className="hero-foot"></div>
    </section>
  );
};

export default Hero;
