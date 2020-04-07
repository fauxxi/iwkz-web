import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { StyledTitle } from "./styled.components.js";

const Download = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
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
      <article className="media" style={{ maxWidth: "80%", margin: "0 auto" }}>
        <div className="media-content">
          <div className="content">
            <Iframe
              url="https://old.iwkz.de/jadwal-shalat/generatePdf.php"
              width="100%"
              height="400px"
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
