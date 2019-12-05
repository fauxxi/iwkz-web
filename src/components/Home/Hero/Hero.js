import React from "react";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import JadwalSholat from "../Hero/JadwalSholat/JadwalSholat";

const Hero = () => {
  const [ref, inView] = useInView({
    rootMargin: "-100px"
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section
      className="hero is-fullheight background"
      style={
        {
          // background:
          //   "linear-gradient( 109.6deg,  rgba(148,233,194,1) 11.2%, rgba(224,235,186,1) 91.1% )"
        }
      }
      id="hero"
    >
      <div className="hero-head"></div>

      <div className="hero-body">
        <div className="container" id="jadwal-sholat">
          <animated.div ref={ref} style={props}>
            <div className="columns is-vcentered">
              <div className="column is-medium is-offset-1 is-5 is-hidden-touch has-text-white">
                <div className="content">
                  <p className="has-text-weight-semibold is-size-3">IWKZ</p>
                  <p className="has-text-weight-medium is-size-5">
                    Indonesisches Weisheits- und Kulturzentrum e.V.
                  </p>
                  <p className="">
                    Saat ini kami berencana untuk membeli gedung sendiri, klik
                    tombol dibawah untuk info lebih lanjut atau berdonasi
                  </p>
                  <div className="buttons">
                    <button
                      className="button has-text-light is-rounded"
                      style={{
                        background:
                          "linear-gradient(to right, #11998e, #38ef7d)",
                        border: "none"
                      }}
                    >
                      Info
                    </button>
                    <button
                      className="button has-text-light is-rounded"
                      style={{
                        background:
                          "linear-gradient(to right, #89216B,#DA4453 )",
                        border: "none"
                      }}
                    >
                      Donasi
                    </button>
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
