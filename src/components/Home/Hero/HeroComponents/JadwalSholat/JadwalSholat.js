import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledBox, StyledDate } from "./styled.components";

//main component
const JadwalSholat = () => {
  const [prayerTimes, setPrayerTimes] = useState("");
  const [currentSecond, setCurrentSecond] = useState("");

  useEffect(() => {
    requestPrayer();
    setInterval(() => startTime(), 1000);
  }, []);

  const convertToMinute = (hours, minutes) => {
    let totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    return totalMinutes;
  };
  const convertToSecond = (hours, minutes, seconds = 0) => {
    let totalMinutes = convertToMinute(hours, minutes);
    let totalSeconds = totalMinutes * 60 + seconds;
    return totalSeconds;
  };

  const startTime = () => {
    let today = new Date();
    let currentSecond = convertToSecond(
      today.getHours(),
      today.getMinutes(),
      today.getSeconds()
    );
    setCurrentSecond(currentSecond);
  };

  const getCountdown = prayTime => {
    let prayHours = prayTime.split(":")[0];
    let prayMinutes = prayTime.split(":")[1];
    let praySeconds = convertToSecond(prayHours, prayMinutes);
    let newSecondCountdown = praySeconds - currentSecond;
    let newCountdown = new Date(newSecondCountdown * 1000)
      .toISOString()
      .substr(11, 8);
    return newCountdown;
  };

  const isPrayMinuteBigger = prayTime => {
    let prayHours = prayTime.split(":")[0];
    let prayMinutes = prayTime.split(":")[1];
    let today = new Date();

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
            console.log("asd");

            list.push(
              <div className=" column is-offset-2 is-8" key={"jadwal-" + index}>
                <StyledBox highlight className=" level is-mobile">
                  <div className="level-item">{item}</div>
                  <div className="level-item">
                    ({getCountdown(prayerTimes[item])})
                  </div>
                  <div className="level-item">{prayerTimes[item]}</div>
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
