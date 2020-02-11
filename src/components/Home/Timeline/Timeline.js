import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import iwkzLogo from "../../../img/iwkz-navbar.svg";
import { StyledTitle } from "./styled.components";

const Timeline = () => {
  const Icon = image => <img src={image.image} alt="icon timeline" />;
  const font = "12px";
  return (
    <section
      className="section is-medium"
      id="sejarah"
      style={{ backgroundColor: "#F2FFEF" }}
    >
      <StyledTitle className="has-text-weight-medium">Sejarah IWKZ</StyledTitle>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#d3ebbb" }}
          contentArrowStyle={{ borderRight: "7px solid  #D0FFC4" }}
          date="1984"
          iconStyle={{ background: "#d3ebbb" }}
        >
          <p style={{ fontSize: font }}>
            Masjid Al-Falah dirintis oleh para mahasiswa Indonesia
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="1986"
          contentStyle={{ background: "#b6e5b0" }}
          contentArrowStyle={{ borderRight: "7px solid #b6e5b0" }}
          iconStyle={{ background: "#b6e5b0" }}
        >
          <p style={{ fontSize: font }}>
            Menempati tempat di Melanchthon Str. 23, 10557 Berlin
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2007"
          contentStyle={{ background: "#93dfab" }}
          contentArrowStyle={{ borderRight: "7px solid #93dfab" }}
          iconStyle={{ background: "#93dfab" }}
        >
          <p style={{ fontSize: font }}>
            Terdaftar sebagai organisasi resmi bernama Indonesisches Weisheits-
            und Kulturzentrum (IWKZ) e.V.
          </p>
          <p style={{ fontSize: font }}>
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
          <p style={{ fontSize: font }}>
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
