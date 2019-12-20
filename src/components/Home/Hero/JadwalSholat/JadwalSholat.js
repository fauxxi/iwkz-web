import React, { useEffect, useState } from "react";
import axios from "axios";

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
    const res = await axios.get("https://iwkz.de/jdwlshalat_ibmus/");
    setPrayerTimes(res.data);
  };
  const createBodyList = prayerTimes => {
    let list = [];
    let index = 0;
    for (let item in prayerTimes) {
      if (item !== "date") {
        list.push(
          <div className="column is-offset-1 is-10" key={"jadwal" + index}>
            <div
              className="level is-mobile br2 pa3 has-text-dark has-text-weight-medium"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
            >
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
    <div className="container has-text-white">
      <p className="has-text-centered is-size-5 pb3">{getDate()}</p>
      <div className="columns is-multiline">{createBodyList(prayerTimes)}</div>
    </div>
  );
};

export default JadwalSholat;
