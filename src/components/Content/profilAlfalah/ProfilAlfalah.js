/* eslint-disable */
import React from "react";

const ProfilAlfalah = () => {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <p className="is-size-3 is-size-3-mobile" style={{marginBottom:30}}>Masjid Al Falah</p>
      <div className="columns">
        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 0
          }}
        >
          <figure
            className="image"
            style={{
              minWidth: 400
            }}
          >
            <img src={require("../../../img/al-falah.svg")} />
          </figure>
        </div>
        <div className="column">
          <p className="is-size-4 has-text-weight-semibold">
            Al-Falah sebagai sebuah masjid, telah berdiri sejak lebih dari 20
            tahun yang lalu.
          </p>
          <br />
          <br />
          <p>
            Ia tidak hanya menjadi tempat melaksanakan ritual ibadah saja.
            Bahkan sejak didirikannya, ia telah menjadi pusat kegiatan sosial,
            pendidikan dan dakwah bagi masyarakat muslim Indonesia di Berlin dan
            sekitarnya.
          </p>
          <br />
          <p className="is-size-6">
            Melalui halaman ini, kami berusaha menunjukkan kepada
            saudara-saudara kaum muslimin di tempat lain bagaimana masjid
            Al-Falah Berlin dengan semua pengurus dan jamaahnya menghidupkan
            agama kita, Islam, di tengah budaya barat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilAlfalah;
