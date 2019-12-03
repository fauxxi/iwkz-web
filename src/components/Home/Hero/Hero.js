import React from "react";

import JadwalSholat from "../Hero/JadwalSholat/JadwalSholat";

const Hero = () => {
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
          <div className="columns is-vcentered">
            <div className="column is-medium is-offset-1 is-5 is-hidden-touch has-text-white">
              <p className="has-text-weight-semibold is-size-3">IWKZ</p>
              <p className="has-text-weight-medium is-size-5">
                Indonesisches Weisheits- und Kulturzentrum e.V.
              </p>

              <button
                className="button has-text-light "
                style={{
                  background: "linear-gradient(to right, #11998e, #38ef7d)",
                  border: "none"
                }}
              >
                Read More
              </button>
            </div>
            <div className="column is-offset-1 is-4">
              <JadwalSholat />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot"></div>
    </section>
  );
};

export default Hero;
