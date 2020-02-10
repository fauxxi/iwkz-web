import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledBox, StyledDate } from "./StyledJadwalSholat";

//main component
const JadwalSholat = () => {
  const [prayerTimes, setPrayerTimes] = useState("");

  useEffect(() => {
    requestPrayer();
  }, []);

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let yyyy = today.getFullYear();
    const month = today.toLocaleString("id", { month: "long" });
    today = dd + ". " + month + " " + yyyy;
    return today;
  };

  const requestPrayer = async () => {
    const res = await axios.get("https://old.iwkz.de/jdwlshalat_ibmus/");
    setPrayerTimes(res.data);
  };
  const createBodyList = prayerTimes => {
    let list = [];
    let index = 0;
    for (let item in prayerTimes) {
      if (item !== "date") {
        list.push(
          <div className=" column is-offset-2 is-8" key={"jadwal" + index}>
            <StyledBox className=" level is-mobile">
              <div className="level-left">{item}</div>
              <div className="level-right">{prayerTimes[item]}</div>
            </StyledBox>
          </div>
        );
        index++;
      }
    }
    return list;
  };

  return (
    <div className="container">
      <StyledDate>{getDate()}</StyledDate>
      <div className="columns is-multiline is-mobile">
        {createBodyList(prayerTimes)}
      </div>
    </div>
  );
};

export default JadwalSholat;
