import React from "react";
import ladiLogo from "../../img/ladi_logo.png";

const Impressum = () => {
  return (
    <section
      className="section has-text-grey-dark ph5"
      id="impressum"
      style={{ backgroundColor: "#E8FFE2" }}
    >
      <div className="level">
        <div className="level-left">
          <div>
            <p className="is-size-4">Support our Masjid</p>
            <br />
            <p className="text">
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

        <div className="level-right">
          <img src={ladiLogo} alt="ladi logo" width="200" />
        </div>
      </div>
    </section>
  );
};

export default Impressum;
