import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { StyledTitle, StyledButton } from "./styled.components.js";

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
      <div
        className="content has-text-centered"
        style={{
          backgroundColor: "#f2ffef",
          padding: "70px",
          borderRadius: "10px",
          marginBottom: "50px",
        }}
      >
        <StyledTitle className="has-text-weight-medium">
          Marhaban ya Ramadhan
        </StyledTitle>
        <p className="has-text-weight-medium">
          {`Klik tombol dibawah untuk download jadwal sholat selama bulan Ramadhan 1441H`}
        </p>
        <a
          href="http://it-club.iwkz.de/data/Jadwal_Imsakiyah_1441H.pdf"
          download="ramadhan_1441H.pdf"
          target="_blank"
        >
          <StyledButton class="btn">Download </StyledButton>
        </a>
      </div>
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
              height="240px"
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
