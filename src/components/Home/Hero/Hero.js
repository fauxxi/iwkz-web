import React from "react";

import { useInView } from "react-intersection-observer";

import JadwalSholat from "./HeroComponents/JadwalSholat/JadwalSholat";
import CustomButton from "./HeroComponents/CustomButton/CustomButton";
import {
  StyledTitle,
  StyledParallaxSection,
  StyledDiv
} from "./styled.components";

const Hero = () => {
  const [ref, inView] = useInView({
    rootMargin: "-100px"
  });

  return (
    <StyledParallaxSection className="hero is-fullheight parallax" id="hero">
      <div className="hero-head"></div>

      <div className="hero-body">
        <div className="container" id="jadwal-sholat" ref={ref}>
          <StyledDiv inView={inView} className="columns is-vcentered">
            <div className="column is-medium is-offset-1 is-5 is-block-mobile has-text-white">
              <StyledTitle className="has-text-weight-normal is-size-3">
                IWKZ
              </StyledTitle>
              <div className="content is-hidden-mobile">
                <p className="has-text-weight-medium is-size-5">
                  Indonesisches Weisheits- und Kulturzentrum e.V.
                </p>
                <p className="is-size-6">
                  Saat ini kami berencana untuk membeli gedung sendiri, klik
                  tombol dibawah untuk info lebih lanjut atau berdonasi
                </p>
                <div className="buttons">
                  <CustomButton color="prs" text="More info" />

                  {/*<CustomButton color="donasi" text="donasi" />*/}
                </div>
              </div>
            </div>
            <div className="column is-offset-1 is-4">
              <JadwalSholat />
            </div>
          </StyledDiv>
        </div>
      </div>

      <div className="hero-foot"></div>
    </StyledParallaxSection>
  );
};

export default Hero;
