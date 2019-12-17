import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import iwkzLogo from "../../../img/iwkz-navbar.svg";

const Timeline = () => {
  const Icon = image => <img src={image.image} alt="icon timeline" />;
  return (
    <section className="section has-background-white-ter" id="sejarah">
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#d3ebbb" }}
          contentArrowStyle={{ borderRight: "7px solid  #d3ebbb" }}
          date="1984"
          iconStyle={{ background: "#d3ebbb" }}
        >
          <p>Masjid Al-Falah dirintis oleh para mahasiswa Indonesia</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="1986"
          contentStyle={{ background: "#b6e5b0" }}
          contentArrowStyle={{ borderRight: "7px solid #b6e5b0" }}
          iconStyle={{ background: "#b6e5b0" }}
        >
          <p>Menempati tempat di Melanchthon Str. 23, 10557 Berlin</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2007"
          contentStyle={{ background: "#93dfab" }}
          contentArrowStyle={{ borderRight: "7px solid #93dfab" }}
          iconStyle={{ background: "#93dfab" }}
        >
          <p>
            Terdaftar sebagai organisasi resmi bernama Indonesisches Weisheits-
            und Kulturzentrum (IWKZ) e.V.
          </p>
          <p>
            Menempati tempat di Feldzeugmeister Str. 1, 10557 Berlin, dan
            melebarkan bangunannya di Perleberger Str. 61, 10559 Berlin
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Today"
          contentStyle={{ background: "#67d8ac" }}
          contentArrowStyle={{ borderRight: "7px solid #67d8ac" }}
          iconStyle={{ background: "#67d8ac" }}
        >
          <p>
            Masjid Al-Falah menjadi pusat peradaban muslim Indonesia di kota
            Berlin dengan kegiatan Keagamaan, Pendidikan & Kebudayaan.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "##12CFB3" }}
          icon={<Icon image={iwkzLogo} />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;