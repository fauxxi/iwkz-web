import React from "react";
import Iframe from "react-iframe";
import { StyledTitle } from "./styled.components.js";

const Download = () => {
  return (
    <section className="section is-medium">
      <div className="content has-text-centered">
        <StyledTitle className="has-text-weight-medium">
          Download Jadwal Sholat
        </StyledTitle>
        <p className="has-text-weight-medium">
          {`Pilih bulan dan tahun, lalu klik generate`}
        </p>
      </div>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <Iframe
              url="http://old.iwkz.de/jadwal-shalat/generatePdf.php"
              width="100%"
              height="300px"
              border="0"
              frameborder="no"
              framespacing="0"
              scrolling="no"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Download;
