import React from "react";
import Iframe from "react-iframe";

const Download = () => {
  return (
    <section className="section is-medium">
      <div className="content has-text-centered">
        <h1>Download Jadwal Sholat</h1>
        <p className="has-text-weight-medium">
          {`Pilih bulan dan tahun, lalu klik generate`}
        </p>
      </div>
      <article className="media">
        <div className="media-content">
          <div classname="content">
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
