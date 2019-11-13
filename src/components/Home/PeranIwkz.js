import React from 'react';
import bullet from '../../img/checkmark.png'

const PeranIwkz = () => {
  let peranIwkz = [
    {
      judul: "Bagian dari komunitas Indonesia",
      content: "mitra Perwakilan RI di Jerman dalam hal pelayanan sosial & keagamaan"
    },
    {
      judul: "Bagian dari komunitas Jerman",
      content: "mitra Pemerintah Jerman sebagai wakil masyarakat Islam di Berlin"
    },
    {
      judul: "Organisasi budaya",
      content: "bagian dari penyelenggara kegiatan kebudayaan dan olah-raga antara Indonesia-Jerman"
    },
    {
      judul: "Organisasi sosial",
      content: "menyelenggarakan kegiatan sosial berbasis kekeluargaan bertujuan untuk mempererat tali silaturahim"
    },
    {
      judul: "Pelayan masyarakat di bidang pendidikan",
      content: "mendorong keberhasilan studi mahasiswa Indonesia"
    },
    ];

  const getListPeran = () =>(
    peranIwkz.map(item => (
      <div className="column is-6">
        <div className="columns is-gapless is-mobile is-vcentered">
          <div className="column is-2">
            <img src={bullet} alt='point'/>
          </div>
          <div className="column is-10">
            <p>{item.judul}</p>
          </div>
        </div>
      </div>
    ))
  );
  return (
        <div className="columns is-multiline">
        {getListPeran()}
        </div>
  );
};

export default PeranIwkz;