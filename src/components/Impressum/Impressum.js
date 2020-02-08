import React from "react";
import ladiLogo from "../../img/ladi_logo.png";
import "./impressum.styles.scss";

const Impressum = () => {
  const font = "12px";
  return (
    <section
      className="section has-text-grey-dark"
      id="impressum"
      style={{ backgroundColor: "#E8FFE2" }}
    >
      <div className="level">
        <div className="level-item">
          <div className="text-center-mobile">
            <p className="is-size-5">Support our Masjid</p>
            <br />
            <p className="text" style={{ fontSize: font }}>
              Indonesisches Weisheits- & Kulturzentrum <br />
              Feldzeugmeister. 1<br />
              10557 Berlin
              <br />
              <br />
              Phone : +49 30 6792 7147
              <br />
              Fax. : +49 30 6792 7147
              <br />
              Email : info@iwkz.de
              <br />
              Konto Nr. : 346669106
              <br />
              BLZ : 1001 0010, Post Bank Berlin
              <br />
            </p>
          </div>
        </div>

        <div className="level-item">
          <img className="image-center-mobile" src={ladiLogo} alt="ladi logo" />
        </div>
      </div>
    </section>
  );
};

export default Impressum;
