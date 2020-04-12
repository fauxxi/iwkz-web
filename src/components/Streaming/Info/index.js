import React from 'react';

import JadwalSholat from "../../Home/Hero/HeroComponents/JadwalSholat/JadwalSholat";

import { InfoDiv } from './styled.components';

const Info = () => (
    <InfoDiv>
        <iframe
        src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23e3e9ff&amp;ctz=Europe%2FBerlin&amp;src=YWRtaW5AaXdrei5kZQ&amp;color=%23039BE5&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showTz=1&amp;hl=de&amp;mode=MONTH"
        width="100%"
        frameborder="0"
        scrolling="no"
        className="calendar"
        ></iframe>
        <div
        style={{
            margin: "0 auto",
            backgroundColor: "rgba(227, 233, 255, 0.7)",
            padding: "55px",
            borderRadius: "10px",
        }}
        >
        <JadwalSholat titleColor="" />
        </div>
    </InfoDiv>
);

export default Info;