import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import alFalah from "../../../img/alfalah-black-300x300.png";

const AboutMasjid = () => {
  const [ref, inView] = useInView({
    rootMargin: "-100px"
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section is-medium" id="tentang-masjid">
      <animated.div ref={ref} style={props}>
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-2 pb3">
              <p className="is-size-4 has-text-weight-medium pv1">
                Masjid Al-Falah
              </p>
              <p className="pv2 has-text-justified">
                Al-Falah sebagai sebuah masjid, telah berdiri sejak lebih dari
                20 tahun yang lalu. Ia tidak hanya menjadi tempat melaksanakan
                ritual ibadah saja. Bahkan sejak didirikannya, ia telah menjadi
                pusat kegiatan sosial, pendidikan dan dakwah bagi masyarakat
                muslim Indonesia di Berlin dan sekitarnya.
              </p>
              <p className="pv2 has-text-justified">
                Melalui halaman ini, kami berusaha menunjukkan kepada
                saudara-saudara kaum muslimin di tempat lain bagaimana masjid
                Al-Falah Berlin dengan semua pengurus dan jamaahnya menghidupkan
                agama kita, Islam, di tengah budaya barat.
              </p>
            </div>
            <div className="column is-3 is-hidden-touch">
              <img src={alFalah} alt="al-falah" />
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default AboutMasjid;
