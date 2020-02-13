import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import alFalah from "../../../img/alfalah-black-300x300.png";
import {
  StyledContent,
  StyledTitle,
  StyledSection
} from "./styled.components.js";

const AboutMasjid = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <StyledSection className="section is-large" id="tentang-masjid">
      <animated.div style={props}>
        <div className="container" ref={ref}>
          <div className="columns">
            <div className="column is-6 is-offset-2">
              <StyledTitle className="is-size-4 has-text-weight-medium title">
                Masjid Al-Falah
              </StyledTitle>
              <StyledContent>
                Al-Falah sebagai sebuah masjid, telah berdiri sejak lebih dari
                20 tahun yang lalu. Ia tidak hanya menjadi tempat melaksanakan
                ritual ibadah saja. Bahkan sejak didirikannya, ia telah menjadi
                pusat kegiatan sosial, pendidikan dan dakwah bagi masyarakat
                muslim Indonesia di Berlin dan sekitarnya.
              </StyledContent>
              <StyledContent>
                Melalui halaman ini, kami berusaha menunjukkan kepada
                saudara-saudara kaum muslimin di tempat lain bagaimana masjid
                Al-Falah Berlin dengan semua pengurus dan jamaahnya menghidupkan
                agama kita, Islam, di tengah budaya barat.
              </StyledContent>
            </div>
            <div className="column is-3 is-hidden-mobile">
              <img src={alFalah} alt="al-falah" />
            </div>
          </div>
        </div>
      </animated.div>
    </StyledSection>
  );
};

export default AboutMasjid;
