import React from "react";
import "./PeranIwkz.css";
import templateImage from "../../img/winterCamp.JPG";

const PeranIwkz = () => {
  let peranIwkz = [
    {
      judul: "Bagian dari komunitas Indonesia",
      content:
        "mitra Perwakilan RI di Jerman dalam hal pelayanan sosial & keagamaan"
    },
    {
      judul: "Bagian dari komunitas Jerman",
      content:
        "mitra Pemerintah Jerman sebagai wakil masyarakat Islam di Berlin"
    },
    {
      judul: "Organisasi budaya",
      content:
        "bagian dari penyelenggara kegiatan kebudayaan dan olah-raga antara Indonesia-Jerman"
    },
    {
      judul: "Organisasi sosial",
      content:
        "menyelenggarakan kegiatan sosial berbasis kekeluargaan bertujuan untuk mempererat tali silaturahim"
    },
    {
      judul: "Pelayan masyarakat di bidang pendidikan",
      content:
        "mendorong keberhasilan studi mahasiswa Indonesia di Jerman, terutama di Berlin"
    }
  ];

  const listPeran = () => {
    let index = 0;
    return peranIwkz.map(item => {
      index++;
      if (index % 2) {
        return (
          <section
            className="section is-large "
            id={"section-" + index}
            key={"peran" + index}
          >
            <div className="columns is-multiline is-vcentered">
              <div className="column is-5 is-offset-1 is-hidden-touch">
                <img src={templateImage} alt={item.judul} />
              </div>
              <div className="column is-5">
                <p className="is-size-4">{item.judul}</p>
                <p>{item.content}</p>
              </div>
            </div>
          </section>
        );
      } else {
        return (
          <section
            className="section is-large "
            id={"section-" + index}
            key={"peran" + index}
          >
            <div className="columns is-multiline is-vcentered">
              <div className="column is-5 is-offset-1">
                <p className="is-size-4">{item.judul}</p>
                <p>{item.content}</p>
              </div>
              <div className="column is-5 is-hidden-touch">
                <img src={templateImage} alt={item.judul} />
              </div>
            </div>
          </section>
        );
      }
    });
  };

  return <div className="has-background-light section">{listPeran()}</div>;
};

export default PeranIwkz;
