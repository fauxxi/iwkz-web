import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledBox, StyledDate } from "./styled.components";

//main component
const JadwalSholat = () => {
  const [prayerTimes, setPrayerTimes] = useState("");
  const [currentSecond, setCurrentSecond] = useState("");

  useEffect(() => {
    requestPrayer();

    const startTime = () => {
      let today = new Date();
      let currentSecond =
        today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
      setCurrentSecond(currentSecond);
    };

    let interval = setInterval(() => startTime(), 1000);
    return () => {
      clearInterval(interval);
    };
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

  //get the hourly countdown
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

  //logic to get the next prayer time
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

  //get the current and next prayer time at current time
  const getCurrentAndNextPrayer = prayerTimes => {
    let currentPrayer = "";
    let nextPrayer = "";
    for (let item in prayerTimes) {
      if (item !== "date") {
        if (isPrayMinuteBigger(prayerTimes[item])) {
          nextPrayer = item;
          break;
        }
        currentPrayer = item;
      }
    }
    return [currentPrayer, nextPrayer];
  };

  //get today's date
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let yyyy = today.getFullYear();
    const month = today.toLocaleString("id", { month: "long" });
    today = dd + ". " + month + " " + yyyy;
    return today;
  };

  //request to api
  const requestPrayer = async () => {
    const res = await axios.get("https://old.iwkz.de/jdwlshalat_ibmus/");
    setPrayerTimes(res.data);
  };

  const createBodyList = prayerTimes => {
    let list = [];
    let index = 0;
    let currentAndNext = getCurrentAndNextPrayer(prayerTimes);
    let currentPray = currentAndNext[0];
    let nextPray = currentAndNext[1];
    for (let item in prayerTimes) {
      if (item !== "date") {
        if (item === currentPray && item !== "terbit") {
          list.push(
            <div className=" column is-offset-2 is-8" key={"jadwal-" + index}>
              <StyledBox highlightCurrent className=" level is-mobile">
                <div className="level-item">{item}</div>
                <div className="level-item" style={{ fontSize: "10px" }}>
                  <p>NOW</p>
                </div>
                <div className="level-item">{prayerTimes[item]}</div>
              </StyledBox>
            </div>
          );
          index++;
        } else if (item === nextPray) {
          list.push(
            <div className=" column is-offset-2 is-8" key={"jadwal-" + index}>
              <StyledBox highlightNext className=" level is-mobile">
                <div className="level-item">{item} </div>
                <div className="level-item" style={{ fontSize: "10px" }}>
                  <p>(-{getCountdown(prayerTimes[item])})</p>
                </div>
                <div className="level-item">{prayerTimes[item]}</div>
              </StyledBox>
            </div>
          );
          index++;
        } else {
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
