import React from "react";
import SectionPeran from "./SecionPeranIwkz/SectionPeran";
import { StyledTitle } from "./styled.components";

const PeranIwkz = () => {
  let peranIwkz = [
    {
      judul: "Bagian dari komunitas Indonesia",
      content:
        "Mitra Perwakilan RI di Jerman dalam hal pelayanan sosial & keagamaan",
      image: "./mualaf.jpg",
      kegiatan: [
        {
          acara: "Shalat Jumat",
          penjelasan:
            "Pelayanan persiapan Shalat Jumat bersama di Masjid dengan Khutbah berbahasa Indonesia"
        },
        {
          acara: "Pengajian Bulanan",
          penjelasan:
            "Pengajian bulanan adalah sarana silaturahim masyarakat muslim Indonesia di Berlin dengan melalui acara halal-bihalal dan taklim."
        },
        {
          acara: "Pengajian Al-Hisab",
          penjelasan:
            "Pengajian rutin mingguan untuk bapak-bapak mukimin di Berlin."
        },
        {
          acara: "Pengajian Ummul Falah",
          penjelasan:
            "Pengajian rutin mingguan untuk ibu-ibu mukimin di Berlin."
        },
        {
          acara: "Mentoring Pemuda & Pemudi",
          penjelasan: "Pengajian rutin mingguan untuk mahasiswa dan remaja."
        },
        {
          acara: "Taman Pendidikan Al-Quran",
          penjelasan:
            "Sekolah pendidikan islam dan membaca Al-Quran untuk anak anak. Selain kegiatan belajar, anak anak juga diajak untuk ber rekreasi dan mendatangi taman bermain melalui"
        },
        {
          acara: "Ramadhan dan Perayaan Hari Besar Islam Lainnya",
          penjelasan:
            "Setiap tahunnya Masjid Al-Falah IWKZ e.V. berkerjasama dengan KBRI Berlin membuat serangkaian kegiatan Ramadhan, seperti tarawih bersama, kajian keislaman serta sahur dan buka puasa bersama. Dalam kegiatan ini secara khusus mengundang ustad dari tanah air untuk menemani jamaah selama satu bulan penuh serta menyeleng-garakan perayaan hari raya Idul Fitri di KBRI Berlin. Selain itu Masjid Al-Falah IWKZ e.V. juga memfasilitasi jamaah yang ingin berkurban pada Hari Raya Idul Adha."
        },
        {
          acara: "Pelayanan masyarakat",
          penjelasan:
            "membimbing mualaf, membantu mempersiapkan akad pernikahan dan mengurusi jenazah jika ada kerabat yang meninggal"
        }
      ]
    },
    {
      judul: "Bagian dari komunitas Jerman",
      content:
        "Mitra Pemerintah Jerman sebagai wakil masyarakat Islam di Berlin",
      image: "./komunitas-jerman.jpg",
      kegiatan: [
        {
          acara: "Lange Nacht der Religionen",
          penjelasan:
            "Acara satu malam bersama masyarakat Jerman, untuk memperkenalkan islam beserta keindahannya kepada masyarakat Jerman."
        },
        {
          acara: "Berpartisipasi dalam Bürgerplatform",
          penjelasan:
            "Bürgerplatform adalah forum masyarakat yang diikuti oleh beragam komunitas di Berlin dengan tujuan untuk menyampaikan aspirasi untuk kota dan lingkungan yang lebih baik"
        }
      ]
    },
    {
      judul: "Organisasi budaya",
      content:
        "Bagian dari penyelenggara kegiatan kebudayaan dan olah-raga antara Indonesia-Jerman",
      image: "./kebudayaan.jpg",
      kegiatan: [
        {
          acara: "Tag der offenen Moschee",
          penjelasan:
            "Masjid Al-Falah membuka pintu kepada masyarakat Jerman pada hari tertentu yang ingin tahu lebih dalam tentang Islam dan kebudayaan Islam Indonesia."
        },
        {
          acara: "Salam Kyai",
          penjelasan:
            "Satu Malam Kenal Budaya Indonesia. Pertunjukan bertema budaya islam Indonesia yang dipersembahkan oleh jamaah masjid Al-Falah dari anak-anak TPA hingga bapak-bapak Al-Hisab."
        },
        {
          acara: "Tim Saman IWKZ",
          penjelasan:
            "Tari Saman asal Aceh ini sering di pro mosikan oleh kelompok tari saman IWKZ dalam berbagai kegiatan kegiatan besar di Berlin"
        },
        {
          acara: "Berliner Nasyid",
          penjelasan:
            "Grup vocal pemuda IWKZ sering tampil mewakili Indonesia menyanyikan beberapa lagu berbahasa Indonesia di berbagai acara dengan masyarakat Jerman."
        }
      ]
    },
    {
      judul: "Organisasi sosial",
      content:
        "Menyelenggarakan kegiatan sosial berbasis kekeluargaan bertujuan untuk mempererat tali silaturahim",
      image: "./sosial.jpg",
      kegiatan: [
        {
          acara: "Muslimah Day",
          penjelasan:
            "Kegiatan khusus muslimah yang berisikan fashion show muslimah, seminar dan kegiatan perekat ukhuwah. Forum diskusi untuk kepemudian secara berkala juga diadakan dengan nama Let’s girl talk!"
        },
        {
          acara: `Dilatasi (Pendidikan dan Pelatihan Organisasi)`,
          penjelasan:
            "Latihan dasar kepemimpinan dan keorganisasian untuk pengurus masjid untuk menambah bekal soft-skill mereka"
        },
        {
          acara: "Sate Somay",
          penjelasan:
            "Festival makanan Indonesia terbesar di Berlin yang diselenggarakan setiap tahunnya, dari jama’ah Masjid Al-Falah yang seluruh keuntungannya diperuntukkan kembali kepada Masjid Al-Falah."
        },
        {
          acara: "Wintercamp",
          penjelasan:
            "Kegiatan khusus pemuda dan pemudi yang berisikan diskusi keislaman, team building, jelajah alam, pertunjukan teater, yang bertempat di penginapan di tepi danau Wannsee, Berlin. Khusus pada bulan Ramadhan, Masjid Al-Falah merayakannya"
        },
        {
          acara: "IWKZ Cup",
          penjelasan:
            "Dalam hal kebugaran, IWKZ mengadakan kegiatan rutin berolahraga seperti bermain futsal dan badaminton bersama sama dan juga turnamen olahraga bersama untuk maysarakat Indonesia di Jerman."
        },
        {
          acara: "Kantin Al-Falah",
          penjelasan:
            "Dana usaha guna menunjang kebutuhan masjid dengan menjual makan siang setelah sholat Jumat."
        },
        {
          acara: "Malam Keluarga Al-Falah",
          penjelasan:
            "Kegiatan ramah tamah antar jamaah Masjid, muhasabah, dan pelaporan kegiatan pengurus masjid"
        }
      ]
    },
    {
      judul: "Pelayan masyarakat di bidang pendidikan",
      content:
        "Mendorong keberhasilan studi mahasiswa Indonesia di Jerman, terutama di Berlin",
      image: "./pendidikan.jpg",
      kegiatan: [
        {
          acara: "IWKZ Tutorium",
          penjelasan:
            "Bimbingan untuk mahasiswa dan calon mahasiswa mengenai program studi serta mata kuliahnya"
        },
        {
          acara: "IWKZ Wissenschaft",
          penjelasan:
            "Forum khusus mengenai bidang ke ilmiahan. Melalui IWKZ Wissenschaft, sering diadakan seminar-seminar ilmiah secara berkala (SciFi -Science For Indonesia-) dan forum pelatihan pembuatan karya ilmiah (HDMI -Himpunan Diaspora Muda Indonesia)."
        },
        {
          acara: "Guter Start in Deutschland",
          penjelasan:
            "Seminar mengenai persiapan studi untuk mahasiswa/i baru di Jerman"
        },
        {
          acara: "The Language Club",
          penjelasan:
            "Forum praktik berkomunikasi dengan bahasa asing (inggris & jerman)"
        }
      ]
    }
  ];

  const listPeran = () => {
    let index = 0;

    return peranIwkz.map(item => {
      index++;
      return (
        <div key={"sectionPeran " + index}>
          <SectionPeran handleAccordion={handleAccordion} {...item} />
        </div>
      );
    });
  };

  const handleAccordion = e => {
    var elements = document.getElementsByClassName("accordion");
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        if (
          elements[i].classList.contains("active") &&
          elements[i] !== e.target
        ) {
          elements[i].classList.remove("active");
          let activePanel = elements[i].nextElementSibling;

          handleAccordionPanel(activePanel);
        }
      }
    }
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    handleAccordionPanel(panel);
  };

  const handleAccordionPanel = panel => {
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="section" id="peran-iwkz">
      <StyledTitle className="has-text-weight-medium">Peran IWKZ</StyledTitle>
      {listPeran()}
    </div>
  );
};

export default PeranIwkz;
