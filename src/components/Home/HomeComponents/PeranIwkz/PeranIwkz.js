import React from "react";
import SectionPeran from "./SectionPeran";
import SectionPeranRight from "./SectionPeranRight";

const PeranIwkz = () => {
  let peranIwkz = [
    {
      judul: "Bagian dari komunitas Indonesia",
      content:
        "mitra Perwakilan RI di Jerman dalam hal pelayanan sosial & keagamaan",
      image: "./mualaf.jpg",
      kegiatan: [
        "Shalat Jumat",
        "Pengajian Bulanan",
        "Pengajian Al-Hisab",
        "Pengajian Ummul Falah",
        "Mentoring Pemuda & Pemudi",
        "Taman Pendidikan Al-Quran",
        "Rihlah TPA Ceria Al-Falah",
        "Ramadhan dan Perayaan Hari Besar Islam Lainnya",
        "Pelayanan masyarakat: membimbing mualaf, membantu pernikahan, mengurusi jenazah"
      ]
    },
    {
      judul: "Bagian dari komunitas Jerman",
      content:
        "mitra Pemerintah Jerman sebagai wakil masyarakat Islam di Berlin",
      image: "./komunitas-jerman.jpg",
      kegiatan: [
        "Lange Nacht der Religionen",
        "Berpartisipasi dalam Bürgerplatform"
      ]
    },
    {
      judul: "Organisasi budaya",
      content:
        "bagian dari penyelenggara kegiatan kebudayaan dan olah-raga antara Indonesia-Jerman",
      image: "./kebudayaan.jpg",
      kegiatan: [
        "Tag der offenen Moschee",
        "Salam Kyai",
        "Tim Saman IWKZ",
        "Berliner Nasyid"
      ]
    },
    {
      judul: "Organisasi sosial",
      content:
        "menyelenggarakan kegiatan sosial berbasis kekeluargaan bertujuan untuk mempererat tali silaturahim",
      image: "./sosial.jpg",
      kegiatan: [
        "Muslimah Day",
        `Dilatasi (Pendidikan dan
        Pelatihan Organisasi)`,
        "Sate Somay",
        "Wintercamp",
        "IWKZ Cup",
        "Kantin Al-Falah",
        "Malam Keluarga Al-Falah"
      ]
    },
    {
      judul: "Pelayan masyarakat di bidang pendidikan",
      content:
        "mendorong keberhasilan studi mahasiswa Indonesia di Jerman, terutama di Berlin",
      image: "./pendidikan.jpg",
      kegiatan: [
        "IWKZ Tutorium",
        "IWKZ Wissenschaft",
        "Guter Start in Deutschland",
        "The Language Club"
      ]
    }
  ];

  const listPeran = () => {
    let index = 0;

    return peranIwkz.map(item => {
      index++;
      if (index % 2) {
        return (
          <div key={"sectionPeran " + index}>
            <SectionPeran {...item} />
          </div>
        );
      } else {
        return (
          <div key={"sectionPeran " + index}>
            <SectionPeranRight {...item} />
          </div>
        );
      }
    });
  };

  return (
    <div className="has-background-light section" id="peran-iwkz">
      {listPeran()}
    </div>
  );
};

export default PeranIwkz;
