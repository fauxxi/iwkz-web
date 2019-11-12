import React from 'react';
import Navbar from './Navbar/Navbar';
import JadwalSholat from './JadwalSholat/JadwalSholat';

const Hero = () => {

  return (
    <section className="hero is-fullheight" style={{
      background: "linear-gradient(45deg, #e0c3fc 0%,  #8ec5fc 100%)"
    }}>
      <div className="hero-head">
        <div className='bt bw1 b--light-red'></div>
        <Navbar/>
      </div>

      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-medium is-offset-1 is-5" >
              <p className="has-text-weight-semibold is-size-3">IWKZ</p>
              <p className="has-text-weight-medium is-size-5">Indonesisches Weisheits- und Kulturzentrum e.V.</p>
            </div>
            <div className="column is-offset-1 is-4">
              <JadwalSholat/>
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