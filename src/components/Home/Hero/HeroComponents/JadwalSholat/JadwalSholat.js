import React, { useEffect, useState } from "react";
import axios from "axios";
import "./jadwalSholat.styles.scss";

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
            <div className="jadwal-sholat level is-mobile box-sholat">
              <div className="level-left">{item}</div>
              <div className="level-right">{prayerTimes[item]}</div>
            </div>
          </div>
        );
        index++;
      }
    }
    return list;
  };

  return (
    <div className="container">
      <p className="has-text-centered date">{getDate()}</p>
      <div className="columns is-multiline is-mobile">
        {createBodyList(prayerTimes)}
      </div>
    </div>
  );
};

export default JadwalSholat;
