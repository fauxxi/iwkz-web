import React from "react";
import SectionPeran from "./SectionPeran";
import SectionPeranRight from "./SectionPeranRight";
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
          <div key={"sectionPeran " + index}>
            <SectionPeran content={item} />
          </div>
        );
      } else {
        return (
          <div key={"sectionPeran " + index}>
            <SectionPeranRight content={item} />
          </div>
        );
      }
    });
  };

  return (
    <div className="has-background-light section" id="peranIwkz">
      {listPeran()}
    </div>
  );
};

export default PeranIwkz;
