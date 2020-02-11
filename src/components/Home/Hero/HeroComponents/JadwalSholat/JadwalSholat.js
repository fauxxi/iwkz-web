import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledBox, StyledDate } from "./styled.components";

//main component
const JadwalSholat = () => {
  const [prayerTimes, setPrayerTimes] = useState("");

  useEffect(() => {
    requestPrayer();
  }, []);

  const convertToMinute = (hours, minutes) => {
    let totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    return totalMinutes;
  };

  const isPrayMinuteBigger = prayTime => {
    let today = new Date();
    let prayHours = prayTime.split(":")[0];
    let prayMinutes = prayTime.split(":")[1];

    let prayNext = convertToMinute(prayHours, prayMinutes);
    let currentMinutes = convertToMinute(today.getHours(), today.getMinutes());

    if (prayNext > currentMinutes) {
      return true;
    }
    return false;
  };

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
    let nextPray = false;
    for (let item in prayerTimes) {
      if (item !== "date") {
        if (nextPray !== true) {
          if (isPrayMinuteBigger(prayerTimes[item])) {
            nextPray = true;
            list.push(
              <div className=" column is-offset-2 is-8" key={"jadwal-" + index}>
                <StyledBox highlight className=" level is-mobile">
                  <div className="level-left">{item}</div>
                  <div className="level-right">{prayerTimes[item]}</div>
                </StyledBox>
              </div>
            );
            index++;
            continue;
          }
        }

        list.push(
          <div className=" column is-offset-2 is-8" key={"jadwal-" + index}>
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
