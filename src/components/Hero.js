import React from 'react';
import Navbar from './Navbar';

const Hero = () => {

  return (
    <section className="hero is-fullheight" style={{
      background: "linear-gradient(45deg, #e0c3fc 0%,  #8ec5fc 100%)"
    }}>
      <div className="hero-head">
        <Navbar/>
      </div>

      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-medium has-text-left " >
              <p className="has-text-weight-bold is-size-4">IWKZ</p>
              <p className="has-text-weight-medium is-size-5">Indonesisches Weisheits- und Kulturzentrum e.V.</p>
            </div>
            <div className="column">
            <p>jadwal sholat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">

      </div>
    </section>
  );
};

export default Hero;